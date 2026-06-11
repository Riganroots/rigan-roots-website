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
    gallery: data.gallery || [data.image, data.image, data.image],
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
        overview: "A deeply immersive cultural stay where you do not just visit Nepal — you live it. Wake up with your host family, cook together, share stories, and experience the rhythm of real Nepali life.",
        duration: "7 Days",
        price: "From US$650",
        location: "Nepal",
        style: "Cultural Immersion & Village Life",
        image: "https://i.postimg.cc/9M6dDyqv/live-like-nepali-jpg.jpg",
        badge: "Top Seller",
        bestFor: ["Slow travelers", "Cultural explorers", "Families, couples, and solo travelers"],
        highlights: ["Stay with a real Nepali family", "Cook traditional meals", "Join farming and daily life", "Share stories with locals"],
        itinerary: [
          { day: "Day 1: Arrival and Welcome", text: "Travel to the host village, meet your local family, enjoy a welcome meal, and settle in." },
          { day: "Day 2: Local Life and Cooking", text: "Start the morning with tea, help prepare Nepali food, and join daily family activities." },
          { day: "Day 3: Farming and Village Walk", text: "Join seasonal farming activities and walk through nearby fields and village paths." },
          { day: "Day 4: Cultural Exchange", text: "Learn local customs, stories, family traditions, and simple village routines." },
          { day: "Day 5: Community Visit", text: "Visit a nearby market, temple, school, or community space depending on the village." },
          { day: "Day 6: Slow Living and Story Night", text: "Spend a peaceful day with the host family and enjoy an evening of food and stories." },
          { day: "Day 7: Farewell and Departure", text: "Have a final breakfast with your host family and return with meaningful memories." }
        ]
      }),

      exp({
        id: "women-guided-trek",
        name: "Women Guided Trek",
        subtitle: "Trek Nepal with experienced female guides and women-led community support.",
        overview: "A safe, empowering, and meaningful trekking experience led by female guides. Designed for women travelers, solo travelers, and groups who want confidence, comfort, and connection in the Himalayas.",
        duration: "5–12 Days",
        price: "From US$720",
        location: "Annapurna / Langtang / Custom Route",
        style: "Women-Led Trekking Experience",
        difficulty: "Easy to Moderate",
        season: "Spring and Autumn",
        image: "https://i.postimg.cc/4NCPyR69/pokhara-experience-jpg.jpg",
        badge: "Women Led",
        bestFor: ["Women travelers", "Solo female travelers", "Small groups seeking safe trekking"],
        highlights: ["Female trekking guide", "Safe and supportive environment", "Flexible trekking routes", "Local women-led community connection"],
        itinerary: [
          { day: "Day 1: Arrival and Briefing", text: "Meet your female guide, review route, safety, packing, and trekking expectations." },
          { day: "Day 2: Travel to Trek Starting Point", text: "Drive or fly to the selected trekking region and stay overnight." },
          { day: "Day 3–6: Trekking Days", text: "Walk through villages, forests, rivers, and viewpoints with your guide." },
          { day: "Day 7: Cultural Rest or Viewpoint Day", text: "Enjoy a slower day with local interaction, optional viewpoint walk, or village stay." },
          { day: "Day 8–10: Return Trek", text: "Follow the return trail, stay in tea houses, and experience mountain hospitality." },
          { day: "Final Day: Return and Departure", text: "Return to the city and complete the journey with a farewell conversation." }
        ]
      }),

      exp({
        id: "hidden-nepal-expedition",
        name: "Hidden Nepal Expedition",
        subtitle: "Explore remote lakes, villages, trails, and stories beyond guidebooks.",
        overview: "A signature Rigan journey for travelers who want Nepal beyond the common tourist route. This experience can include places like Rara, Khaptad, Tsum Valley, Mohare Danda, hidden villages, and spiritual landscapes.",
        duration: "10–14 Days",
        price: "From US$1450",
        location: "Hidden Regions of Nepal",
        style: "Offbeat Cultural & Nature Expedition",
        difficulty: "Moderate",
        image: "https://i.postimg.cc/FHpVTf2H/rara_lake_expeditions_jpg.jpg",
        badge: "Hidden Nepal",
        bestFor: ["Offbeat travelers", "Photographers", "People who dislike crowded routes"],
        highlights: ["Remote destinations", "Local villages", "Slow travel", "Nature, culture, and storytelling"],
        itinerary: [
          { day: "Day 1: Arrival in Kathmandu", text: "Meet the Rigan team and finalize your hidden Nepal route." },
          { day: "Day 2: Travel to Gateway Region", text: "Drive or fly toward the selected hidden destination." },
          { day: "Day 3–5: Village and Nature Exploration", text: "Walk through local communities, forests, ridges, or lakeside landscapes." },
          { day: "Day 6–8: Deeper Remote Journey", text: "Continue toward the main hidden destination with local guide support." },
          { day: "Day 9–11: Cultural Stay and Slow Travel", text: "Spend meaningful time with local families, hosts, and community members." },
          { day: "Day 12–13: Return Journey", text: "Return toward the city with scenic stops along the way." },
          { day: "Day 14: Departure or Extension", text: "Airport transfer or optional extension." }
        ]
      }),

      exp({
        id: "rigan-signature-nepal",
        name: "Rigan Signature Nepal",
        subtitle: "The complete Rigan journey: culture, food, village life, mountains, and wellness.",
        overview: "This flagship experience combines the best of Rigan Roots & Routes: Kathmandu heritage, local food, family stay, soft adventure, mountain views, and meaningful cultural connection.",
        duration: "12 Days",
        price: "From US$1250",
        location: "Kathmandu, Village Region, Pokhara / Mountains",
        style: "Complete Nepal Signature Journey",
        difficulty: "Easy to Moderate",
        image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg",
        badge: "Rigan Special",
        bestFor: ["First-time Nepal travelers", "Couples and families", "Culture and nature lovers"],
        highlights: ["Heritage tour", "Food experience", "Village stay", "Mountain scenery", "Wellness or festival add-on"],
        itinerary: [
          { day: "Day 1: Arrival in Kathmandu", text: "Airport pickup, welcome, and trip briefing." },
          { day: "Day 2: Kathmandu Heritage", text: "Explore temples, courtyards, markets, and living culture." },
          { day: "Day 3: Taste of Nepal", text: "Join a food walk or cooking experience with locals." },
          { day: "Day 4: Travel to Village", text: "Move toward a local village and meet your host family." },
          { day: "Day 5: Live Like a Nepali", text: "Cook, farm, walk, and experience local daily life." },
          { day: "Day 6: Village Culture Day", text: "Meet community members and learn local traditions." },
          { day: "Day 7: Travel to Pokhara", text: "Scenic travel to Pokhara and lakeside rest." },
          { day: "Day 8: Mountain View Experience", text: "Sunrise viewpoint, short hike, or soft adventure." },
          { day: "Day 9: Wellness / Yoga / Reflection", text: "Relax with yoga, meditation, or peaceful lakeside time." },
          { day: "Day 10: Free Custom Day", text: "Choose food, culture, adventure, or rest." },
          { day: "Day 11: Return to Kathmandu", text: "Return and enjoy a farewell dinner." },
          { day: "Day 12: Departure", text: "Airport transfer or optional extension." }
        ]
      }),

      exp({
        id: "breakfast-at-everest-basecamp",
        name: "Breakfast at Everest Base Camp",
        subtitle: "A premium helicopter journey into the Everest region with breakfast near the Himalayas.",
        overview: "A luxury one-day Himalayan experience for travelers who want Everest without a long trek. Fly by helicopter, enjoy dramatic mountain views, and have breakfast surrounded by the world’s highest peaks.",
        duration: "1 Day",
        price: "From US$1350",
        location: "Everest Region",
        style: "Luxury Helicopter Experience",
        difficulty: "Easy",
        season: "March–May and September–November",
        image: "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
        badge: "Luxury",
        bestFor: ["Luxury travelers", "Couples", "Short-time visitors"],
        highlights: ["Helicopter flight", "Everest views", "Breakfast in the Himalayas", "No long trekking required"],
        itinerary: [
          { day: "Early Morning: Hotel Pickup", text: "Pickup from your hotel and transfer to the domestic airport." },
          { day: "Morning: Helicopter Flight", text: "Fly toward the Everest region with panoramic Himalayan views." },
          { day: "Breakfast Stop", text: "Enjoy breakfast at a high-altitude lodge or viewpoint depending on weather and safety." },
          { day: "Return Flight", text: "Fly back to Kathmandu with aerial views of the Himalayas." },
          { day: "Afternoon: Hotel Drop-off", text: "Return to your hotel after the experience." }
        ]
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
        image: "https://i.postimg.cc/V6xprDjC/anjoe-paul-RANHGW3gv-Kk-unsplash.jpg",
        itinerary: [
          { day: "Day 1: Arrival and Farm Introduction", text: "Meet your host family, learn about the farm, and join light seasonal activities." },
          { day: "Day 2: Harvest and Local Meal", text: "Participate in farming or harvesting, cook with the family, and return." }
        ]
      }),

      exp({
        id: "rice-planting-experience",
        name: "Rice Planting Experience",
        subtitle: "Mud, music, food, laughter, and Nepal’s joyful rice planting tradition.",
        overview: "A seasonal monsoon experience where travelers join farmers in the rice fields and celebrate Nepal’s agricultural culture.",
        duration: "1 Day",
        price: "From US$95",
        location: "Kathmandu Valley / Rural Nepal",
        style: "Seasonal Farming Festival",
        season: "June–July",
        image: "https://i.postimg.cc/V6xprDjC/anjoe-paul-RANHGW3gv-Kk-unsplash.jpg",
        itinerary: [
          { day: "Morning: Travel to Village", text: "Drive to a farming village and meet local hosts." },
          { day: "Midday: Rice Planting", text: "Join rice planting in the fields with music, laughter, and local guidance." },
          { day: "Afternoon: Local Meal", text: "Enjoy traditional food and return to the city." }
        ]
      }),

      exp({
        id: "mountain-farming-experience",
        name: "Mountain Farming Experience",
        subtitle: "Experience everyday farming life in Himalayan villages.",
        overview: "A peaceful village experience where travelers wake up early, help with mountain farming, learn about local crops, and share meals with farming families.",
        duration: "2 Days",
        price: "From US$180",
        location: "Mid-Hill Nepal",
        style: "Mountain Village Farming",
        image: "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg",
        itinerary: [
          { day: "Day 1: Travel to Mountain Village", text: "Arrive at the village, meet your host family, and enjoy a traditional dinner." },
          { day: "Day 2: Farming and Village Walk", text: "Join farming activities, explore the village, and return." }
        ]
      }),

      exp({
        id: "village-immersion",
        name: "Village Immersion",
        subtitle: "Slow down and connect with Nepal through village life.",
        overview: "Escape busy travel and step into peaceful rural Nepal. Experience farming, local meals, community stories, and authentic village culture.",
        duration: "5 Days",
        price: "From US$520",
        location: "Rural Nepal",
        style: "Community Life & Cultural Stay",
        image: "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg",
        itinerary: [
          { day: "Day 1: Travel to Village", text: "Arrive at the village and meet your host family." },
          { day: "Day 2: Farming and Cooking", text: "Join farming, food preparation, and daily home activities." },
          { day: "Day 3: Community Day", text: "Meet local families, visit community spaces, and learn local traditions." },
          { day: "Day 4: Nature and Slow Living", text: "Enjoy a peaceful walk, stories, and local meals." },
          { day: "Day 5: Farewell", text: "Breakfast with your hosts and departure." }
        ]
      })
    ]
  },

  trek: {
    title: "Mountains & Treks 🏔️",
    items: [
      exp({
        id: "everest-base-camp-trek",
        name: "Everest Base Camp Trek",
        subtitle: "Walk through Sherpa villages, Sagarmatha National Park, and reach the legendary Everest Base Camp.",
        overview: "The Everest Base Camp Trek is Nepal’s most iconic Himalayan journey. This 14-day adventure begins in Kathmandu, flies into Lukla, follows the classic Khumbu trail through Namche Bazaar, Tengboche, Dingboche, Lobuche, Gorak Shep, and reaches Everest Base Camp. The trek also includes Kala Patthar, one of the best viewpoints for sunrise and panoramic views of Everest, Lhotse, Nuptse, Pumori, Ama Dablam, and the Khumbu Glacier.",
        duration: "14 Days",
        price: "Start from US$1500",
        location: "Everest Region, Nepal",
        style: "Tea House Trekking Adventure",
        groupSize: "2–12 Guests",
        difficulty: "Moderate to Challenging",
        season: "March–May and September–November",
        image: "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
        gallery: [
          "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80"
        ],
        badge: "Most Popular Trek",
        bestFor: [
          "Trekkers who want to reach Everest Base Camp",
          "Adventure travelers with good fitness",
          "Travelers interested in Sherpa culture and Himalayan landscapes"
        ],
        highlights: [
          "Reach Everest Base Camp at 5,364m",
          "Sunrise from Kala Patthar at around 5,545m",
          "Scenic mountain flight to Lukla",
          "Explore Namche Bazaar, the gateway to Everest",
          "Visit Tengboche Monastery",
          "Walk through Sagarmatha National Park",
          "See Khumbu Glacier and icefall views",
          "Experience Sherpa culture and tea house trekking"
        ],
        itinerary: [
          { day: "Day 1: Arrival in Kathmandu", text: "Arrive in Kathmandu, meet the Rigan team, transfer to hotel, and prepare for the trek briefing." },
          { day: "Day 2: Fly to Lukla and Trek to Phakding", text: "Take a scenic mountain flight to Lukla and begin trekking to Phakding through small villages and river trails." },
          { day: "Day 3: Trek from Phakding to Namche Bazaar", text: "Enter Sagarmatha National Park and climb gradually to Namche Bazaar, the main Sherpa town of the Everest region." },
          { day: "Day 4: Acclimatization in Namche Bazaar", text: "Rest and acclimatize with an optional hike to Syangboche Airstrip and Everest View Hotel for your first Everest views." },
          { day: "Day 5: Trek to Tengboche", text: "Trek through beautiful trails with views of Ama Dablam, Everest, and Lhotse before reaching Tengboche Monastery." },
          { day: "Day 6: Trek to Dingboche", text: "Continue through rhododendron forests, river crossings, and alpine landscapes to Dingboche." },
          { day: "Day 7: Acclimatization in Dingboche", text: "Take an acclimatization hike toward Nagarjuna Hill and enjoy views of surrounding Himalayan peaks." },
          { day: "Day 8: Trek to Lobuche", text: "Walk through high-altitude landscapes and memorial areas before reaching Lobuche." },
          { day: "Day 9: Trek to Everest Base Camp and Back to Gorak Shep", text: "Trek to Gorak Shep, continue to Everest Base Camp, enjoy the Khumbu Glacier area, and return to Gorak Shep overnight." },
          { day: "Day 10: Hike to Kala Patthar and Trek to Pheriche", text: "Start early for sunrise at Kala Patthar, one of the best Everest viewpoints, then descend to Pheriche." },
          { day: "Day 11: Trek to Namche Bazaar", text: "Descend through familiar Sherpa villages and return to Namche Bazaar." },
          { day: "Day 12: Trek to Lukla", text: "Complete the trekking trail and return to Lukla for the final night in the mountains." },
          { day: "Day 13: Fly Back to Kathmandu", text: "Take a morning flight back to Kathmandu and enjoy a relaxed evening or farewell dinner." },
          { day: "Day 14: Final Departure", text: "Transfer to the airport or extend your trip in Nepal." }
        ],
        includes: [
          "Airport pickup and drop-off",
          "Kathmandu accommodation before and after trek",
          "Kathmandu/Ramechhap–Lukla–Kathmandu/Ramechhap flight and transfers",
          "Tea house accommodation during trek",
          "Meals during trekking",
          "Sagarmatha National Park permit",
          "Khumbu Pasang Lhamu Rural Municipality fee",
          "Licensed trekking guide",
          "Porter support based on group size",
          "Basic first aid support",
          "Trip coordination by Rigan Roots & Routes"
        ],
        excludes: [
          "International flights",
          "Nepal visa fee",
          "Travel insurance with helicopter evacuation",
          "Lunch and dinner in Kathmandu",
          "Hot showers, Wi-Fi, charging, and extra services during trek",
          "Alcoholic and bottled drinks",
          "Tips for guide and porter",
          "Personal trekking gear"
        ],
        packing: [
          "Trekking boots",
          "Down jacket",
          "Waterproof jacket",
          "Warm layers",
          "Gloves and warm hat",
          "Sleeping bag",
          "Sunglasses and sunscreen",
          "Headlamp",
          "Water bottle and purification tablets",
          "Power bank",
          "Personal medicine"
        ],
        goodToKnow: [
          "Maximum altitude: Kala Patthar around 5,545m",
          "Everest Base Camp altitude: 5,364m",
          "Average walking time: 5–8 hours per day",
          "Accommodation is tea house style",
          "Travel insurance with emergency helicopter evacuation is mandatory",
          "Lukla flights may operate from Ramechhap during peak season",
          "Weather can delay flights, so 2–3 buffer days are recommended"
        ]
      }),

      exp({
        id: "annapurna-base-camp-trek",
        name: "Annapurna Base Camp Trek",
        subtitle: "Classic Himalayan trek to the heart of the Annapurna Sanctuary.",
        overview: "A breathtaking journey through villages, forests, rivers, and mountain landscapes leading to Annapurna Base Camp. This trek combines natural beauty, Gurung culture, and one of Nepal’s most iconic Himalayan viewpoints.",
        duration: "12 Days",
        price: "From US$900",
        location: "Annapurna Region",
        style: "Trekking & Mountain Adventure",
        groupSize: "2–10 Guests",
        difficulty: "Moderate",
        season: "March–May and September–November",
        image: "https://i.postimg.cc/VNHBcxsc/annapurna-base-camp-jpg.jpg",
        badge: "Popular Trek",
        bestFor: ["Adventure travelers", "Mountain lovers", "Moderately fit trekkers"],
        highlights: ["Reach Annapurna Base Camp", "Walk through Gurung villages", "Enjoy mountain sunrise views", "Experience forests, rivers, and alpine scenery"],
        itinerary: [
          { day: "Day 1: Arrival in Kathmandu", text: "Airport pickup, hotel transfer, and trek briefing." },
          { day: "Day 2: Drive or Fly to Pokhara", text: "Travel to Pokhara and enjoy lakeside relaxation." },
          { day: "Day 3: Drive to Nayapul and Trek to Ghandruk", text: "Begin the trek through villages and stone steps." },
          { day: "Day 4: Trek to Chhomrong", text: "Walk through terraced fields and scenic trails." },
          { day: "Day 5: Trek to Bamboo", text: "Descend and continue through forest trails." },
          { day: "Day 6: Trek to Deurali", text: "Move deeper into the Annapurna Sanctuary." },
          { day: "Day 7: Trek to Annapurna Base Camp", text: "Reach Annapurna Base Camp and enjoy dramatic mountain views." },
          { day: "Day 8: Trek Back to Bamboo", text: "Wake up for sunrise and descend toward Bamboo." },
          { day: "Day 9: Trek to Jhinu Danda", text: "Walk back through villages and relax near hot springs." },
          { day: "Day 10: Trek Out and Drive to Pokhara", text: "Finish the trek and return to Pokhara." },
          { day: "Day 11: Return to Kathmandu", text: "Drive or fly back to Kathmandu." },
          { day: "Day 12: Final Departure", text: "Airport transfer or optional trip extension." }
        ]
      }),

           exp({
        id: "langtang-valley-trek",
        name: "Langtang Valley Trek",
        subtitle: "A beautiful Himalayan trek close to Kathmandu with Tamang culture and mountain views.",
        overview: "Langtang Valley Trek is one of Nepal’s most rewarding short Himalayan journeys. It combines mountain landscapes, forests, rivers, yak pastures, monasteries, and Tamang culture.",
        duration: "10 Days",
        price: "From US$750",
        location: "Langtang Region",
        style: "Trekking, Culture & Nature",
        groupSize: "2–10 Guests",
        difficulty: "Moderate",
        season: "March–May and September–November",
        image: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg",
        badge: "Near Kathmandu",
        bestFor: ["Trekkers with limited time", "Culture and nature lovers", "Travelers seeking a quieter Himalayan trail"],
        highlights: ["Tamang and Tibetan-influenced culture", "Kyanjin Gompa monastery", "Optional Kyanjin Ri viewpoint", "Forests, rivers, yak pastures, and mountain views"],
        itinerary: [
          { day: "Day 1: Arrival in Kathmandu", text: "Airport pickup, hotel transfer, and trek briefing." },
          { day: "Day 2: Drive to Syabrubesi", text: "Scenic drive through hills, rivers, and local towns." },
          { day: "Day 3: Trek to Lama Hotel", text: "Walk through forest trails beside the Langtang River." },
          { day: "Day 4: Trek to Langtang Village", text: "Continue through forests and open valleys toward Langtang Village." },
          { day: "Day 5: Trek to Kyanjin Gompa", text: "Reach the beautiful mountain settlement of Kyanjin Gompa." },
          { day: "Day 6: Explore Kyanjin Ri or Local Monastery", text: "Optional hike to Kyanjin Ri or relaxed cultural exploration." },
          { day: "Day 7: Trek Back to Lama Hotel", text: "Descend through the valley and forests." },
          { day: "Day 8: Trek Back to Syabrubesi", text: "Complete the trekking route and return to Syabrubesi." },
          { day: "Day 9: Drive to Kathmandu", text: "Return by road to Kathmandu." },
          { day: "Day 10: Final Departure", text: "Airport transfer or optional extension." }
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
      overview: "Explore Kathmandu through food. Visit local markets, tea shops, family-run eateries, and hidden food spots while learning the stories behind Nepal's favorite dishes.",
      duration: "Half Day",
      price: "From US$65",
      location: "Kathmandu",
      style: "Street Food & Local Culture",
      image: "https://i.postimg.cc/9M6dDy7m/taste-of-nepal-jpg.jpg",
      badge: "Most Popular"
    }),

    exp({
      id: "newari-food-experience",
      name: "Newari Food Experience",
      subtitle: "Discover the rich flavors of Nepal’s oldest urban civilization.",
      overview: "Experience authentic Newari cuisine including bara, choila, yomari, chatamari, local feasts, and traditional cooking methods while learning about Newar culture.",
      duration: "1 Day",
      price: "From US$95",
      location: "Kathmandu Valley",
      style: "Traditional Newari Cuisine",
      image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg",
      badge: "Cultural Favorite"
    }),

    exp({
      id: "tharu-food-culture",
      name: "Tharu Food & Culture",
      subtitle: "Taste the unique flavors and traditions of Nepal’s Terai region.",
      overview: "Enjoy traditional Tharu dishes, local fishing traditions, village life, cultural performances, and authentic hospitality in Nepal's southern plains.",
      duration: "2 Days",
      price: "From US$180",
      location: "Chitwan & Terai Region",
      style: "Food & Village Culture",
      image: "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg",
      badge: "Authentic"
    }),

    exp({
      id: "tamang-food-experience",
      name: "Tamang Food Experience",
      subtitle: "Mountain flavors, local brews, and warm Tamang hospitality.",
      overview: "Experience traditional Tamang food, local drinks, mountain village culture, and stories passed down through generations.",
      duration: "1 Day",
      price: "From US$110",
      location: "Kathmandu Hills",
      style: "Mountain Ethnic Cuisine",
      image: "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg",
      badge: "Hidden Gem"
    }),

    exp({
      id: "sherpa-kitchen-experience",
      name: "Sherpa Kitchen Experience",
      subtitle: "Taste Himalayan meals inspired by Everest region traditions.",
      overview: "Learn about Sherpa food culture, butter tea, mountain meals, local ingredients, and the lifestyle that supports life in the Himalayas.",
      duration: "1 Day",
      price: "From US$120",
      location: "Everest Region / Kathmandu",
      style: "Himalayan Food Experience",
      image: "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg",
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
      image: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg",
      badge: "Classic"
    }),

    exp({
      id: "bhaktapur-living-heritage",
      name: "Bhaktapur Living Heritage",
      subtitle: "Ancient streets, pottery squares, temples, artisans, and Newari culture.",
      overview: "Walk through Bhaktapur’s timeless streets, meet local artisans, taste traditional food, and experience one of Nepal’s most beautiful heritage cities.",
      duration: "1 Day",
      price: "From US$120",
      location: "Bhaktapur",
      style: "Living Heritage",
      image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg",
      badge: "Heritage Favorite"
    }),

    exp({
      id: "patan-artisan-walk",
      name: "Patan Artisan Walk",
      subtitle: "Meet metal artists, woodcarvers, painters, and traditional craft families.",
      overview: "Explore Patan’s artistic soul through old courtyards, hidden workshops, temple squares, and families preserving Nepal’s handmade traditions.",
      duration: "1 Day",
      price: "From US$115",
      location: "Patan / Lalitpur",
      style: "Artisan & Heritage Walk",
      image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg",
      badge: "Artisan"
    }),

    exp({
      id: "lumbini-spiritual-journey",
      name: "Lumbini Spiritual Journey",
      subtitle: "Visit the birthplace of Buddha and peaceful monastery zones.",
      overview: "A peaceful spiritual journey through Lumbini’s sacred garden, monasteries, meditation spaces, and Buddhist heritage.",
      duration: "3 Days",
      price: "From US$350",
      location: "Lumbini",
      style: "Spiritual Heritage",
      image: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg",
      badge: "Spiritual"
    }),

    exp({
      id: "devghat-spiritual-journey",
      name: "Devghat Spiritual Journey",
      subtitle: "Sacred rivers, temples, sadhus, rituals, and peaceful reflection.",
      overview: "Visit Devghat Dham, one of Nepal’s most sacred spiritual places, where rivers, temples, rituals, and peaceful local life come together.",
      duration: "2 Days",
      price: "From US$220",
      location: "Devghat Dham",
      style: "Spiritual Culture",
      image: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg",
      badge: "Sacred"
    })

  ]
},

  wellness: {
    title: "Wellness & Spirituality 🧘",
    sub: "Quiet retreats for yoga, meditation, healing, and inner peace.",
    items: [
      exp({
        id: "yoga-meditation-retreat",
        name: "Yoga & Meditation Retreat",
        subtitle: "Reset your body and mind in peaceful surroundings.",
        overview: "A peaceful wellness journey with yoga, meditation, mindful walking, and slow travel.",
        duration: "5 Days",
        price: "From US$480",
        location: "Pokhara / Kathmandu Valley",
        style: "Yoga & Meditation",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80"
      }),
      exp({
        id: "monastery-meditation-experience",
        name: "Monastery Meditation Experience",
        subtitle: "Experience silence, mindfulness, and monastery life.",
        overview: "Spend quiet time in or around a monastery with meditation, simple routines, and spiritual reflection.",
        duration: "2 Days",
        price: "From US$190",
        location: "Kathmandu Valley / Monastery Area",
        style: "Meditation Experience",
        image: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg"
      }),
      exp({
        id: "sound-healing-journey",
        name: "Sound Healing Journey",
        subtitle: "Relax with singing bowls, healing vibrations, and calm space.",
        overview: "A gentle healing session using sound, vibration, breathing, and peaceful guidance.",
        duration: "Half Day",
        price: "From US$80",
        location: "Kathmandu / Pokhara",
        style: "Healing Experience",
        image: "https://i.postimg.cc/xTr58Vvc/kathmandu-heritage-tour-jpg.jpg"
      }),
      exp({
        id: "devghat-yoga-with-guru",
        name: "Devghat Yoga with Guru",
        subtitle: "Practice yoga and reflection in a sacred riverside setting.",
        overview: "A spiritual wellness experience in Devghat with yoga, calm walks, river rituals, and guidance from local spiritual teachers.",
        duration: "3 Days",
        price: "From US$320",
        location: "Devghat Dham",
        style: "Spiritual Yoga",
        image: "https://i.postimg.cc/sXQPfT1b/village-immersion-jpg.jpg"
      })
    ]
  },

  festival: {
    title: "Festivals of Nepal 🎉",
    sub: "Celebrate Nepal through rituals, music, food, colors, and local families.",
    items: [
      exp({
        id: "dashain-experience",
        name: "Dashain Experience",
        subtitle: "Blessings, tika, bamboo swings, family food, and Nepal’s biggest festival.",
        overview: "Celebrate Dashain with local families and understand Nepal’s most important family festival.",
        duration: "3 Days",
        price: "From US$280",
        location: "Kathmandu / Local Communities",
        style: "Festival Experience",
        image: "https://i.postimg.cc/SsB6ncz1/festival-experience-jpg.jpg"
      }),
      exp({
        id: "tihar-experience",
        name: "Tihar Experience",
        subtitle: "Lights, flowers, candles, music, worship, and family warmth.",
        overview: "Join local families during Tihar and experience lights, rangoli, worship, sweets, and celebration.",
        duration: "3 Days",
        price: "From US$280",
        location: "Kathmandu / Local Communities",
        style: "Festival Experience",
        image: "https://i.postimg.cc/SsB6ncz1/festival-experience-jpg.jpg"
      }),
      exp({
        id: "holi-festival-experience",
        name: "Holi Festival Experience",
        subtitle: "Celebrate colors, music, laughter, and spring energy.",
        overview: "Enjoy Holi in a safe and guided way with local context, colors, food, and celebration.",
        duration: "1 Day",
        price: "From US$95",
        location: "Kathmandu / Pokhara",
        style: "Color Festival",
        image: "https://i.postimg.cc/SsB6ncz1/festival-experience-jpg.jpg"
      }),
      exp({
        id: "indra-jatra-experience",
        name: "Indra Jatra Experience",
        subtitle: "Masked dances, living goddess traditions, and Kathmandu celebrations.",
        overview: "Witness one of Kathmandu’s most important Newari festivals with local guidance and storytelling.",
        duration: "1 Day",
        price: "From US$120",
        location: "Kathmandu",
        style: "Cultural Festival",
        image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg"
      }),
      exp({
        id: "newari-festival-experience",
        name: "Newari Festival Experience",
        subtitle: "Experience jatras, rituals, food, music, and living Newari culture.",
        overview: "Join selected Newari festivals with local hosts and understand the stories behind the celebration.",
        duration: "1–2 Days",
        price: "From US$160",
        location: "Kathmandu Valley",
        style: "Newari Festival",
        image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg"
      })
    ]
  },

  adventure: {
    title: "Adventure Activities 🌊",
    sub: "Sky, rivers, mountains, speed, adrenaline, and outdoor experiences.",
    items: [
      exp({
        id: "everest-helicopter-tour",
        name: "Everest Helicopter Tour",
        subtitle: "A luxury helicopter flight with breathtaking Everest views.",
        overview: "Fly into the Everest region by helicopter and enjoy one of Nepal’s most spectacular aerial experiences.",
        duration: "1 Day",
        price: "From US$1350",
        location: "Everest Region",
        style: "Helicopter Adventure",
        image: "https://i.postimg.cc/13BrvgLB/everest-view-trek-jpg.jpg"
      }),
      exp({
        id: "paragliding-pokhara",
        name: "Paragliding in Pokhara",
        subtitle: "Fly above Phewa Lake with Himalayan views.",
        overview: "A soft adventure experience in Pokhara with a professional tandem pilot.",
        duration: "Half Day",
        price: "From US$120",
        location: "Pokhara",
        style: "Adventure",
        image: "https://i.postimg.cc/RZ4T11b5/paraglidin-in-pokhara-jpg.jpg"
      }),
      exp({
        id: "bungee-jump-nepal",
        name: "Bungee Jump Nepal",
        subtitle: "Take the leap into Nepal’s dramatic canyon landscapes.",
        overview: "A thrilling adventure for adrenaline seekers with professional safety support and dramatic natural scenery.",
        duration: "1 Day",
        price: "From US$110",
        location: "Nepal",
        style: "Adrenaline Adventure",
        image: "https://i.postimg.cc/Bn4C557w/biking-trails-nepal-jpg.jpg"
      }),
      exp({
        id: "hot-air-balloon-pokhara",
        name: "Hot Air Balloon Experience",
        subtitle: "Float above Pokhara with lake and mountain views.",
        overview: "A calm and scenic adventure above Pokhara’s valley, lakes, hills, and mountain skyline.",
        duration: "Half Day",
        price: "From US$150",
        location: "Pokhara",
        style: "Soft Adventure",
        image: "https://i.postimg.cc/4NCPyR69/pokhara-experience-jpg.jpg"
      }),
      exp({
        id: "trishuli-river-rafting",
        name: "Trishuli River Rafting",
        subtitle: "Experience Nepal’s river rapids, scenery, and outdoor energy.",
        overview: "A fun and accessible white-water rafting experience suitable for beginners and adventure lovers.",
        duration: "1 Day",
        price: "From US$85",
        location: "Trishuli River",
        style: "River Adventure",
        image: "https://i.postimg.cc/Bn4C557w/biking-trails-nepal-jpg.jpg"
      }),
      exp({
        id: "mountain-cycling-adventure",
        name: "Mountain Cycling Adventure",
        subtitle: "Ride through villages, hills, trails, and scenic landscapes.",
        overview: "A guided cycling experience through Nepal’s hills, rural roads, viewpoints, and local communities.",
        duration: "1–2 Days",
        price: "From US$130",
        location: "Kathmandu Valley / Pokhara",
        style: "Cycling Adventure",
        image: "https://i.postimg.cc/Bn4C557w/biking-trails-nepal-jpg.jpg"
      })
    ]
  }

};
