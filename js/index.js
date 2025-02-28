
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
    description: `"Thanks to this platform, I found an amazing tutor for my daughter. Her grades have improved significantly!"`,
    userName: "Alice Smith",
    userDesignation: "Parent",
    avatarUrl: "./images/avatar(1).png"
  },
  {
    rating: 4.5,
    description: `"The tutors here are highly qualified. I've learned so much in just a few weeks!"`,
    userName: "Brian Lee",
    userDesignation: "College Student",
    avatarUrl: "./images/avatar(2).png"
  },
  {
    rating: 5,
    description: `"Amazing experience! My tutor was very patient and explained everything clearly."`,
    userName: "Maria Garcia",
    userDesignation: "High School Student",
    avatarUrl: "./images/avatar(3).png"
  },
  {
    rating: 4,
    description: `"I was skeptical at first, but the platform exceeded my expectations. Highly recommended!"`,
    userName: "David Kim",
    userDesignation: "Graduate Student",
    avatarUrl: "./images/avatar(4).png"
  },
  {
    rating: 5,
    description: `"The tutors are fantastic! They really take the time to understand the student's needs."`,
    userName: "Jessica Brown",
    userDesignation: "Middle School Student",
    avatarUrl: "./images/avatar(5).png"
  },
  {
    rating: 5,
    description: `"I've tried many tutoring services, and this is by far the best one! Great value for money."`,
    userName: "Ethan White",
    userDesignation: "University Student",
    avatarUrl: "./images/avatar(6).png"
  },
  {
    rating: 4,
    description: `"The flexibility of scheduling sessions made it so convenient for me. Thank you!"`,
    userName: "Emily Davis",
    userDesignation: "Adult Learner",
    avatarUrl: "./images/avatar(7).png"
  },
  {
    rating: 3,
    description: `"A wonderful platform! I've connected with tutors who are passionate about teaching."`,
    userName: "Sophie Clark",
    userDesignation: "High School Graduate",
    avatarUrl: "./images/avatar(8).png"
  },
  {
    rating: 5,
    description: `"This service has truly changed my learning experience for the better. I can't thank my tutor enough!"`,
    userName: "Michael Johnson",
    userDesignation: "Engineering Student",
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

  // Create full stars
  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star", "yellow-star"); 
    rating.appendChild(star);
  }

  // Create half stars
  if (hasHalfStar) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star-half-alt", "yellow-star-half"); 
    rating.appendChild(star);
  }

  // Create empty stars
  for (let i = 0; i < emptyStars; i++) {
    const star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star", "yellow-star-empty");
    rating.appendChild(star);
  }

  // Description
  const description = document.createElement("p");
  description.classList.add("review-description");
  description.textContent = review.description;

  // User info
  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");
// user avatar
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




function loadReviews(displayCount) {
  const container = document.getElementById("review-card-container");
  container.innerHTML = "";

  for (let i = 0; i < displayCount; i++) {
    const card = createReviewCard(reviewData[i]);
    container.appendChild(card);
  }
}


function LoadMoreButton() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const screenWidth = window.innerWidth;


  if (screenWidth <= 768) {
    loadMoreBtn.style.display = reviewData.length > 4 ? "block" : "none";
  } else {
    loadMoreBtn.style.display = "none";
  }
}


document.getElementById("loadMoreBtn").addEventListener("click", () => {
  loadReviews(reviewData.length); 
  LoadMoreButton(); 
});


loadReviews(window.innerWidth <= 768 ? 4 : reviewData.length);  


window.addEventListener("resize", () => {
  loadReviews(window.innerWidth <= 768 ? 4 : reviewData.length);
  LoadMoreButton();
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




