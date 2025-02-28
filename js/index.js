
// dynamic nav elements

document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelectorAll(".nav-links , .nav-btn").forEach((element)=>{
    if(element.style.display ==="block"){
        element.style.display = "none";
    }else{
        element.style.display = "block";
    }
  })
});


//dynamic counting values

function formating(num, isPercentage) {
  if (isPercentage) {
      return num + '%';
  } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
  } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
  }
  return num;
}

//dynamic counters

function Counters() {
  const counters = document.querySelectorAll('.counting-value');

  counters.forEach((counter, index) => {
      const target = +counter.getAttribute('data-target');
      let value = 0;
      const value_increase = Math.ceil(target / 100);

      const updateCounter = setInterval(() => {
          value += value_increase;
          if (value >= target) {
              value = target;
              clearInterval(updateCounter);
          }
          counter.querySelector('h2').innerText = formating(value, index < 2);
      }, 30);
  });
}

window.onload = Counters;

// dynmaic review


const reviewData = [
  {
    rating: 4,
    description: `"Working with this design agency was a fantastic experience! They truly understood our vision and transformed it into a stunning design."`,
    userName: "X_AE_A-13",
    userDesignation: "Product Designer, slothUI",
    avatarUrl: "./images/avatar(1).png"
  },
  {
    rating: 4.5,
    description: `"The team’s attention to detail and ability to turn complex ideas into intuitive designs is amazing. Our users love the new interface!"`,
    userName: "Azunyan U. Wu",
    userDesignation: "CEO, nextlife.ai ",
    avatarUrl: "./images/avatar(2).png"
  },
  {
    rating: 5,
    description: `"Exceptional design work! They took the time to understand our brand and delivered an aesthetically pleasing, functional design."`,
    userName: "Mechatronics Yi ",
    userDesignation: "CTO, fin4win.ai",
    avatarUrl: "./images/avatar(3).png"
  },
  {
    rating: 4,
    description: `"We were impressed with how quickly the team delivered. The designs were innovative and aligned perfectly with our goals."`,
    userName: "Oarack Babama",
    userDesignation: "Former President of US ",
    avatarUrl: "./images/avatar(4).png"
  },
  {
    rating: 5,
    description: `"Their designs are both beautiful and user-friendly. The process was smooth, and we are extremely happy with the outcome."`,
    userName: "Saylor Twift",
    userDesignation: "Famous Singer ",
    avatarUrl: "./images/avatar(5).png"
  },
  {
    rating: 5,
    description: `"This design agency went above and beyond to deliver a product that not only looks great but also improves user engagement. Highly recommended!"`,
    userName: "Asuna Yuuki",
    userDesignation: "Virtual Swordsman    ",
    avatarUrl: "./images/avatar(6).png"
  },
  {
    rating: 4,
    description: `"Great experience! They worked closely with us to refine our ideas and helped us create a design that resonates with our target audience."`,
    userName: "Boe Jiden",
    userDesignation: "Former President Of Canada ",
    avatarUrl: "./images/avatar(7).png"
  },
  {
    rating: 3,
    description: `"Good service with a focus on detail. We saw positive improvements in user interaction, but we’d love to see even more creativity in future designs."`,
    userName: "Vermillion D. Gray",
    userDesignation: "CEO, hacklife.ai  ",
    avatarUrl: "./images/avatar(8).png"
  },
  {
    rating: 5,
    description: `"Incredible work! They not only delivered on time but also helped us elevate our brand identity with their innovative designs. Very happy with the results!"`,
    userName: "Zuckman Wu",
    userDesignation: "CEO, tech4life.ai",
    avatarUrl: "./images/avatar(9).png"
  }
];



function createReviewCard(review) {
  const card = document.createElement("div");
  card.classList.add("review-card");

  // Rating
  const rating = document.createElement("div");
  rating.classList.add("rating");
  const totalStars = 5; 
  const fullStars = Math.floor(review.rating); 
  const hasHalfStar = (review.rating % 1) >= 0.5; 
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0); 


  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star", "yellow-star"); 
    rating.appendChild(star);
  }

  if (hasHalfStar) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star-half-alt", "yellow-star-half"); 
    rating.appendChild(star);
  }

 
  for (let i = 0; i < emptyStars; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star", "yellow-star-empty");
    rating.appendChild(star);
  }

 
  const description = document.createElement("p");
  description.classList.add("review-description");
  description.textContent = review.description;

 
  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");


  const avatar = document.createElement("img");
  avatar.src = review.avatarUrl;
  avatar.alt = "User Avatar";
  avatar.classList.add("user-avatar");

  const userDetails = document.createElement("div");
  userDetails.classList.add("user-details");

  const userName = document.createElement("h3");
  userName.classList.add("user-name");
  userName.textContent = review.userName;

  const userDesignation = document.createElement("p");
  userDesignation.classList.add("user-designation");
  userDesignation.textContent = review.userDesignation;

  userDetails.appendChild(userName);
  userDetails.appendChild(userDesignation);
  userInfo.appendChild(avatar);
  userInfo.appendChild(userDetails);


  card.appendChild(rating);
  card.appendChild(description);
  card.appendChild(userInfo);

  return card;
}




const reviewContainer = document.getElementById("review-card-container");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let reviewsToShow = window.innerWidth <= 768 ? 4 : reviewData.length; 

function loadReviews(count) {
  reviewContainer.innerHTML = ""; 

  for (let i = 0; i < count && i < reviewData.length; i++) {
    const card = createReviewCard(reviewData[i]);
    reviewContainer.appendChild(card);
  }

 
  if (count >= reviewData.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}


loadMoreBtn.addEventListener("click", () => {
  reviewsToShow += 4; 
  loadReviews(reviewsToShow);
});


loadReviews(reviewsToShow);


window.addEventListener("resize", () => {
  reviewsToShow = window.innerWidth <= 768 ? 4 : reviewData.length;
  loadReviews(reviewsToShow);
});


//faq section
function toggleAnswer(faqId) {
  const answer = document.getElementById(faqId);
  const faqItem = answer.parentElement; 
  const arrow = faqItem.querySelector('.arrow');

  if (answer.style.display === "block") {
      answer.style.display = "none";
      faqItem.classList.remove('expanded'); 
  } else {
      answer.style.display = "block";
      faqItem.classList.add('expanded'); 
  }
}


  document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



   
   const elements = document.querySelectorAll('.fade-in, .bounce, .rotate-in, .flip-in');

   const options = {
     threshold: 0.1, 
   };

   const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('is-visible');
         observer.unobserve(entry.target); 
       }
     });
   }, options);

   elements.forEach(element => {
     observer.observe(element);
   });