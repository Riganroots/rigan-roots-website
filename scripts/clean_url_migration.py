from __future__ import annotations

from pathlib import Path
import html
import json
import re

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "https://riganrootsroutes.com"

# Legacy filename -> GitHub Pages clean route
ROUTES = {
    "experience-detail-v2.html": "/experiences/detail/",
    "experience-v2.html": "/experiences/",
    "work-with-us.html": "/work-with-us/",
    "regions.html": "/regions/",
    "about.html": "/about/",
    "contact.html": "/contact/",
    "plan.html": "/plan/",
    "booking.html": "/booking/",
    "quote.html": "/quote/",
    "admin.html": "/admin/",
    "index.html": "/",
}

# Pages that become directory/index.html pages. Homepage remains /index.html.
MOVED_PAGES = {
    "experience-v2.html": Path("experiences/index.html"),
    "experience-detail-v2.html": Path("experiences/detail/index.html"),
    "regions.html": Path("regions/index.html"),
    "about.html": Path("about/index.html"),
    "contact.html": Path("contact/index.html"),
    "plan.html": Path("plan/index.html"),
    "work-with-us.html": Path("work-with-us/index.html"),
    "booking.html": Path("booking/index.html"),
    "quote.html": Path("quote/index.html"),
    "admin.html": Path("admin/index.html"),
}

SEO_PUBLIC = {
    "experience-v2.html",
    "experience-detail-v2.html",
    "regions.html",
    "about.html",
    "contact.html",
    "plan.html",
    "work-with-us.html",
}

TEXT_EXTENSIONS = {".html", ".js", ".xml"}


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def replace_route_references(content: str) -> str:
    # Replace absolute production URLs first, then filename references.
    for old, route in ROUTES.items():
        content = content.replace(f"{DOMAIN}/{old}", f"{DOMAIN}{route}")
        content = content.replace(f"https://www.riganrootsroutes.com/{old}", f"https://www.riganrootsroutes.com{route}")
    for old, route in ROUTES.items():
        content = content.replace(old, route)
    return content


def local_to_root(url: str) -> str:
    value = url.strip()
    if not value:
        return url
    lowered = value.lower()
    if value.startswith(("/", "#", "?", "//", "{", "[")):
        return url
    if lowered.startswith(("http://", "https://", "mailto:", "tel:", "data:", "javascript:", "blob:")):
        return url
    while value.startswith("../"):
        value = value[3:]
    if value.startswith("./"):
        value = value[2:]
    return "/" + value


def root_relativize_html(content: str) -> str:
    attr_pattern = re.compile(
        r"(?P<prefix>\b(?:href|src|action|poster)\s*=\s*)(?P<quote>[\"'])(?P<url>.*?)(?P=quote)",
        re.IGNORECASE | re.DOTALL,
    )

    def replace_attr(match: re.Match[str]) -> str:
        url = match.group("url")
        new_url = local_to_root(url)
        q = match.group("quote")
        return f"{match.group('prefix')}{q}{new_url}{q}"

    content = attr_pattern.sub(replace_attr, content)

    srcset_pattern = re.compile(
        r"(?P<prefix>\bsrcset\s*=\s*)(?P<quote>[\"'])(?P<value>.*?)(?P=quote)",
        re.IGNORECASE | re.DOTALL,
    )

    def replace_srcset(match: re.Match[str]) -> str:
        entries = []
        for entry in match.group("value").split(","):
            stripped = entry.strip()
            if not stripped:
                continue
            bits = stripped.split()
            bits[0] = local_to_root(bits[0])
            entries.append(" ".join(bits))
        q = match.group("quote")
        return f"{match.group('prefix')}{q}{', '.join(entries)}{q}"

    content = srcset_pattern.sub(replace_srcset, content)

    url_pattern = re.compile(r"url\(\s*(?P<quote>[\"']?)(?P<url>[^)\"']+)(?P=quote)\s*\)", re.IGNORECASE)

    def replace_css_url(match: re.Match[str]) -> str:
        raw = match.group("url").strip()
        new_url = local_to_root(raw)
        q = match.group("quote")
        return f"url({q}{new_url}{q})"

    return url_pattern.sub(replace_css_url, content)


def set_canonical(content: str, route: str) -> str:
    canonical = f"{DOMAIN}{route}"
    tag_pattern = re.compile(r"<link\b(?=[^>]*\brel=[\"']canonical[\"'])[^>]*>", re.IGNORECASE)
    match = tag_pattern.search(content)
    if match:
        tag = match.group(0)
        if re.search(r"\bhref=[\"'][^\"']*[\"']", tag, re.IGNORECASE):
            tag = re.sub(r"\bhref=[\"'][^\"']*[\"']", f'href="{canonical}"', tag, count=1, flags=re.IGNORECASE)
        else:
            tag = tag[:-1] + f' href="{canonical}">'
        content = content[:match.start()] + tag + content[match.end():]
    else:
        insertion = f'\n<link rel="canonical" href="{canonical}">'
        title_end = re.search(r"</title>", content, re.IGNORECASE)
        if title_end:
            content = content[:title_end.end()] + insertion + content[title_end.end():]
        else:
            content = content.replace("<head>", "<head>" + insertion, 1)

    og_pattern = re.compile(r"<meta\b(?=[^>]*\bproperty=[\"']og:url[\"'])[^>]*>", re.IGNORECASE)
    og_match = og_pattern.search(content)
    if og_match:
        tag = og_match.group(0)
        if re.search(r"\bcontent=[\"'][^\"']*[\"']", tag, re.IGNORECASE):
            tag = re.sub(r"\bcontent=[\"'][^\"']*[\"']", f'content="{canonical}"', tag, count=1, flags=re.IGNORECASE)
            content = content[:og_match.start()] + tag + content[og_match.end():]
    return content


def redirect_page(route: str, label: str) -> str:
    target = json.dumps(route)
    canonical = html.escape(f"{DOMAIN}{route}", quote=True)
    href = html.escape(route, quote=True)
    title = html.escape(label)
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex,follow">
  <title>{title} | Rigan Roots &amp; Routes</title>
  <link rel="canonical" href="{canonical}">
  <meta http-equiv="refresh" content="0; url={href}">
  <script>
    (function () {{
      var target = {target};
      window.location.replace(target + window.location.search + window.location.hash);
    }})();
  </script>
</head>
<body>
  <p>This page has moved. <a href="{href}">Continue to the new address</a>.</p>
</body>
</html>
'''


def update_mobile_css() -> None:
    path = ROOT / "mobile-consistency.css"
    content = read_text(path)
    marker = "/* Clean URL + responsive navigation refinements */"
    if marker in content:
        return
    addition = r'''

/* Clean URL + responsive navigation refinements */
.navbar,
.top-nav {
  max-width: 100%;
  padding-left: clamp(16px, 4vw, 55px) !important;
  padding-right: clamp(16px, 4vw, 55px) !important;
}

.nav-links {
  gap: clamp(14px, 2vw, 26px);
}

.nav-links a {
  line-height: 1.25;
}

@media (max-width: 1024px) and (min-width: 901px) {
  .nav-links {
    gap: 14px;
  }

  .nav-links a {
    font-size: 13px;
  }
}

@media (max-width: 900px) {
  .navbar,
  .top-nav {
    min-height: 72px;
    padding: 10px 16px !important;
  }

  .logo img,
  .navbar .logo img,
  .top-nav .logo img {
    max-height: 56px;
    width: auto;
  }

  .menu-btn,
  .mobile-menu-btn,
  .menu-toggle {
    flex: 0 0 44px;
  }

  .nav-links {
    max-width: 100vw;
    max-height: 100dvh;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  .nav-links a {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 11px;
    padding-bottom: 11px;
  }
}

@media (max-width: 430px) {
  .navbar,
  .top-nav {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .logo img,
  .navbar .logo img,
  .top-nav .logo img {
    max-height: 48px;
  }
}
'''
    write_text(path, content.rstrip() + addition + "\n")


def main() -> None:
    # Snapshot source pages before replacing legacy filenames with redirects.
    originals = {name: read_text(ROOT / name) for name in MOVED_PAGES}

    # Rewrite homepage links/assets while keeping it at the root.
    home = replace_route_references(read_text(ROOT / "index.html"))
    home = root_relativize_html(home)
    home = set_canonical(home, "/")
    write_text(ROOT / "index.html", home)

    # Build the new directory/index.html routes from the existing full page content.
    for legacy, destination in MOVED_PAGES.items():
        content = replace_route_references(originals[legacy])
        content = root_relativize_html(content)
        if legacy in SEO_PUBLIC:
            content = set_canonical(content, ROUTES[legacy])
        write_text(ROOT / destination, content)

    # Rewrite URL references in JS/XML so generated links, redirects, schema and sitemap use clean paths.
    for path in ROOT.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        if path.parts[-2:] == ("scripts", "clean_url_migration.py"):
            continue
        if path.name in MOVED_PAGES and path.parent == ROOT:
            continue
        # New directory pages and homepage were already handled above.
        if path == ROOT / "index.html" or any(path == ROOT / dest for dest in MOVED_PAGES.values()):
            continue
        content = read_text(path)
        updated = replace_route_references(content)
        if updated != content:
            write_text(path, updated)

    # Replace the old public/operational .html pages with noindex legacy redirects.
    labels = {
        "experience-v2.html": "Experiences",
        "experience-detail-v2.html": "Experience Detail",
        "regions.html": "Regions",
        "about.html": "About",
        "contact.html": "Contact",
        "plan.html": "Plan Your Trip",
        "work-with-us.html": "Work With Us",
        "booking.html": "Booking",
        "quote.html": "Quotation",
        "admin.html": "Booking Admin",
    }
    for legacy, route in ROUTES.items():
        if legacy == "index.html":
            continue
        write_text(ROOT / legacy, redirect_page(route, labels.get(legacy, "Page")))

    update_mobile_css()

    # Validation: clean routes exist and keep viewport support.
    required_routes = [
        "index.html",
        "experiences/index.html",
        "experiences/detail/index.html",
        "regions/index.html",
        "about/index.html",
        "contact/index.html",
        "plan/index.html",
        "work-with-us/index.html",
        "booking/index.html",
        "quote/index.html",
        "admin/index.html",
    ]
    for rel in required_routes:
        page = ROOT / rel
        assert page.exists(), f"Missing route page: {rel}"
        text = read_text(page)
        assert 'name="viewport"' in text or "name='viewport'" in text, f"Missing viewport meta: {rel}"

    # No current page/script/sitemap should link to the old filename routes.
    legacy_names = [name for name in ROUTES if name != "index.html"]
    offenders = []
    scan_paths = [ROOT / "index.html", ROOT / "sitemap.xml"]
    scan_paths += list(ROOT.glob("*.js"))
    scan_paths += [ROOT / dest for dest in MOVED_PAGES.values()]
    for path in scan_paths:
        if not path.exists():
            continue
        text = read_text(path)
        found = [name for name in legacy_names if name in text]
        if found:
            offenders.append((str(path.relative_to(ROOT)), found))
    assert not offenders, f"Legacy .html references remain: {offenders}"

    sitemap = read_text(ROOT / "sitemap.xml")
    for clean in ["/experiences/", "/regions/", "/about/", "/contact/", "/plan/", "/work-with-us/"]:
        assert f"{DOMAIN}{clean}" in sitemap, f"Sitemap missing {clean}"
    assert "experience-detail-v2.html" not in sitemap, "Old detail URLs remain in sitemap"

    # Legacy pages should now be redirects instead of duplicate full-content pages.
    for legacy, route in ROUTES.items():
        if legacy == "index.html":
            continue
        text = read_text(ROOT / legacy)
        assert 'noindex,follow' in text and route in text, f"Legacy redirect invalid: {legacy}"

    css = read_text(ROOT / "mobile-consistency.css")
    assert marker_check(css := css)

    print("Clean URL migration and static validation passed.")


def marker_check(css: str) -> bool:
    return (
        "Clean URL + responsive navigation refinements" in css
        and "100dvh" in css
        and "max-width: 430px" in css
    )


if __name__ == "__main__":
    main()
