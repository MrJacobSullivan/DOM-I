const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
}

// Header Content

const navAnchors = document.querySelectorAll('nav a')
navAnchors.forEach((a, i) => {
  a.textContent = siteContent.nav[`nav-item-${i + 1}`]
  a.style.color = 'green'
})

const first = document.createElement('a')
first.innerText = 'FIRST'
first.href = '#'
first.style.color = 'green'

const last = document.createElement('a')
last.innerText = 'LAST'
last.href = '#'
last.style.color = 'green'

const nav = document.querySelector('nav')

nav.prepend(first)
nav.appendChild(last)

const logo = document.querySelector('#logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])
logo.style.opacity = '50%'

// CTA Content

const h1 = document.querySelector('h1')
h1.innerHTML = siteContent.cta.h1.replaceAll(' ', '<br> ')
h1.style.fontFamily = 'monospace'

const button = document.querySelector('button')
button.innerText = siteContent.cta.button
button.style.borderRadius = '0.4rem'
button.onclick = () => console.log('hello')

const ctaImage = document.querySelector('#cta-img')
ctaImage.src = siteContent.cta['img-src']

// Top Content

const topContentHeaders = document.querySelectorAll('.top-content h4')
topContentHeaders[0].innerText = siteContent['main-content']['features-h4']
topContentHeaders[1].innerText = siteContent['main-content']['about-h4']
topContentHeaders.forEach((header) => {
  header.style.color = 'red'
})

const topContentParagraphs = document.querySelectorAll('.top-content p')
topContentParagraphs[0].innerText = siteContent['main-content']['features-content']
topContentParagraphs[1].innerText = siteContent['main-content']['about-content']
topContentParagraphs.forEach((p) => (p.style.color = 'blue'))

// Middle Content

const middleImage = document.querySelector('#middle-img')
middleImage.src = siteContent['main-content']['middle-img-src']

// Bottom Content

const bottomContentHeaders = document.querySelectorAll('.bottom-content h4')
bottomContentHeaders[0].innerText = siteContent['main-content']['services-h4']
bottomContentHeaders[1].innerText = siteContent['main-content']['product-h4']
bottomContentHeaders[2].innerText = siteContent['main-content']['vision-h4']

const bottomContentParagraphs = document.querySelectorAll('.bottom-content p')
bottomContentParagraphs[0].innerText = siteContent['main-content']['services-content']
bottomContentParagraphs[1].innerText = siteContent['main-content']['product-content']
bottomContentParagraphs[2].innerText = siteContent['main-content']['vision-content']

// Contact Content

const contactHeader = document.querySelector('.contact h4')
contactHeader.innerText = siteContent['contact']['contact-h4']

const contactParagraphs = document.querySelectorAll('.contact p')
const address = siteContent['contact']['address'].split(' ')
address.splice(4, 0, '<br>')
contactParagraphs[0].innerHTML = address.join(' ')
contactParagraphs[1].innerText = siteContent['contact']['phone']
contactParagraphs[2].innerText = siteContent['contact']['email']

// Footer Content
const footerParagraphs = document.querySelector('footer p')
footerParagraphs.innerText = siteContent.footer['copyright']
