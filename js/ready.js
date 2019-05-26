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