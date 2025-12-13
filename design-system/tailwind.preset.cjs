/**
 * Diamond Atelier Design System — Tailwind preset
 *
 * Usage:
 * - Import this preset in your Tailwind config.
 * - Load `design-system/tokens.css` globally so the CSS variables exist.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        da: {
          bg: "var(--da-color-bg)",
          surface1: "var(--da-color-surface-1)",
          surface2: "var(--da-color-surface-2)",
          border: "var(--da-color-border)",
          text: "var(--da-color-text)",
          muted: "var(--da-color-text-muted)",
          subtle: "var(--da-color-text-subtle)",
          neutral: {
            50: "var(--da-color-neutral-50)",
            100: "var(--da-color-neutral-100)",
            200: "var(--da-color-neutral-200)",
            300: "var(--da-color-neutral-300)",
            400: "var(--da-color-neutral-400)",
            500: "var(--da-color-neutral-500)",
            600: "var(--da-color-neutral-600)",
            700: "var(--da-color-neutral-700)",
            800: "var(--da-color-neutral-800)",
            900: "var(--da-color-neutral-900)"
          }
        }
      },
      fontFamily: {
        brand: ["var(--da-font-brand)"],
        body: ["var(--da-font-body)"],
        display: ["var(--da-font-display)"],
        mono: ["var(--da-font-mono)"]
      },
      letterSpacing: {
        wide: "var(--da-tracking-wide)",
        logo: "var(--da-tracking-logo)",
        logoLg: "var(--da-tracking-logo-lg)"
      },
      borderRadius: {
        daSm: "var(--da-radius-sm)",
        daMd: "var(--da-radius-md)",
        daLg: "var(--da-radius-lg)",
        daXl: "var(--da-radius-xl)",
        da2xl: "var(--da-radius-2xl)",
        da3xl: "var(--da-radius-3xl)"
      },
      boxShadow: {
        daSm: "var(--da-shadow-sm)",
        daMd: "var(--da-shadow-md)",
        daGlow: "var(--da-shadow-glow)"
      },
      transitionDuration: {
        fast: "var(--da-duration-fast)",
        base: "var(--da-duration-base)",
        slow: "var(--da-duration-slow)"
      }
    }
  }
};

