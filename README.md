# jmercha.dev

My personal website on the internet.

## Rationale

My website helps me keep track of my own accomplishments as a dev, and lets my friends, family and colleagues know what I've been up to recently.

It is also an outlet to showcase some of my web design skills.

## Structure and design

* Minimalistic design, just an index.html, site.css and site.js

* Hosted on my personal [Kubernetes](https://kubernetes.io/) cluster on [DigitalOcean](https://digitalocean.com), with SSL provisioned with [cert-manager](https://github.com/jetstack/cert-manager)

* [Semantic markup](https://html.com/semantic-markup/)! That's right! `<sections>`s, `<ul>`s and `<article>`s! The benefit of this is improved accessibility and search engine semantic parsing.

* Pure HTML and CSS, this allows more precise control over positioning and layout, over a framework such as Bootstrap or Foundation, at the cost of not supporting legacy browsers. Also extremely quick load times!

* CSS naming convention: [BEM](http://getbem.com/)

* [JSON-LD](https://json-ld.org/) for search engine indexing

* Vanilla JS, utilising snippets from [You Might Not Need jQuery](http://youmightnotneedjquery.com/) 
