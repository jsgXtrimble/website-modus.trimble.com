---
title: "Dropdowns"
layout: "single"
description: "Dropdowns present a list of options that can be used to filter or sort existing content."
components: true
componentsWeb: true
images:
  - "/img/components/headers/dropdowns.png"
keywords: menu
bootstrapURL: "/components/dropdowns/"
reactBootstrapURL: "/components/dropdowns/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-dropdown--default"
tags: [styles]
---

## Specifications

- Dropdowns can be activated by clicking a button, an icon, or a header. See [Inputs](/components/web/inputs/) for dropdowns in form input fields.
- Dropdown functionality is indicated by a small trailing arrow or an ellipsis (not applicable to icon dropdowns).
- Within a dropdown, you can separate groups of related menu items with a divider.

<div class="guide-example-block d-inline-block mb-3">
  <div class="guide-sample" style="padding-bottom: 120px; padding-right: 90px;">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div
        class="dropdown-menu dropdown-menu-sm show"
        aria-labelledby="dropdownMenuButton"
        x-placement="bottom-start"
        style="position: absolute; will-change: transform; top: 0; left: 0; transform: translate3d(0, 32px, 0);"
      >
        <a class="dropdown-item active" href="#">Active item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
        <a class="dropdown-item" href="#">Menu item</a>
      </div>
    </div>
  </div>
</div>

### Behaviors

- Make sure the items in the list are in logical order (alphabetical, chronological, order of importance, etc.)
- If no item is preselected, use something like “Select a vendor” or “Select an account” in ghost or hint text format. If you can’t gray out the text, you can use some kind of indicator, like parentheses.
- If you need to, you can display ”None” as one of the options. It should have the same text formatting as the other options in the list.
- Dropdowns are activated by clicking, not hovering.

### Editorial

- Present drop-down selections in sentence case (“Select an account”). If the drop-down list contains formal names, such as customer names or accounts, then those selections will appear in title case.
- Don’t use “deselect.” Instead, use “clear.” The term “deselect” causes a problem for localization.
- The list of options should be sorted in a consistent order (alphabetical, chronological, the most selected option, or by order of importance).
- Don’t end text in a select with a period.
- Keep option names as brief as possible. Aim for under 5 words.
