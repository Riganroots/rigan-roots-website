from pathlib import Path
import re
import html

SITE = "https://riganrootsroutes.com"
SOCIAL_IMAGE = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"

pages = {
    "index.html": {
        "url": SITE + "/",
        "title": "Rigan Roots & Routes | Authentic Nepal Tours & Experiences",
        "desc": "Discover authentic Nepal tours, trekking, village stays, food, culture, wellness and meaningful local experiences with Rigan Roots & Routes.",
    },
    "experience-v2.html": {
        "url": SITE + "/experience-v2.html",
        "title": "Nepal Experiences & Trekking | Rigan Roots & Routes",
        "desc": "Explore Nepal trekking, village life, food, festivals, culture, wellness and adventure experiences designed by Rigan Roots & Routes.",
    },
    "regions.html": {
        "url": SITE + "/regions.html",
        "title": "Explore Nepal Regions & Hidden Destinations | Rigan Roots & Routes",
        "desc": "Explore Nepal regions, Himalayan base camps, hidden trails, remote valleys, wildlife areas and cultural destinations with Rigan Roots & Routes.",
    },
    "about.html": {
        "url": SITE + "/about.html",
        "title": "Our Story | Rigan Roots & Routes",
        "desc": "Learn about Rigan Roots & Routes and our approach to meaningful Nepal travel through local people, culture, communities and authentic experiences.",
    },
    "plan.html": {
        "url": SITE + "/plan.html",
        "title": "Plan Your Nepal Trip | Rigan Roots & Routes",
        "desc": "Plan a personalised Nepal journey with Rigan Roots & Routes. Tell us your dates, travel style and interests and request a tailored quotation.",
    },
    "contact.html": {
        "url": SITE + "/contact.html",
        "title": "Contact Rigan Roots & Routes | Plan Your Nepal Journey",
        "desc": "Contact Rigan Roots & Routes to plan a Nepal trek, cultural journey, family holiday, village experience or personalised tour.",
    },
    "work-with-us.html": {
        "url": SITE + "/work-with-us.html",
        "title": "Work With Us | Rigan Roots & Routes",
        "desc": "Work with Rigan Roots & Routes as a local host, guide or community partner and help travellers experience Nepal through local people and culture.",
    },
}


def clean_existing_seo(text: str) -> str:
    return re.sub(
        r"\n?\s*<!-- SEO FOUNDATION START -->.*?<!-- SEO FOUNDATION END -->\s*\n?",
        "\n",
        text,
        flags=re.S,
    )


def set_description(text: str, description: str) -> str:
    tag = f'<meta name="description" content="{html.escape(description, quote=True)}">'
    pattern = r'<meta\s+name=["\']description["\'][^>]*>'
    if re.search(pattern, text, flags=re.I | re.S):
        return re.sub(pattern, tag, text, count=1, flags=re.I | re.S)
    return text.replace("</title>", "</title>\n" + tag, 1)


for filename, cfg in pages.items():
    path = Path(filename)
    text = clean_existing_seo(path.read_text(encoding="utf-8"))
    text = re.sub(
        r"<title>.*?</title>",
        f'<title>{html.escape(cfg["title"])}</title>',
        text,
        count=1,
        flags=re.S | re.I,
    )
    text = set_description(text, cfg["desc"])

    block = f"""
<!-- SEO FOUNDATION START -->
<link rel="canonical" href="{cfg['url']}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Rigan Roots & Routes">
<meta property="og:title" content="{html.escape(cfg['title'], quote=True)}">
<meta property="og:description" content="{html.escape(cfg['desc'], quote=True)}">
<meta property="og:url" content="{cfg['url']}">
<meta property="og:image" content="{SOCIAL_IMAGE}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{html.escape(cfg['title'], quote=True)}">
<meta name="twitter:description" content="{html.escape(cfg['desc'], quote=True)}">
<meta name="twitter:image" content="{SOCIAL_IMAGE}">
<!-- SEO FOUNDATION END -->"""
    text = text.replace("</title>", "</title>" + block, 1)

    if filename == "index.html" and '"@type": "TravelAgency"' not in text:
        schema = """
<script type="application/ld+json" id="organizationSchema">
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Rigan Roots & Routes",
  "url": "https://riganrootsroutes.com/",
  "logo": "https://riganrootsroutes.com/rigan-logo.svg",
  "email": "riganrootsroutes@gmail.com",
  "telephone": "+9779843322695",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kathmandu",
    "addressCountry": "NP"
  },
  "areaServed": "Nepal"
}
</script>"""
        text = text.replace("<!-- SEO FOUNDATION END -->", "<!-- SEO FOUNDATION END -->" + schema, 1)

    path.write_text(text, encoding="utf-8")


# Dynamic SEO for the single experience detail template.
path = Path("experience-detail-v2.html")
text = clean_existing_seo(path.read_text(encoding="utf-8"))
detail_block = f"""
<!-- SEO FOUNDATION START -->
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="website" id="ogType">
<meta property="og:site_name" content="Rigan Roots & Routes">
<meta property="og:title" content="Nepal Experience | Rigan Roots & Routes" id="ogTitle">
<meta property="og:description" content="Explore a detailed Nepal itinerary and request a tailored quotation from Rigan Roots & Routes." id="ogDescription">
<meta property="og:url" content="{SITE}/experience-detail-v2.html" id="ogUrl">
<meta property="og:image" content="{SOCIAL_IMAGE}" id="ogImage">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nepal Experience | Rigan Roots & Routes" id="twitterTitle">
<meta name="twitter:description" content="Explore a detailed Nepal itinerary and request a tailored quotation from Rigan Roots & Routes." id="twitterDescription">
<meta name="twitter:image" content="{SOCIAL_IMAGE}" id="twitterImage">
<script type="application/ld+json" id="experienceSchema">{{}}</script>
<!-- SEO FOUNDATION END -->"""
text = text.replace("</title>", "</title>" + detail_block, 1)

marker = """      document.title =
        `${selected.name} | Rigan Roots & Routes`;"""
replacement = """      const canonicalUrl =
        `https://riganrootsroutes.com/experience-detail-v2.html?experience=${safeExperienceSlug}`;

      const seoDescription = String(
        selected.subtitle ||
        selected.overview ||
        selected.description ||
        `Explore ${selected.name} in Nepal with Rigan Roots & Routes.`
      ).replace(/\\s+/g, " ").trim().slice(0, 160);

      let canonicalLink =
        document.querySelector('link[rel="canonical"]');

      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }

      canonicalLink.href = canonicalUrl;

      const metaDescription =
        document.querySelector('meta[name="description"]');

      if (metaDescription) {
        metaDescription.content = seoDescription;
      }

      const seoTitle =
        `${selected.name} | Rigan Roots & Routes`;

      document.title = seoTitle;

      const seoTags = {
        ogTitle: seoTitle,
        ogDescription: seoDescription,
        ogUrl: canonicalUrl,
        ogImage: heroImage,
        twitterTitle: seoTitle,
        twitterDescription: seoDescription,
        twitterImage: heroImage
      };

      Object.entries(seoTags).forEach(function ([id, value]) {
        const element = document.getElementById(id);
        if (element) element.setAttribute("content", value);
      });

      const schemaElement =
        document.getElementById("experienceSchema");

      if (schemaElement) {
        const touristType = Array.isArray(selected.bestFor)
          ? selected.bestFor.join(", ")
          : selected.bestFor || "Travellers visiting Nepal";

        schemaElement.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TouristTrip",
              "name": selected.name,
              "description": seoDescription,
              "url": canonicalUrl,
              "image": heroImage,
              "touristType": touristType,
              "provider": {
                "@type": "TravelAgency",
                "name": "Rigan Roots & Routes",
                "url": "https://riganrootsroutes.com/"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://riganrootsroutes.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Experiences",
                  "item": "https://riganrootsroutes.com/experience-v2.html"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": selected.name,
                  "item": canonicalUrl
                }
              ]
            }
          ]
        });
      }"""

if marker not in text:
    raise SystemExit("Could not locate detail document.title marker")
text = text.replace(marker, replacement, 1)
path.write_text(text, encoding="utf-8")

Path("robots.txt").write_text(
    "User-agent: *\nAllow: /\n\nSitemap: https://riganrootsroutes.com/sitemap.xml\n",
    encoding="utf-8",
)

experience_ids = [
    "live-like-a-nepali",
    "women-guided-trek",
    "hidden-nepal-expedition",
    "rigan-signature-nepal",
    "breakfast-at-everest-basecamp",
    "farm-and-harvest-experience",
    "rice-planting-experience",
    "mountain-farming-experience",
    "village-immersion",
    "everest-base-camp-trek",
    "annapurna-base-camp-trek",
    "langtang-valley-trek",
    "everest-three-passes-trek",
    "annapurna-circuit-trek",
    "thorong-la-pass-trek",
    "mardi-himal-trek",
    "tilicho-lake-trek",
    "shey-phoksundo-trek",
    "upper-dolpo-trek",
    "kathmandu-food-walk",
    "newari-food-experience",
    "tharu-food-culture",
    "tamang-food-experience",
    "sherpa-kitchen-experience",
    "kathmandu-heritage-tour",
    "bhaktapur-living-heritage",
    "yoga-meditation-retreat",
    "dashain-experience",
    "everest-helicopter-tour",
    "paragliding-pokhara",
]
static_urls = [
    SITE + "/",
    SITE + "/experience-v2.html",
    SITE + "/regions.html",
    SITE + "/about.html",
    SITE + "/plan.html",
    SITE + "/contact.html",
    SITE + "/work-with-us.html",
]
all_urls = static_urls + [
    SITE + "/experience-detail-v2.html?experience=" + experience_id
    for experience_id in experience_ids
]
sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
]
for url in all_urls:
    sitemap.extend(["  <url>", f"    <loc>{html.escape(url)}</loc>", "  </url>"])
sitemap.append("</urlset>")
Path("sitemap.xml").write_text("\n".join(sitemap) + "\n", encoding="utf-8")

# Static validation before commit.
for filename in pages:
    text = Path(filename).read_text(encoding="utf-8")
    assert 'rel="canonical"' in text, filename + " missing canonical"
    assert 'property="og:title"' in text, filename + " missing OG title"
    assert 'name="twitter:card"' in text, filename + " missing Twitter card"
    assert 'name="description"' in text, filename + " missing description"

detail = Path("experience-detail-v2.html").read_text(encoding="utf-8")
assert 'id="experienceSchema"' in detail
assert 'BreadcrumbList' in detail
assert 'TouristTrip' in detail
assert "canonicalLink.href = canonicalUrl" in detail
assert len(re.findall(r"<loc>(.*?)</loc>", Path("sitemap.xml").read_text(encoding="utf-8"))) == 37
print("SEO update and validation passed")
