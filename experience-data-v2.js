<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Experience Detail | Rigan Roots & Routes</title>
  <link rel="stylesheet" href="experience-v2.css" />
</head>

<body>

<section class="detail-page-v2">
  <div class="detail-hero-v2" id="detailHeroV2">
    <div class="detail-hero-overlay-v2"></div>
    <div class="detail-hero-content-v2">
      <p class="detail-label-v2">Rigan Experience</p>
      <h1 id="detailTitleV2">Loading...</h1>
      <p id="detailSubtitleV2">Please wait...</p>
    </div>
  </div>

  <div class="detail-container-v2">
    <div class="detail-grid-v2">

      <div class="detail-main-v2">
        <div class="detail-section-v2">
          <h2>Overview</h2>
          <p id="detailOverviewV2"></p>
        </div>

        <div class="detail-section-v2">
          <h2>Highlights</h2>
          <ul id="detailHighlightsV2"></ul>
        </div>

        <div class="detail-section-v2">
          <h2>Sample Itinerary</h2>
          <div id="detailItineraryV2"></div>
        </div>
      </div>

      <aside class="detail-sidebar-v2">
        <div class="booking-card-v2">
          <h3>Quick Info</h3>
          <p><strong>Duration:</strong> <span id="detailDurationV2"></span></p>
          <p><strong>Price:</strong> <span id="detailPriceV2"></span></p>
          <p><strong>Location:</strong> <span id="detailLocationV2"></span></p>

          <a href="#" class="book-btn-v2" id="whatsappBookBtn" target="_blank">
            Book This Experience
          </a>

          <a href="experience-v2.html" class="book-btn-v2" style="margin-top:12px;background:#333;">
            Back to Experiences
          </a>
        </div>
      </aside>

    </div>
  </div>
</section>


<script>
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const experienceId = params.get("id") || params.get("experience");

  if (typeof experienceDataV2 === "undefined") {
    document.getElementById("detailTitleV2").textContent = "Data File Not Loaded";
    document.getElementById("detailSubtitleV2").textContent = "Please check experience-data-v2.js file name and location.";
    return;
  }

  const allExperiences = Object.values(experienceDataV2).flatMap(section => section.items);
  const selectedExperience = allExperiences.find(item => item.id === experienceId);

  if (!selectedExperience) {
    document.getElementById("detailTitleV2").textContent = "Experience Not Found";
    document.getElementById("detailSubtitleV2").textContent = "Please open this page from the Experiences page.";
    document.getElementById("detailOverviewV2").textContent = "Missing or wrong experience ID in the URL.";
    return;
  }

  document.title = selectedExperience.name + " | Rigan Roots & Routes";

  document.getElementById("detailHeroV2").style.backgroundImage =
    `linear-gradient(rgba(10, 94, 59, 0.55), rgba(6, 74, 45, 0.78)), url('${selectedExperience.image || "images/experience-feature.jpg"}')`;

  document.getElementById("detailTitleV2").textContent = selectedExperience.name;
  document.getElementById("detailSubtitleV2").textContent = selectedExperience.subtitle;
  document.getElementById("detailOverviewV2").textContent = selectedExperience.overview;
  document.getElementById("detailDurationV2").textContent = selectedExperience.duration;
  document.getElementById("detailPriceV2").textContent = selectedExperience.price;
  document.getElementById("detailLocationV2").textContent = selectedExperience.location;

  document.getElementById("detailHighlightsV2").innerHTML =
    selectedExperience.highlights.map(item => `<li>${item}</li>`).join("");

  document.getElementById("detailItineraryV2").innerHTML =
    selectedExperience.itinerary.map(day => `
      <div class="itinerary-day-v2">
        <h4>${day.day}</h4>
        <p>${day.text}</p>
      </div>
    `).join("");

  const message = encodeURIComponent(
    `Hi Rigan Roots & Routes, I am interested in ${selectedExperience.name}. Please send me details.`
  );

  document.getElementById("whatsappBookBtn").href =
    `https://wa.me/9779843322695?text=${message}`;
});
</script>

</body>
</html>
