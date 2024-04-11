let sidebar = document.querySelector(".nav-items");
let gotoTop = document.querySelector(".fa-arrow-up");

/* When the user scrolls down 100px from the 
top of the document, show the button */
window.onscroll = () => scrollFunction();

function scrollFunction () {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		gotoTop.style.display = "block";
		console.log("show");
	} else {
		gotoTop.style.display = "none";
		console.log("hide");
	}
}

/* when the user clicks the arrow up, 
scroll to the top of the document */
gotoTop.addEventListener("click", () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})

document.querySelector(".menu").addEventListener("click", () => {
	sidebar.classList.toggle("show");
	}
)

document.querySelector(".close-menu").addEventListener("click", () => {
	sidebar.classList.remove("show");
	}
)

// closes the sidebar when anywhere apart from the sidebar is clicked
document.addEventListener("click", (event) => {
	if (sidebar.classList.contains("show")) {
		if (!event.target.classList.contains("nav-items") && !event.target.classList.contains("menu")) {
			sidebar.classList.remove("show");
		}
	}
	}
)
var currentImg = 0;
var imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
var interval = 3000;

// Second banner
var secondEventTitle = 'Hi! *Freshmen* Orientation Day';

// Third banner
var thirdEventDate = new Date('2023-02-01'); // pull this from database
var thirdEventDateString = thirdEventDate.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
var days = calculateDays(new Date(), thirdEventDate) || 0;
const countdownText = days > 0 ? `${days} days left` : 'Live Now!';

var secondImageUrl = `images/Mattress is Best-1140x600.jpg`;
var thirdImageUrl = `images/Kapok Fiber Pod.jpg`;

document.getElementById('img-2').src = secondImageUrl;
document.getElementById('img-3').src = thirdImageUrl;

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
	imgs[i].style.opacity = 0;
	dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
	clearInterval(timer);
	timer = setInterval(changeSlide, interval);
	currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

function calculateDays(today, eventDate) {
  const difference = eventDate.getTime() - today.getTime();

  return Math.ceil(difference / (1000 * 3600 * 24)); // convert to days
}