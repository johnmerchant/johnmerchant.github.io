onReady(function() {

    // spam prevention

    var user = 'john';
    var domain = 'merchant.on.net';
    var elements = document.getElementsByClassName('link--email');

    for (var element of elements) {
        element.setAttribute('href', 'mailto:' + user + '@' + domain);
        element.innerHTML = user + '@' + domain;
        element.style.display = 'inline';
    }
});