const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll('a')
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];
let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src'] )
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])
let topHeader = document.querySelector('h1');
topHeader.textContent = siteContent['cta']['h1'];
let topHeaderButton = document.querySelector('button');
topHeaderButton.textContent = siteContent['cta']['button'];
let middleTopContent = document.querySelectorAll('.main-content .top-content .text-content h4');
middleTopContent[0].textContent = siteContent["main-content"]["features-h4"];
middleTopContent[1].textContent = siteContent["main-content"]["about-h4"];
let middleTopContentP = document.querySelectorAll('.main-content .top-content .text-content p');
middleTopContentP[0].textContent = siteContent["main-content"]["features-content"];
middleTopContentP[1].textContent = siteContent["main-content"]["about-content"];
let middleBottomContent = document.querySelectorAll('.main-content .bottom-content .text-content h4');
middleBottomContent[0].textContent = siteContent["main-content"]["services-h4"];
middleBottomContent[1].textContent = siteContent["main-content"]["product-h4"];
middleBottomContent[2].textContent = siteContent["main-content"]["vision-h4"];
let middleBottomContentp = document.querySelectorAll('.main-content .bottom-content .text-content p');
middleBottomContentp[0].textContent = siteContent["main-content"]["services-content"];
middleBottomContentp[1].textContent = siteContent["main-content"]["product-content"];
middleBottomContentp[2].textContent = siteContent["main-content"]["vision-content"];

let bottomContact = document.querySelectorAll('.contact *');
bottomContact[0].textContent = siteContent['contact']['contact-h4'];
bottomContact[1].textContent = siteContent['contact']['address']
bottomContact[2].textContent = siteContent['contact']['phone']
bottomContact[3].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']


// let bottomContact = document.querySelectorAll('.contact p')
// bottomContact[0].textContent = siteContent['contact']['p']