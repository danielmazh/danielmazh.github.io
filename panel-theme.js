// Sets the saved theme before the owner panel paints. A file and not an inline
// script, so the panel's CSP can refuse every inline script.
(function () {
  var theme;
  try {
    theme = localStorage.getItem('oeuvre-theme');
  } catch (e) {}
  if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;
})();
