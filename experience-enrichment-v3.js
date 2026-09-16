(function () {
  if (!window.experienceDataV2) return;

  const details = {
    "live-like-a-nepali": {
      highlights: [
        "Stay close to local family life and neighbourhood culture",
        "Shop at a local market and cook a Nepali meal together",
        "Join village or community activities rather than only sightseeing",
        "Learn everyday customs, food habits, greetings, and family traditions"
      ],
      bestFor: ["Culture-focused travellers", "First-time visitors who want deeper local connection", "Couples, solo travellers, families, and small groups"],
      itinerary: [
        { day: "Day 1 — Welcome to Kathmandu", text: "Airport or hotel welcome, orientation with the Rigan team, neighbourhood walk, and introduction to everyday Nepali customs." },
        { day: "Day 2 — Market, Kitchen & Family Meal", text: "Visit a local market, learn about spices and ingredients, help prepare a home-style meal, and share dinner with a Nepali family." },
        { day: "Day 3 — Travel to the Village", text: "Transfer to the selected village or community, meet your host family, settle in, and take a gentle orientation walk." },
        { day: "Day 4 — Village Life & Farming", text: "Join normal village routines such as seasonal farm work, livestock care, local tea breaks, and conversations with residents." },
        { day: "Day 5 — Culture, Craft & Community", text: "Spend time with local artisans, community members, or women-led groups and learn about traditions, livelihoods, and local stories." },
        { day: "Day 6 — Slow Day with Your Hosts", text: "Enjoy a flexible day for cooking, short hikes, school or community visits where appropriate, family time, and a final local dinner." },
        { day: "Day 7 — Return & Reflection", text: "Return to Kathmandu, stop for local experiences on the way when practical, and finish with a trip reflection and onward travel support." }
      ],
      goodToKnow: ["Village location is selected according to season and access", "Activities depend on the host community's normal schedule", "Private customization is available", "Final inclusions and transport are confirmed in your quotation"]
    },

    "women-guided-trek": {
      highlights: ["Female trekking guide and women-led local support where available", "Flexible route selection in Annapurna, Langtang, or another suitable region", "Small-group or private format", "Trekking pace adapted to the group"],
      bestFor: ["Women travelling solo or in small groups", "Travellers who prefer a female guide", "Guests wanting a supportive trekking environment"],
      itinerary: [
        { day: "Sample Day 1 — Meet Your Guide", text: "Pre-trek briefing, equipment check, route review, safety discussion, and introduction to your female trekking guide." },
        { day: "Sample Day 2 — Trekking Gateway", text: "Travel to the trailhead and begin the trek at an easy pace through villages and forest." },
        { day: "Sample Day 3 — Village & Mountain Trail", text: "Continue through local settlements with time for tea-house stops, cultural interaction, and mountain views." },
        { day: "Sample Day 4 — Higher Trail", text: "Gain elevation gradually, with regular breaks and a pace chosen for comfort and acclimatization." },
        { day: "Sample Day 5 — Main Viewpoint or Destination", text: "Reach the key viewpoint, ridge, valley, or cultural destination selected for your route." },
        { day: "Sample Day 6 — Descend", text: "Descend through a different section of trail where possible and spend the final trekking night in a local lodge." },
        { day: "Sample Day 7 — Return", text: "Complete the trek and return to the nearest road or city. Routes from 5 to 12 days are available." }
      ],
      goodToKnow: ["This package has several route options, so the final day-by-day plan is confirmed after route selection", "Trekking insurance with evacuation coverage is recommended", "Weather may require route adjustments", "Final permit and transport arrangements depend on the selected region"]
    },

    "hidden-nepal-expedition": {
      highlights: ["Remote landscapes away from Nepal's busiest routes", "Village stays and regional culture", "Flexible expedition design around season and access", "Local transport, trekking, or jeep sections depending on the chosen region"],
      bestFor: ["Repeat visitors to Nepal", "Adventure travellers seeking less-visited regions", "Photographers and culture-focused explorers"],
      itinerary: [
        { day: "Day 1 — Kathmandu Briefing", text: "Meet the expedition team, confirm the chosen hidden-Nepal route, review permits, equipment, weather, and transport." },
        { day: "Day 2 — Travel to the Regional Gateway", text: "Fly or drive toward the selected region such as Rara, Dolpo, the far west, or another remote destination." },
        { day: "Day 3 — Enter the Remote Route", text: "Continue by local road, jeep, or trail and begin the expedition beyond the main tourism corridor." },
        { day: "Day 4 — Village & Landscape Exploration", text: "Explore local settlements, farms, forests, rivers, or highland landscapes with a local guide." },
        { day: "Day 5 — Deeper into the Region", text: "Move farther into the selected route, allowing time for photography, cultural encounters, and a slower travel pace." },
        { day: "Day 6 — Hidden Destination", text: "Reach one of the journey's main natural or cultural highlights and spend time exploring rather than rushing onward." },
        { day: "Day 7 — Community Day", text: "Spend a full day with local communities, monasteries, villages, or nature areas according to the chosen region." },
        { day: "Day 8 — Alternative Trail or Route", text: "Continue through a different valley, village, lake area, or scenic route where conditions permit." },
        { day: "Day 9 — Begin Return Journey", text: "Start returning toward the regional gateway with stops that were not possible on the outward journey." },
        { day: "Day 10 — Regional Gateway", text: "Complete the remote section and overnight near the transport gateway." },
        { day: "Day 11 — Return to Kathmandu", text: "Fly or drive back to Kathmandu, with contingency time for remote transport delays." },
        { day: "Day 12 — Buffer / Departure Support", text: "Use this day as a weather buffer or for a relaxed Kathmandu finish. Longer 13–14 day versions add deeper regional exploration." }
      ],
      goodToKnow: ["This is a framework itinerary; the exact region is selected before booking", "Remote transport can change because of weather and road conditions", "Some regions require special permits", "A contingency day is strongly recommended for remote Nepal"]
    },

    "rigan-signature-nepal": {
      highlights: ["Kathmandu heritage and local food", "Village or family-based cultural immersion", "Pokhara and Himalayan scenery", "Soft adventure, wellness, and flexible local experiences"],
      bestFor: ["First-time visitors wanting a complete Nepal journey", "Couples, families, and small private groups", "Travellers wanting culture plus nature without a difficult trek"],
      itinerary: [
        { day: "Day 1 — Arrive in Kathmandu", text: "Airport welcome, hotel check-in, relaxed neighbourhood orientation, and trip briefing." },
        { day: "Day 2 — Kathmandu Living Heritage", text: "Explore major heritage areas with time for courtyards, temples, local streets, artisan stories, and neighbourhood life." },
        { day: "Day 3 — Kathmandu Food & Local Life", text: "Visit markets and family-run food stops, taste regional dishes, and join a cooking or home-meal experience." },
        { day: "Day 4 — Village Journey", text: "Travel to a selected village, meet local hosts, take an orientation walk, and share a home-style dinner." },
        { day: "Day 5 — Village Immersion", text: "Join seasonal farming, craft, cooking, or community activities and spend unhurried time with local residents." },
        { day: "Day 6 — Village to Pokhara", text: "Travel to Pokhara with scenic stops along the way and enjoy an easy evening by the lake." },
        { day: "Day 7 — Pokhara & Himalayan Views", text: "Sunrise or mountain-view outing followed by lakeside exploration, local neighbourhoods, and free time." },
        { day: "Day 8 — Soft Adventure Day", text: "Choose paragliding, a short hike, boating, cycling, or another soft-adventure experience according to interest and weather." },
        { day: "Day 9 — Mountain or Rural Day Trip", text: "Explore a nearby ridge, village, monastery, or short trekking route for closer contact with the Annapurna landscape." },
        { day: "Day 10 — Wellness & Slow Travel", text: "Enjoy yoga, meditation, spa time, a relaxed lakeside morning, or a flexible personal day." },
        { day: "Day 11 — Return to Kathmandu", text: "Return to Kathmandu and enjoy a farewell dinner or final shopping and cultural time." },
        { day: "Day 12 — Departure", text: "Airport transfer or assistance with your next Nepal destination." }
      ]
    },

    "breakfast-at-everest-basecamp": {
      highlights: ["Scenic helicopter flight into the Everest region", "Close Himalayan views without a multi-day trek", "Breakfast stop in the Everest region when operating conditions allow", "Same-day return to Kathmandu"],
      bestFor: ["Luxury travellers", "Guests with limited time", "Travellers unable to complete a long high-altitude trek"],
      itinerary: [
        { day: "Early Morning — Hotel to Airport", text: "Transfer to the domestic airport, check in, and receive the flight and high-altitude safety briefing." },
        { day: "Morning — Fly into the Everest Region", text: "Helicopter flight toward Lukla and the upper Khumbu with Himalayan views. Operational routing depends on weather and aviation requirements." },
        { day: "Everest Region — Scenic Landing / Breakfast", text: "Make the permitted scenic landing or breakfast stop in the Everest region. Exact landing points can change because of weather, weight, and aviation restrictions." },
        { day: "Late Morning — Return to Kathmandu", text: "Fly back to Kathmandu and transfer to your hotel." }
      ],
      goodToKnow: ["Flights are weather dependent", "Landing locations are decided by the operator and aviation conditions", "High altitude can affect some travellers even on short visits", "A full refund or rescheduling policy is confirmed before booking"]
    },

    "farm-and-harvest-experience": {
      highlights: ["Seasonal farm work with local families", "Home-cooked village meals", "Hands-on learning about crops and rural livelihoods", "Small-scale, respectful community participation"],
      itinerary: [
        { day: "Day 1 — Village Arrival & Farm Life", text: "Travel to the host community, meet the family, walk through the farm, join seasonal work, and share a local dinner." },
        { day: "Day 2 — Harvest, Cooking & Return", text: "Continue farm activities, help prepare lunch using local ingredients, learn about seasonal food traditions, and return after the afternoon program." }
      ]
    },

    "rice-planting-experience": {
      highlights: ["Join the monsoon rice-planting tradition", "Local food, music, and field-side celebration", "Learn how rice cultivation works", "Seasonal cultural experience"],
      itinerary: [
        { day: "Morning — Travel to the Rice Fields", text: "Meet your host or guide, travel to the farming area, change into suitable field clothing, and receive a short introduction to rice cultivation." },
        { day: "Midday — Planting & Celebration", text: "Join farmers in the muddy fields, learn planting techniques, enjoy local snacks or lunch, music, and the festive atmosphere." },
        { day: "Afternoon — Wash, Meal & Return", text: "Clean up, share a traditional meal, spend time with the host family, and return to Kathmandu or your hotel." }
      ],
      goodToKnow: ["Normally available only during the rice-planting season in June and July", "Expect mud, rain, and wet conditions", "Activity timing follows real farm work rather than a staged show", "A change of clothes and waterproof bag are recommended"]
    },

    "mountain-farming-experience": {
      highlights: ["Mid-hill or mountain farming traditions", "Local crops and seasonal work", "Family meals and village hospitality", "Short walks through terraced landscapes"],
      itinerary: [
        { day: "Day 1 — Mountain Village & Farm", text: "Travel to the selected hill village, meet your hosts, walk through terraced fields, and join seasonal farming activities." },
        { day: "Day 2 — Morning Farm Routine & Return", text: "Join the household morning routine, learn about local crops and food storage, share lunch, and return in the afternoon." }
      ]
    },

    "village-immersion": {
      highlights: ["Multi-day local family stay", "Farming, cooking, and village walks", "Community stories and cultural exchange", "Slower travel away from crowded attractions"],
      itinerary: [
        { day: "Day 1 — Travel to the Village", text: "Transfer from the city to the selected community, meet your hosts, settle in, and take an introductory village walk." },
        { day: "Day 2 — Farming & Daily Life", text: "Join normal household and farm routines, learn about seasonal crops, and share meals with the family." },
        { day: "Day 3 — Culture & Community", text: "Meet community members, visit local cultural or religious places, and learn about regional traditions and livelihoods." },
        { day: "Day 4 — Nature Walk & Cooking", text: "Take a short countryside walk and spend the afternoon learning local recipes or helping prepare the evening meal." },
        { day: "Day 5 — Farewell & Return", text: "Enjoy a final breakfast with the hosts, say goodbye to the community, and return to Kathmandu or continue to your next destination." }
      ]
    },

    "everest-base-camp-trek": {
      highlights: ["Everest Base Camp", "Kala Patthar sunrise viewpoint", "Namche Bazaar and Sherpa culture", "Tengboche Monastery and Khumbu mountain scenery", "Built-in acclimatization days"],
      bestFor: ["Fit trekkers wanting Nepal's iconic high-altitude route", "First-time Himalayan trekkers with good preparation", "Private or small-group trekking travellers"],
      itinerary: [
        { day: "Day 1 — Arrive in Kathmandu", text: "Airport welcome, hotel check-in, trek briefing, document check, and final equipment preparation." },
        { day: "Day 2 — Fly to Lukla & Trek to Phakding", text: "Take the mountain flight to Lukla when conditions permit and begin a gentle first-day trek to Phakding." },
        { day: "Day 3 — Phakding to Namche Bazaar", text: "Follow the Dudh Koshi, cross suspension bridges, enter Sagarmatha National Park, and climb steadily to Namche Bazaar." },
        { day: "Day 4 — Acclimatization in Namche", text: "Take an acclimatization walk toward Everest View Hotel, Khumjung, or a nearby viewpoint, then return to sleep in Namche." },
        { day: "Day 5 — Namche to Tengboche", text: "Trek with views of Everest, Lhotse, Ama Dablam, and surrounding peaks before reaching Tengboche and its famous monastery." },
        { day: "Day 6 — Tengboche to Dingboche", text: "Descend through forest, cross the river, pass Pangboche, and continue into the wider high-altitude valley of Dingboche." },
        { day: "Day 7 — Acclimatization in Dingboche", text: "Complete a gradual acclimatization hike on a nearby ridge such as Nangkartshang area, then return to Dingboche." },
        { day: "Day 8 — Dingboche to Lobuche", text: "Continue past the memorial area above Thukla and reach Lobuche beneath the high peaks of the Khumbu." },
        { day: "Day 9 — Lobuche to Gorak Shep & Everest Base Camp", text: "Trek to Gorak Shep, continue to Everest Base Camp, enjoy the glacier scenery, and return to Gorak Shep for the night." },
        { day: "Day 10 — Kala Patthar & Descend to Pheriche", text: "Make an early ascent of Kala Patthar for the classic Everest panorama, then descend to Pheriche or a nearby lower village." },
        { day: "Day 11 — Pheriche to Namche Bazaar", text: "Retrace the valley through Pangboche and Tengboche before returning to Namche." },
        { day: "Day 12 — Namche to Lukla", text: "Descend to the Dudh Koshi and complete the final trekking day back to Lukla." },
        { day: "Day 13 — Fly to Kathmandu", text: "Take the return flight when weather permits and transfer to your hotel. Keep the rest of the day flexible." },
        { day: "Day 14 — Departure / Contingency", text: "Airport transfer or use the day as a practical buffer if mountain flights were delayed." }
      ],
      goodToKnow: ["High-altitude trekking requires gradual acclimatization", "Lukla flights are weather dependent and schedules can change", "Travel insurance should cover high-altitude trekking and emergency evacuation", "The guide may modify the route for safety, health, or weather"]
    },

    "annapurna-base-camp-trek": {
      highlights: ["Annapurna Base Camp and Annapurna Sanctuary", "Machhapuchhre Base Camp", "Gurung villages and rhododendron forest", "Natural hot-spring option near Jhinu", "Pokhara before and after the trek"],
      itinerary: [
        { day: "Day 1 — Arrive in Kathmandu", text: "Airport welcome, hotel check-in, trek briefing, and preparation." },
        { day: "Day 2 — Kathmandu to Pokhara", text: "Travel to Pokhara by tourist vehicle or optional flight and prepare for the trail." },
        { day: "Day 3 — Drive to Trailhead & Trek to Chhomrong", text: "Drive toward the Annapurna foothills and begin trekking through villages and terraced landscapes to Chhomrong." },
        { day: "Day 4 — Chhomrong to Bamboo", text: "Descend to the Chhomrong Khola, climb to Sinuwa, and continue through forest to Bamboo." },
        { day: "Day 5 — Bamboo to Deurali", text: "Trek through dense forest and the narrowing Modi Khola valley via Himalaya toward Deurali." },
        { day: "Day 6 — Deurali to Annapurna Base Camp", text: "Continue through Machhapuchhre Base Camp and enter the Annapurna Sanctuary before reaching Annapurna Base Camp." },
        { day: "Day 7 — Sunrise at ABC & Descend to Bamboo", text: "Enjoy sunrise and mountain views at base camp, then descend through MBC and Deurali to Bamboo." },
        { day: "Day 8 — Bamboo to Jhinu Danda", text: "Return through Sinuwa and Chhomrong, then descend to Jhinu Danda with time for the hot-spring area if conditions and time allow." },
        { day: "Day 9 — Trek Out & Drive to Pokhara", text: "Walk to the road-access point and drive back to Pokhara for a comfortable evening." },
        { day: "Day 10 — Pokhara Rest Day", text: "Relax by Phewa Lake or choose optional sightseeing, massage, or a short local activity." },
        { day: "Day 11 — Return to Kathmandu", text: "Travel back to Kathmandu and enjoy a free evening." },
        { day: "Day 12 — Departure", text: "Airport transfer or onward Nepal travel support." }
      ],
      goodToKnow: ["Stone staircases and repeated ascents make the trek physically demanding despite moderate altitude", "Weather can affect trail conditions in the sanctuary", "Travel insurance is recommended", "Road access points may change as local roads develop"]
    },

    "langtang-valley-trek": {
      highlights: ["Langtang Valley and Kyanjin Gompa", "Tamang culture", "Optional Kyanjin Ri or nearby viewpoint hike", "Forests, rivers, yak pastures, and Himalayan scenery", "Road-accessible trekking region from Kathmandu"],
      itinerary: [
        { day: "Day 1 — Arrive in Kathmandu", text: "Airport welcome, hotel check-in, briefing, and trek preparation." },
        { day: "Day 2 — Drive to Syabrubesi", text: "Drive north from Kathmandu through hill roads and river valleys to the Langtang trekking gateway." },
        { day: "Day 3 — Syabrubesi to Lama Hotel", text: "Begin trekking beside the Langtang Khola through forest and small settlements." },
        { day: "Day 4 — Lama Hotel to Langtang Village", text: "Climb steadily as the valley opens, pass Ghodatabela, and continue to rebuilt Langtang Village." },
        { day: "Day 5 — Langtang Village to Kyanjin Gompa", text: "Walk through yak pasture and stone villages to Kyanjin Gompa beneath the surrounding mountains." },
        { day: "Day 6 — Kyanjin Exploration / Acclimatization", text: "Take an optional acclimatization hike toward Kyanjin Ri or another suitable viewpoint, depending on weather and fitness." },
        { day: "Day 7 — Kyanjin Gompa to Lama Hotel", text: "Retrace the valley downhill through Langtang Village and forest." },
        { day: "Day 8 — Lama Hotel to Syabrubesi", text: "Complete the trekking section and return to Syabrubesi." },
        { day: "Day 9 — Drive to Kathmandu", text: "Return by road to Kathmandu and enjoy a free evening." },
        { day: "Day 10 — Departure", text: "Airport transfer or onward travel support." }
      ]
    },

    "everest-three-passes-trek": {
      highlights: ["Kongma La, Cho La, and Renjo La", "Everest Base Camp and Kala Patthar", "Gokyo Lakes", "Remote high-altitude valleys", "Namche Bazaar and Sherpa settlements"],
      bestFor: ["Experienced and very fit trekkers", "Travellers comfortable with long high-altitude days", "Guests seeking the most complete Everest trekking circuit"],
      itinerary: [
        { day: "Day 1 — Arrive in Kathmandu", text: "Welcome, briefing, gear check, and final expedition preparation." },
        { day: "Day 2 — Fly to Lukla & Trek to Phakding", text: "Fly to Lukla when conditions permit and trek gently to Phakding." },
        { day: "Day 3 — Phakding to Namche Bazaar", text: "Enter Sagarmatha National Park and climb to Namche Bazaar." },
        { day: "Day 4 — Namche Acclimatization", text: "Acclimatization hike around Khumjung or Everest View area and return to Namche." },
        { day: "Day 5 — Namche to Tengboche", text: "Trek to Tengboche with major Everest-region mountain views." },
        { day: "Day 6 — Tengboche to Dingboche", text: "Continue through Pangboche to Dingboche." },
        { day: "Day 7 — Dingboche Acclimatization", text: "Complete a higher acclimatization hike and return to sleep in Dingboche." },
        { day: "Day 8 — Dingboche to Chhukung", text: "Walk into the Imja Valley to Chhukung and prepare for the first high pass." },
        { day: "Day 9 — Kongma La to Lobuche", text: "Cross Kongma La with an early start and descend toward Lobuche. This is a long, demanding day." },
        { day: "Day 10 — Everest Base Camp & Gorak Shep", text: "Trek via Gorak Shep to Everest Base Camp and return to Gorak Shep." },
        { day: "Day 11 — Kala Patthar to Dzongla", text: "Climb Kala Patthar early, descend past Lobuche, and continue toward Dzongla." },
        { day: "Day 12 — Cho La to Thagnak", text: "Cross the icy and rocky Cho La pass and descend to Thagnak." },
        { day: "Day 13 — Thagnak to Gokyo", text: "Cross the Ngozumpa Glacier and reach Gokyo beside the turquoise lakes." },
        { day: "Day 14 — Gokyo Ri / Rest", text: "Climb Gokyo Ri if conditions allow and spend the remainder of the day recovering for the final pass." },
        { day: "Day 15 — Renjo La to Lungden", text: "Cross Renjo La and descend into the quieter Bhote Koshi valley." },
        { day: "Day 16 — Lungden to Namche", text: "Descend through Thame and return to Namche Bazaar." },
        { day: "Day 17 — Namche to Lukla", text: "Complete the final trekking day back to Lukla." },
        { day: "Day 18 — Fly to Kathmandu", text: "Return by mountain flight when weather permits." },
        { day: "Day 19 — Departure / Buffer", text: "Airport transfer or contingency day for possible flight or pass delays." }
      ],
      goodToKnow: ["This route is significantly harder than the standard Everest Base Camp trek", "Pass crossings depend on snow, ice, wind, and guide assessment", "Microspikes or other seasonal equipment may be required", "Comprehensive high-altitude rescue insurance is strongly recommended"]
    },

    "annapurna-circuit-trek": {
      highlights: ["Thorong La Pass", "Manang acclimatization", "Marshyangdi and Kali Gandaki landscapes", "Muktinath pilgrimage area", "Strong cultural and ecological variety"],
      itinerary: [
        { day: "Day 1 — Kathmandu to Besisahar / Dharapani Area", text: "Drive from Kathmandu toward the Annapurna Circuit gateway and continue as road conditions allow." },
        { day: "Day 2 — Dharapani to Chame", text: "Trek through forest and villages to Chame, the administrative centre of Manang District." },
        { day: "Day 3 — Chame to Pisang", text: "Follow the Marshyangdi valley through pine forest and dramatic rock walls to Pisang." },
        { day: "Day 4 — Pisang to Manang", text: "Choose the suitable upper or lower trail toward Manang with excellent Annapurna views." },
        { day: "Day 5 — Acclimatization in Manang", text: "Take a gradual acclimatization hike and return to Manang for a second night." },
        { day: "Day 6 — Manang to Yak Kharka", text: "Gain altitude slowly through alpine terrain to Yak Kharka or a nearby settlement." },
        { day: "Day 7 — Yak Kharka to Thorong Phedi", text: "Continue carefully to Thorong Phedi, with the option to stay higher only if conditions and acclimatization are suitable." },
        { day: "Day 8 — Thorong La Pass to Muktinath", text: "Start before dawn, cross Thorong La, and make the long descent to Muktinath." },
        { day: "Day 9 — Muktinath to Marpha / Jomsom", text: "Descend into the Kali Gandaki valley and explore the Thakali settlements around Jomsom or Marpha." },
        { day: "Day 10 — Jomsom to Tatopani", text: "Continue by road and short walking sections toward Tatopani, depending on current transport conditions." },
        { day: "Day 11 — Tatopani to Ghorepani", text: "Climb through villages and rhododendron forest to Ghorepani." },
        { day: "Day 12 — Poon Hill & Trek to Ulleri / Roadhead", text: "Take an early Poon Hill walk, then descend toward the road-access point." },
        { day: "Day 13 — Return to Pokhara", text: "Drive to Pokhara and enjoy a relaxed lakeside evening." },
        { day: "Day 14 — Pokhara to Kathmandu", text: "Return to Kathmandu by road or optional flight." },
        { day: "Day 15 — Departure / Buffer", text: "Airport transfer or use the day as weather and transport contingency." }
      ]
    },

    "thorong-la-pass-trek": {
      highlights: ["Thorong La at 5,416 m", "Manang and high Himalayan valleys", "Muktinath", "Compact Annapurna high-pass itinerary"],
      itinerary: [
        { day: "Day 1 — Kathmandu to Trekking Gateway", text: "Drive toward Besisahar and continue toward the upper circuit gateway according to road conditions." },
        { day: "Day 2 — Trek toward Chame", text: "Begin the walking section through river valleys, villages, and forest." },
        { day: "Day 3 — Chame to Pisang", text: "Continue through the narrowing Marshyangdi valley to Pisang." },
        { day: "Day 4 — Pisang to Manang", text: "Trek to Manang on the route best suited to weather, trail conditions, and group pace." },
        { day: "Day 5 — Manang Acclimatization", text: "Take a higher acclimatization walk and return to Manang." },
        { day: "Day 6 — Manang to Yak Kharka", text: "Gain altitude slowly and sleep at Yak Kharka or nearby." },
        { day: "Day 7 — Yak Kharka to Thorong Phedi", text: "Move to Thorong Phedi and prepare for the pass crossing." },
        { day: "Day 8 — Cross Thorong La to Muktinath", text: "Leave early, cross Thorong La, and descend to Muktinath." },
        { day: "Day 9 — Muktinath to Jomsom", text: "Explore Muktinath in the morning and continue down the Kali Gandaki valley to Jomsom." },
        { day: "Day 10 — Jomsom to Pokhara", text: "Return to Pokhara by the available road or flight option, depending on current operations." },
        { day: "Day 11 — Pokhara to Kathmandu", text: "Return to Kathmandu and keep the evening free." },
        { day: "Day 12 — Departure / Buffer", text: "Airport transfer or contingency day." }
      ],
      goodToKnow: ["Crossing Thorong La requires proper acclimatization and an early start", "Snow can close or delay the pass", "The guide's safety decision takes priority over the planned schedule", "High-altitude evacuation insurance is recommended"]
    },

    "mardi-himal-trek": {
      highlights: ["Mardi Himal High Camp", "Close views of Machhapuchhre and the Annapurna range", "Forest and ridge walking", "One of the best short treks from Pokhara"],
      itinerary: [
        { day: "Day 1 — Pokhara to Deurali / Forest Camp", text: "Drive to the trailhead near Kande or another current access point and trek through forest toward Deurali or Forest Camp." },
        { day: "Day 2 — Forest Camp to Low Camp", text: "Climb through rhododendron forest as the ridge begins to open toward mountain views." },
        { day: "Day 3 — Low Camp to High Camp", text: "Continue along the ridge to High Camp with increasingly close views of Machhapuchhre and the Annapurna range." },
        { day: "Day 4 — Mardi Viewpoint / Base Camp Area & Descend", text: "Start early for the main viewpoint or higher trail as conditions allow, then descend to Low Camp or a lower lodge." },
        { day: "Day 5 — Descend to Siding & Drive to Pokhara", text: "Descend through forest and villages to Siding or a nearby roadhead and drive back to Pokhara." }
      ]
    },

    "tilicho-lake-trek": {
      highlights: ["Tilicho Lake", "Manang acclimatization", "Dramatic dry Himalayan landscapes", "Side route from the Annapurna Circuit"],
      itinerary: [
        { day: "Day 1 — Kathmandu to Besisahar / Upper Gateway", text: "Drive toward the Annapurna region and continue as road conditions allow." },
        { day: "Day 2 — Trek toward Chame", text: "Begin the walking section through mountain villages and forest." },
        { day: "Day 3 — Chame to Pisang", text: "Follow the Marshyangdi valley to Pisang." },
        { day: "Day 4 — Pisang to Manang", text: "Continue to Manang with excellent mountain scenery." },
        { day: "Day 5 — Manang Acclimatization", text: "Take an acclimatization hike and return to sleep in Manang." },
        { day: "Day 6 — Manang to Khangsar", text: "Leave the main circuit and trek toward Khangsar village." },
        { day: "Day 7 — Khangsar to Tilicho Base Camp", text: "Traverse toward Tilicho Base Camp, taking extra care on landslide-prone sections." },
        { day: "Day 8 — Tilicho Lake & Return to Base Camp", text: "Start early for Tilicho Lake, spend time at the lake if weather permits, and return to Base Camp." },
        { day: "Day 9 — Base Camp to Manang", text: "Retrace the route through Khangsar toward Manang." },
        { day: "Day 10 — Return toward Road Access", text: "Descend to the best available road-access point based on the current route and transport situation." },
        { day: "Day 11 — Return to Kathmandu", text: "Drive back to Kathmandu." },
        { day: "Day 12 — Departure / Buffer", text: "Airport transfer or weather and road contingency day." }
      ],
      goodToKnow: ["Tilicho trail conditions can change due to landslides, snow, or ice", "The lake day is high altitude and requires early departure", "This itinerary prioritizes acclimatization before Tilicho Lake", "Route and roadhead may change with local road conditions"]
    },

    "shey-phoksundo-trek": {
      highlights: ["Phoksundo Lake", "Ringmo village", "Dolpo landscapes and Bon culture", "Remote western Nepal trekking", "Waterfall and canyon scenery"],
      itinerary: [
        { day: "Day 1 — Arrive / Prepare in Kathmandu", text: "Meet the team, check equipment, review domestic flights and permits, and prepare for remote-west travel." },
        { day: "Day 2 — Fly Kathmandu to Nepalgunj", text: "Fly to Nepalgunj and overnight in the lowlands before the mountain flight." },
        { day: "Day 3 — Fly to Juphal & Trek to Dunai", text: "Take the morning flight to Juphal when conditions permit and walk to Dunai, the district headquarters." },
        { day: "Day 4 — Dunai to Chhepka", text: "Follow the Phoksundo river corridor through villages, forest, and narrow valley sections." },
        { day: "Day 5 — Chhepka to Jharana / Waterfall Area", text: "Continue deeper into the national park toward the dramatic waterfall and upper valley." },
        { day: "Day 6 — Jharana to Ringmo & Phoksundo Lake", text: "Climb toward Ringmo village and reach the striking turquoise waters of Phoksundo Lake." },
        { day: "Day 7 — Explore Phoksundo & Ringmo", text: "Spend a full day around the lake, village, monastery area, and nearby viewpoints at a relaxed pace." },
        { day: "Day 8 — Phoksundo to Chhepka", text: "Begin the return trek through the valley to Chhepka." },
        { day: "Day 9 — Chhepka to Dunai", text: "Continue downstream and return to Dunai." },
        { day: "Day 10 — Dunai to Juphal", text: "Walk back to Juphal and prepare for the next morning's flight." },
        { day: "Day 11 — Juphal to Nepalgunj to Kathmandu", text: "Fly via Nepalgunj to Kathmandu when flight schedules and weather permit." },
        { day: "Day 12 — Departure / Flight Buffer", text: "Use this day for departure or as an important contingency day for remote domestic flight delays." }
      ],
      goodToKnow: ["Juphal flights are weather dependent", "Remote Dolpo services are simpler than on popular trekking routes", "Permit and national-park requirements must be confirmed before departure", "Keep at least one buffer day for domestic flight changes"]
    },

    "upper-dolpo-trek": {
      highlights: ["Shey Gompa", "Phoksundo Lake", "High passes and remote valleys", "Tibetan-influenced culture", "One of Nepal's most remote trekking expeditions"],
      bestFor: ["Experienced high-altitude trekkers", "Expedition-style travellers", "Guests comfortable with remote logistics and simple conditions"],
      itinerary: [
        { day: "Day 1 — Kathmandu Preparation", text: "Final expedition briefing, permit verification, equipment check, and packing for remote conditions." },
        { day: "Day 2 — Fly to Nepalgunj", text: "Domestic flight to Nepalgunj and overnight before the mountain sector." },
        { day: "Day 3 — Fly to Juphal & Trek to Dunai", text: "Fly to Juphal when weather permits and begin the trek to Dunai." },
        { day: "Day 4 — Dunai to Chhepka", text: "Enter the Phoksundo river valley and trek to Chhepka." },
        { day: "Day 5 — Chhepka to Jharana Area", text: "Continue through forest, gorge, and waterfall scenery." },
        { day: "Day 6 — Reach Phoksundo Lake", text: "Climb to Ringmo village and Phoksundo Lake." },
        { day: "Day 7 — Phoksundo Acclimatization", text: "Rest and acclimatize around Ringmo and the lake before entering the more remote upper route." },
        { day: "Day 8 — Trek beyond Phoksundo", text: "Follow the remote trail north of the lake toward the upper Dolpo valleys and camping areas." },
        { day: "Day 9 — High Valley Camp", text: "Continue through rugged terrain toward the approach to the high pass leading toward Shey." },
        { day: "Day 10 — Cross High Pass toward Shey", text: "Cross the scheduled high pass only if weather, snow, and group condition are suitable, then descend toward Shey." },
        { day: "Day 11 — Shey Gompa", text: "Explore Shey Gompa and the surrounding sacred landscape, with time for recovery." },
        { day: "Day 12 — Shey to Next Valley", text: "Leave Shey and continue toward the next high valley and traditional settlements." },
        { day: "Day 13 — Cross toward Saldang Area", text: "Cross the next pass or ridge according to the confirmed expedition route and descend toward the Saldang region." },
        { day: "Day 14 — Saldang Cultural Day", text: "Spend time in one of Upper Dolpo's traditional settlements and learn about local Tibetan-influenced culture." },
        { day: "Day 15 — Trek toward Dho Tarap Route", text: "Continue through remote valleys toward the southbound route." },
        { day: "Day 16 — High Pass / Valley Traverse", text: "Complete another demanding trekking day through high terrain as conditions permit." },
        { day: "Day 17 — Reach Dho Tarap Area", text: "Arrive in the broad Tarap Valley and rest among its traditional villages." },
        { day: "Day 18 — Dho Tarap to Lower Valley", text: "Begin the long descent through canyon country toward lower Dolpo." },
        { day: "Day 19 — Continue to Dunai / Juphal Route", text: "Complete the final remote trekking section toward the road and air gateway." },
        { day: "Day 20 — Juphal to Nepalgunj / Kathmandu", text: "Fly out of Dolpo when weather permits and connect onward according to the operating schedule." },
        { day: "Day 21 — Contingency / Departure", text: "Reserved as an expedition buffer for weather, pass conditions, or flight delays, then onward departure." }
      ],
      goodToKnow: ["Upper Dolpo requires special restricted-area permits and a properly arranged expedition", "The exact route varies with permit plan, pass conditions, and campsite logistics", "Snow may make high passes impassable", "Comprehensive rescue insurance and strong trekking experience are essential"]
    },

    "kathmandu-food-walk": {
      highlights: ["Local markets and hidden food lanes", "Tea shops and family-run eateries", "Newari and broader Nepali flavours", "Small tastings across several stops"],
      itinerary: [
        { day: "Start — Meet in Central Kathmandu", text: "Meet your local food host, discuss dietary restrictions, and begin with a light tea or snack." },
        { day: "Market & Street Food Stops", text: "Walk through local market lanes and try selected snacks, breads, dumplings, sweets, or seasonal dishes." },
        { day: "Family-Run Eatery", text: "Sit down at a small local restaurant for a more substantial tasting and learn how the dishes fit into everyday life." },
        { day: "Finish — Tea or Dessert", text: "End with tea, dessert, or another local favourite and receive suggestions for further food exploration." }
      ],
      goodToKnow: ["Exact food stops vary by day, opening hours, and season", "Tell us about allergies or vegetarian requirements before the tour", "This is a walking experience, so comfortable footwear is recommended"]
    },

    "newari-food-experience": {
      highlights: ["Traditional Newari dishes", "Cultural explanation of feast traditions", "Historic Newari neighbourhood setting", "Local host or food guide"],
      itinerary: [
        { day: "Morning / Afternoon — Old Town Walk", text: "Meet your host and explore a Newari neighbourhood, market, or courtyard while learning about food and festival traditions." },
        { day: "Main Tasting — Newari Feast", text: "Taste a curated selection of Newari dishes at a local restaurant or family setting, adapted to dietary preferences where possible." },
        { day: "Finish — Dessert, Tea & Stories", text: "End with a sweet, tea, or local beverage while discussing the role of food in Newari family and festival life." }
      ]
    },

    "tharu-food-culture": {
      highlights: ["Tharu cuisine and Terai ingredients", "Village culture and hospitality", "Traditional cooking demonstration", "Optional cultural performance depending on location"],
      itinerary: [
        { day: "Day 1 — Arrive in the Tharu Community", text: "Travel to the selected village, meet local hosts, walk through the community, and join an evening cooking and dinner experience." },
        { day: "Day 2 — Food, Farming & Culture", text: "Explore local agriculture and food traditions, enjoy lunch with the hosts, and include a cultural activity or performance where available before departure." }
      ]
    },

    "tamang-food-experience": {
      highlights: ["Tamang home-style food", "Hill-village setting", "Local ingredients and cooking methods", "Stories of Tamang culture and hospitality"],
      itinerary: [
        { day: "Morning — Travel to the Hill Community", text: "Meet your host and travel to a suitable Tamang community in the Kathmandu hills or nearby area." },
        { day: "Midday — Kitchen & Meal", text: "Learn about local ingredients, help with simple meal preparation, and enjoy a traditional lunch." },
        { day: "Afternoon — Village Walk & Return", text: "Take a short village or ridge walk, spend time with the hosts, and return to Kathmandu." }
      ]
    },

    "sherpa-kitchen-experience": {
      highlights: ["Sherpa and high-Himalayan food traditions", "Butter tea or regional hot drinks where available", "Hands-on cooking or kitchen demonstration", "Stories about food in the Everest region"],
      itinerary: [
        { day: "Introduction — Sherpa Food Culture", text: "Meet the host, learn how altitude, climate, and trade shaped Sherpa food traditions, and review the menu." },
        { day: "Kitchen Session — Prepare the Meal", text: "Help prepare selected Himalayan dishes and learn about grains, potatoes, soups, breads, tea, and preserved foods." },
        { day: "Meal & Conversation", text: "Share the meal and discuss Sherpa family life, trekking culture, and food traditions." }
      ]
    },

    "kathmandu-heritage-tour": {
      highlights: ["UNESCO-listed heritage areas", "Temples, courtyards, markets, and living neighbourhoods", "Local guide interpretation", "Time for food, photography, and artisan encounters"],
      itinerary: [
        { day: "Day 1 — Kathmandu & Swayambhunath", text: "Explore Kathmandu Durbar Square and surrounding old-town lanes, then continue to Swayambhunath for heritage, religious context, and valley views." },
        { day: "Day 2 — Pashupatinath, Boudhanath & Local Neighbourhoods", text: "Visit Pashupatinath respectfully, walk the kora around Boudhanath, and include local food, monastery, artisan, or neighbourhood stops according to interest." }
      ],
      goodToKnow: ["Heritage-site entry fees and temple access rules vary", "Some sacred areas are restricted to practitioners of specific faiths", "Dress respectfully and ask before photographing people or rituals", "Traffic can change the order of the day's visits"]
    },

    "bhaktapur-living-heritage": {
      highlights: ["Bhaktapur Durbar Square", "Pottery Square", "Nyatapola and Taumadhi area", "Newari streets, courtyards, food, and crafts"],
      itinerary: [
        { day: "Morning — Bhaktapur Durbar Square", text: "Meet your guide and explore the palace square, temples, courtyards, and traditional architecture." },
        { day: "Midday — Pottery, Food & Local Streets", text: "Walk through Pottery Square and residential lanes, meet artisans where possible, and stop for a Newari lunch or snack." },
        { day: "Afternoon — Taumadhi & Dattatreya", text: "Continue through Taumadhi Square toward Dattatreya and quieter heritage neighbourhoods before returning." }
      ]
    },

    "yoga-meditation-retreat": {
      highlights: ["Daily guided yoga", "Meditation and breathwork", "Healthy meals", "Quiet time in a Himalayan or valley setting", "Flexible wellness pace"],
      itinerary: [
        { day: "Day 1 — Arrival & Wellness Orientation", text: "Check in, meet the retreat facilitator, review your goals and health considerations, and join a gentle evening meditation." },
        { day: "Day 2 — Yoga, Breath & Mindfulness", text: "Morning yoga and pranayama, healthy meals, rest time, and an afternoon mindfulness or guided meditation session." },
        { day: "Day 3 — Deeper Practice & Nature", text: "Continue morning practice, add a quiet nature walk or reflective activity, and finish with evening meditation." },
        { day: "Day 4 — Personal Practice & Slow Day", text: "Combine guided sessions with free time, journaling, optional massage or wellness treatment, and restorative yoga." },
        { day: "Day 5 — Closing Practice & Departure", text: "Final yoga and meditation session, closing discussion, breakfast or lunch, and departure." }
      ],
      goodToKnow: ["This is a wellness experience, not a substitute for medical care", "Tell the instructor about injuries, pregnancy, or health limitations before practice", "Program intensity can be adjusted for beginners"]
    },

    "dashain-experience": {
      highlights: ["Family tika and blessings where appropriate", "Dashain food and household traditions", "Bamboo swing or community celebration where available", "Explanation of the festival's meaning and regional variations"],
      itinerary: [
        { day: "Day 1 — Dashain Context & Preparation", text: "Meet your host, learn about the festival calendar, visit a market or neighbourhood, and see how families prepare food, clothing, and offerings." },
        { day: "Day 2 — Family Celebration", text: "Spend the main celebration period with a host family where appropriate, observe or participate respectfully in tika, blessings, shared meals, and family gatherings." },
        { day: "Day 3 — Community Traditions & Farewell", text: "Explore local Dashain activities such as swings, visits, or community gatherings, then finish with a farewell meal or cultural reflection." }
      ],
      goodToKnow: ["Dashain follows the lunar calendar, so dates change each year", "Family participation depends on the host community and exact festival day", "The experience is designed to be respectful rather than staged", "Some businesses and transport operate on reduced schedules during the festival"]
    },

    "everest-helicopter-tour": {
      highlights: ["Everest-region helicopter flight", "Panoramic Himalayan views", "Short scenic landing when operating conditions allow", "Same-day return to Kathmandu"],
      itinerary: [
        { day: "Early Morning — Airport Transfer", text: "Transfer from your hotel to the domestic airport, complete check-in, and receive the operator briefing." },
        { day: "Morning — Helicopter Flight", text: "Fly toward the Khumbu region with views of Himalayan peaks and valleys. Routing is controlled by weather and aviation conditions." },
        { day: "Scenic Stop — Everest Region", text: "Land at the permitted location for a short scenic stop or breakfast when conditions, payload, and aviation rules allow." },
        { day: "Late Morning — Return", text: "Fly back to Kathmandu and transfer to your hotel." }
      ],
      goodToKnow: ["All helicopter operations are weather and aviation dependent", "Landing locations and flight routing can change", "Weight limits and passenger distribution are set by the operator", "Rescheduling and refund conditions are confirmed before payment"]
    },

    "paragliding-pokhara": {
      highlights: ["Tandem flight from the Pokhara hills", "Views over Phewa Lake", "Himalayan panorama when visibility is good", "Professional pilot and safety briefing"],
      itinerary: [
        { day: "Pickup & Transfer", text: "Meet at the operator's office or pickup point and drive to the approved take-off site." },
        { day: "Safety Briefing", text: "Meet your tandem pilot, review take-off and landing instructions, and prepare the flying equipment." },
        { day: "Tandem Flight", text: "Launch when wind conditions are suitable and enjoy the scheduled flight duration over the Pokhara valley and lake area." },
        { day: "Landing & Return", text: "Land at the designated field, collect photos or video if purchased, and return to the agreed drop-off point." }
      ],
      goodToKnow: ["Paragliding depends on wind and weather", "Flight duration varies with thermal conditions", "Follow the pilot's take-off and landing instructions exactly", "Age, weight, and medical restrictions are confirmed by the operating company"]
    }
,

    "bird-watching-nepal": {
      highlights: ["Early-morning birding with local naturalist guidance", "Forests, wetlands, foothills, or grassland habitats selected by season", "Small-group, low-impact wildlife observation", "Flexible pace for birders, photographers, and nature lovers"],
      bestFor: ["Birdwatchers and wildlife photographers", "Nature-focused travellers", "Beginners who want guided birding in Nepal"],
      itinerary: [
        { day: "Sample Day 1 — Dawn Birding & Habitat Walk", text: "Start early at a selected birding site, walk slowly with a local naturalist, learn about habitat and behaviour, and take a relaxed midday break before an optional late-afternoon session." },
        { day: "Sample Day 2 — Forest, Wetland or Foothill Route", text: "Visit a contrasting habitat chosen for the season and current conditions, with time for observation, photography, and local nature interpretation." },
        { day: "Optional Days 3–5 — Extended Birding", text: "Add another valley, wetland, forest, or Chitwan-area birding section when your schedule allows. The exact route is confirmed according to season and access." }
      ],
      goodToKnow: ["Bird and wildlife sightings are never guaranteed", "Early starts usually give the best birding conditions", "Bring binoculars if you have them", "Sites and timing change with season, weather, access, and migration patterns"]
    },

    "nepal-motorbike-adventure": {
      highlights: ["Guided riding through Nepal's hill roads and valleys", "Village, viewpoint, and cultural stops along the route", "Flexible 5–10 day road-trip format", "Route planning adapted to rider experience and road conditions"],
      bestFor: ["Experienced motorcycle travellers", "Adventure riders seeking a guided Nepal road journey", "Small groups comfortable with changing road conditions"],
      itinerary: [
        { day: "Sample Day 1 — Rider Briefing & Bike Check", text: "Meet the road team, review the route, riding rules, documents, weather, safety gear, luggage setup, and complete a short familiarization ride." },
        { day: "Sample Day 2 — Kathmandu to Hill Country", text: "Leave the city and ride into Nepal's middle hills, stopping at viewpoints, villages, and local tea houses while keeping the first day at a comfortable pace." },
        { day: "Sample Day 3 — Mountain Roads & Village Stops", text: "Continue on a scenic route chosen for the season, with regular rest stops and time to experience local communities." },
        { day: "Sample Day 4 — Ride toward Pokhara or Selected Region", text: "Follow the confirmed road route toward the next major destination, adjusting the day to traffic, weather, and road conditions." },
        { day: "Sample Day 5 — Scenic Loop / Rest Day", text: "Choose a shorter local ride, viewpoint route, cultural stop, or rest day before continuing the journey." },
        { day: "Sample Days 6–9 — Extended Himalayan Road Journey", text: "Continue through the selected region on a route suited to the riders, season, and current road access." },
        { day: "Final Day — Return & Ride Finish", text: "Complete the final riding section, return the motorcycle according to the operator arrangement, and finish with onward travel support." }
      ],
      goodToKnow: ["Self-riding is subject to valid licence, documentation, local rules, and operator eligibility requirements", "A helmet and appropriate protective riding gear are essential", "Road and weather conditions can change the route", "The guide or road captain may change the plan for safety"]
    },

    "nepal-cycling-adventure": {
      highlights: ["Valley trails, forest roads, villages, and Himalayan foothills", "Routes for leisure riders through experienced mountain bikers", "Flexible day rides or multi-day cycling journeys", "Local guide support and route selection based on fitness"],
      bestFor: ["Active travellers", "Mountain bikers and recreational cyclists", "Guests wanting slower, human-powered exploration"],
      itinerary: [
        { day: "Sample Day 1 — Bike Fit, Briefing & Valley Ride", text: "Set up the bicycle, review trail safety and route options, then begin with a ride through a suitable valley, village, or forest-road section." },
        { day: "Sample Day 2 — Ridge, Village & Scenic Trails", text: "Ride a longer route with climbs, descents, cultural stops, and viewpoints chosen for the group's ability." },
        { day: "Sample Day 3 — Trail Loop or Point-to-Point Ride", text: "Complete another selected route and finish at the planned roadhead or city. Longer 4–7 day versions continue into additional regions." }
      ],
      goodToKnow: ["Routes are selected according to riding ability and current trail conditions", "Helmet use is required and additional protective gear is recommended for technical riding", "Weather and local access can change the route", "E-bikes, support vehicles, and bike specifications depend on the confirmed quotation"]
    }
  };

  window.experienceEnhancementsV3 = details;

  Object.values(window.experienceDataV2).forEach(function (category) {
    (category.items || []).forEach(function (item) {
      if (details[item.id]) {
        Object.assign(item, details[item.id]);
      }
    });
  });
})();

// Professional trekking package facts shown on experience detail pages.
(function () {
  if (!window.experienceDataV2) return;

  const trekFacts = {
    "everest-base-camp-trek": {
      maxAltitude: "5,545 m / 18,192 ft (Kala Patthar)",
      walking: "Typically 4–7 hrs/day; longer on EBC and Kala Patthar days",
      accommodation: "Kathmandu hotel + mountain teahouses/lodges",
      meals: "Teahouse meals on trail; exact meal inclusions follow the quotation",
      transport: "Kathmandu/Ramechhap–Lukla mountain flights + local transfers",
      permits: "Sagarmatha National Park and current local Khumbu trekking permits",
      startEnd: "Kathmandu → Lukla → Everest Base Camp → Lukla → Kathmandu",
      routeNote: "Lukla flights, walking times and overnight stops can change with weather, trail conditions, acclimatization and flight operations."
    },
    "annapurna-base-camp-trek": {
      maxAltitude: "4,130 m / 13,550 ft (Annapurna Base Camp)",
      walking: "Typically 4–7 hrs/day on trekking days",
      accommodation: "Kathmandu/Pokhara hotel + mountain teahouses/lodges",
      meals: "Teahouse meals on trail; city meals according to the confirmed package",
      transport: "Kathmandu–Pokhara transport + road transfer to/from the trailhead",
      permits: "Annapurna Conservation Area permit and current trekking requirements",
      startEnd: "Kathmandu → Pokhara → Annapurna Sanctuary → Pokhara → Kathmandu",
      routeNote: "Road access and the exact trailhead may change as local roads develop."
    },
    "langtang-valley-trek": {
      maxAltitude: "3,870 m / 12,697 ft at Kyanjin Gompa; optional viewpoints are higher",
      walking: "Typically 5–7 hrs/day on trekking days",
      accommodation: "Kathmandu hotel + local teahouses/lodges",
      meals: "Teahouse meals on trail; exact inclusions confirmed in the quotation",
      transport: "Road transfer Kathmandu–Syabrubesi–Kathmandu",
      permits: "Langtang National Park permit and current trekking requirements",
      startEnd: "Kathmandu → Syabrubesi → Kyanjin Gompa → Syabrubesi → Kathmandu",
      routeNote: "The optional Kyanjin viewpoint hike is selected according to weather, fitness and acclimatization."
    },
    "everest-three-passes-trek": {
      maxAltitude: "About 5,545 m / 18,192 ft, with several 5,000 m+ pass crossings",
      walking: "Usually 5–8 hrs/day; major pass days can reach 8–10 hrs",
      accommodation: "Kathmandu hotel + mountain teahouses/lodges",
      meals: "Teahouse meals on trail; exact meal inclusions follow the quotation",
      transport: "Kathmandu/Ramechhap–Lukla mountain flights + local transfers",
      permits: "Sagarmatha National Park and current local Khumbu trekking permits",
      startEnd: "Kathmandu → Lukla → Three Passes / EBC / Gokyo → Lukla → Kathmandu",
      routeNote: "Pass crossings are subject to snow, ice, wind, guide assessment and group condition."
    },
    "annapurna-circuit-trek": {
      maxAltitude: "5,416 m / 17,769 ft (Thorong La)",
      walking: "Typically 5–7 hrs/day; Thorong La day can take 8–10 hrs",
      accommodation: "City hotels + teahouses/lodges on the circuit",
      meals: "Teahouse meals on trail; city meals according to the confirmed package",
      transport: "Road transfers to the circuit; return via road and/or flight options",
      permits: "Annapurna Conservation Area permit and current trekking requirements",
      startEnd: "Kathmandu → Manang → Thorong La → Muktinath/Jomsom → Pokhara → Kathmandu",
      routeNote: "Road development means the trekking start/end points may be adjusted to preserve the best walking sections."
    },
    "thorong-la-pass-trek": {
      maxAltitude: "5,416 m / 17,769 ft (Thorong La)",
      walking: "Typically 5–7 hrs/day; pass-crossing day can take 8–10 hrs",
      accommodation: "City hotels + mountain teahouses/lodges",
      meals: "Teahouse meals on trail; exact inclusions follow the quotation",
      transport: "Road transfer to the trekking gateway; return via Jomsom/Pokhara options",
      permits: "Annapurna Conservation Area permit and current trekking requirements",
      startEnd: "Kathmandu → Manang → Thorong La → Muktinath/Jomsom → Pokhara → Kathmandu",
      routeNote: "Thorong La is crossed only when acclimatization, weather, snow and trail conditions are suitable."
    },
    "mardi-himal-trek": {
      maxAltitude: "Approx. 4,200 m / 13,780 ft at the main viewpoint; higher trail options vary",
      walking: "Typically 4–7 hrs/day",
      accommodation: "Pokhara hotel + simple mountain teahouses/lodges",
      meals: "Teahouse meals on trail; exact inclusions follow the quotation",
      transport: "Road transfer from Pokhara to the trailhead and return from Siding/roadhead",
      permits: "Annapurna Conservation Area permit and current trekking requirements",
      startEnd: "Pokhara → Forest/Low Camp → High Camp → Mardi viewpoint → Siding → Pokhara",
      routeNote: "The highest safe point depends on weather, snow, visibility, fitness and trail conditions."
    },
    "tilicho-lake-trek": {
      maxAltitude: "4,919 m / 16,138 ft (Tilicho Lake)",
      walking: "Typically 5–7 hrs/day; lake day can take about 7–9 hrs",
      accommodation: "City hotels + mountain teahouses/lodges",
      meals: "Teahouse meals on trail; exact inclusions follow the quotation",
      transport: "Road transfers to/from the Annapurna trekking gateway",
      permits: "Annapurna Conservation Area permit and current trekking requirements",
      startEnd: "Kathmandu → Manang → Khangsar → Tilicho Base Camp/Lake → return route → Kathmandu",
      routeNote: "Landslide, snow and ice conditions can affect the Tilicho side trail and road-access points."
    },
    "shey-phoksundo-trek": {
      maxAltitude: "Around 3,611 m / 11,847 ft at Phoksundo Lake, with nearby viewpoints varying",
      walking: "Typically 4–7 hrs/day on trekking days",
      accommodation: "Kathmandu/Nepalgunj hotel + simple lodges/teahouses where available",
      meals: "Local lodge meals on trek; exact inclusions confirmed in the quotation",
      transport: "Kathmandu–Nepalgunj–Juphal domestic flights + trekking transfers",
      permits: "Shey Phoksundo National Park plus any Dolpo permit required for the confirmed route",
      startEnd: "Kathmandu → Nepalgunj → Juphal → Phoksundo Lake → Juphal → Kathmandu",
      routeNote: "Remote flights are weather dependent and at least one contingency day is strongly recommended."
    },
    "upper-dolpo-trek": {
      maxAltitude: "5,000 m+; exact maximum depends on the permitted high-pass route",
      walking: "Usually 6–8 hrs/day; high-pass days may be longer",
      accommodation: "Expedition-style camping and simple local lodges where available",
      meals: "Expedition/trek meals as specified in the confirmed quotation",
      transport: "Kathmandu–Nepalgunj–Juphal flights + expedition trekking logistics",
      permits: "Upper Dolpo restricted-area permit, Shey Phoksundo National Park and current expedition requirements",
      startEnd: "Kathmandu → Nepalgunj → Juphal → Phoksundo / Shey / Upper Dolpo circuit → Juphal → Kathmandu",
      routeNote: "The exact route, passes, camps and permit plan are finalized before booking because conditions and regulations can change."
    }
  };

  function slug(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function findExperience(id) {
    let match = null;
    Object.values(window.experienceDataV2).some(function (category) {
      match = (category.items || []).find(function (item) {
        return item.id === id || item.slug === id || slug(item.name) === id;
      }) || null;
      return Boolean(match);
    });
    return match;
  }

  Object.values(window.experienceDataV2).forEach(function (category) {
    (category.items || []).forEach(function (item) {
      if (trekFacts[item.id]) item.trekFacts = trekFacts[item.id];
    });
  });

  if (typeof document === "undefined") return;

  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("experience") || params.get("id");
    const selected = findExperience(id);
    if (!selected || !selected.trekFacts) return;

    const facts = selected.trekFacts;
    const container = document.getElementById("experienceContainer");
    const infoBar = container && container.querySelector(".info-bar");
    if (!infoBar) return;

    const style = document.createElement("style");
    style.textContent = `
      .trek-facts-panel{margin:0 0 30px;padding:28px;border-radius:28px;background:#fff;box-shadow:0 18px 45px rgba(0,0,0,.08);border:1px solid rgba(23,77,47,.09)}
      .trek-facts-head{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:20px}
      .trek-facts-head h2{margin:0;color:#174d2f;font-family:"Playfair Display",serif;font-size:30px}
      .trek-facts-head p{margin:0;color:#64748b;font-size:13px;font-weight:700;text-align:right}
      .trek-facts-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .trek-fact{padding:17px;border-radius:18px;background:#f8faf7;border:1px solid rgba(23,77,47,.08)}
      .trek-fact strong{display:block;margin-bottom:5px;color:#174d2f;font-size:12px;letter-spacing:.04em;text-transform:uppercase}
      .trek-fact span{display:block;color:#374151;font-weight:700;line-height:1.55}
      .trek-route-note{grid-column:1/-1;padding:18px 20px;border-left:4px solid #9fba6b;border-radius:16px;background:#edf5eb;color:#475467;line-height:1.65}
      @media(max-width:640px){.trek-facts-panel{padding:20px;border-radius:22px}.trek-facts-head{align-items:flex-start;flex-direction:column}.trek-facts-head p{text-align:left}.trek-facts-grid{grid-template-columns:1fr}.trek-route-note{grid-column:auto}}
    `;
    document.head.appendChild(style);

    const panel = document.createElement("section");
    panel.className = "trek-facts-panel";
    panel.setAttribute("aria-label", "Trek essentials");
    panel.innerHTML = `
      <div class="trek-facts-head">
        <h2>Trek Essentials</h2>
        <p>Indicative route facts — final logistics are reconfirmed before departure.</p>
      </div>
      <div class="trek-facts-grid">
        <div class="trek-fact"><strong>Maximum Altitude</strong><span>${facts.maxAltitude}</span></div>
        <div class="trek-fact"><strong>Typical Walking</strong><span>${facts.walking}</span></div>
        <div class="trek-fact"><strong>Accommodation</strong><span>${facts.accommodation}</span></div>
        <div class="trek-fact"><strong>Meals</strong><span>${facts.meals}</span></div>
        <div class="trek-fact"><strong>Transport</strong><span>${facts.transport}</span></div>
        <div class="trek-fact"><strong>Permits</strong><span>${facts.permits}</span></div>
        <div class="trek-fact"><strong>Start / Finish</strong><span>${facts.startEnd}</span></div>
        <div class="trek-route-note"><strong>Route note:</strong> ${facts.routeNote}</div>
      </div>
    `;
    infoBar.insertAdjacentElement("afterend", panel);
  });
})();
