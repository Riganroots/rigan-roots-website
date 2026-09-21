const defaultIncludes = [
  "Trip planning support",
  "Local coordination",
  "Guide or host support where required",
  "Basic itinerary assistance"
];

const defaultExcludes = [
  "International flights",
  "Travel insurance",
  "Personal expenses",
  "Extra meals, drinks, and tips"
];

const defaultPacking = [
  "Comfortable clothes",
  "Walking shoes",
  "Water bottle",
  "Camera or phone",
  "Light jacket"
];

function exp(data){
  return {
    groupSize: data.groupSize || "2–10 Guests",
    difficulty: data.difficulty || "Easy",
    season: data.season || "All Year",
    includes: data.includes || defaultIncludes,
    excludes: data.excludes || defaultExcludes,
    packing: data.packing || defaultPacking,
    goodToKnow: data.goodToKnow || [
      "Final price depends on season, route, hotel level, and group size",
      "Private customization is available",
      "Itinerary can be adjusted based on your travel style"
    ],
    gallery: data.gallery || [data.image],
    ...data
  };
}

window.experienceDataV2 = {

  signature: {
    title: "Signature Experiences ⭐",
    items: [
      exp({
        id: "live-like-a-nepali",
        name: "Live Like a Nepali",
        subtitle: "Stay with locals, eat home-cooked food, and experience everyday Nepal.",
        overview: "A deeply immersive cultural stay where you do not just visit Nepal — you live it.",
        duration: "7 Days",
        price: "From US$650",
        location: "Nepal",
        style: "Cultural Immersion & Village Life",
        image: "/assets/images/signature/live-like-a-nepali.jpg",
        badge: "Top Seller"
      }),
      exp({
        id: "women-guided-trek",
        name: "Women Guided Trek",
        subtitle: "Trek Nepal with experienced female guides and women-led community support.",
        overview: "A safe, empowering, and meaningful trekking experience led by female guides.",
        duration: "5–12 Days",
        price: "From US$720",
        location: "Annapurna / Langtang / Custom Route",
        style: "Women-Led Trekking Experience",
        difficulty: "Easy to Moderate",
        season: "Spring and Autumn",
        image: "/assets/images/regions/pokhara.jpg",
        badge: "Women Led"
      }),
      exp({
        id: "hidden-nepal-expedition",
        name: "Hidden Nepal Expedition",
        subtitle: "Explore remote lakes, villages, trails, and stories beyond guidebooks.",
        overview: "A signature Rigan journey for travelers who want Nepal beyond the common tourist route.",
        duration: "10–14 Days",
        price: "From US$1450",
        location: "Hidden Regions of Nepal",
        style: "Offbeat Cultural & Nature Expedition",
        difficulty: "Moderate",
        image: "/assets/images/regions/rara-lake.jpg",
        badge: "Hidden Nepal"
      }),
      exp({
        id: "rigan-signature-nepal",
        name: "Rigan Signature Nepal",
        subtitle: "The complete Rigan journey: culture, food, village life, mountains, and wellness.",
        overview: "This flagship experience combines Kathmandu heritage, local food, family stay, soft adventure, mountain views, and cultural connection.",
        duration: "12 Days",
        price: "From US$1250",
        location: "Kathmandu, Village Region, Pokhara / Mountains",
        style: "Complete Nepal Signature Journey",
        difficulty: "Easy to Moderate",
        image: "/assets/images/culture/cultural-journey.jpg",
        badge: "Rigan Special"
      }),
      exp({
        id: "breakfast-at-everest-basecamp",
        name: "Breakfast at Everest Base Camp",
        subtitle: "A premium helicopter journey into the Everest region with breakfast near the Himalayas.",
        overview: "A luxury one-day Himalayan experience for travelers who want Everest without a long trek.",
        duration: "1 Day",
        price: "From US$1350",
        location: "Everest Region",
        style: "Luxury Helicopter Experience",
        difficulty: "Easy",
        season: "March–May and September–November",
        image: "/assets/images/treks/everest-view-trek.jpg",
        badge: "Luxury"
      }),
exp({
  id: "bird-watching-nepal",
  name: "Bird Watching Nepal",
  subtitle: "Discover Nepal's remarkable birdlife with local naturalist guidance in forests, wetlands, and foothills.",
  overview: "A flexible birding journey focused on ethical wildlife viewing, local habitats, and seasonal birdlife across selected Nepal birding areas.",
  duration: "2–5 Days",
  location: "Kathmandu Valley / Chitwan / Selected Birding Areas",
  style: "Birding, Nature & Conservation",
  groupSize: "1–8 Guests",
  difficulty: "Easy",
  season: "October–April",
  image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80",
  badge: "Nature Signature"
})
    ]
  },

  village: {
    title: "Village Life 🏡",
    items: [
      exp({
        id: "farm-and-harvest-experience",
        name: "Farm & Harvest Experience",
        subtitle: "Join local farmers and experience Nepal’s seasonal village rhythm.",
        overview: "A hands-on village experience where travelers join local farmers in planting, harvesting, cooking, and sharing seasonal meals.",
        duration: "2 Days",
        price: "From US$160",
        location: "Rural Nepal",
        style: "Farming & Village Life",
        image: "/assets/images/experiences/nepali-farmers.jfif"
      }),
      exp({
        id: "rice-planting-experience",
        name: "Rice Planting Experience",
        subtitle: "Mud, music, food, laughter, and Nepal’s joyful rice planting tradition.",
        overview: "A seasonal monsoon experience where travelers join farmers in the rice fields.",
        duration: "1 Day",
        price: "From US$95",
        location: "Kathmandu Valley / Rural Nepal",
        style: "Seasonal Farming Festival",
        season: "June–July",
        image: "/assets/images/experiences/nepali-farmers.jfif"
      }),
      exp({
        id: "mountain-farming-experience",
        name: "Mountain Farming Experience",
        subtitle: "Experience everyday farming life in Himalayan villages.",
        overview: "A peaceful village experience with mountain farming, local crops, and family meals.",
        duration: "2 Days",
        price: "From US$180",
        location: "Mid-Hill Nepal",
        style: "Mountain Village Farming",
        image: "/assets/images/experiences/himalayan-village.jpg"
      }),
      exp({
        id: "village-immersion",
        name: "Village Immersion",
        subtitle: "Slow down and connect with Nepal through village life.",
        overview: "Experience farming, local meals, community stories, and authentic village culture.",
        duration: "5 Days",
        price: "From US$520",
        location: "Rural Nepal",
        style: "Community Life & Cultural Stay",
        image: "/assets/images/experiences/himalayan-village.jpg"
      })
    ]
  },

  trek: {
    title: "Mountains & Treks 🏔️",
    items: [
      exp({
        id: "everest-base-camp-trek",
        name: "Everest Base Camp Trek",
        subtitle: "Walk through Sherpa villages, Sagarmatha National Park, and reach Everest Base Camp.",
        overview: "Nepal’s most iconic Himalayan journey through Namche, Tengboche, Dingboche, Lobuche, Gorak Shep, Everest Base Camp, and Kala Patthar.",
        duration: "14 Days",
        price: "Start from US$1500",
        location: "Everest Region, Nepal",
        style: "Tea House Trekking Adventure",
        groupSize: "2–12 Guests",
        difficulty: "Moderate to Challenging",
        season: "March–May and September–November",
        image: "/assets/images/treks/everest-base-camp.jpg",
        badge: "Most Popular Trek"
      }),
      exp({
        id: "annapurna-base-camp-trek",
        name: "Annapurna Base Camp Trek",
        subtitle: "Classic Himalayan trek to the heart of the Annapurna Sanctuary.",
        overview: "A breathtaking journey through villages, forests, rivers, and mountain landscapes leading to Annapurna Base Camp.",
        duration: "12 Days",
        price: "From US$900",
        location: "Annapurna Region",
        style: "Trekking & Mountain Adventure",
        groupSize: "2–10 Guests",
        difficulty: "Moderate",
        season: "March–May and September–November",
        image: "/assets/images/treks/annapurna-base-camp.jpg",
        badge: "Popular Trek"
      }),
      exp({
        id: "poon-hill-trek",
        name: "Poon Hill Sunrise Trek",
        subtitle: "A short Himalayan journey crowned by an unforgettable Annapurna sunrise.",
        overview: "Walk through Gurung villages and rhododendron forests before watching first light sweep across Dhaulagiri and the Annapurna range from Poon Hill.",
        duration: "5 Days",
        price: "From US$450",
        location: "Annapurna Region",
        style: "Short Scenic Trek",
        groupSize: "2–12 Guests",
        difficulty: "Easy to Moderate",
        season: "March–May and September–November",
        image: "/assets/images/treks/poon-hill.webp",
        badge: "Sunrise Favourite"
      }),
      exp({
        id: "langtang-valley-trek",
        name: "Langtang Valley Trek",
        subtitle: "A beautiful Himalayan trek close to Kathmandu with Tamang culture and mountain views.",
        overview: "Langtang Valley combines mountain landscapes, forests, rivers, yak pastures, monasteries, and Tamang culture.",
        duration: "10 Days",
        price: "From US$750",
        location: "Langtang Region",
        style: "Trekking, Culture & Nature",
        groupSize: "2–10 Guests",
        difficulty: "Moderate",
        season: "March–May and September–November",
        image: "/assets/images/treks/langtang-valley.jpg",
        badge: "Near Kathmandu"
      }),
      exp({
        id: "everest-three-passes-trek",
        name: "Everest Three Passes Trek",
        subtitle: "The ultimate Everest adventure crossing three legendary high passes.",
        overview: "A challenging Himalayan journey combining Everest Base Camp, Gokyo Lakes, and the three highest passes of the Everest region.",
        duration: "19 Days",
        price: "From US$1900",
        location: "Everest Region",
        style: "High Altitude Trekking",
        groupSize: "2–10 Guests",
        difficulty: "Advanced",
        season: "March–May & September–November",
        image: "/assets/images/regions/everest-region.jpg",
        badge: "Ultimate Everest"
      }),
      exp({
        id: "annapurna-circuit-trek",
        name: "Annapurna Circuit Trek",
        subtitle: "One of the world's greatest trekking routes.",
        overview: "Cross Thorong La Pass and experience Nepal's most diverse trekking circuit.",
        duration: "15 Days",
        price: "From US$1350",
        location: "Annapurna Region",
        style: "Classic Circuit Trek",
        groupSize: "2–12 Guests",
        difficulty: "Moderate",
        season: "March–May & September–November",
        image: "/assets/images/treks/annapurna-north-base-camp.jfif",
        badge: "Classic Trek"
      }),
      exp({
        id: "thorong-la-pass-trek",
        name: "Thorong La Pass Trek",
        subtitle: "Cross one of the world's highest trekking passes.",
        overview: "Experience dramatic landscapes and the iconic Thorong La Pass at 5,416m.",
        duration: "12 Days",
        price: "From US$1150",
        location: "Annapurna Region",
        style: "Pass Crossing Trek",
        groupSize: "2–10 Guests",
        difficulty: "Moderate to Challenging",
        season: "March–May & September–November",
        image: "/assets/images/treks/annapurna-north-base-camp.jfif",
        badge: "High Pass"
      }),
      exp({
        id: "mardi-himal-trek",
        name: "Mardi Himal Trek",
        subtitle: "A short Himalayan trek with incredible Annapurna views.",
        overview: "One of Nepal's best short treks featuring forests, ridgelines, and close-up mountain scenery.",
        duration: "5 Days",
        price: "From US$550",
        location: "Annapurna Region",
        style: "Short Trek",
        groupSize: "2–10 Guests",
        difficulty: "Easy to Moderate",
        season: "All Trekking Seasons",
        image: "/assets/images/treks/mardi-himal.jpg",
        badge: "Short Trek"
      }),
      exp({
        id: "tilicho-lake-trek",
        name: "Tilicho Lake Trek",
        subtitle: "Journey to one of the world's highest alpine lakes.",
        overview: "A spectacular trek through dramatic mountain scenery to the turquoise waters of Tilicho Lake.",
        duration: "12 Days",
        price: "From US$1100",
        location: "Annapurna Region",
        style: "Alpine Lake Trek",
        groupSize: "2–10 Guests",
        difficulty: "Moderate",
        season: "March–May & September–November",
        image: "/assets/images/treks/tilicho-lake.webp",
        gallery: [
          "/assets/images/treks/tilicho-lake.webp",
          "/assets/images/treks/tilicho-lake-traveler.webp"
        ],
        badge: "High Lake"
      }),
      exp({
        id: "shey-phoksundo-trek",
        name: "Shey Phoksundo Lake Trek",
        subtitle: "Walk into Dolpo for turquoise Phoksundo Lake, Ringmo village, waterfalls, and living Bon traditions.",
        overview: "A remote Himalayan journey through Shey Phoksundo National Park to the brilliant blue waters of Phoksundo Lake, designed for travellers who want Dolpo culture and wilderness without committing to a month-long expedition.",
        duration: "11–12 Days",
        price: "From US$1700",
        location: "Lower Dolpo, Nepal",
        style: "Remote Lake & Cultural Trek",
        groupSize: "2–8 Guests",
        difficulty: "Moderate",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Dolpo Gateway"
      }),
      exp({
        id: "lower-dolpo-trek",
        name: "Lower Dolpo Circuit Trek",
        subtitle: "Cross high passes between Dho Tarap and Phoksundo in one of western Nepal's great wilderness circuits.",
        overview: "A demanding camping-style circuit linking remote Dolpo settlements, Dho Tarap, high mountain passes and Phoksundo Lake, with time to experience Tibetan-influenced culture and Bon heritage.",
        duration: "17 Days",
        price: "Price on Request",
        location: "Lower Dolpo",
        style: "High-Pass Camping Trek",
        groupSize: "2–8 Guests",
        difficulty: "Challenging",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Remote Circuit"
      }),
      exp({
        id: "upper-dolpo-trek",
        name: "Upper Dolpo Expedition Trek",
        subtitle: "A long-form journey through Shey Gompa, Saldang, ancient settlements and the stark Trans-Himalayan landscape.",
        overview: "A fully remote expedition-style trek for experienced travellers, combining Phoksundo, high passes, centuries-old monasteries, Tibetan-influenced villages and the extraordinary cultural landscape of Upper Dolpo.",
        duration: "28–32 Days",
        price: "From US$3500",
        location: "Upper Dolpo",
        style: "Remote Camping Expedition",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Expedition"
      }),
      exp({
        id: "explore-dolpo-circuit",
        name: "Explore Dolpo Circuit",
        subtitle: "A complete Dolpo traverse linking Phoksundo, Shey Gompa, Saldang and Dho Tarap across multiple high passes.",
        overview: "Built for experienced trekkers who want more than a single destination, this expedition explores Dolpo's lake, monasteries, villages, dry Trans-Himalayan valleys and demanding high-pass terrain in one continuous journey.",
        duration: "25 Days",
        price: "Price on Request",
        location: "Dolpo Region",
        style: "Full Dolpo Expedition",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Complete Dolpo"
      }),
      exp({
        id: "dolpo-mustang-expedition",
        name: "Dolpo to Mustang Expedition",
        subtitle: "Cross Nepal's remote Trans-Himalayan west from Dolpo toward Mustang and the Kali Gandaki corridor.",
        overview: "A serious expedition route for seasoned trekkers, combining Dolpo's isolated valleys, high camps and sacred landscapes with a dramatic traverse toward Mustang and Jomsom.",
        duration: "24–28 Days",
        price: "Price on Request",
        location: "Dolpo to Mustang",
        style: "Trans-Himalayan Traverse",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/upper-mustang.jpg",
        badge: "Grand Traverse"
      }),
      exp({
        id: "dho-tarap-cultural-trek",
        name: "Dho Tarap Cultural Trek",
        subtitle: "Journey deep into the Tarap Valley for village life, monasteries, highland culture and remote mountain scenery.",
        overview: "A culture-forward Dolpo journey centred on Dho Tarap and surrounding settlements, combining trekking with meaningful time in one of Nepal's most distinctive high-altitude communities.",
        duration: "14–18 Days",
        price: "Price on Request",
        location: "Dho Tarap, Dolpo",
        style: "Culture & Remote Trekking",
        groupSize: "2–8 Guests",
        difficulty: "Challenging",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Living Dolpo"
      }),
      exp({
        id: "shey-gompa-crystal-mountain",
        name: "Shey Gompa & Crystal Mountain Trek",
        subtitle: "Reach sacred Shey Gompa and the Crystal Mountain landscape beyond Phoksundo.",
        overview: "A high-altitude Dolpo trek combining the iconic lake with remote camps, a major pass crossing and the spiritual heartland around Shey Gompa and Crystal Mountain.",
        duration: "18–22 Days",
        price: "Price on Request",
        location: "Upper Dolpo",
        style: "Sacred High-Altitude Trek",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Sacred Dolpo"
      })
    ]
  },

  food: {
    title: "Taste Nepal 🍲",
    sub: "Discover Nepal through food, kitchens, markets, family traditions, and regional flavors.",
    items: [
      exp({
        id: "kathmandu-food-walk",
        name: "Kathmandu Food Walk",
        subtitle: "Taste your way through hidden alleys, tea shops, local eateries, and street food gems.",
        overview: "Explore Kathmandu through food, local markets, tea shops, family-run eateries, and hidden food spots.",
        duration: "Half Day",
        price: "From US$65",
        location: "Kathmandu",
        style: "Street Food & Local Culture",
        image: "/assets/images/experiences/momo.jpg",
        badge: "Most Popular"
      }),
      exp({
        id: "newari-food-experience",
        name: "Newari Food Experience",
        subtitle: "Discover the rich flavors of Nepal’s oldest urban civilization.",
        overview: "Experience authentic Newari cuisine and learn about Newar culture.",
        duration: "1 Day",
        price: "From US$95",
        location: "Kathmandu Valley",
        style: "Traditional Newari Cuisine",
        image: "/assets/images/culture/cultural-journey.jpg",
        badge: "Cultural Favorite"
      }),
      exp({
        id: "tharu-food-culture",
        name: "Tharu Food & Culture",
        subtitle: "Taste the unique flavors and traditions of Nepal’s Terai region.",
        overview: "Enjoy traditional Tharu dishes, village life, cultural performances, and authentic hospitality.",
        duration: "2 Days",
        price: "From US$180",
        location: "Chitwan & Terai Region",
        style: "Food & Village Culture",
        image: "/assets/images/experiences/himalayan-village.jpg",
        badge: "Authentic"
      }),
      exp({
        id: "tamang-food-experience",
        name: "Tamang Food Experience",
        subtitle: "Mountain flavors, local brews, and warm Tamang hospitality.",
        overview: "Experience traditional Tamang food, local drinks, mountain village culture, and stories.",
        duration: "1 Day",
        price: "From US$110",
        location: "Kathmandu Hills",
        style: "Mountain Ethnic Cuisine",
        image: "/assets/images/experiences/himalayan-village.jpg",
        badge: "Hidden Gem"
      }),
      exp({
        id: "sherpa-kitchen-experience",
        name: "Sherpa Kitchen Experience",
        subtitle: "Taste Himalayan meals inspired by Everest region traditions.",
        overview: "Learn about Sherpa food culture, butter tea, mountain meals, and Himalayan lifestyle.",
        duration: "1 Day",
        price: "From US$120",
        location: "Everest Region / Kathmandu",
        style: "Himalayan Food Experience",
        image: "/assets/images/treks/everest-view-trek.jpg",
        badge: "Himalayan Favorite"
      })
    ]
  },

  culture: {
    title: "Culture & Heritage 🛕",
    sub: "Temples, courtyards, artisans, old towns, spirituality, and living traditions.",
    items: [
      exp({
        id: "kathmandu-heritage-tour",
        name: "Kathmandu Heritage Tour",
        subtitle: "Explore temples, courtyards, old alleys, and centuries of living history.",
        overview: "A cultural journey through Kathmandu’s heritage sites, temples, old markets, hidden courtyards, local food, and living traditions.",
        duration: "2 Days",
        price: "From US$220",
        location: "Kathmandu Valley",
        style: "Culture & Heritage",
        image: "/assets/images/regions/kathmandu-valley.jpg",
        badge: "Classic"
      }),
      exp({
        id: "bhaktapur-living-heritage",
        name: "Bhaktapur Living Heritage",
        subtitle: "Ancient streets, pottery squares, temples, artisans, and Newari culture.",
        overview: "Walk through Bhaktapur’s timeless streets and experience one of Nepal’s most beautiful heritage cities.",
        duration: "1 Day",
        price: "From US$120",
        location: "Bhaktapur",
        style: "Living Heritage",
        image: "/assets/images/culture/cultural-journey.jpg",
        badge: "Heritage Favorite"
      })
    ]
  },

  wellness: {
    title: "Wellness & Spirituality 🧘",
    items: [
      exp({
        id: "yoga-meditation-retreat",
        name: "Yoga & Meditation Retreat",
        subtitle: "Reset your body and mind in peaceful Himalayan surroundings.",
        overview: "A wellness retreat combining yoga, meditation, mindful movement, healthy food, and peaceful reflection.",
        duration: "5 Days",
        price: "From US$480",
        location: "Pokhara / Kathmandu Valley",
        style: "Yoga & Meditation",
        image: "/assets/images/wellness/wellness-retreat.jpg",
        badge: "Most Popular"
      })
    ]
  },

  festival: {
    title: "Festivals of Nepal 🎉",
    items: [
      exp({
        id: "dashain-experience",
        name: "Dashain Experience",
        subtitle: "Blessings, tika, bamboo swings, family food, and Nepal’s biggest festival.",
        overview: "Celebrate Dashain with local families and understand Nepal’s biggest family festival.",
        duration: "3 Days",
        price: "From US$280",
        location: "Kathmandu / Local Communities",
        style: "Festival Experience",
        image: "/assets/images/culture/festival-experience.jpg",
        badge: "Biggest Festival"
      })
    ]
  },

  adventure: {
    title: "Adventure Activities 🚁",
    items: [
      exp({
        id: "everest-helicopter-tour",
        name: "Everest Helicopter Tour",
        subtitle: "Fly into the Himalayas and enjoy breathtaking Everest views.",
        overview: "A luxury helicopter journey to the Everest region with spectacular mountain scenery.",
        duration: "1 Day",
        price: "From US$1350",
        location: "Everest Region",
        style: "Helicopter Adventure",
        image: "/assets/images/treks/everest-view-trek.jpg",
        badge: "Luxury"
      }),
      exp({
        id: "paragliding-pokhara",
        name: "Paragliding in Pokhara",
        subtitle: "Fly above Phewa Lake with Himalayan views.",
        overview: "One of Nepal’s most famous adventures with views of lakes, hills, and mountains.",
        duration: "Half Day",
        price: "From US$120",
        location: "Pokhara",
        style: "Air Adventure",
        image: "/assets/images/adventures/paragliding-pokhara-wide.jpg",
        badge: "Popular"
      }),
exp({
  id: "nepal-motorbike-adventure",
  name: "Nepal Motorbike Adventure",
  subtitle: "Ride Nepal's hill roads, valleys, villages, and Himalayan landscapes on a guided motorbike journey.",
  overview: "A flexible road adventure combining scenic riding, local stops, village culture, and changing Himalayan landscapes.",
  duration: "5–10 Days",
  location: "Kathmandu / Pokhara / Selected Himalayan Routes",
  style: "Guided Motorbike Touring",
  groupSize: "2–8 Riders",
  difficulty: "Moderate",
  season: "October–May",
  image: "/assets/images/adventures/motorbike-himalaya.jpg",
  badge: "Road Adventure"
}),
exp({
  id: "nepal-cycling-adventure",
  name: "Nepal Cycling Adventure",
  subtitle: "Cycle through valley trails, villages, forest roads, and scenic Himalayan foothills.",
  overview: "A customizable cycling journey for riders who want active travel, local encounters, and Nepal's varied landscapes.",
  duration: "1–7 Days",
  location: "Kathmandu Valley / Pokhara / Selected Trails",
  style: "Cycling & Mountain Biking",
  groupSize: "1–10 Guests",
  difficulty: "Easy to Challenging",
  season: "October–May",
  image: "/assets/images/adventures/biking-nepal.jpg",
  badge: "Active Adventure"
})
    ]
  }

};
