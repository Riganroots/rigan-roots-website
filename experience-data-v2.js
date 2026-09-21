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
        id: "manaslu-circuit-trek",
        name: "Manaslu Circuit Trek",
        subtitle: "A quieter Himalayan circuit of mountain villages, deep valleys and the dramatic Larkya La crossing.",
        overview: "A strong alternative for trekkers looking beyond the busiest classic routes, combining changing landscapes, village culture and a challenging high-pass journey around the Manaslu region.",
        duration: "14–18 Days",
        price: "Price on Request",
        location: "Manaslu Region",
        style: "Remote Circuit Trek",
        groupSize: "2–8 Guests",
        difficulty: "Challenging",
        season: "Spring & Autumn",
        image: "/assets/images/regions/tsum-valley.jpg",
        badge: "Remote Classic",
        goodToKnow: [
          "A high-altitude trek requiring good fitness and proper acclimatization.",
          "Restricted-area rules and licensed guide requirements are handled during trip planning.",
          "The itinerary can be adjusted for acclimatization, side trips and the group's walking pace."
        ]
      }),
      exp({
        id: "kanchenjunga-base-camp-trek",
        name: "Kanchenjunga Base Camp Trek",
        subtitle: "Explore Nepal's far east on a long, remote journey beneath the world's third-highest mountain.",
        overview: "For trekkers who value wilderness and fewer crowds, this journey combines remote settlements, forests, high valleys and spectacular Himalayan viewpoints in the Kanchenjunga region.",
        duration: "20–24 Days",
        price: "Price on Request",
        location: "Eastern Nepal",
        style: "Remote Base Camp Trek",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/panch-pokhari.webp",
        badge: "Far East Nepal"
      }),
      exp({
        id: "makalu-base-camp-trek",
        name: "Makalu Base Camp Trek",
        subtitle: "A demanding wilderness trek through changing ecosystems to the high Himalayan world beneath Makalu.",
        overview: "A less-travelled base-camp journey for experienced trekkers, moving from lower valleys and forests into rugged alpine terrain with a strong sense of remoteness.",
        duration: "18–22 Days",
        price: "Price on Request",
        location: "Makalu Region",
        style: "Wilderness Base Camp Trek",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/treks/annapurna-north-base-camp.jfif",
        badge: "Wilderness"
      }),
      exp({
        id: "nar-phu-valley-trek",
        name: "Nar Phu Valley Trek",
        subtitle: "Ancient highland villages, dramatic valleys and a quieter cultural journey near the Annapurna region.",
        overview: "A remote cultural trek for travellers who want traditional Himalayan settlements and high mountain landscapes while connecting naturally with the wider Annapurna trail network.",
        duration: "10–14 Days",
        price: "Price on Request",
        location: "Nar & Phu Valleys",
        style: "Hidden Valley Trek",
        groupSize: "2–8 Guests",
        difficulty: "Challenging",
        season: "Spring & Autumn",
        image: "/assets/images/regions/upper-mustang.jpg",
        badge: "Hidden Valley"
      }),
      exp({
        id: "lower-dolpo-phoksundo-trek",
        name: "Lower Dolpo & Shey Phoksundo Trek",
        subtitle: "One complete Dolpo journey combining turquoise Phoksundo Lake, Ringmo village, Dho Tarap, remote settlements and dramatic high-pass landscapes.",
        overview: "A more complete choice for travellers who want both the iconic beauty of Phoksundo Lake and a deeper experience of Lower Dolpo. The journey combines nature, village culture, Bon and Tibetan-influenced heritage, remote trails and high-altitude scenery instead of splitting the region into two similar trips.",
        duration: "15–18 Days",
        price: "Price on Request",
        location: "Lower Dolpo & Shey Phoksundo, Nepal",
        style: "Remote Trekking, Culture & High Passes",
        groupSize: "2–8 Guests",
        difficulty: "Challenging",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Best of Lower Dolpo",
        goodToKnow: [
          "This is a remote high-altitude journey and requires good fitness and acclimatization.",
          "The final route and number of days can be adjusted to your pace, flight schedule and preferred cultural stops.",
          "Restricted-area permits and licensed local support may be required depending on the final itinerary.",
          "Weather can affect mountain flights and trail conditions, so keeping contingency time is recommended."
        ],
        packing: [
          "Broken-in trekking boots",
          "Warm layered clothing and insulated jacket",
          "Rain and wind protection",
          "Sun protection, reusable water bottle and personal medication",
          "Trekking poles and a comfortable daypack"
        ]
      }),
      exp({
        id: "upper-dolpo-expedition",
        name: "Upper Dolpo Complete Expedition",
        subtitle: "The complete Dolpo journey: Phoksundo Lake, Shey Gompa, Crystal Mountain, Saldang, Dho Tarap, ancient monasteries and remote Himalayan villages.",
        overview: "Our flagship Dolpo expedition combines the strongest parts of the previous Upper Dolpo, Explore Dolpo, Dho Tarap and Shey Gompa journeys into one easier-to-understand experience. It is designed for experienced trekkers who want deep cultural encounters, dramatic high-pass landscapes and enough time to experience Dolpo rather than simply pass through it.",
        duration: "25–30 Days",
        price: "Price on Request",
        location: "Upper & Lower Dolpo, Nepal",
        style: "Remote Cultural & Camping Expedition",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/shey-phoksundo.jpg",
        badge: "Complete Dolpo",
        goodToKnow: [
          "Best suited to experienced trekkers comfortable with long days, high altitude and basic facilities.",
          "The final itinerary is customized around acclimatization, local conditions, flights and the traveller's pace.",
          "Dolpo includes restricted trekking areas; required permits and licensed local support are arranged according to the final route.",
          "Remote mountain flights and weather can change schedules, so contingency days are strongly recommended.",
          "Accommodation may combine simple local lodges, homestay-style stays where appropriate and expedition camping."
        ],
        packing: [
          "Well broken-in trekking boots",
          "Four-season sleeping bag suitable for cold high-altitude nights",
          "Insulated jacket and layered trekking clothing",
          "Waterproof and windproof outer layers",
          "Trekking poles, sun protection and comfortable daypack",
          "Personal medication and essential hygiene items"
        ]
      }),
      exp({
        id: "dolpo-mustang-expedition",
        name: "Dolpo to Mustang Grand Traverse",
        subtitle: "A rare long-distance Himalayan expedition linking the isolated valleys of Dolpo with the dramatic landscapes of Mustang.",
        overview: "This is the specialist option for seasoned trekkers who want a true Trans-Himalayan traverse rather than a standard circuit. Expect remote camps, long trekking days, high passes and changing landscapes before reaching the Mustang and Jomsom corridor.",
        duration: "24–28 Days",
        price: "Price on Request",
        location: "Dolpo to Mustang, Nepal",
        style: "Trans-Himalayan Expedition",
        groupSize: "2–8 Guests",
        difficulty: "Advanced",
        season: "Spring & Autumn",
        image: "/assets/images/regions/upper-mustang.jpg",
        badge: "Grand Traverse",
        goodToKnow: [
          "Recommended for experienced high-altitude trekkers rather than first-time Himalayan visitors.",
          "Route, camps and exit point are finalized according to permits, weather, trail conditions and group ability.",
          "Restricted-area requirements apply on parts of this journey and are handled during trip planning.",
          "Build contingency days into international travel plans because remote transport can be weather-dependent."
        ]
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
