const experienceCategories = {
  "signature-experiences": {
    title: "Signature Experiences",
    description: "Emotional, premium, and unforgettable journeys designed to create deep connection and meaningful memories in Nepal.",
    items: [
      "proposal-in-the-basecamp",
      "taste-of-nepal",
      "live-like-a-nepali",
      "festival-experience",
      "village-immersion",
      "wellness-retreat",
      "honeymoon-in-nepal",
      "women-only-cultural-trip",
      "family-nepal-escape",
      "digital-detox-village-retreat"
    ]
  },
  "trek-mountain-journeys": {
    title: "Trek & Mountain Journeys",
    description: "Destination-based trekking experiences through Nepal's most iconic mountain landscapes and Himalayan trails.",
    items: [
      "poon-hill",
      "annapurna-base-camp",
      "mardi-base-camp",
      "abc-helicopter-return",
      "langtang-valley",
      "everest-view-trek",
      "everest-base-camp",
      "annapurna-north-base-camp",
      "khopra-danda",
      "rara-lake",
      "mustang-jeep",
      "base-camp-proposal-package"
    ]
  },
  "adventure-soft-adventure": {
    title: "Adventure & Soft Adventure",
    description: "Exciting activity-based journeys for travelers who want thrill, nature, and memorable outdoor experiences.",
    items: [
      "white-water-rafting",
      "paragliding-pokhara",
      "biking-trails-nepal",
      "motorbike-himalayan-ride",
      "zipline-pokhara",
      "bungee-adventure",
      "jungle-safari",
      "kayaking",
      "canyoning"
    ]
  },
  "easy-escapes": {
    title: "Easy Escapes / City + Nature",
    description: "Lighter journeys for short-stay travelers who want culture, comfort, scenery, and soft exploration without difficult trekking.",
    items: [
      "pokhara-experience",
      "bandipur-escape",
      "kathmandu-heritage-tour",
      "lumbini-spiritual-journey",
      "chitwan-jungle-experience",
      "nagarkot-sunrise-retreat",
      "bandipur-cultural-escape",
      "chitwan-jungle-safari",
      "everest-view-experience"
    ]
  }
};

const experienceData = {
  "proposal-in-the-basecamp": {
    title: "Proposal in the Base Camp",
    badge: "💍 Signature Moment",
    subtitle: "A once-in-a-lifetime romantic proposal surrounded by the Himalayas.",
    image: "https://i.postimg.cc/qv4GccDP/base_camp_proposal_package.jpg",
    price: "From $2,499",
    duration: "10-14 Days",
    region: "Himalayas",
    difficulty: "Moderate"
  },
  "taste-of-nepal": {
    title: "Taste of Nepal",
    badge: "🍲 Culinary Experience",
    subtitle: "Discover Nepal through home kitchens, local flavors, and food traditions.",
    image: "https://images.pexels.com/photos/4109711/pexels-photo-4109711.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $899",
    duration: "5-8 Days",
    region: "Kathmandu & Beyond",
    difficulty: "Easy"
  },
  "live-like-a-nepali": {
    title: "Live Like a Nepali",
    badge: "🏡 Cultural Stay",
    subtitle: "Step into everyday Nepal through family stays, shared meals, and local rhythm.",
    image: "https://images.pexels.com/photos/2118373/pexels-photo-2118373.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $799",
    duration: "5-7 Days",
    region: "Mid-Hills Nepal",
    difficulty: "Easy"
  },
  "festival-experience": {
    title: "Festival Experience",
    badge: "🎉 Cultural Celebration",
    subtitle: "Celebrate Nepal's biggest festivals with local communities.",
    image: "https://images.pexels.com/photos/11532069/pexels-photo-11532069.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $699",
    duration: "3-6 Days",
    region: "Across Nepal",
    difficulty: "Easy"
  },
  "village-immersion": {
    title: "Village Immersion",
    badge: "🌾 Local Life Experience",
    subtitle: "Slow down and connect with Nepal through village life and real community moments.",
    image: "https://images.pexels.com/photos/13617367/pexels-photo-13617367.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $749",
    duration: "5-7 Days",
    region: "Village Nepal",
    difficulty: "Easy"
  },
  "wellness-retreat": {
    title: "Wellness Retreat",
    badge: "🧘 Healing Journey",
    subtitle: "Reconnect with yourself through yoga, meditation, and peaceful Nepal.",
    image: "https://images.pexels.com/photos/3822589/pexels-photo-3822589.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,099",
    duration: "7-10 Days",
    region: "Pokhara",
    difficulty: "Easy"
  },
  "honeymoon-in-nepal": {
    title: "Honeymoon in Nepal",
    badge: "❤️ Romantic Escape",
    subtitle: "A romantic journey through Nepal with culture, mountains, and unforgettable moments.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,999",
    duration: "7-12 Days",
    region: "Nepal",
    difficulty: "Easy to Moderate"
  },
  "women-only-cultural-trip": {
    title: "Women-Only Cultural Trip",
    badge: "🌸 Women's Journey",
    subtitle: "A safe and inspiring Nepal experience designed for women travelers.",
    image: "https://images.pexels.com/photos/2118373/pexels-photo-2118373.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $999",
    duration: "6-9 Days",
    region: "Nepal",
    difficulty: "Easy"
  },
  "family-nepal-escape": {
    title: "Family Nepal Escape",
    badge: "👨‍👩‍👧‍👦 Family Friendly",
    subtitle: "A fun, meaningful, and comfortable Nepal experience for families.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,399",
    duration: "6-10 Days",
    region: "Nepal",
    difficulty: "Easy"
  },
  "digital-detox-village-retreat": {
    title: "Digital Detox Village Retreat",
    badge: "📵 Slow Living Escape",
    subtitle: "Disconnect from screens and reconnect with quiet, nature, and local life.",
    image: "https://images.pexels.com/photos/10664298/pexels-photo-10664298.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $899",
    duration: "5-8 Days",
    region: "Mid-Hills Nepal",
    difficulty: "Easy"
  },
  "poon-hill": {
    title: "Poon Hill",
    badge: "🌄 Sunrise Trek",
    subtitle: "A classic short trek with one of Nepal's most rewarding sunrise views.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $699",
    duration: "3-5 Days",
    region: "Annapurna Region",
    difficulty: "Easy"
  },
  "annapurna-base-camp": {
    title: "Annapurna Base Camp",
    badge: "🏔️ Classic Trek",
    subtitle: "One of Nepal's most iconic Himalayan trekking journeys.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,299",
    duration: "10-12 Days",
    region: "Annapurna",
    difficulty: "Moderate"
  },
  "mardi-base-camp": {
    title: "Mardi Base Camp",
    badge: "⛰️ Scenic Ridge Trek",
    subtitle: "A beautiful and less crowded trek with dramatic ridge-line mountain views.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,099",
    duration: "7-9 Days",
    region: "Annapurna",
    difficulty: "Moderate"
  },
  "abc-helicopter-return": {
    title: "ABC Trek with Helicopter Return",
    badge: "🚁 Premium Mountain Escape",
    subtitle: "Trek in and fly back for a more exclusive Annapurna Base Camp experience.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $2,699",
    duration: "6-8 Days",
    region: "Annapurna",
    difficulty: "Moderate"
  },
  "langtang-valley": {
    title: "Langtang Valley Trek",
    badge: "🏞️ Mountain Valley Trek",
    subtitle: "A beautiful Himalayan trek close to Kathmandu with culture, peaks, and valley beauty.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,199",
    duration: "8-10 Days",
    region: "Langtang",
    difficulty: "Moderate"
  },
  "everest-view-trek": {
    title: "Everest View Trek",
    badge: "🏔️ Everest Experience",
    subtitle: "See the Everest region without committing to the full base camp trek.",
    image: "https://images.pexels.com/photos/2443155/pexels-photo-2443155.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,599",
    duration: "7-9 Days",
    region: "Everest",
    difficulty: "Moderate"
  },
  "everest-base-camp": {
    title: "Everest Base Camp",
    badge: "🏔️ Legendary Trek",
    subtitle: "The world-famous journey to the foot of Mount Everest.",
    image: "https://images.pexels.com/photos/2443155/pexels-photo-2443155.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $2,099",
    duration: "12-16 Days",
    region: "Khumbu",
    difficulty: "Challenging"
  },
  "annapurna-north-base-camp": {
    title: "Annapurna North Base Camp",
    badge: "🧭 Offbeat Base Camp",
    subtitle: "A raw, lesser-known Himalayan journey for adventurous trekkers.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,599",
    duration: "10-13 Days",
    region: "Annapurna",
    difficulty: "Challenging"
  },
  "khopra-danda": {
    title: "Khopra Danda Trek",
    badge: "🌄 Ridge Experience",
    subtitle: "A peaceful trekking route with stunning views and fewer crowds.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,199",
    duration: "8-10 Days",
    region: "Annapurna",
    difficulty: "Moderate"
  },
  "rara-lake": {
    title: "Rara Lake Expedition",
    badge: "🏞️ Remote Escape",
    subtitle: "A journey to Nepal's most beautiful remote lake.",
    image: "https://images.pexels.com/photos/13617367/pexels-photo-13617367.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,599",
    duration: "8-10 Days",
    region: "Far West Nepal",
    difficulty: "Moderate"
  },
  "mustang-jeep": {
    title: "Upper Mustang Jeep Journey",
    badge: "🚙 Hidden Kingdom",
    subtitle: "Explore the ancient landscapes and Tibetan culture of Upper Mustang.",
    image: "https://images.pexels.com/photos/11239899/pexels-photo-11239899.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,899",
    duration: "7-10 Days",
    region: "Mustang",
    difficulty: "Easy"
  },
  "base-camp-proposal-package": {
    title: "Base Camp Proposal Package",
    badge: "💎 Premium Romantic Adventure",
    subtitle: "A beautifully curated proposal journey designed around Nepal's most iconic mountain settings.",
    image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $2,899",
    duration: "Custom 8-14 Days",
    region: "Himalayas",
    difficulty: "Moderate to Challenging"
  },
  "white-water-rafting": {
    title: "White Water Rafting",
    badge: "🌊 River Adventure",
    subtitle: "Feel the rush of Nepal's wild rivers with a fun and unforgettable rafting journey.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $299",
    duration: "1-3 Days",
    region: "Nepal Rivers",
    difficulty: "Easy to Moderate"
  },
  "paragliding-pokhara": {
    title: "Paragliding in Pokhara",
    badge: "🪂 Sky Adventure",
    subtitle: "Fly above Pokhara with breathtaking lake and mountain views.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $149",
    duration: "Half Day",
    region: "Pokhara",
    difficulty: "Easy"
  },
  "biking-trails-nepal": {
    title: "Biking Trails Nepal",
    badge: "🚴 Trail Experience",
    subtitle: "Ride through scenic trails, villages, and landscapes across Nepal.",
    image: "https://images.pexels.com/photos/2984036/pexels-photo-2984036.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $499",
    duration: "2-6 Days",
    region: "Nepal",
    difficulty: "Moderate"
  },
  "motorbike-himalayan-ride": {
    title: "Motorbike Himalayan Ride",
    badge: "🏍️ Road Adventure",
    subtitle: "A thrilling motorcycle journey through Nepal's roads, valleys, and mountain routes.",
    image: "https://images.pexels.com/photos/11239899/pexels-photo-11239899.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,299",
    duration: "5-10 Days",
    region: "Nepal",
    difficulty: "Moderate"
  },
  "zipline-pokhara": {
    title: "Zipline Pokhara",
    badge: "⚡ Quick Thrill",
    subtitle: "Experience one of Nepal's most exciting short adventure activities.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $99",
    duration: "Half Day",
    region: "Pokhara",
    difficulty: "Easy"
  },
  "bungee-adventure": {
    title: "Bungee Adventure",
    badge: "🔥 Extreme Adventure",
    subtitle: "Take the leap with one of Nepal's boldest outdoor experiences.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $129",
    duration: "1 Day",
    region: "Nepal",
    difficulty: "Easy"
  },
  "jungle-safari": {
    title: "Jungle Safari",
    badge: "🐘 Wildlife Adventure",
    subtitle: "Explore Nepal's jungle landscapes and search for wildlife in a soft adventure setting.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $499",
    duration: "2-4 Days",
    region: "Terai Nepal",
    difficulty: "Easy"
  },
  "kayaking": {
    title: "Kayaking in Nepal",
    badge: "🚣 Water Exploration",
    subtitle: "A fun and active water experience on Nepal's scenic rivers and lakes.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $199",
    duration: "1-2 Days",
    region: "Nepal",
    difficulty: "Easy to Moderate"
  },
  "canyoning": {
    title: "Canyoning Adventure",
    badge: "💧 Outdoor Challenge",
    subtitle: "Descend waterfalls and rock faces in one of Nepal's most exciting outdoor activities.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $189",
    duration: "1 Day",
    region: "Nepal",
    difficulty: "Moderate"
  },
  "pokhara-experience": {
    title: "Pokhara Experience",
    badge: "🌊 Lakeside Escape",
    subtitle: "Relax, explore, and enjoy Nepal's most loved city of lakes and mountains.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $599",
    duration: "3-5 Days",
    region: "Pokhara",
    difficulty: "Easy"
  },
  "bandipur-escape": {
    title: "Bandipur Escape",
    badge: "🏘️ Heritage Escape",
    subtitle: "A charming hill town getaway with culture, old architecture, and slow mountain town rhythm.",
    image: "https://images.pexels.com/photos/2118373/pexels-photo-2118373.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $499",
    duration: "2-3 Days",
    region: "Hill Town Nepal",
    difficulty: "Easy"
  },
  "kathmandu-heritage-tour": {
    title: "Kathmandu Heritage Tour",
    badge: "🛕 Cultural Discovery",
    subtitle: "Explore temples, courtyards, living history, and local stories in the Kathmandu Valley.",
    image: "https://images.pexels.com/photos/3889994/pexels-photo-3889994.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $399",
    duration: "2-4 Days",
    region: "Kathmandu",
    difficulty: "Easy"
  },
  "lumbini-spiritual-journey": {
    title: "Lumbini Spiritual Journey",
    badge: "🕊️ Sacred Experience",
    subtitle: "Visit the birthplace of Buddha and experience Nepal's peaceful spiritual side.",
    image: "https://images.pexels.com/photos/11532069/pexels-photo-11532069.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $699",
    duration: "3-5 Days",
    region: "Terai Nepal",
    difficulty: "Easy"
  },
  "chitwan-jungle-experience": {
    title: "Chitwan Jungle Experience",
    badge: "🌿 Wildlife Escape",
    subtitle: "A comfortable wildlife and culture journey in Chitwan.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $599",
    duration: "2-4 Days",
    region: "Terai Nepal",
    difficulty: "Easy"
  },
  "nagarkot-sunrise-retreat": {
    title: "Nagarkot Sunrise Retreat",
    badge: "🌅 Short Escape",
    subtitle: "A peaceful short getaway for sunrise, views, and relaxation near Kathmandu.",
    image: "https://images.pexels.com/photos/409095/pexels-photo-409095.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $349",
    duration: "1-2 Days",
    region: "Near Kathmandu",
    difficulty: "Easy"
  },
  "bandipur-cultural-escape": {
    title: "Bandipur Cultural Escape",
    badge: "🏛️ Curated Heritage Stay",
    subtitle: "A deeper and more cultural version of Bandipur with storytelling, local life, and heritage charm.",
    image: "https://images.pexels.com/photos/2118373/pexels-photo-2118373.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $599",
    duration: "2-4 Days",
    region: "Hill Town Nepal",
    difficulty: "Easy"
  },
  "chitwan-jungle-safari": {
    title: "Chitwan Jungle Safari",
    badge: "🐅 Signature Safari",
    subtitle: "A stronger wildlife-focused Chitwan experience with safari energy and nature immersion.",
    image: "https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $699",
    duration: "3-4 Days",
    region: "Terai Nepal",
    difficulty: "Easy"
  },
  "everest-view-experience": {
    title: "Everest View Experience",
    badge: "🏔️ Easy Everest Escape",
    subtitle: "A lighter Everest-region product for travelers wanting Himalayan grandeur without a demanding trek.",
    image: "https://images.pexels.com/photos/2443155/pexels-photo-2443155.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From $1,799",
    duration: "4-7 Days",
    region: "Khumbu",
    difficulty: "Easy to Moderate"
  }
};
