const experienceDataV2 = {
  signature: {
    title: "Signature Experiences",
    heading: "Signature Experiences",
    text: "Discover deeper, more meaningful journeys designed to help travelers feel Nepal through people, culture, food, and unforgettable moments.",
    image: "images/experience-feature.jpg",
    buttonLink: "experience-v2.html?category=signature",
    items: [
      {
        id: "live-like-a-nepali",
        name: "Live Like a Nepali",
        duration: "7 Days",
        price: "From $650",
        location: "Kathmandu Valley / Village Experience",
        subtitle: "Stay with locals, share meals, and experience everyday Nepali life from the inside.",
        overview: "Live with a local family, share authentic meals, take part in daily routines, and experience Nepal through connection rather than sightseeing alone.",
        highlights: ["Village homestay", "Home-cooked meals", "Cultural exchange", "Daily local life"],
        itinerary: [
          { day: "Day 1", text: "Arrival in Kathmandu and welcome dinner." },
          { day: "Day 2", text: "Travel to village and settle into homestay." },
          { day: "Day 3", text: "Cook with local family and join daily activities." },
          { day: "Day 4", text: "Short hike, village interaction, and storytelling evening." }
        ]
      },
      {
        id: "women-only-cultural-journey",
        name: "Women-Only Cultural Journey",
        duration: "6 Days",
        price: "From $720",
        location: "Kathmandu / Bhaktapur / Village Stay",
        subtitle: "A safe, empowering, and meaningful way for women to explore Nepal together.",
        overview: "Travel through Nepal with a thoughtfully designed women-focused itinerary that centers safety, culture, connection, and confidence.",
        highlights: ["Female-friendly travel", "Cultural workshops", "Curated stays", "Community connection"],
        itinerary: [
          { day: "Day 1", text: "Arrival and cultural welcome." },
          { day: "Day 2", text: "Kathmandu heritage and local interactions." },
          { day: "Day 3", text: "Travel to village and women-led activities." }
        ]
      },
      {
        id: "taste-of-nepal",
        name: "Taste of Nepal",
        duration: "3 Days",
        price: "From $280",
        location: "Kathmandu",
        subtitle: "From market to kitchen to table — discover Nepal through its food and stories.",
        overview: "Learn Nepal through flavor, ingredients, local kitchens, and the stories behind beloved dishes.",
        highlights: ["Cooking class", "Market visit", "Traditional meals", "Food storytelling"],
        itinerary: [
          { day: "Day 1", text: "Arrival and welcome tasting session." },
          { day: "Day 2", text: "Market walk and cooking experience." },
          { day: "Day 3", text: "Breakfast and departure." }
        ]
      }
    ]
  },

  trekking: {
    title: "Trekking & Mountain Journeys",
    heading: "Trekking & Mountain Journeys",
    text: "Explore Nepal’s most iconic trails, from short scenic hikes to unforgettable Himalayan expeditions.",
    image: "images/trekking-feature.jpg",
    buttonLink: "experience-v2.html?category=trekking",
    items: [
      {
        id: "everest-base-camp-trek",
        name: "Everest Base Camp Trek",
        duration: "14 Days",
        price: "From $1450",
        location: "Everest Region",
        subtitle: "A legendary Himalayan journey to the base of the world’s highest peak.",
        overview: "Walk through Sherpa villages, suspension bridges, and alpine landscapes on one of the world’s most iconic trekking routes.",
        highlights: ["Sherpa culture", "Mountain lodges", "High-altitude trek", "Everest views"],
        itinerary: [
          { day: "Day 1", text: "Fly to Lukla and trek to Phakding." },
          { day: "Day 2", text: "Trek to Namche Bazaar." }
        ]
      },
      {
        id: "annapurna-base-camp-trek",
        name: "Annapurna Base Camp Trek",
        duration: "13 Days",
        price: "From $980",
        location: "Annapurna Region",
        subtitle: "A classic trek through villages, forests, and mountain amphitheaters.",
        overview: "Reach the heart of Annapurna surrounded by towering Himalayan peaks and rich Gurung culture.",
        highlights: ["Tea houses", "Forest trails", "ABC sunrise", "Village route"],
        itinerary: [
          { day: "Day 1", text: "Drive to trailhead and begin trek." },
          { day: "Day 2", text: "Trek through mountain villages." }
        ]
      },
      {
        id: "mardi-himal-trek",
        name: "Mardi Himal Trek",
        duration: "5 Days",
        price: "From $420",
        location: "Annapurna Region",
        subtitle: "A short, scenic ridge trek with spectacular mountain views.",
        overview: "Perfect for travelers who want a beautiful Himalayan trek in fewer days.",
        highlights: ["Short trek", "Ridge views", "Beginner-friendly", "Great photography"],
        itinerary: [
          { day: "Day 1", text: "Drive to Kande and begin trekking." },
          { day: "Day 2", text: "Trek through forest and ridge trail." }
        ]
      }
    ]
  },

  spiritual: {
    title: "Spiritual & Heritage",
    heading: "Spiritual & Heritage",
    text: "Step into Nepal’s sacred spaces, ancient cities, and living traditions that still shape daily life.",
    image: "images/spiritual-feature.jpg",
    buttonLink: "experience-v2.html?category=spiritual",
    items: [
      {
        id: "boudhanath-kora-experience",
        name: "Boudhanath Kora Experience",
        duration: "1 Day",
        price: "From $55",
        location: "Kathmandu",
        subtitle: "Walk around one of the world’s great stupas and feel its quiet rhythm.",
        overview: "Join the evening kora, spin prayer wheels, and experience the atmosphere of one of Nepal’s most spiritual places.",
        highlights: ["Prayer wheels", "Stupa circuit", "Local guide", "Sunset atmosphere"],
        itinerary: [
          { day: "Day 1", text: "Arrival, guided walk, kora, tea, and cultural insights." }
        ]
      }
    ]
  },

  adventure: {
    title: "Adventure & Adrenaline",
    heading: "Adventure & Adrenaline",
    text: "Feel Nepal’s wild energy through high-impact experiences in rivers, skies, trails, and mountains.",
    image: "images/adventure-feature.jpg",
    buttonLink: "experience-v2.html?category=adventure",
    items: [
      {
        id: "paragliding-in-pokhara",
        name: "Paragliding in Pokhara",
        duration: "1 Day",
        price: "From $110",
        location: "Pokhara",
        subtitle: "Fly above lakes and mountains in one of the world’s best paragliding destinations.",
        overview: "Take in breathtaking views of Pokhara, Phewa Lake, and the Annapurna range from the sky.",
        highlights: ["Aerial views", "Expert pilot", "Lake and mountain scenery", "Short activity"],
        itinerary: [
          { day: "Day 1", text: "Transfer, briefing, flight, and return." }
        ]
      }
    ]
  },

  hidden: {
    title: "Hidden Gems & Offbeat Nepal",
    heading: "Hidden Gems & Offbeat Nepal",
    text: "Go beyond the usual route and discover the quieter, deeper, and less-traveled side of Nepal.",
    image: "images/hidden-feature.jpg",
    buttonLink: "experience-v2.html?category=hidden",
    items: [
      {
        id: "rara-lake-journey",
        name: "Rara Lake Journey",
        duration: "7 Days",
        price: "From $1150",
        location: "Mugu",
        subtitle: "A journey to Nepal’s serene blue lake far from the usual tourist path.",
        overview: "Experience remote landscapes, peaceful nature, and one of Nepal’s most beautiful hidden gems.",
        highlights: ["Remote region", "Lake views", "Peaceful escape", "Offbeat travel"],
        itinerary: [
          { day: "Day 1", text: "Flight and drive toward Rara region." },
          { day: "Day 2", text: "Explore lake surroundings and local area." }
        ]
      }
    ]
  },

  festivals: {
    title: "Festival & Seasonal Experiences",
    heading: "Festival Experiences",
    text: "Travel through Nepal’s seasons of color, celebration, ritual, and living local energy.",
    image: "images/festival-feature.jpg",
    buttonLink: "experience-v2.html?category=festivals",
    items: [
      {
        id: "bisket-jatra-experience",
        name: "Bisket Jatra Experience",
        duration: "Seasonal",
        price: "Custom",
        location: "Bhaktapur",
        subtitle: "Witness one of Nepal’s most intense and exciting traditional festivals.",
        overview: "Experience Bhaktapur at its most alive with rituals, crowds, celebration, and cultural depth.",
        highlights: ["Festival access", "Local guide", "Historic city", "Seasonal event"],
        itinerary: [
          { day: "Day 1", text: "Arrival in Bhaktapur and guided festival experience." }
        ]
      }
    ]
  }
};

function getAllExperiencesV2() {
  return Object.values(experienceDataV2).flatMap(section => section.items);
}

function renderCategoryV2(key) {
  const section = experienceDataV2[key];
  if (!section) return;

  const title = document.getElementById("experienceTitleV2");
  const heading = document.getElementById("featureHeadingV2");
  const text = document.getElementById("featureTextV2");
  const list = document.getElementById("experienceListV2");
  const featureCard = document.getElementById("featureCardV2");
  const featureBtn = document.getElementById("featureBtnV2");

  if (title) title.textContent = section.title;
  if (heading) heading.textContent = section.heading;
  if (text) text.textContent = section.text;

  if (featureCard) {
    featureCard.style.background =
      `linear-gradient(rgba(10, 94, 59, 0.72), rgba(6, 74, 45, 0.88)), url('${section.image}') center/cover no-repeat`;
  }

  if (featureBtn) {
    featureBtn.href = section.buttonLink || "experience-v2.html";
  }

  if (list) {
    list.innerHTML = section.items.map(item => `
      <a href="experience-detail-v2.html?id=${item.id}" class="experience-link-v2">
        <span>${item.name}</span>
        <small>${item.duration}</small>
      </a>
    `).join("");
  }
}

function renderDetailPageV2() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = getAllExperiencesV2().find(exp => exp.id === id);

  if (!item) return;

  document.title = `${item.name} | Rigan Roots & Routes`;

  const detailTitle = document.getElementById("detailTitleV2");
  const detailSubtitle = document.getElementById("detailSubtitleV2");
  const detailOverview = document.getElementById("detailOverviewV2");
  const detailDuration = document.getElementById("detailDurationV2");
  const detailPrice = document.getElementById("detailPriceV2");
  const detailLocation = document.getElementById("detailLocationV2");
  const detailHighlights = document.getElementById("detailHighlightsV2");
  const detailItinerary = document.getElementById("detailItineraryV2");
  const detailHero = document.getElementById("detailHeroV2");

  if (detailTitle) detailTitle.textContent = item.name;
  if (detailSubtitle) detailSubtitle.textContent = item.subtitle;
  if (detailOverview) detailOverview.textContent = item.overview;
  if (detailDuration) detailDuration.textContent = item.duration;
  if (detailPrice) detailPrice.textContent = item.price;
  if (detailLocation) detailLocation.textContent = item.location;

  if (detailHighlights) {
    detailHighlights.innerHTML = item.highlights.map(point => `<li>${point}</li>`).join("");
  }

  if (detailItinerary) {
    detailItinerary.innerHTML = item.itinerary.map(day => `
      <div class="itinerary-day-v2">
        <h4>${day.day}</h4>
        <p>${day.text}</p>
      </div>
    `).join("");
  }

  if (detailHero) {
    detailHero.style.background =
      `linear-gradient(rgba(10, 94, 59, 0.55), rgba(10, 94, 59, 0.75)), url('images/${item.id}.jpg') center/cover no-repeat`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarButtons = document.querySelectorAll(".sidebar-item-v2");

  if (sidebarButtons.length) {
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category") || "signature";

    renderCategoryV2(selectedCategory);

    sidebarButtons.forEach(button => {
      if (button.dataset.region === selectedCategory) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }

      button.addEventListener("click", () => {
        sidebarButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderCategoryV2(button.dataset.region);
      });
    });
  }

  if (document.getElementById("detailTitleV2")) {
    renderDetailPageV2();
  }
});
