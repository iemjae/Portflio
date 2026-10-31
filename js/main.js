/* Full-screen menu: open/close, Escape key, focus handling. No dependencies. */
(function () {
  var openBtn = document.querySelector('[data-menu-open]');
  var menu = document.getElementById('site-menu');
  if (!openBtn || !menu) return;

  var closeBtn = menu.querySelector('[data-menu-close]');
  var links = menu.querySelectorAll('a');

  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu(returnFocus) {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    if (returnFocus) openBtn.focus();
  }

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', function () { closeMenu(true); });

  // Close after choosing a link (so in-page anchors scroll into view)
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () { closeMenu(false); });
  }

  document.addEventListener('keydown', function (e) {
    if (!menu.classList.contains('is-open')) return;
    if (e.key === 'Escape') { closeMenu(true); return; }

    // Keep keyboard focus inside the open menu
    if (e.key === 'Tab') {
      var focusables = menu.querySelectorAll('button, a');
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
