from pathlib import Path

path = Path('experiences/index.html')
text = path.read_text(encoding='utf-8')

old_wrap = '''    .mandala-wrap {
      position: relative;
      max-width: 900px;
      height: 520px;
      margin: 30px auto 55px;
      overflow: hidden;
      border: 1px solid rgba(23, 77, 47, 0.08);
      border-radius: 36px;
      background:
        linear-gradient(
          rgba(247, 240, 228, 0.85),
          rgba(247, 240, 228, 0.9)
        ),
        url("https://i.postimg.cc/9M6dDyqv/live-like-nepali-jpg.jpg")
        center / cover no-repeat;
      box-shadow: 0 25px 80px rgba(23, 77, 47, 0.12);
      transition: background 0.45s ease;
    }'''

new_wrap = '''    .mandala-wrap {
      position: relative;
      isolation: isolate;
      max-width: 900px;
      height: 520px;
      margin: 30px auto 55px;
      overflow: hidden;
      border: 1px solid rgba(23, 77, 47, 0.08);
      border-radius: 36px;
      background:
        linear-gradient(
          rgba(247, 240, 228, 0.7),
          rgba(247, 240, 228, 0.84)
        ),
        url("https://i.postimg.cc/9M6dDyqv/live-like-nepali-jpg.jpg")
        center / cover no-repeat;
      box-shadow:
        0 25px 80px rgba(23, 77, 47, 0.12),
        inset 0 0 90px rgba(255, 255, 255, 0.25);
      transition: background 0.45s ease;
    }

    .mandala-wrap::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background-image:
        radial-gradient(circle at 20% 18%, rgba(255,255,255,.22) 0 1px, transparent 1px),
        radial-gradient(circle at 78% 72%, rgba(23,77,47,.07) 0 1px, transparent 1px);
      background-size: 24px 24px, 32px 32px;
      mix-blend-mode: soft-light;
      opacity: .55;
    }

    .experience-prayer-flags {
      position: absolute;
      top: 14px;
      left: 3%;
      z-index: 1;
      width: 94%;
      height: 62px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 24px;
      pointer-events: none;
      opacity: .72;
    }

    .experience-prayer-flags::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 0;
      width: 100%;
      height: 42px;
      border-top: 2px solid rgba(69, 57, 42, .34);
      border-radius: 50%;
    }

    .experience-prayer-flags span {
      position: relative;
      z-index: 1;
      width: 22px;
      height: 31px;
      border-radius: 2px 2px 4px 4px;
      clip-path: polygon(0 0, 100% 0, 100% 86%, 50% 100%, 0 86%);
      box-shadow: 0 5px 12px rgba(19, 32, 24, .08);
    }

    .experience-prayer-flags span:nth-child(5n + 1) { background: #3157a4; }
    .experience-prayer-flags span:nth-child(5n + 2) { background: #f4efd9; }
    .experience-prayer-flags span:nth-child(5n + 3) { background: #b83a32; }
    .experience-prayer-flags span:nth-child(5n + 4) { background: #3d7b50; }
    .experience-prayer-flags span:nth-child(5n + 5) { background: #d5ad38; }
    .experience-prayer-flags span:nth-child(1),
    .experience-prayer-flags span:nth-child(15) { transform: translateY(0); }
    .experience-prayer-flags span:nth-child(2),
    .experience-prayer-flags span:nth-child(14) { transform: translateY(5px); }
    .experience-prayer-flags span:nth-child(3),
    .experience-prayer-flags span:nth-child(13) { transform: translateY(10px); }
    .experience-prayer-flags span:nth-child(4),
    .experience-prayer-flags span:nth-child(12) { transform: translateY(15px); }
    .experience-prayer-flags span:nth-child(5),
    .experience-prayer-flags span:nth-child(11) { transform: translateY(19px); }
    .experience-prayer-flags span:nth-child(6),
    .experience-prayer-flags span:nth-child(10) { transform: translateY(23px); }
    .experience-prayer-flags span:nth-child(7),
    .experience-prayer-flags span:nth-child(9) { transform: translateY(26px); }
    .experience-prayer-flags span:nth-child(8) { transform: translateY(28px); }

    .experience-nepal-map {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      width: 76%;
      height: auto;
      color: var(--green);
      opacity: .11;
      pointer-events: none;
      transform: translate(-50%, -50%) rotate(-2deg);
      filter: drop-shadow(0 9px 20px rgba(23, 77, 47, .09));
    }

    .experience-nepal-map path {
      fill: rgba(247, 240, 228, .44);
      stroke: currentColor;
      stroke-width: 7;
      stroke-linejoin: round;
    }'''

if old_wrap not in text:
    raise SystemExit('mandala-wrap block not found')
text = text.replace(old_wrap, new_wrap, 1)

old_center = '''      z-index: 2;
      width: 210px;'''
new_center = '''      z-index: 4;
      width: 210px;'''
if old_center not in text:
    raise SystemExit('center orb z-index anchor not found')
text = text.replace(old_center, new_center, 1)

old_ring = '''    .ring {
      position: absolute;
      inset: 60px 230px;
      border: 1px dashed rgba(23, 77, 47, 0.22);
      border-radius: 50%;
    }'''
new_ring = '''    .ring {
      position: absolute;
      z-index: 2;
      inset: 60px 230px;
      border: 1px dashed rgba(23, 77, 47, 0.22);
      border-radius: 50%;
    }'''
if old_ring not in text:
    raise SystemExit('ring block not found')
text = text.replace(old_ring, new_ring, 1)

old_cat = '''    .cat {
      position: absolute;'''
new_cat = '''    .cat {
      position: absolute;
      z-index: 3;'''
if old_cat not in text:
    raise SystemExit('category button anchor not found')
text = text.replace(old_cat, new_cat, 1)

old_mobile = '''      .center-orb,
      .ring {
        display: none;
      }'''
new_mobile = '''      .center-orb,
      .ring,
      .experience-nepal-map {
        display: none;
      }

      .experience-prayer-flags {
        top: 4px;
        left: 0;
        width: 100%;
        height: 40px;
        padding: 0 10px;
        opacity: .48;
      }

      .experience-prayer-flags span {
        width: 13px;
        height: 19px;
      }'''
if old_mobile not in text:
    raise SystemExit('mobile center/ring block not found')
text = text.replace(old_mobile, new_mobile, 1)

old_html = '''    >
      <div class="ring"></div>

      <div class="center-orb">'''
new_html = '''    >
      <div class="experience-prayer-flags" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <svg class="experience-nepal-map" viewBox="0 0 900 280" aria-hidden="true" focusable="false">
        <path d="M44 151 L91 129 L136 133 L175 109 L222 119 L264 91 L307 103 L344 83 L390 94 L429 75 L474 92 L513 72 L558 91 L598 67 L641 83 L683 64 L728 82 L770 70 L810 88 L852 82 L870 108 L846 124 L812 122 L780 139 L744 132 L706 151 L666 143 L627 164 L589 153 L548 174 L504 165 L464 183 L421 172 L382 190 L341 180 L299 194 L258 183 L217 194 L178 180 L140 184 L107 166 L74 171 Z"/>
      </svg>

      <div class="ring"></div>

      <div class="center-orb">'''
if old_html not in text:
    raise SystemExit('category selector HTML anchor not found')
text = text.replace(old_html, new_html, 1)

old_wellness = '''      wellness:
        "https://i.postimg.cc/4NCPyR69/pokhara-experience-jpg.jpg",'''
new_wellness = '''      wellness:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=82",'''
if old_wellness not in text:
    raise SystemExit('wellness background anchor not found')
text = text.replace(old_wellness, new_wellness, 1)

old_dynamic = '''      mandalaWrap.style.background =
        `linear-gradient(
          rgba(247,240,228,.85),
          rgba(247,240,228,.9)
        ),
        url('${image}') center/cover no-repeat`;'''
new_dynamic = '''      mandalaWrap.style.background =
        `linear-gradient(
          rgba(247,240,228,.7),
          rgba(247,240,228,.84)
        ),
        url('${image}') center/cover no-repeat`;'''
if old_dynamic not in text:
    raise SystemExit('dynamic background block not found')
text = text.replace(old_dynamic, new_dynamic, 1)

path.write_text(text, encoding='utf-8')

checks = {
    'prayer flags': 'experience-prayer-flags' in text,
    'Nepal map': 'experience-nepal-map' in text,
    'dynamic background': 'function updateMandalaBackground(category)' in text,
    'eight categories': text.count('data-cat=') == 8,
    'existing search': 'id="searchBox"' in text,
    'existing currency': 'id="currencySelect"' in text,
    'existing cards': 'id="cards"' in text,
}
failed = [name for name, ok in checks.items() if not ok]
if failed:
    raise SystemExit('Validation failed: ' + ', '.join(failed))
print('Experiences Nepal identity validation passed')
