function initDrawer() {
  const drawer = document.querySelector("[data-drawer]");
  const open = document.querySelector("[data-drawer-open]");
  const close = document.querySelector("[data-drawer-close]");
  const backdrop = document.querySelector("[data-drawer-backdrop]");

  if (!drawer || !open || !close || !backdrop) return;

  const setOpen = (isOpen) => {
    drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
    open.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) close.focus();
  };

  open.addEventListener("click", () => setOpen(true));
  close.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  setOpen(false);
}

document.addEventListener("DOMContentLoaded", initDrawer);

