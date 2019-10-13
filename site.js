/**
 * Executes a callback on page load
 * @param {Function} fn callback 
 */
function onReady(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}

/**
 * Populate anchor mailto: at runtime as a spam prevention measure
 */
function setEmail() {

    var user = 'john';
    var domain = 'merchant.on.net';
    var elements = document.getElementsByClassName('link--email');

    for (var i = 0; i < elements.length; ++i) {
        var element = elements[i];
        element.setAttribute('href', 'mailto:' + user + '@' + domain);
        element.innerHTML = user + '@' + domain;
        element.style.display = 'inline';
    }
}

/**
 * Sets up the header background to fade out on scroll down
 */
function setHeaderScroll() {
  var initialOpacity = 0.25;
  var header = document.getElementsByTagName('header')[0];
  var gradient = header.getElementsByClassName('header__bg--gradient')[0];
  window.onscroll = function() {
    var opacity = 1.0 + initialOpacity - (header.offsetHeight - window.scrollY) / header.offsetHeight;
    setGradient(opacity)
  }
  function setGradient(opacity) {
    gradient.style.background = 'linear-gradient(rgba(0, 0, 0, '+opacity+'), rgba(0, 0, 0, 1))';
  }
}

onReady(setEmail);
onReady(setHeaderScroll);