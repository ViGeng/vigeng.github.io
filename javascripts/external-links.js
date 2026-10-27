// Open outbound links in a new tab. Scoped to page content (.md-content) so
// nav/header/footer links are untouched. Runs after Material's instant (XHR)
// navigations via the `document$` observable, not just full page loads.
document$.subscribe(function () {
  var host = location.hostname;
  document.querySelectorAll('.md-content a[href^="http"]').forEach(function (a) {
    if (a.hostname && a.hostname !== host) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
});
