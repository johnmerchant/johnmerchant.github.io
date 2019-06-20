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

    for (var element of elements) {
        element.setAttribute('href', 'mailto:' + user + '@' + domain);
        element.innerHTML = user + '@' + domain;
        element.style.display = 'inline';
    }
}

/**
 * Sets up the background to fade out on scroll down
 */
function setBgScroll() {
  var initialOpacity = 0.50;
  setBg(initialOpacity);
  window.onscroll = function() {
    var header = document.getElementsByTagName('header')[0];
    var opacity = 1.0 + initialOpacity - (header.offsetHeight - window.scrollY) / header.offsetHeight;
    setBg(opacity)
  }
  function setBg(opacity) {
    document.body.style.background = 'linear-gradient(rgba(0, 0, 0, ' + (opacity) + '), rgba(0, 0, 0, 1) 20%), url(bg.jpg), #000';
  }
}

onReady(setEmail);
onReady(setBgScroll);