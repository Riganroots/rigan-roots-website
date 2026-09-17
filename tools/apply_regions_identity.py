from pathlib import Path

p = Path('regions/index.html')
text = p.read_text(encoding='utf-8')


def replace_one(old, new, label):
    global text
    if old not in text:
        raise SystemExit(f'{label} anchor not found')
    text = text.replace(old, new, 1)


replace_one(
'''    .region-mandala {
      position: relative;
      width: min(760px, 100%);
      height: 600px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid rgba(23, 77, 47, 0.08);
      border-radius: 44px;
      background:
        radial-gradient(
          circle at center,
          rgba(159, 186, 107, 0.18),
          transparent 27%
        ),
        radial-gradient(
          circle at 18% 15%,
          rgba(230, 195, 106, 0.18),
          transparent 25%
        ),
        radial-gradient(
          circle at 82% 84%,
          rgba(154, 106, 66, 0.14),
          transparent 28%
        ),
        rgba(255, 255, 255, 0.84);
      box-shadow: var(--shadow);
      backdrop-filter: blur(18px);
    }''',
'''    .region-mandala {
      --region-bg: url("https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg");
      position: relative;
      width: min(760px, 100%);
      height: 600px;
      margin: 0 auto;
      overflow: hidden;
      border: 1px solid rgba(23, 77, 47, 0.08);
      border-radius: 44px;
      background-image:
        linear-gradient(135deg, rgba(247, 240, 228, 0.78), rgba(247, 240, 228, 0.9)),
        var(--region-bg);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      box-shadow: var(--shadow);
      backdrop-filter: blur(18px);
      transition: background-image 0.45s ease;
    }

    .prayer-flags {
      position: absolute;
      top: 11px;
      left: 2%;
      z-index: 3;
      width: 96%;
      height: 68px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 22px;
      pointer-events: none;
      opacity: 0.74;
    }

    .prayer-flags::before {
      content: "";
      position: absolute;
      top: 7px;
      left: 0;
      width: 100%;
      height: 42px;
      border-top: 2px solid rgba(78, 64, 45, 0.35);
      border-radius: 50%;
      transform: translateY(4px);
    }

    .prayer-flags span {
      position: relative;
      z-index: 1;
      width: 23px;
      height: 32px;
      border-radius: 2px 2px 4px 4px;
      box-shadow: 0 4px 12px rgba(19, 32, 24, 0.09);
      clip-path: polygon(0 0, 100% 0, 100% 86%, 50% 100%, 0 86%);
    }

    .prayer-flags span:nth-child(1), .prayer-flags span:nth-child(6), .prayer-flags span:nth-child(11) { background: #3157a4; }
    .prayer-flags span:nth-child(2), .prayer-flags span:nth-child(7), .prayer-flags span:nth-child(12) { background: #f6f0dd; }
    .prayer-flags span:nth-child(3), .prayer-flags span:nth-child(8), .prayer-flags span:nth-child(13) { background: #b83a32; }
    .prayer-flags span:nth-child(4), .prayer-flags span:nth-child(9), .prayer-flags span:nth-child(14) { background: #3d7b50; }
    .prayer-flags span:nth-child(5), .prayer-flags span:nth-child(10), .prayer-flags span:nth-child(15) { background: #d5ad38; }
    .prayer-flags span:nth-child(1), .prayer-flags span:nth-child(15) { transform: translateY(0); }
    .prayer-flags span:nth-child(2), .prayer-flags span:nth-child(14) { transform: translateY(5px); }
    .prayer-flags span:nth-child(3), .prayer-flags span:nth-child(13) { transform: translateY(10px); }
    .prayer-flags span:nth-child(4), .prayer-flags span:nth-child(12) { transform: translateY(15px); }
    .prayer-flags span:nth-child(5), .prayer-flags span:nth-child(11) { transform: translateY(19px); }
    .prayer-flags span:nth-child(6), .prayer-flags span:nth-child(10) { transform: translateY(23px); }
    .prayer-flags span:nth-child(7), .prayer-flags span:nth-child(9) { transform: translateY(26px); }
    .prayer-flags span:nth-child(8) { transform: translateY(28px); }

    .nepal-map-watermark {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      width: 76%;
      height: auto;
      color: var(--green);
      opacity: 0.11;
      transform: translate(-50%, -50%) rotate(-2deg);
      pointer-events: none;
      filter: drop-shadow(0 8px 20px rgba(23, 77, 47, 0.08));
    }

    .nepal-map-watermark path {
      fill: rgba(247, 240, 228, 0.52);
      stroke: currentColor;
      stroke-width: 7;
      stroke-linejoin: round;
    }''',
'mandala background')

replace_one(
'''    .mandala-icon {
      margin-bottom: 5px;
      font-size: 26px;
    }''',
'''    .mandala-icon {
      width: 42px;
      height: 42px;
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      margin: 0 auto 7px;
      border: 1px solid rgba(23, 77, 47, 0.12);
      border-radius: 50%;
      background: rgba(23, 77, 47, 0.08);
      color: var(--green);
      font-size: 17px;
    }

    .mandala-option.active .mandala-icon {
      border-color: rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.2);
      color: var(--white);
    }''',
'mandala icon CSS')

replace_one(
'''    .region-card-top {
      position: relative;
      min-height: 150px;
      padding: 24px;
      background:
        radial-gradient(
          circle at top right,
          rgba(230, 195, 106, 0.35),
          transparent 38%
        ),
        linear-gradient(135deg, #eaf3df, #fff8ea);
    }

    .region-card-top::after {
      content: "✦";
      position: absolute;
      right: 22px;
      bottom: 8px;
      color: rgba(23, 77, 47, 0.1);
      font-family: "Playfair Display", serif;
      font-size: 76px;
    }''',
'''    .region-card-top {
      position: relative;
      min-height: 190px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 24px;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .region-card-top::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(to top, rgba(7, 22, 17, 0.76), rgba(7, 22, 17, 0.12) 68%, rgba(7, 22, 17, 0.04));
      pointer-events: none;
    }''',
'region card top CSS')

replace_one(
'''    .region-name {
      position: relative;
      z-index: 2;
      max-width: 90%;
      font-size: 27px;
      line-height: 1.12;
    }''',
'''    .region-name {
      position: relative;
      z-index: 2;
      max-width: 94%;
      color: var(--white);
      font-size: 27px;
      line-height: 1.12;
      text-shadow: 0 3px 18px rgba(0, 0, 0, 0.34);
    }''',
'region name CSS')

replace_one(
'''      .mandala-rings,
      .mandala-center {
        display: none;
      }''',
'''      .mandala-rings,
      .mandala-center,
      .nepal-map-watermark {
        display: none;
      }

      .prayer-flags {
        top: 4px;
        left: 0;
        width: 100%;
        height: 42px;
        padding: 0 10px;
        opacity: 0.56;
      }

      .prayer-flags span {
        width: 13px;
        height: 19px;
      }''',
'mobile mandala CSS')

replace_one(
'''      <div class="region-mandala">

        <div class="mandala-rings" aria-hidden="true"></div>''',
'''      <div class="region-mandala">

        <div class="prayer-flags" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <svg class="nepal-map-watermark" viewBox="0 0 900 280" aria-hidden="true" focusable="false">
          <path d="M44 151 L91 129 L136 133 L175 109 L222 119 L264 91 L307 103 L344 83 L390 94 L429 75 L474 92 L513 72 L558 91 L598 67 L641 83 L683 64 L728 82 L770 70 L810 88 L852 82 L870 108 L846 124 L812 122 L780 139 L744 132 L706 151 L666 143 L627 164 L589 153 L548 174 L504 165 L464 183 L421 172 L382 190 L341 180 L299 194 L258 183 L217 194 L178 180 L140 184 L107 166 L74 171 Z"/>
        </svg>

        <div class="mandala-rings" aria-hidden="true"></div>''',
'mandala HTML')

icons = {
    '<span class="mandala-icon">⭐</span>': '<span class="mandala-icon" aria-hidden="true"><i class="fa-solid fa-star"></i></span>',
    '<span class="mandala-icon">🏔️</span>': '<span class="mandala-icon" aria-hidden="true"><i class="fa-solid fa-mountain-sun"></i></span>',
    '<span class="mandala-icon">🧭</span>': '<span class="mandala-icon" aria-hidden="true"><i class="fa-solid fa-compass"></i></span>',
    '<span class="mandala-icon">🛕</span>': '<span class="mandala-icon" aria-hidden="true"><i class="fa-solid fa-landmark"></i></span>',
    '<span class="mandala-icon">🐅</span>': '<span class="mandala-icon" aria-hidden="true"><i class="fa-solid fa-paw"></i></span>',
    '<span class="mandala-icon">🌿</span>': '<span class="mandala-icon" aria-hidden="true"><i class="fa-solid fa-leaf"></i></span>'
}
for old, new in icons.items():
    replace_one(old, new, f'icon {old}')

anchor = '''    const mandalaNames = {
      classic: "Classic Nepal",
      basecamp: "Himalayan Base Camps",
      hidden: "Hidden Trails & Remote Valleys",
      culture: "Culture, Heritage & Villages",
      wildlife: "Wildlife, Wetlands & Terai",
      farwest: "Far-West Nepal"
    };'''
replace_one(anchor, anchor + '''

    const regionCategoryImages = {
      classic: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg",
      basecamp: "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
      hidden: "https://i.postimg.cc/FHpVTf2H/rara_lake_expeditions_jpg.jpg",
      culture: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg",
      wildlife: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80",
      farwest: "https://i.postimg.cc/FHpVTf2H/rara_lake_expeditions_jpg.jpg"
    };

    const regionImageOverrides = {
      "kathmandu-valley": "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg",
      "pokhara-annapurna": "https://i.postimg.cc/4NCPyR69/pokhara-experience-jpg.jpg",
      "everest-region": "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
      "bandipur": "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg",
      "everest-base-camp": "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
      "annapurna-base-camp": "https://i.postimg.cc/VNHBcxsc/annapurna-base-camp-jpg.jpg",
      "mardi-himal-base-camp": "https://i.postimg.cc/4NCPyR69/pokhara-experience-jpg.jpg",
      "rara-lake-mugu": "https://i.postimg.cc/FHpVTf2H/rara_lake_expeditions_jpg.jpg",
      "ghalegaun-ghanpokhara": "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg"
    };''', 'image mappings')

replace_one(
'''    const navLinks =
      document.getElementById("navLinks");

    let activeFilter = "classic";''',
'''    const navLinks =
      document.getElementById("navLinks");

    const regionMandala =
      document.querySelector(".region-mandala");

    let activeFilter = "classic";

    function getRegionImage(region) {
      return regionImageOverrides[region.slug] ||
        regionCategoryImages[region.category] ||
        regionCategoryImages.classic;
    }

    function updateMandalaVisual() {
      const image =
        regionCategoryImages[activeFilter] || regionCategoryImages.classic;

      regionMandala.style.setProperty(
        "--region-bg",
        `url("${image}")`
      );

      regionMandala.dataset.activeRegion = activeFilter;
    }''',
'mandala JS helpers')

replace_one(
'''      const category =
        categoryInformation[activeFilter];

      regionTitle.textContent =''',
'''      const category =
        categoryInformation[activeFilter];

      updateMandalaVisual();

      regionTitle.textContent =''',
'render background')

replace_one(
'''              <article class="region-card">

                <div class="region-card-top">''',
'''              <article class="region-card">

                <div
                  class="region-card-top"
                  style="background-image: url('${escapeHTML(getRegionImage(region))}');"
                >''',
'card image markup')

p.write_text(text, encoding='utf-8')
print('Applied Regions Nepal visual identity.')
