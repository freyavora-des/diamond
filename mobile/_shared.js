function initMobileDrawer() {
  const drawer = document.querySelector("[data-m-drawer]");
  const openBtn = document.querySelector("[data-m-drawer-open]");
  const closeBtn = document.querySelector("[data-m-drawer-close]");
  const backdrop = document.querySelector("[data-m-drawer-backdrop]");

  if (!drawer || !openBtn || !closeBtn || !backdrop) return;

  const setOpen = (open) => {
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    openBtn.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtn.focus();
  };

  openBtn.addEventListener("click", () => setOpen(true));
  closeBtn.addEventListener("click", () => setOpen(false));
  backdrop.addEventListener("click", () => setOpen(false));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  setOpen(false);
}

document.addEventListener("DOMContentLoaded", initMobileDrawer);

