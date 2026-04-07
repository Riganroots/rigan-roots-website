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
    description: "Destination-based trekking experiences through Nepal’s most iconic mountain landscapes and Himalayan trails.",
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
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    price: "From $2,499",
    duration: "10-14 Days",
    groupSize: "Private Experience",
    location: "Annapurna / Everest Region",
    region: "Himalayas",
    style: "Romantic, Luxury, Emotional",
    difficulty: "Moderate to Challenging",
    bestFor: "Couples seeking a truly unforgettable proposal",
    about: "This signature experience is designed for couples who want a deeply personal and extraordinary proposal in one of the world’s most breathtaking settings.",
    experienceList: [
      "Custom proposal setup in a Himalayan base camp setting",
      "Romantic planning support from Rigan",
      "Memorable mountain journey together",
      "Optional photography and celebration arrangements"
    ],
    includedList: [
      "Trip planning and coordination",
      "Proposal setup assistance",
      "Guide support",
      "Accommodation during journey",
      "Private customization options"
    ],
    goodToKnow: [
      "Fully customizable",
      "Can be designed for Annapurna or Everest region",
      "Best planned in spring or autumn"
    ]
  },

  "taste-of-nepal": {
    title: "Taste of Nepal",
    badge: "🍲 Culinary Experience",
    subtitle: "Discover Nepal through home kitchens, local flavors, and food traditions.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    price: "From $899",
    duration: "5-8 Days",
    groupSize: "Max 8 Guests",
    location: "Kathmandu Valley & Local Communities",
    region: "Kathmandu & Beyond",
    style: "Food, Culture, Immersive",
    difficulty: "Easy",
    bestFor: "Food lovers and culture seekers",
    about: "Experience Nepal through its people and food. Share meals, visit markets, and learn the stories behind some of Nepal’s most loved dishes.",
    experienceList: [
      "Cook Nepali meals with local families",
      "Visit local markets and spice stalls",
      "Learn food traditions and cultural stories",
      "Enjoy authentic shared dining experiences"
    ],
    includedList: [
      "Accommodation",
      "Curated food sessions",
      "Local host experiences",
      "Selected meals",
      "Ground transport"
    ],
    goodToKnow: [
      "Vegetarian options available",
      "Private experiences possible",
      "Ideal year-round"
    ]
  },

  "live-like-a-nepali": {
    title: "Live Like a Nepali",
    badge: "🏡 Cultural Stay",
    subtitle: "Step into everyday Nepal through family stays, shared meals, and local rhythm.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    price: "From $799",
    duration: "5-7 Days",
    groupSize: "Max 6 Guests",
    location: "Village & Heritage Communities",
    region: "Mid-Hills Nepal",
    style: "Immersive, Cultural, Slow Travel",
    difficulty: "Easy",
    bestFor: "Meaningful travelers and first-time visitors",
    about: "This is a warm and human experience designed around connection, hospitality, and everyday life in Nepal.",
    experienceList: [
      "Stay with local families",
      "Join daily routines and simple traditions",
      "Share home-cooked meals",
      "Experience the quiet beauty of local life"
    ],
    includedList: [
      "Homestay accommodation",
      "Meals with hosts",
      "Cultural activities",
      "Ground transport",
      "Experience support"
    ],
    goodToKnow: [
      "Simple, authentic accommodation",
      "Ideal for slow travelers",
      "Respectful participation is encouraged"
    ]
  },

  "festival-experience": {
    title: "Festival Experience",
    badge: "🎉 Cultural Celebration",
    subtitle: "Celebrate Nepal’s biggest festivals with local communities.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d",
    price: "From $699",
    duration: "3-6 Days",
    groupSize: "Max 10 Guests",
    location: "Kathmandu & Local Communities",
    region: "Across Nepal",
    style: "Festival, Culture, Community",
    difficulty: "Easy",
    bestFor: "Culture lovers and festive travelers",
    about: "Experience Dashain, Tihar, Holi, and other celebrations as more than a visitor. Join local people and understand the meaning behind each ritual.",
    experienceList: [
      "Celebrate Nepal’s major festivals",
      "Receive blessings and participate in rituals",
      "Enjoy festive food, music, and color",
      "Learn the stories behind traditions"
    ],
    includedList: [
      "Festival-hosted activities",
      "Selected meals",
      "Transport support",
      "Cultural guide support",
      "Experience coordination"
    ],
    goodToKnow: [
      "Festival dates vary by calendar",
      "Best booked in advance",
      "Can be private or small group"
    ]
  },

  "village-immersion": {
    title: "Village Immersion",
    badge: "🌾 Local Life Experience",
    subtitle: "Slow down and connect with Nepal through village life and real community moments.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "From $749",
    duration: "5-7 Days",
    groupSize: "Max 8 Guests",
    location: "Rural Nepal",
    region: "Village Nepal",
    style: "Immersive, Community, Cultural",
    difficulty: "Easy",
    bestFor: "Culture seekers and meaningful travelers",
    about: "A community-rooted travel experience where guests stay close to local life, food, stories, and seasonal rhythms.",
    experienceList: [
      "Stay in a rural setting",
      "Learn local cooking and daily routines",
      "Participate in seasonal village activities",
      "Build real human connection"
    ],
    includedList: [
      "Village accommodation",
      "Meals",
      "Local host activities",
      "Ground transport",
      "Experience support"
    ],
    goodToKnow: [
      "Simple facilities in some areas",
      "Great for storytelling travel",
      "Family-friendly depending on location"
    ]
  },

  "wellness-retreat": {
    title: "Wellness Retreat",
    badge: "🧘 Healing Journey",
    subtitle: "Reconnect with yourself through yoga, meditation, and peaceful Nepal.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    price: "From $1,099",
    duration: "7-10 Days",
    groupSize: "Max 8 Guests",
    location: "Pokhara & Retreat Spaces",
    region: "Pokhara",
    style: "Wellness, Healing, Slow Travel",
    difficulty: "Easy",
    bestFor: "Solo travelers, wellness seekers, digital detox travelers",
    about: "A calm and grounding experience that blends rest, movement, mindfulness, and natural beauty.",
    experienceList: [
      "Daily yoga and meditation sessions",
      "Quiet reflection time",
      "Nature-based healing environment",
      "Optional spiritual and wellness add-ons"
    ],
    includedList: [
      "Retreat accommodation",
      "Wellness sessions",
      "Selected meals",
      "Local support",
      "Experience planning"
    ],
    goodToKnow: [
      "Beginner-friendly",
      "Private retreats available",
      "Best for rest and reset"
    ]
  },

  "honeymoon-in-nepal": {
    title: "Honeymoon in Nepal",
    badge: "❤️ Romantic Escape",
    subtitle: "A romantic journey through Nepal with culture, mountains, and unforgettable moments.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    price: "From $1,999",
    duration: "7-12 Days",
    groupSize: "Private Couple Experience",
    location: "Pokhara, Bandipur, Kathmandu & Beyond",
    region: "Nepal",
    style: "Romantic, Scenic, Premium",
    difficulty: "Easy to Moderate",
    bestFor: "Newlyweds and couples",
    about: "A carefully designed honeymoon through Nepal’s most romantic landscapes, meaningful stays, and unforgettable experiences.",
    experienceList: [
      "Romantic lakeside and mountain stays",
      "Private experiences for couples",
      "Sunrise, dinners, and scenic escapes",
      "Optional luxury upgrades and surprises"
    ],
    includedList: [
      "Accommodation",
      "Private transport support",
      "Curated experiences",
      "Trip planning",
      "Customization options"
    ],
    goodToKnow: [
      "Can be luxury or mid-range",
      "Highly customizable",
      "Great year-round with seasonal route planning"
    ]
  },

  "women-only-cultural-trip": {
    title: "Women-Only Cultural Trip",
    badge: "🌸 Women’s Journey",
    subtitle: "A safe and inspiring Nepal experience designed for women travelers.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    price: "From $999",
    duration: "6-9 Days",
    groupSize: "Small Women-Only Group",
    location: "Kathmandu, Pokhara & Local Communities",
    region: "Nepal",
    style: "Safe Travel, Cultural, Empowering",
    difficulty: "Easy",
    bestFor: "Solo women travelers, friends, women’s groups",
    about: "A thoughtfully designed experience centered on comfort, connection, local women-led encounters, and meaningful travel.",
    experienceList: [
      "Women-friendly and supportive itinerary",
      "Cultural immersion with local hosts",
      "Safe and relaxed group experience",
      "Optional women-led guiding and activities"
    ],
    includedList: [
      "Accommodation",
      "Transport support",
      "Selected meals",
      "Curated experiences",
      "Trip coordination"
    ],
    goodToKnow: [
      "Can be private or group-based",
      "Ideal for first-time Nepal travelers",
      "Comfort and cultural sensitivity prioritized"
    ]
  },

  "family-nepal-escape": {
    title: "Family Nepal Escape",
    badge: "👨‍👩‍👧‍👦 Family Friendly",
    subtitle: "A fun, meaningful, and comfortable Nepal experience for families.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
    price: "From $1,399",
    duration: "6-10 Days",
    groupSize: "Private Family Trip",
    location: "Kathmandu, Pokhara, Chitwan & Beyond",
    region: "Nepal",
    style: "Family, Comfort, Culture + Nature",
    difficulty: "Easy",
    bestFor: "Families with children or multigenerational travel",
    about: "A balanced family-friendly itinerary with culture, soft adventure, scenic places, and comfortable pacing.",
    experienceList: [
      "Comfortable pacing for all ages",
      "Fun and interactive cultural activities",
      "Nature and wildlife moments",
      "Flexible family-friendly planning"
    ],
    includedList: [
      "Accommodation",
      "Transport support",
      "Family-friendly planning",
      "Selected experiences",
      "Trip coordination"
    ],
    goodToKnow: [
      "Can be tailored for kids or elders",
      "Easy activity level",
      "Flexible schedule recommended"
    ]
  },

  "digital-detox-village-retreat": {
    title: "Digital Detox Village Retreat",
    badge: "📵 Slow Living Escape",
    subtitle: "Disconnect from screens and reconnect with quiet, nature, and local life.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    price: "From $899",
    duration: "5-8 Days",
    groupSize: "Max 8 Guests",
    location: "Village Nepal",
    region: "Mid-Hills Nepal",
    style: "Wellness, Slow Travel, Village Life",
    difficulty: "Easy",
    bestFor: "Burnt-out professionals, solo travelers, slow travelers",
    about: "A peaceful reset in Nepal’s quieter landscapes where guests are invited to unplug, rest, and live more intentionally.",
    experienceList: [
      "Stay in peaceful village settings",
      "Unplug from screens and routine",
      "Enjoy mindful walks and simple living",
      "Reconnect with nature and self"
    ],
    includedList: [
      "Accommodation",
      "Meals",
      "Local host experiences",
      "Ground transport",
      "Retreat support"
    ],
    goodToKnow: [
      "Ideal for digital detox",
      "Simple village environment",
      "Works well as a solo escape"
    ]
  },

  "poon-hill": {
    title: "Poon Hill",
    badge: "🌄 Sunrise Trek",
    subtitle: "A classic short trek with one of Nepal’s most rewarding sunrise views.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    price: "From $699",
    duration: "3-5 Days",
    groupSize: "Max 8 Guests",
    location: "Ghorepani, Poon Hill",
    region: "Annapurna Region",
    style: "Trek, Scenic, Beginner-Friendly",
    difficulty: "Easy",
    bestFor: "Beginners and short holiday trekkers",
    about: "A perfect Himalayan trek for those wanting mountain beauty without a long expedition.",
    experienceList: [
      "Sunrise at Poon Hill",
      "Mountain views of Annapurna and Dhaulagiri",
      "Tea house stays",
      "Village and forest trail walking"
    ],
    includedList: [
      "Guide support",
      "Accommodation",
      "Transport",
      "Permit assistance",
      "Trip coordination"
    ],
    goodToKnow: [
      "Good first trek in Nepal",
      "Spring is especially beautiful",
      "Can be combined with Pokhara"
    ]
  },

  "annapurna-base-camp": {
    title: "Annapurna Base Camp",
    badge: "🏔️ Classic Trek",
    subtitle: "One of Nepal’s most iconic Himalayan trekking journeys.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
    price: "From $1,299",
    duration: "10-12 Days",
    groupSize: "Max 6 Guests",
    location: "Annapurna Sanctuary",
    region: "Annapurna",
    style: "Trek, Mountain, Nature",
    difficulty: "Moderate",
    bestFor: "Mountain lovers and active travelers",
    about: "A famous trek that brings together villages, forests, rivers, and a spectacular Himalayan amphitheater.",
    experienceList: [
      "Reach Annapurna Base Camp",
      "Walk through diverse landscapes",
      "Stay in tea houses",
      "Enjoy local mountain culture"
    ],
    includedList: [
      "Guide and porter support",
      "Accommodation",
      "Transport",
      "Permit support",
      "Trip coordination"
    ],
    goodToKnow: [
      "Moderate fitness required",
      "Best in spring and autumn",
      "Private departures available"
    ]
  },

  "mardi-base-camp": {
    title: "Mardi Base Camp",
    badge: "⛰️ Scenic Ridge Trek",
    subtitle: "A beautiful and less crowded trek with dramatic ridge-line mountain views.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: "From $1,099",
    duration: "7-9 Days",
    groupSize: "Max 6 Guests",
    location: "Mardi Himal Region",
    region: "Annapurna",
    style: "Trek, Scenic, Less Crowded",
    difficulty: "Moderate",
    bestFor: "Travelers seeking a quieter Himalayan trek",
    about: "Mardi Base Camp offers a rewarding mountain journey through forest, ridge, and spectacular close-up Himalayan scenery.",
    experienceList: [
      "Trek quieter trails in the Annapurna region",
      "Enjoy dramatic ridge walking",
      "See close-up mountain scenery",
      "Stay in simple mountain lodges"
    ],
    includedList: [
      "Guide support",
      "Accommodation",
      "Transport",
      "Permit assistance",
      "Trip planning"
    ],
    goodToKnow: [
      "Less crowded than ABC",
      "Moderate trek",
      "Great for photographers"
    ]
  },

  "abc-helicopter-return": {
    title: "ABC Trek with Helicopter Return",
    badge: "🚁 Premium Mountain Escape",
    subtitle: "Trek in and fly back for a more exclusive Annapurna Base Camp experience.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6f82f6f4",
    price: "From $2,699",
    duration: "6-8 Days",
    groupSize: "Private / Small Group",
    location: "Annapurna Base Camp",
    region: "Annapurna",
    style: "Premium Trek, Scenic, Luxury Adventure",
    difficulty: "Moderate",
    bestFor: "Travelers wanting shorter premium trekking",
    about: "A premium version of the ABC journey that combines trekking satisfaction with the comfort and thrill of a helicopter return.",
    experienceList: [
      "Trek into Annapurna Base Camp",
      "Return by helicopter with Himalayan aerial views",
      "Save time while keeping the adventure",
      "Ideal for premium travelers"
    ],
    includedList: [
      "Guide support",
      "Accommodation",
      "Ground transport",
      "Helicopter return",
      "Permit support"
    ],
    goodToKnow: [
      "Weather affects helicopter schedule",
      "Premium pricing",
      "Excellent for shorter holidays"
    ]
  },

  "langtang-valley": {
    title: "Langtang Valley Trek",
    badge: "🏞️ Mountain Valley Trek",
    subtitle: "A beautiful Himalayan trek close to Kathmandu with culture, peaks, and valley beauty.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    price: "From $1,199",
    duration: "8-10 Days",
    groupSize: "Max 6 Guests",
    location: "Langtang Region",
    region: "Langtang",
    style: "Trek, Culture, Nature",
    difficulty: "Moderate",
    bestFor: "Trekkers seeking a less commercial route",
    about: "Langtang combines mountain scenery, Tamang culture, and a beautiful alpine valley within reach of Kathmandu.",
    experienceList: [
      "Trek through scenic valley landscapes",
      "Explore mountain villages",
      "Experience local Tamang culture",
      "Enjoy alpine surroundings"
    ],
    includedList: [
      "Guide and porter support",
      "Accommodation",
      "Transport",
      "Permit support",
      "Trip coordination"
    ],
    goodToKnow: [
      "Accessible from Kathmandu",
      "Moderate trek",
      "Ideal for 1-2 week holidays"
    ]
  },

  "everest-view-trek": {
    title: "Everest View Trek",
    badge: "🏔️ Everest Experience",
    subtitle: "See the Everest region without committing to the full base camp trek.",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b",
    price: "From $1,599",
    duration: "7-9 Days",
    groupSize: "Max 6 Guests",
    location: "Khumbu Region",
    region: "Everest",
    style: "Trek, Scenic, Soft Himalayan Adventure",
    difficulty: "Moderate",
    bestFor: "Travelers wanting Everest without the full challenge",
    about: "A more accessible Everest-region journey that still offers mountain drama, Sherpa culture, and unforgettable views.",
    experienceList: [
      "Trek in the Everest region",
      "Enjoy iconic Himalayan viewpoints",
      "Experience Sherpa villages and culture",
      "Shorter than Everest Base Camp"
    ],
    includedList: [
      "Guide support",
      "Accommodation",
      "Flight/transport support",
      "Permit assistance",
      "Trip planning"
    ],
    goodToKnow: [
      "Mountain flights depend on weather",
      "Good alternative to full EBC",
      "Moderate activity level"
    ]
  },

  "everest-base-camp": {
    title: "Everest Base Camp",
    badge: "🏔️ Legendary Trek",
    subtitle: "The world-famous journey to the foot of Mount Everest.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: "From $2,099",
    duration: "12-16 Days",
    groupSize: "Max 6 Guests",
    location: "Everest Region",
    region: "Khumbu",
    style: "Expedition Trek, Iconic, Mountain Adventure",
    difficulty: "Challenging",
    bestFor: "Experienced or determined trekkers",
    about: "A bucket-list Himalayan adventure through Sherpa villages, high mountain landscapes, and one of the most iconic trekking routes on earth.",
    experienceList: [
      "Reach Everest Base Camp",
      "Visit Namche Bazaar and Tengboche",
      "Experience Sherpa hospitality",
      "See dramatic Himalayan scenery"
    ],
    includedList: [
      "Guide and porter support",
      "Accommodation",
      "Flight/transport assistance",
      "Permits",
      "Trip coordination"
    ],
    goodToKnow: [
      "Strong fitness required",
      "Altitude awareness is important",
      "Best in spring and autumn"
    ]
  },

  "annapurna-north-base-camp": {
    title: "Annapurna North Base Camp",
    badge: "🧭 Offbeat Base Camp",
    subtitle: "A raw, lesser-known Himalayan journey for adventurous trekkers.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: "From $1,599",
    duration: "10-13 Days",
    groupSize: "Small Group",
    location: "Annapurna North",
    region: "Annapurna",
    style: "Remote Trek, Raw Adventure, Offbeat",
    difficulty: "Challenging",
    bestFor: "Adventurous trekkers seeking less-traveled routes",
    about: "A more remote and less commercial base camp experience for travelers wanting something wilder and more unique.",
    experienceList: [
      "Explore a less-traveled Annapurna route",
      "Enjoy rugged landscapes",
      "Experience a more raw trekking environment",
      "Reach a unique Himalayan base camp"
    ],
    includedList: [
      "Guide and support crew",
      "Accommodation",
      "Transport",
      "Permit support",
      "Trip planning"
    ],
    goodToKnow: [
      "Less developed route",
      "Best for experienced trekkers",
      "Weather and logistics matter"
    ]
  },

  "khopra-danda": {
    title: "Khopra Danda Trek",
    badge: "🌄 Ridge Experience",
    subtitle: "A peaceful trekking route with stunning views and fewer crowds.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    price: "From $1,199",
    duration: "8-10 Days",
    groupSize: "Max 6 Guests",
    location: "Khopra Ridge",
    region: "Annapurna",
    style: "Trek, Quiet Trails, Scenic",
    difficulty: "Moderate",
    bestFor: "Travelers seeking offbeat beauty",
    about: "A hidden gem in the Annapurna region with ridge walks, peaceful tea houses, and breathtaking mountain panoramas.",
    experienceList: [
      "Trek scenic and quieter mountain trails",
      "Stay in community lodges",
      "Enjoy wide Himalayan views",
      "Experience authentic village hospitality"
    ],
    includedList: [
      "Guide support",
      "Accommodation",
      "Transport",
      "Permits",
      "Trip coordination"
    ],
    goodToKnow: [
      "Less crowded route",
      "Moderate fitness required",
      "Ideal for peaceful trekking"
    ]
  },

  "rara-lake": {
    title: "Rara Lake Expedition",
    badge: "🏞️ Remote Escape",
    subtitle: "A journey to Nepal’s most beautiful remote lake.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: "From $1,599",
    duration: "8-10 Days",
    groupSize: "Max 6 Guests",
    location: "Rara National Park",
    region: "Far West Nepal",
    style: "Remote, Nature, Scenic",
    difficulty: "Moderate",
    bestFor: "Offbeat explorers and nature lovers",
    about: "Rara is one of Nepal’s most peaceful and majestic destinations, perfect for travelers wanting beauty far from the crowds.",
    experienceList: [
      "Visit Nepal’s largest lake",
      "Experience remote wilderness",
      "Enjoy peaceful nature-based travel",
      "Explore an offbeat destination"
    ],
    includedList: [
      "Transport support",
      "Accommodation",
      "Permit help",
      "Local support",
      "Trip planning"
    ],
    goodToKnow: [
      "Travel can be weather-dependent",
      "Remote access adds adventure",
      "Great for quiet travelers"
    ]
  },

  "mustang-jeep": {
    title: "Upper Mustang Jeep Journey",
    badge: "🚙 Hidden Kingdom",
    subtitle: "Explore the ancient landscapes and Tibetan culture of Upper Mustang.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    price: "From $1,899",
    duration: "7-10 Days",
    groupSize: "Max 6 Guests",
    location: "Upper Mustang",
    region: "Mustang",
    style: "Road Journey, Culture, Scenic Adventure",
    difficulty: "Easy",
    bestFor: "Culture explorers and soft adventure travelers",
    about: "An unforgettable road journey through one of Nepal’s most mysterious and culturally distinct landscapes.",
    experienceList: [
      "Visit Lo Manthang",
      "See caves and monasteries",
      "Experience Tibetan-influenced culture",
      "Travel dramatic Mustang landscapes"
    ],
    includedList: [
      "Jeep transport",
      "Accommodation",
      "Permit support",
      "Guide assistance",
      "Trip planning"
    ],
    goodToKnow: [
      "Restricted area permit required",
      "Ideal for non-trekkers",
      "Best in spring and autumn"
    ]
  },

  "base-camp-proposal-package": {
    title: "Base Camp Proposal Package",
    badge: "💎 Premium Romantic Adventure",
    subtitle: "A beautifully curated proposal journey designed around Nepal’s most iconic mountain settings.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    price: "From $2,899",
    duration: "Custom 8-14 Days",
    groupSize: "Private Couple Experience",
    location: "Annapurna / Everest Region",
    region: "Himalayas",
    style: "Romantic, Premium, Adventure",
    difficulty: "Moderate to Challenging",
    bestFor: "Couples wanting a professionally planned mountain proposal",
    about: "A premium package combining mountain adventure and romantic planning for a once-in-a-lifetime engagement in Nepal.",
    experienceList: [
      "Curated proposal planning",
      "Mountain setting at base camp level",
      "Optional floral, photography, and luxury add-ons",
      "Private custom itinerary"
    ],
    includedList: [
      "Trip planning",
      "Proposal setup support",
      "Guide coordination",
      "Accommodation",
      "Custom add-on options"
    ],
    goodToKnow: [
      "Fully custom quote possible",
      "Best planned in advance",
      "Works as a flagship premium product"
    ]
  },

  "white-water-rafting": {
    title: "White Water Rafting",
    badge: "🌊 River Adventure",
    subtitle: "Feel the rush of Nepal’s wild rivers with a fun and unforgettable rafting journey.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "From $299",
    duration: "1-3 Days",
    groupSize: "Small Group / Private",
    location: "Trishuli / Bhote Koshi / Seti",
    region: "Nepal Rivers",
    style: "Adventure, Water Sport, Fun",
    difficulty: "Easy to Moderate",
    bestFor: "Adventure travelers and friend groups",
    about: "A great add-on or standalone activity for travelers who want thrilling river adventure in Nepal.",
    experienceList: [
      "Raft exciting river rapids",
      "Enjoy scenic river landscapes",
      "Choose from beginner or stronger sections",
      "Optional overnight camp packages"
    ],
    includedList: [
      "Rafting guide support",
      "Safety equipment",
      "Transport support",
      "Activity coordination",
      "Optional meals"
    ],
    goodToKnow: [
      "Season matters for river level",
      "Suitable options for different comfort levels",
      "Can combine with Pokhara or Kathmandu route"
    ]
  },

  "paragliding-pokhara": {
    title: "Paragliding in Pokhara",
    badge: "🪂 Sky Adventure",
    subtitle: "Fly above Pokhara with breathtaking lake and mountain views.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "From $149",
    duration: "Half Day",
    groupSize: "Private / Small Group",
    location: "Pokhara",
    region: "Pokhara",
    style: "Adventure, Scenic, Signature Activity",
    difficulty: "Easy",
    bestFor: "Adventure lovers and short-stay travelers",
    about: "One of Pokhara’s most iconic experiences, perfect for travelers wanting soft adventure with dramatic scenery.",
    experienceList: [
      "Tandem paragliding over Pokhara",
      "Views of Phewa Lake and mountains",
      "A thrilling but accessible activity",
      "Great photo and video memories"
    ],
    includedList: [
      "Flight arrangement",
      "Pilot support",
      "Transport support",
      "Safety gear",
      "Activity coordination"
    ],
    goodToKnow: [
      "Weather-dependent",
      "Tandem option ideal for beginners",
      "Easy to combine with city stay"
    ]
  },

  "biking-trails-nepal": {
    title: "Biking Trails Nepal",
    badge: "🚴 Trail Experience",
    subtitle: "Ride through scenic trails, villages, and landscapes across Nepal.",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8",
    price: "From $499",
    duration: "2-6 Days",
    groupSize: "Small Group / Private",
    location: "Various Regions",
    region: "Nepal",
    style: "Adventure, Cycling, Scenic",
    difficulty: "Moderate",
    bestFor: "Active travelers and trail riders",
    about: "A cycling journey through scenic routes, local villages, forest sections, and offbeat terrain.",
    experienceList: [
      "Ride beautiful Nepal trails",
      "Explore local settlements and landscapes",
      "Choose soft or more active routes",
      "Combine cycling with cultural stays"
    ],
    includedList: [
      "Bike arrangement support",
      "Guide assistance",
      "Accommodation",
      "Transport backup",
      "Trip planning"
    ],
    goodToKnow: [
      "Different route options available",
      "Can be customized by activity level",
      "Best in dry seasons"
    ]
  },

  "motorbike-himalayan-ride": {
    title: "Motorbike Himalayan Ride",
    badge: "🏍️ Road Adventure",
    subtitle: "A thrilling motorcycle journey through Nepal’s roads, valleys, and mountain routes.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    price: "From $1,299",
    duration: "5-10 Days",
    groupSize: "Small Group / Private",
    location: "Mustang, Pokhara, Mid-Hills & Beyond",
    region: "Nepal",
    style: "Adventure, Road Trip, Scenic Ride",
    difficulty: "Moderate",
    bestFor: "Riders and adventure travelers",
    about: "A powerful way to experience Nepal with freedom, adrenaline, and deep scenic immersion.",
    experienceList: [
      "Ride scenic mountain roads",
      "Explore villages and dramatic landscapes",
      "Enjoy a strong freedom-of-travel feeling",
      "Option for premium or rugged routes"
    ],
    includedList: [
      "Bike support",
      "Route planning",
      "Accommodation",
      "Support vehicle optional",
      "Trip coordination"
    ],
    goodToKnow: [
      "License requirements apply",
      "Best in suitable road seasons",
      "Can be premium branded strongly"
    ]
  },

  "zipline-pokhara": {
    title: "Zipline Pokhara",
    badge: "⚡ Quick Thrill",
    subtitle: "Experience one of Nepal’s most exciting short adventure activities.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
    price: "From $99",
    duration: "Half Day",
    groupSize: "Flexible",
    location: "Pokhara",
    region: "Pokhara",
    style: "Adventure, Quick Activity, Thrill",
    difficulty: "Easy",
    bestFor: "Adventure seekers and short-stay travelers",
    about: "A fun and fast adventure in Pokhara, ideal as an activity add-on.",
    experienceList: [
      "Enjoy a thrilling zipline ride",
      "Experience scenic views",
      "Add excitement to your Pokhara trip",
      "Combine with paragliding or boating"
    ],
    includedList: [
      "Activity arrangement",
      "Safety support",
      "Transport guidance",
      "Coordination",
      "Optional combo support"
    ],
    goodToKnow: [
      "Weather dependent",
      "Great short activity",
      "Easy to combine with other adventures"
    ]
  },

  "bungee-adventure": {
    title: "Bungee Adventure",
    badge: "🔥 Extreme Adventure",
    subtitle: "Take the leap with one of Nepal’s boldest outdoor experiences.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "From $129",
    duration: "1 Day",
    groupSize: "Flexible",
    location: "Bhote Koshi / Adventure Sites",
    region: "Nepal",
    style: "Extreme Adventure, Fun, Thrill",
    difficulty: "Easy",
    bestFor: "Adrenaline seekers",
    about: "Perfect for travelers who want a high-thrill story to remember from Nepal.",
    experienceList: [
      "Enjoy a bungee jump adventure",
      "Take on one of Nepal’s boldest activities",
      "Capture unforgettable thrill moments",
      "Can be paired with rafting"
    ],
    includedList: [
      "Activity arrangement",
      "Safety support",
      "Coordination",
      "Transport guidance",
      "Optional combo support"
    ],
    goodToKnow: [
      "Physical restrictions may apply",
      "Advance booking recommended",
      "Check weather and operating schedules"
    ]
  },

  "jungle-safari": {
    title: "Jungle Safari",
    badge: "🐘 Wildlife Adventure",
    subtitle: "Explore Nepal’s jungle landscapes and search for wildlife in a soft adventure setting.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    price: "From $499",
    duration: "2-4 Days",
    groupSize: "Flexible",
    location: "Chitwan / Bardia",
    region: "Terai Nepal",
    style: "Wildlife, Nature, Soft Adventure",
    difficulty: "Easy",
    bestFor: "Nature lovers, couples, families",
    about: "A safari experience filled with wildlife, nature walks, cultural moments, and relaxing jungle stays.",
    experienceList: [
      "Go on jungle safaris",
      "Look for rhinos, deer, birds, and more",
      "Enjoy canoe rides and nature walks",
      "Stay close to the national park"
    ],
    includedList: [
      "Accommodation",
      "Safari activities",
      "Park-related support",
      "Selected meals",
      "Transport assistance"
    ],
    goodToKnow: [
      "Wildlife sighting can never be guaranteed",
      "Great for families and soft adventure travelers",
      "Best season varies"
    ]
  },

  "kayaking": {
    title: "Kayaking in Nepal",
    badge: "🚣 Water Exploration",
    subtitle: "A fun and active water experience on Nepal’s scenic rivers and lakes.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    price: "From $199",
    duration: "1-2 Days",
    groupSize: "Small Group / Private",
    location: "Pokhara / River Routes",
    region: "Nepal",
    style: "Water Sport, Adventure, Active",
    difficulty: "Easy to Moderate",
    bestFor: "Active travelers and adventure lovers",
    about: "A refreshing outdoor activity for travelers wanting a more personal and active river or lake experience.",
    experienceList: [
      "Kayak in scenic settings",
      "Learn or improve paddling skills",
      "Enjoy active outdoor fun",
      "Combine with rafting or Pokhara stay"
    ],
    includedList: [
      "Kayak support",
      "Safety equipment",
      "Guide assistance",
      "Activity coordination",
      "Optional transport support"
    ],
    goodToKnow: [
      "Beginner options possible",
      "Weather and water level matter",
      "Best as part of an adventure trip"
    ]
  },

  "canyoning": {
    title: "Canyoning Adventure",
    badge: "💧 Outdoor Challenge",
    subtitle: "Descend waterfalls and rock faces in one of Nepal’s most exciting outdoor activities.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    price: "From $189",
    duration: "1 Day",
    groupSize: "Small Group",
    location: "Adventure Sites Near Kathmandu / Pokhara",
    region: "Nepal",
    style: "Adventure, Outdoor, Active Thrill",
    difficulty: "Moderate",
    bestFor: "Adventure travelers wanting something different",
    about: "A dynamic outdoor adventure with climbing, descending, splashing, and excitement in natural canyon settings.",
    experienceList: [
      "Descend waterfalls with safety support",
      "Enjoy a physically active day",
      "Experience a less common Nepal adventure",
      "Great for energetic travelers"
    ],
    includedList: [
      "Equipment",
      "Guide support",
      "Safety briefing",
      "Activity coordination",
      "Optional transport support"
    ],
    goodToKnow: [
      "Basic fitness required",
      "Weather matters",
      "Great adventure add-on"
    ]
  },

  "pokhara-experience": {
    title: "Pokhara Experience",
    badge: "🌊 Lakeside Escape",
    subtitle: "Relax, explore, and enjoy Nepal’s most loved city of lakes and mountains.",
    image: "https://images.unsplash.com/photo-1599661048171-13b1c58374a4",
    price: "From $599",
    duration: "3-5 Days",
    groupSize: "Flexible",
    location: "Pokhara",
    region: "Pokhara",
    style: "Relaxation, Scenic, Soft Adventure",
    difficulty: "Easy",
    bestFor: "Couples, friends, short-stay travelers",
    about: "A balanced trip with lakeside calm, mountain views, and optional adventure.",
    experienceList: [
      "Boating on Phewa Lake",
      "Sunrise at Sarangkot",
      "Adventure add-ons available",
      "Relaxed lakeside atmosphere"
    ],
    includedList: [
      "Accommodation",
      "Transfer support",
      "Optional activity planning",
      "Local assistance",
      "Trip coordination"
    ],
    goodToKnow: [
      "Works well as a standalone trip",
      "Great with adventure combos",
      "Easy and flexible"
    ]
  },

  "bandipur-escape": {
    title: "Bandipur Escape",
    badge: "🏘️ Heritage Escape",
    subtitle: "A charming hill town getaway with culture, old architecture, and slow mountain town rhythm.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "From $499",
    duration: "2-3 Days",
    groupSize: "Flexible",
    location: "Bandipur",
    region: "Hill Town Nepal",
    style: "Culture, Relaxation, Heritage",
    difficulty: "Easy",
    bestFor: "Couples, slow travelers, culture lovers",
    about: "A gentle heritage-town experience filled with quiet lanes, beautiful views, and local charm.",
    experienceList: [
      "Walk Bandipur’s heritage streets",
      "Enjoy peaceful hill-town atmosphere",
      "Experience culture and architecture",
      "Relax with scenic views"
    ],
    includedList: [
      "Accommodation",
      "Transport support",
      "Local planning",
      "Selected experiences",
      "Trip coordination"
    ],
    goodToKnow: [
      "Best for slower travel",
      "Beautiful add-on between Kathmandu and Pokhara",
      "Very photogenic destination"
    ]
  },

  "kathmandu-heritage-tour": {
    title: "Kathmandu Heritage Tour",
    badge: "🛕 Cultural Discovery",
    subtitle: "Explore temples, courtyards, living history, and local stories in the Kathmandu Valley.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    price: "From $399",
    duration: "2-4 Days",
    groupSize: "Flexible",
    location: "Kathmandu Valley",
    region: "Kathmandu",
    style: "Culture, Heritage, City Exploration",
    difficulty: "Easy",
    bestFor: "First-time Nepal visitors and culture lovers",
    about: "A rich city experience that brings together history, architecture, spirituality, and local life.",
    experienceList: [
      "Visit major heritage sites",
      "Explore courtyards and old city streets",
      "Understand local history and traditions",
      "Optional food and artisan add-ons"
    ],
    includedList: [
      "Guide support",
      "City transport support",
      "Heritage planning",
      "Trip coordination",
      "Customization options"
    ],
    goodToKnow: [
      "Ideal start to a Nepal trip",
      "Can combine with Bhaktapur or Patan",
      "Easy pace"
    ]
  },

  "lumbini-spiritual-journey": {
    title: "Lumbini Spiritual Journey",
    badge: "🕊️ Sacred Experience",
    subtitle: "Visit the birthplace of Buddha and experience Nepal’s peaceful spiritual side.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    price: "From $699",
    duration: "3-5 Days",
    groupSize: "Flexible",
    location: "Lumbini",
    region: "Terai Nepal",
    style: "Spiritual, Peaceful, Cultural",
    difficulty: "Easy",
    bestFor: "Spiritual travelers and slow travelers",
    about: "A calm and reflective journey to one of the world’s most important spiritual destinations.",
    experienceList: [
      "Visit the birthplace of Buddha",
      "Explore monasteries and sacred gardens",
      "Enjoy peaceful reflection spaces",
      "Learn spiritual and historical context"
    ],
    includedList: [
      "Accommodation",
      "Transport support",
      "Planning assistance",
      "Selected local experiences",
      "Trip coordination"
    ],
    goodToKnow: [
      "Works well with a wellness itinerary",
      "Best for peaceful travel",
      "Can combine with Chitwan"
    ]
  },

  "chitwan-jungle-experience": {
    title: "Chitwan Jungle Experience",
    badge: "🌿 Wildlife Escape",
    subtitle: "A comfortable wildlife and culture journey in Chitwan.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    price: "From $599",
    duration: "2-4 Days",
    groupSize: "Flexible",
    location: "Chitwan",
    region: "Terai Nepal",
    style: "Wildlife, Nature, Soft Adventure",
    difficulty: "Easy",
    bestFor: "Families, couples, nature lovers",
    about: "An easy and enjoyable escape to Chitwan for safari, local culture, and nature-based relaxation.",
    experienceList: [
      "Jungle safari activities",
      "Nature and wildlife exploration",
      "Relaxed lodge experience",
      "Local cultural programs"
    ],
    includedList: [
      "Accommodation",
      "Safari arrangement",
      "Selected meals",
      "Park support",
      "Trip coordination"
    ],
    goodToKnow: [
      "Comfortable and family-friendly",
      "Can combine with Pokhara or Kathmandu",
      "Wildlife sighting varies naturally"
    ]
  },

  "nagarkot-sunrise-retreat": {
    title: "Nagarkot Sunrise Retreat",
    badge: "🌅 Short Escape",
    subtitle: "A peaceful short getaway for sunrise, views, and relaxation near Kathmandu.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "From $349",
    duration: "1-2 Days",
    groupSize: "Flexible",
    location: "Nagarkot",
    region: "Near Kathmandu",
    style: "Relaxation, Scenic, Short Escape",
    difficulty: "Easy",
    bestFor: "Weekend travelers and short-stay guests",
    about: "A simple but beautiful mountain-view retreat near Kathmandu, perfect for quick rest and sunrise moments.",
    experienceList: [
      "Watch sunrise over the Himalayas",
      "Relax in a peaceful hill setting",
      "Enjoy fresh air and scenic walks",
      "Ideal short reset near Kathmandu"
    ],
    includedList: [
      "Accommodation",
      "Transport support",
      "Local planning",
      "Optional wellness add-ons",
      "Trip coordination"
    ],
    goodToKnow: [
      "Perfect for weekend escape",
      "Easy access from Kathmandu",
      "Weather affects mountain visibility"
    ]
  },

  "bandipur-cultural-escape": {
    title: "Bandipur Cultural Escape",
    badge: "🏛️ Curated Heritage Stay",
    subtitle: "A deeper and more cultural version of Bandipur with storytelling, local life, and heritage charm.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    price: "From $599",
    duration: "2-4 Days",
    groupSize: "Flexible",
    location: "Bandipur",
    region: "Hill Town Nepal",
    style: "Cultural, Heritage, Slow Travel",
    difficulty: "Easy",
    bestFor: "Culture seekers and premium slow travelers",
    about: "A refined cultural getaway that explores Bandipur not just as a pretty town, but as a lived heritage experience.",
    experienceList: [
      "Experience Bandipur beyond sightseeing",
      "Engage with local culture and atmosphere",
      "Enjoy a quieter premium hill escape",
      "Perfect for storytelling travel"
    ],
    includedList: [
      "Accommodation",
      "Local planning",
      "Curated cultural touches",
      "Transport support",
      "Trip coordination"
    ],
    goodToKnow: [
      "Premium branding potential",
      "Ideal for couples and slow travelers",
      "Great short cultural add-on"
    ]
  },

  "chitwan-jungle-safari": {
    title: "Chitwan Jungle Safari",
    badge: "🐅 Signature Safari",
    subtitle: "A stronger wildlife-focused Chitwan experience with safari energy and nature immersion.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    price: "From $699",
    duration: "3-4 Days",
    groupSize: "Flexible",
    location: "Chitwan",
    region: "Terai Nepal",
    style: "Wildlife, Adventure, Nature",
    difficulty: "Easy",
    bestFor: "Wildlife lovers and families",
    about: "A more safari-forward Chitwan product for guests who want the wildlife side of Nepal as a core highlight.",
    experienceList: [
      "Jungle safari experience",
      "Nature exploration and wildlife search",
      "Comfortable park-area stay",
      "Soft adventure with real excitement"
    ],
    includedList: [
      "Accommodation",
      "Safari arrangement",
      "Selected meals",
      "Park support",
      "Trip coordination"
    ],
    goodToKnow: [
      "Wildlife is natural and unpredictable",
      "Ideal for nature itineraries",
      "Family and couple friendly"
    ]
  },

  "everest-view-experience": {
    title: "Everest View Experience",
    badge: "🏔️ Easy Everest Escape",
    subtitle: "A lighter Everest-region product for travelers wanting Himalayan grandeur without a demanding trek.",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b",
    price: "From $1,799",
    duration: "4-7 Days",
    groupSize: "Flexible",
    location: "Everest Region",
    region: "Khumbu",
    style: "Scenic, Premium, Soft Mountain Journey",
    difficulty: "Easy to Moderate",
    bestFor: "Short-stay premium travelers",
    about: "A softer Everest-region experience designed for travelers who want iconic views and atmosphere without a long expedition.",
    experienceList: [
      "Enjoy Everest region scenery",
      "Stay in beautiful mountain settings",
      "Experience Sherpa region atmosphere",
      "Ideal for shorter premium itineraries"
    ],
    includedList: [
      "Planning support",
      "Accommodation",
      "Transport / flight support",
      "Local assistance",
      "Trip coordination"
    ],
    goodToKnow: [
      "Great premium product",
      "Weather affects flights and views",
      "Excellent alternative to long trekking"
    ]
  }
};
