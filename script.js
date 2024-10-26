const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search');
let searchVisible = false;

searchIcon.addEventListener('click', () => {
  if (!searchVisible) {
    searchInput.style.display = 'block';
    searchVisible = true;
  } else {
    searchInput.style.display = 'none';
    searchVisible = false;
  }
});


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "20% 50%", // Start when the trigger is at 50% down the viewport
    end: "100% 50%",
     // End when the trigger reaches 120% down the viewport // Enable markers for debugging
    scrub: 1 // Enable scrub for smooth animation
  }
});

tl.to("#heroText-hover", {
  width: "100%", // Animate the width to 100%
  duration: 1 // Optional: specify the duration for the animation
});


//button 

const arrBtns = document.querySelectorAll(".arrow-btn");
const cardVids = document.querySelectorAll(".video-background");
const smalltext = document.querySelectorAll(".cardSmText");


arrBtns.forEach((btn, index) => {
  let videoVisible = false; // track visibility for each video
  btn.addEventListener('click', () => {
    if (!videoVisible) {
      cardVids[index].style.display = 'block'; // show the respective video
      videoVisible = true;
      smalltext[index].style.display = 'none'; // hide the text
    } else {
      cardVids[index].style.display = 'none'; // hide the respective video
      videoVisible = false;
      smalltext[index].style.display = 'block';
    }
  });
});


// You can later add functionality for dynamically fetching data if needed.

document.querySelector('.show-all-btn').addEventListener('click', () => {
  window.location.href = 'https://www.climate.gov/climatedashboard';
});

document.querySelector('#exp').addEventListener('click', ()=>{
  window.location.href = 'explore.html'
});



//explore 

document.getElementById("search").addEventListener('keydown', function(event) {
  // Get the search term
  if (event.key === 'Enter') {
  const searchTerm = document.getElementById("search").value.toLowerCase();

  // Get all the divs you want to search
  const divs = document.querySelectorAll("div");

  // Flag to check if search term is found
  let found = false;

  // Loop through each div to find the matching content
  divs.forEach(div => {
      if (div.textContent.toLowerCase().includes(searchTerm)) {
          // Scroll to the div containing the related content
          div.scrollIntoView({ behavior: "smooth", block: "end" });
          found = true;
      }
  });

  // If no match is found, you can show an alert or handle it as needed
  if (!found) {
      alert("No matching content found!");
  }}
});


//graPH!!!!

// Function to calculate CO2 reduction based on number of trees planted
function calculateCO2Reduction(treesPlanted) {
  const CO2_PER_TREE_PER_YEAR = 10; // kg of CO2 absorbed per tree per year
  const years = 10; // Number of years to project
  const reductionData = [];

  for (let i = 0; i < years; i++) {
      reductionData.push(treesPlanted * CO2_PER_TREE_PER_YEAR * (i + 1));
  }

  return reductionData;
}

// Function to create the chart
let myChart;

function createChart(data) {
  const ctx = document.getElementById('co2ReductionGraph').getContext('2d');
  if (myChart) {
      myChart.destroy(); // Destroy previous chart instance
  }
  myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10'],
          datasets: [{
              label: 'Projected CO2 Reduction (kg)',
              data: data,
              backgroundColor: 'rgba(76, 175, 80, 0.5)',
              borderColor: 'rgba(76, 175, 80, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'CO2 Reduction (kg)'
                  }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Years '
                  }
              }
          },
          plugins: {
              legend: {
                  display: true,
                  position: 'top',
              },
              title: {
                  display: true,
                  text: 'Projected CO2 Reduction'
              }
          }
      }
  });
}

// Event listener for the forecast button
document.getElementById('forecastButton').addEventListener('click', () => {
  const yearInput = document.getElementById('yearInput').value;
  const treesInput = document.getElementById('treesInput').value;
  const reductionData = calculateCO2Reduction(treesInput);
  createChart(reductionData);
});



moreInfoBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action if necessary
  window.location.href = "nep.html";
});

smokingBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action if necessary
  window.location.href = "smoking.html";
});
carbonBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default action if necessary
  window.location.href = "carbonFp.html";
});