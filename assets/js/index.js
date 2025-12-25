// ^ Write your JavaScript code here

var scrollBtn = document.getElementById("scroll-to-top");
var navitem = document.querySelectorAll(".nav-links a");
var btnSetting = document.querySelector("#settings-toggle");
var closeSettings = document.querySelector("#close-settings");
var toggleMode = document.querySelector("#theme-toggle-button");
var html = document.querySelector("html");

var themeColor = document.querySelector("#theme-colors-grid");

var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

var sections = [];

// ~scroll to top
//للمراقبه
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    scrollBtn.classList.replace("opacity-100", "opacity-0");
    scrollBtn.classList.replace("visible", "invisible");
  } else {
    scrollBtn.classList.replace("opacity-0", "opacity-100");
    scrollBtn.classList.replace("invisible", "visible");
  }
});
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ~nav active

navitem.forEach(function (item) {
  var section = document.querySelector(item.getAttribute("href"));
  if (section) sections.push(section);
  item.addEventListener("click", function () {
    navitem.forEach(function (nav) {
      nav.classList.remove("active");
    });
    item.classList.add("active");
  });
});
window.addEventListener("scroll", function () {
  var scrollnav = window.scrollY + 100;
  sections.forEach(function (section, index) {
    if (
      scrollnav >= section.offsetTop &&
      scrollnav < section.offsetTop + section.offsetHeight
    ) {
      navitem.forEach(function (nav) {
        nav.classList.remove("active");
      });
      navitem[index].classList.add("active");
    }
  });
});

//  ~open off close sideBar
btnSetting.addEventListener("click", function () {
  document
    .querySelector("#settings-sidebar")
    .classList.remove("translate-x-full");
  document.querySelector("#settings-sidebar").classList.add("translate-x-0");
  btnSetting.style.right = "20rem";
});

// ~closeSettings
closeSettings.addEventListener("click", function () {
  document.querySelector("#settings-sidebar").classList.add("translate-x-full");
  btnSetting.style.right = "0";
});

// ~dark mode and localStorage

toggleMode.addEventListener("click", function () {
  document.querySelector("html").classList.toggle("dark");
  localStorage.setItem("dark", html.classList.contains("dark") ? "on" : "off");
});
if (localStorage.getItem("dark") === "on") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// ~showPortfolioGroup

function showPortfolioGroup(index) {
  var portfolioItems = document.getElementsByClassName("portfolio-item");

  for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].style.display = "none";
  }

  if (index === 0) {
    for (var i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].style.display = "block";
    }
  } else if (index === 1) {
    for (var i = 0; i < 3; i++) {
      portfolioItems[i].style.display = "block";
    }
  } else if (index === 2) {
    for (var i = 3; i < 6; i++) {
      portfolioItems[i].style.display = "block";
    }
  } else if (index === 3) {
    for (var i = 6; i < 8; i++) {
      portfolioItems[i].style.display = "block";
    }
  } else if (index === 4) {
    portfolioItems[8].style.display = "block";
  }
}

// ~ botton
for (var i = 0; i < filterButtons.length; i++) {
  (function (index) {
    filterButtons[index].addEventListener("click", function () {
      for (var j = 0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove("active");
      }
      this.classList.add("active");
      showPortfolioGroup(index);
    });
  })(i);
} 
  


//~ change color

// ~button 1
var buttonColor = document.createElement("button");
var btnClass = buttonColor.classList.add("btnClass", "colorOne");
themeColor.appendChild(buttonColor);
//~ button 2
var buttonColorTwo = document.createElement("button");
var btnClass = buttonColorTwo.classList.add("btnClass", "colorTwo");
themeColor.appendChild(buttonColorTwo);

//~ button 3

var buttonColorThree = document.createElement("button");
var btnClass = buttonColorThree.classList.add("btnClass", "colorThree");
themeColor.appendChild(buttonColorThree);

//~ button 4


var buttonColorFour = document.createElement("button");
var btnClass = buttonColorFour.classList.add("btnClass", "colorFour");
themeColor.appendChild(buttonColorFour);

//~ button 5


var buttonColorFive = document.createElement("button");
var btnClass = buttonColorFive.classList.add("btnClass", "colorFive");
themeColor.appendChild(buttonColorFive);

//~ button 6


var buttonColorSix = document.createElement("button");
var btnClass = buttonColorSix.classList.add("btnClass", "colorSix");
themeColor.appendChild(buttonColorSix);



var root = document.documentElement;

var savedColor = localStorage.getItem("convertColor");
if (savedColor) {
  savedColor = JSON.parse(savedColor);
  root.style.setProperty("--color-primary", savedColor.colorMain);
  root.style.setProperty("--color-secondary", savedColor.colorSecondary);
  root.style.setProperty("--color-accent", savedColor.accent);
}

document.querySelector(".colorOne").addEventListener("click", function () {
  root.style.setProperty("--color-primary", "#6366f1");
  root.style.setProperty("--color-secondary", "#8b5cf6");
  root.style.setProperty("--color-accent", "#a855f7");
  var color = {
    colorMain: getComputedStyle(root).getPropertyValue("--color-primary"),
    colorSecondary:
      getComputedStyle(root).getPropertyValue("--color-secondary"),
    accent: getComputedStyle(root).getPropertyValue("--color-accent"),
  };
  console.log(color);
  localStorage.setItem("convertColor", JSON.stringify(color));
});
document.querySelector(".colorTwo").addEventListener("click", function () {
  root.style.setProperty("--color-primary", "#ec4899");
  root.style.setProperty("--color-secondary", "#f97316");
  root.style.setProperty("--color-accent", "#fb923c");
  var color = {
    colorMain: getComputedStyle(root).getPropertyValue("--color-primary"),
    colorSecondary:
      getComputedStyle(root).getPropertyValue("--color-secondary"),
    accent: getComputedStyle(root).getPropertyValue("--color-accent"),
  };
  console.log(color);
  localStorage.setItem("convertColor", JSON.stringify(color));
});
document.querySelector(".colorThree").addEventListener("click", function () {
  root.style.setProperty("--color-primary", "#10b981");
  root.style.setProperty("--color-secondary", "#059669");
  root.style.setProperty("--color-accent", "#34d399");
  var color = {
    colorMain: getComputedStyle(root).getPropertyValue("--color-primary"),
    colorSecondary:
      getComputedStyle(root).getPropertyValue("--color-secondary"),
    accent: getComputedStyle(root).getPropertyValue("--color-accent"),
  };
  console.log(color);
  localStorage.setItem("convertColor", JSON.stringify(color));
});
document.querySelector(".colorFour").addEventListener("click", function () {
  root.style.setProperty("--color-primary", "#3b82f6");
  root.style.setProperty("--color-secondary", "#06b6d4");
  root.style.setProperty("--color-accent", "#22d3ee");
  var color = {
    colorMain: getComputedStyle(root).getPropertyValue("--color-primary"),
    colorSecondary:
      getComputedStyle(root).getPropertyValue("--color-secondary"),
    accent: getComputedStyle(root).getPropertyValue("--color-accent"),
  };
  console.log(color);
  localStorage.setItem("convertColor", JSON.stringify(color));
});
document.querySelector(".colorFive").addEventListener("click", function () {
  root.style.setProperty("--color-primary", "#ef4444");
  root.style.setProperty("--color-secondary", "#f43f5e");
  root.style.setProperty("--color-accent", "#fb7185");
  var color = {
    colorMain: getComputedStyle(root).getPropertyValue("--color-primary"),
    colorSecondary:
      getComputedStyle(root).getPropertyValue("--color-secondary"),
    accent: getComputedStyle(root).getPropertyValue("--color-accent"),
  };
  console.log(color);
  localStorage.setItem("convertColor", JSON.stringify(color));
});
document.querySelector(".colorSix").addEventListener("click", function () {
  root.style.setProperty("--color-primary", "#f59e0b");
  root.style.setProperty("--color-secondary", "#ea580c");
  root.style.setProperty("--color-accent", "#fbbf24");
  var color = {
    colorMain: getComputedStyle(root).getPropertyValue("--color-primary"),
    colorSecondary:
      getComputedStyle(root).getPropertyValue("--color-secondary"),
    accent: getComputedStyle(root).getPropertyValue("--color-accent"),
  };
  console.log(color);
  localStorage.setItem("convertColor", JSON.stringify(color));
});


document.getElementById("reset-settings").addEventListener("click", function () {
  var defaultColors = {
    colorMain: "#6366f1", 
    colorSecondary: "#8b5cf6",    
    accent: "#a855f7", 
  };
  root.style.setProperty("--color-primary", defaultColors.colorMain);
  root.style.setProperty("--color-secondary", defaultColors.colorSecondary);
  root.style.setProperty("--color-accent", defaultColors.accent);

  localStorage.setItem("convertColor", JSON.stringify(defaultColors));

  console.log("Colors reset to default:", defaultColors);
});


//~ Selected font
var btnSelectedFont = document.querySelectorAll(".font-option");
var savedFont = localStorage.getItem("font");

if (savedFont) {
  document.body.style.fontFamily = savedFont;
} else {
  document.body.style.fontFamily = "tajawal";
}

btnSelectedFont.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var changeFont = this.getAttribute("data-font");
    document.body.style.fontFamily = changeFont;
    localStorage.setItem("font", changeFont);
  });
});


var resetBtn = document.getElementById("reset-settings");

resetBtn.addEventListener("click" , function(){
  localStorage.removeItem("font")
  document.body.style.fontFamily = "sans-serif";
})



// ~carousel

var carousel = document.getElementById("testimonials-carousel");
var cards = document.querySelectorAll(".testimonial-card");
var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");
var indicators = document.querySelectorAll(".carousel-indicator");

var currentIndex = 0;
var totalCards = cards.length;
var cardWidth = cards[0].offsetWidth;

function moveCarousel() {
  carousel.style.transform = `translateX(${currentIndex * cardWidth}px)`;
  updateIndicators();
}

// تحديث الدواير 
function updateIndicators() {
  indicators.forEach(function (dot) {
    dot.classList.remove("bg-accent");
    dot.setAttribute("aria-selected", "false");
  });

  var activeIndex = currentIndex % indicators.length;
  indicators[activeIndex].classList.add("bg-accent");
  indicators[activeIndex].setAttribute("aria-selected", "true");
}

//  زرار اليمين
nextBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  moveCarousel();
});

//  زرار الشمال  
prevBtn.addEventListener("click", function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  }

  moveCarousel();
});

//  الدواير اللي تحت 
indicators.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    currentIndex = index;
    moveCarousel();
  });
});

//    حجم الشاشة 
window.addEventListener("resize", function () {
  cardWidth = cards[0].offsetWidth;
  moveCarousel();
});


// ~form

var customSelect = document.querySelector(".custom-select");
var submit = document.querySelector("#submit");

customSelect.addEventListener("click", function () {
  document.querySelector(".custom-options").classList.toggle("hidden");
  selectItem();
});

function selectItem() {
  var option = Array.from(customSelect.nextElementSibling.children);
  option.forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector(".selected-text").textContent =
        item.getAttribute("data-value");
      document.querySelector(".custom-options").classList.add("hidden");
    });
  });
}

var selectB = document.querySelector('[data-name="budget"]');

selectB.addEventListener("click", function () {
  document.querySelector("#showOption").classList.toggle("hidden");

  var option = Array.from(selectB.nextElementSibling.children);
  option.forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelector("#selectedText").textContent =
        item.getAttribute("data-value");
      document.querySelector("#showOption").classList.add("hidden");
    });
  });
});

var fullName = document.querySelector("#full-name");
var email = document.querySelector("#email");
var details = document.querySelector("#project-details");
var phone = document.querySelector("#phone");

var showErrorName = document.querySelector("#showErrorName");
var showErrorEmail = document.querySelector("#showErrorEmail");
var showErrorDetails = document.querySelector("#showErrorDetails");

// Regex
var regex = {
  name: /^[\u0600-\u06FFa-zA-Z]{2,20}\s[\u0600-\u06FFa-zA-Z]{2,20}$/,
  email: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/,
  details: /^.{10,}$/
};


submit.addEventListener("submit", function (e) {
  e.preventDefault();

  var isValid = true;

  // Name
  if (!regex.name.test(fullName.value.trim())) {
    showErrorName.classList.remove("hidden");
    isValid = false;
  } else {
    showErrorName.classList.add("hidden");
  }

  // Email
  if (!regex.email.test(email.value.trim())) {
    showErrorEmail.classList.remove("hidden");
    isValid = false;
  } else {
    showErrorEmail.classList.add("hidden");
  }

 
  if (!regex.details.test(details.value.trim())) {
    showErrorDetails.classList.remove("hidden");
    isValid = false;
  } else {
    showErrorDetails.classList.add("hidden");
  }

  if (isValid) {
    document.querySelector(".model").style.display = "flex";

    setTimeout(function () {
      document.querySelector(".model").style.display = "none";
      clearForm();
    }, 3000);
  }
});


fullName.addEventListener("input", function () {
  showErrorName.classList.add("hidden");
});

email.addEventListener("input", function () {
  showErrorEmail.classList.add("hidden");
});

details.addEventListener("input", function () {
  showErrorDetails.classList.add("hidden");
});

function clearForm() {
  fullName.value = "";
  email.value = "";
  details.value = "";
  phone.value = "";

  document
    .querySelector("[data-name='project-type'] .selected-text")
    .textContent = "اختر نوع المشروع";

  document.querySelector("#selectedText").textContent = "اختر الميزانية";

  showErrorName.classList.add("hidden");
  showErrorEmail.classList.add("hidden");
  showErrorDetails.classList.add("hidden");

  var menus = document.querySelectorAll(".custom-options");
  for (var i = 0; i < menus.length; i++) {
    menus[i].classList.add("hidden");
  }
}
