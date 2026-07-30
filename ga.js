// Fab Hospitality — Google Analytics 4
// Auto-injects GA4 on every page
// Measurement ID: G-J8WS0RZRVZ
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

var s = document.createElement('script');
s.async = true;
s.src = 'https://www.googletagmanager.com/gtag/js?id=G-J8WS0RZRVZ';
s.onload = function() {
  gtag('js', new Date());
  gtag('config', 'G-J8WS0RZRVZ', {
    page_title: document.title,
    page_location: window.location.href
  });
};
document.head.appendChild(s);
