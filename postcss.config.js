module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./content/*.md",
        "./content/community/*.md",
        "./content/news/*.md",
        "./content/**/*.md",
        "./node_modules/bootstrap/scss/_tooltip.scss",
        "./layouts/**/*.html",
        "./assets/js/*.js",
        "./static/js/*.js",
      ],
      safelist: [
        "align-items-center",
        "anatomy-cell",
        "anatomy-display-static",
        "arrow",
        "autocomplete-suggestions ",
        "bg-dark",
        "bg-light",
        "bg-primary",
        "bg-white",
        "border-0",
        "border-right",
        "bs-popover-bottom",
        "bs-tooltip-auto",
        "bs-tooltip-bottom",
        "bs-tooltip-top",
        "btn-outline-secondary",
        "btn-primary",
        "btn",
        "card-body",
        "card-header",
        "card",
        "chip",
        "chip-input",
        "chroma",
        "c1",
        "clearfix",
        "code",
        "col",
        "col-12",
        "col-lg-4",
        "col-md-4",
        "col-lg-4",
        "container",
        "container-fluid",
        "copy-to-clipboard",
        "d-block",
        "d-none",
        "d-print-none",
        "display-1",
        "display-2",
        "display-3",
        "dropdown-item",
        "dropdown-menu",
        "dropdown",
        "fade",
        "footer",
        "fixed-top",
        "flex-column",
        "form-control",
        "form-control-lg",
        "h-100",
        "highlight",
        "language-css",
        "language-html",
        "language-js",
        "language-xml",
        "line",
        "list",
        "list-group-item",
        "list-group",
        "m-0",
        "m-1",
        "m-2",
        "mb-0",
        "mb-1",
        "mb-2",
        "mb-3",
        "mb-4",
        "mb-5",
        "menu-left",
        "menu-right",
        "modal-backdrop",
        "modal-content",
        "modal-open",
        "modal",
        "modus-icons",
        "moon",
        "moon-mask",
        "moon",
        "mt-auto",
        "mx-0",
        "mx-1",
        "mx-2",
        "mx-3",
        "mx-4",
        "mx-auto",
        "nav-item",
        "nav-link",
        "opacity-50",
        "opacity-75",
        "open",
        "p",
        "p-1",
        "p-2",
        "p-3",
        "page-item",
        "page-link",
        "pagination-lg",
        "pagination",
        "popover",
        "popover-body",
        "popover-header",
        "pre",
        "ps-4",
        "pt-1",
        "pt-2",
        "pt-3",
        "px-0",
        "px-1",
        "px-2",
        "px-3",
        "px-4",
        "row",
        "row-cols-xl-3",
        "search",
        "shadow",
        "shadow-lg",
        "shadow-sm",
        "show",
        "small",
        "sr-only",
        "stretched-link",
        "sun-and-moon",
        "sun-beams",
        "sun",
        "table-bordered",
        "table-dark",
        "table-sm",
        "table",
        "text-center",
        "text-dark",
        "text-decoration-none",
        "text-end",
        "text-light",
        "text-muted",
        "text-right",
        "text-white",
        "thead-light",
        "theme-toggle",
        "toast-dark",
        "toast-primary",
        "toast-success",
        "toast",
        "tooltip-arrow",
        "tooltip-inner",
        "tooltip",
        "w-100",
      ],
    },
    autoprefixer: {},
  },
};
