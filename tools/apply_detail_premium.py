from pathlib import Path

path = Path('experiences/detail/index.html')
text = path.read_text(encoding='utf-8')

# Add Nepal-specific decorative layer and premium hero/booking/itinerary styles.
anchor = '''    .detail-hero::after {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background:\n        linear-gradient(\n          to top,\n          rgba(0, 0, 0, 0.8),\n          rgba(0, 0, 0, 0.12) 70%\n        );\n    }'''
insert = anchor + '''\n\n    .detail-hero::before {\n      content: "";\n      position: absolute;\n      top: 92px;\n      left: 2.5%;\n      z-index: 1;\n      width: 95%;\n      height: 86px;\n      pointer-events: none;\n      opacity: .72;\n      background: center / 100% 100% no-repeat\n        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 100'%3E%3Cpath d='M10 18 Q450 90 890 18' fill='none' stroke='rgba(255,255,255,.48)' stroke-width='2'/%3E%3Cg%3E%3Cpath d='M55 28h36v39l-18 12-18-12z' fill='%233157a4'/%3E%3Cpath d='M110 36h36v39l-18 12-18-12z' fill='%23f4efd9'/%3E%3Cpath d='M165 43h36v39l-18 12-18-12z' fill='%23b83a32'/%3E%3Cpath d='M220 50h36v39l-18 12-18-12z' fill='%233d7b50'/%3E%3Cpath d='M275 56h36v39l-18 5-18-5z' fill='%23d5ad38'/%3E%3Cpath d='M330 61h36v34l-18 5-18-5z' fill='%233157a4'/%3E%3Cpath d='M385 64h36v31l-18 5-18-5z' fill='%23f4efd9'/%3E%3Cpath d='M440 66h36v29l-18 5-18-5z' fill='%23b83a32'/%3E%3Cpath d='M495 64h36v31l-18 5-18-5z' fill='%233d7b50'/%3E%3Cpath d='M550 61h36v34l-18 5-18-5z' fill='%23d5ad38'/%3E%3Cpath d='M605 56h36v39l-18 5-18-5z' fill='%233157a4'/%3E%3Cpath d='M660 50h36v39l-18 12-18-12z' fill='%23f4efd9'/%3E%3Cpath d='M715 43h36v39l-18 12-18-12z' fill='%23b83a32'/%3E%3Cpath d='M770 36h36v39l-18 12-18-12z' fill='%233d7b50'/%3E%3Cpath d='M825 28h36v39l-18 12-18-12z' fill='%23d5ad38'/%3E%3C/g%3E%3C/svg%3E");\n    }\n\n    .hero-inner::before {\n      content: "";\n      position: absolute;\n      left: 12px;\n      bottom: 70px;\n      width: 190px;\n      height: 70px;\n      opacity: .12;\n      pointer-events: none;\n      background: center / contain no-repeat\n        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 280'%3E%3Cpath d='M44 151L91 129 136 133 175 109 222 119 264 91 307 103 344 83 390 94 429 75 474 92 513 72 558 91 598 67 641 83 683 64 728 82 770 70 810 88 852 82 870 108 846 124 812 122 780 139 744 132 706 151 666 143 627 164 589 153 548 174 504 165 464 183 421 172 382 190 341 180 299 194 258 183 217 194 178 180 140 184 107 166 74 171Z' fill='none' stroke='white' stroke-width='12' stroke-linejoin='round'/%3E%3C/svg%3E");\n    }\n\n    .hero-actions {\n      display: flex;\n      gap: 12px;\n      flex-wrap: wrap;\n      margin-top: 24px;\n    }\n\n    .hero-actions a {\n      min-height: 48px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 9px;\n      padding: 13px 20px;\n      border-radius: 999px;\n      font-size: 14px;\n      font-weight: 900;\n      transition: transform .25s ease, background .25s ease;\n    }\n\n    .hero-actions a:hover {\n      transform: translateY(-2px);\n    }\n\n    .hero-actions .hero-primary {\n      background: var(--white);\n      color: var(--green);\n      box-shadow: 0 12px 28px rgba(0,0,0,.18);\n    }\n\n    .hero-actions .hero-secondary {\n      border: 1px solid rgba(255,255,255,.34);\n      background: rgba(7,22,17,.28);\n      color: var(--white);\n      backdrop-filter: blur(10px);\n    }'''
if anchor not in text:
    raise SystemExit('hero overlay anchor not found')
text = text.replace(anchor, insert, 1)

# Upgrade info boxes with icon treatment.
anchor = '''    .info-box span {\n      font-weight: 900;\n    }'''
insert = anchor + '''\n\n    .info-box {\n      position: relative;\n      overflow: hidden;\n      padding-top: 50px;\n      border: 1px solid rgba(23,77,47,.07);\n    }\n\n    .info-box::before {\n      position: absolute;\n      top: 16px;\n      left: 18px;\n      width: 28px;\n      height: 28px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 50%;\n      background: rgba(159,186,107,.2);\n      color: var(--green);\n      font-family: "Font Awesome 6 Free";\n      font-size: 13px;\n      font-weight: 900;\n    }\n\n    .info-box:nth-child(1)::before { content: "\\f017"; }\n    .info-box:nth-child(2)::before { content: "\\f0c0"; }\n    .info-box:nth-child(3)::before { content: "\\f5a0"; }\n    .info-box:nth-child(4)::before { content: "\\f185"; }\n    .info-box:nth-child(5)::before { content: "\\f3c5"; }'''
if anchor not in text:
    raise SystemExit('info box anchor not found')
text = text.replace(anchor, insert, 1)

# Add premium section heading accent.
anchor = '''    .section h2,\n    .custom-strip h2 {\n      margin-bottom: 16px;\n      color: var(--green);\n      font-family: "Playfair Display", serif;\n      font-size: 32px;\n    }'''
insert = anchor + '''\n\n    .content-card > .section > h2 {\n      position: relative;\n      padding-left: 18px;\n    }\n\n    .content-card > .section > h2::before {\n      content: "";\n      position: absolute;\n      left: 0;\n      top: .18em;\n      width: 5px;\n      height: 1.05em;\n      border-radius: 999px;\n      background: linear-gradient(var(--olive), var(--green));\n    }'''
if anchor not in text:
    raise SystemExit('section heading anchor not found')
text = text.replace(anchor, insert, 1)

# Upgrade gallery interaction.
anchor = '''    .gallery-side img {\n      height: 203px;\n    }'''
insert = anchor + '''\n\n    .gallery-main,\n    .gallery-side img {\n      transition: transform .35s ease, box-shadow .35s ease;\n    }\n\n    .gallery-main:hover,\n    .gallery-side img:hover {\n      transform: scale(1.015);\n      box-shadow: 0 18px 38px rgba(19,32,24,.14);\n    }'''
if anchor not in text:
    raise SystemExit('gallery anchor not found')
text = text.replace(anchor, insert, 1)

# Turn itinerary into a stronger visual timeline without changing JS.
anchor = '''    .itinerary-day {\n      margin-bottom: 14px;\n      overflow: hidden;\n      border: 1px solid #e5e7eb;\n      border-radius: 18px;\n      background: #f8fafc;\n    }'''
insert = '''    #itinerary {\n      counter-reset: rigan-day;\n      position: relative;\n    }\n\n    .itinerary-day {\n      counter-increment: rigan-day;\n      position: relative;\n      margin: 0 0 16px 22px;\n      overflow: visible;\n      border: 1px solid #e5e7eb;\n      border-radius: 20px;\n      background: #f8fafc;\n      box-shadow: 0 8px 24px rgba(23,77,47,.05);\n    }\n\n    .itinerary-day::before {\n      content: counter(rigan-day);\n      position: absolute;\n      top: 14px;\n      left: -23px;\n      z-index: 2;\n      width: 36px;\n      height: 36px;\n      display: grid;\n      place-items: center;\n      border: 4px solid var(--cream);\n      border-radius: 50%;\n      background: var(--green);\n      color: #fff;\n      font-size: 12px;\n      font-weight: 900;\n      box-shadow: 0 8px 20px rgba(23,77,47,.2);\n    }\n\n    .itinerary-day:not(:last-child)::after {\n      content: "";\n      position: absolute;\n      top: 48px;\n      bottom: -22px;\n      left: -6px;\n      width: 2px;\n      background: linear-gradient(var(--olive), rgba(159,186,107,.12));\n    }'''
if anchor not in text:
    raise SystemExit('itinerary anchor not found')
text = text.replace(anchor, insert, 1)

# Premium booking card treatment.
anchor = '''    .booking-card {\n      position: sticky;\n      top: 25px;\n      align-self: start;\n      padding: 30px;\n    }'''
insert = '''    .booking-card {\n      position: sticky;\n      top: 25px;\n      align-self: start;\n      overflow: hidden;\n      padding: 34px 30px 30px;\n      border-color: rgba(23,77,47,.14);\n      box-shadow: 0 26px 70px rgba(19,32,24,.14);\n    }\n\n    .booking-card::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 6px;\n      background: linear-gradient(90deg, var(--green), var(--olive), #d4af37, var(--green));\n    }'''
if anchor not in text:
    raise SystemExit('booking card anchor not found')
text = text.replace(anchor, insert, 1)

# Mobile tuning for new hero decorations/actions.
anchor = '''      .hero-inner p {\n        font-size: 16px;\n      }'''
insert = anchor + '''\n\n      .detail-hero::before {\n        top: 78px;\n        left: 1%;\n        width: 98%;\n        height: 54px;\n        opacity: .5;\n      }\n\n      .hero-inner::before {\n        display: none;\n      }\n\n      .hero-actions {\n        gap: 9px;\n      }\n\n      .hero-actions a {\n        flex: 1 1 100%;\n      }'''
if anchor not in text:
    raise SystemExit('mobile hero anchor not found')
text = text.replace(anchor, insert, 1)

# Add high-intent hero CTAs.
anchor = '''      <div class="hero-badges">\n        <small>\n          <i class="fa-solid fa-user-group"></i>\n          Private / Small Group\n        </small>\n\n        <small>\n          <i class="fa-solid fa-handshake-angle"></i>\n          Local Support\n        </small>\n\n        <small>\n          <i class="fa-solid fa-sliders"></i>\n          Customizable\n        </small>\n      </div>'''
insert = anchor + '''\n\n      <div class="hero-actions">\n        <a class="hero-primary" href="#bookingCard">\n          <i class="fa-solid fa-paper-plane"></i>\n          Request a Quote\n        </a>\n        <a class="hero-secondary" href="#itinerarySection">\n          <i class="fa-solid fa-route"></i>\n          View Itinerary\n        </a>\n      </div>'''
if anchor not in text:
    raise SystemExit('hero badges anchor not found')
text = text.replace(anchor, insert, 1)

# Add stable anchors for CTAs.
old = '''        <section class="section">\n          <h2>Day-by-Day Itinerary</h2>'''
new = '''        <section class="section" id="itinerarySection">\n          <h2>Day-by-Day Itinerary</h2>'''
if old not in text:
    raise SystemExit('itinerary section anchor not found')
text = text.replace(old, new, 1)

old = '''      <aside class="booking-card">'''
new = '''      <aside class="booking-card" id="bookingCard">'''
if old not in text:
    raise SystemExit('booking aside anchor not found')
text = text.replace(old, new, 1)

path.write_text(text, encoding='utf-8')
print('updated experiences/detail/index.html')
