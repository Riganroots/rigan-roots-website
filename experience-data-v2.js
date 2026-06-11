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
        price: "From $550",
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
        overview: "A safe, empowering, and meaningful trekking experience led by female guides. Designed especially for women travelers, solo travelers, and groups who want confidence, comfort, and connection in the Himalayas.",
        duration: "5–12 Days",
        price: "Depend on the Trails",
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
        price: "From $1,450",
        location: "Hidden Regions of Nepal",
        style: "Offbeat Cultural & Nature Expedition",
        difficulty: "Moderate",
        season: "Spring, Autumn, and Selected Winter Routes",
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
        price: "From $1,250",
        location: "Kathmandu, Village Region, Pokhara / Mountains",
        style: "Complete Nepal Signature Journey",
        difficulty: "Easy to Moderate",
        season: "All Year",
        image: "https://i.postimg.cc/JzZmBkdB/cultural-journey.jpg",
        badge: "Rigan Special",
        bestFor: ["First-time Nepal travelers", "Couples and families", "Culture + nature lovers"],
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
        price: "From $1,350",
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
        price: "From $160",
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
        price: "From $90",
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
        price: "From $180",
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
        price: "From $520",
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
  }

};
