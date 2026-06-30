// Keep the footer copyright end year current. Uses Material's `document$`
// observable so it also runs after instant (XHR) navigations, not just full loads.
document$.subscribe(function () {
  var year = new Date().getFullYear();
  document.querySelectorAll(".md-copyright__year").forEach(function (el) {
    el.textContent = year > 2022 ? year : 2022;
  });
});
