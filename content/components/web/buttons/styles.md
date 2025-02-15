---
title: "Buttons"
layout: "single"
description: "Buttons are interactive elements that trigger an action or an event."
components: true
componentsWeb: true
images:
  - "/img/components/headers/buttons.png"
bootstrapURL: "/components/buttons/"
reactBootstrapURL: "/components/buttons/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-button--default"
tags: [styles]
---

## Specifications

- All buttons should be interactive and perform an action.
- They should be discoverable, easy to identify, and specific.
- Always have a text label within the button container. Icons are optional.
- Make buttons look and feel clickable.
- If using multiple buttons, label them distinctly.
- The size of the buttons should be used in proportion to the context and content around it.

<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th>Example</th>
      <th>Height</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Small</th>
      <td class="anatomy-cell">
        <button type="button"
          data-anatomy-colors="false"
          class="btn btn-sm btn-primary anatomy-display-static"
        >
          Button
        </button>
      </td>
      <td>24px</td>
      <td>Tables</td>
    </tr>
    <tr>
      <th scope="row">Default</th>
      <td class="anatomy-cell">
        <button type="button"
          data-anatomy-colors="false"
          class="btn btn-primary anatomy-display-static"
        >
          Button
        </button>
      </td>
      <td>32px</td>
      <td>Action Bars</td>
    </tr>
    <tr>
      <th scope="row">Large</th>
      <td class="anatomy-cell">
        <button type="button"
          data-anatomy-colors="false"
          class="btn btn-lg btn-primary anatomy-display-static"
        >
          Button
        </button>
      </td>
      <td>48px</td>
      <td>Modals</td>
    </tr>
  </tbody>
</table>

### Behaviors

All buttons (including icon buttons) should have the following states:

- Default
- Hover
- Pressed
- Disabled

#### Structural Progression States

<table class="table table-bordered" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Primary</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-primary" type="button">Button</button>
          </td>
          <td>
            <button class="btn btn-outline-primary" type="button">Button</button>
          </td>
          <td>
            <button class="btn btn-outline-dark" type="button">Button</button>
          </td>
          <td>
            <button class="btn btn-text-primary" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-primary" type="button">Button</button></td>
          <td><button class="btn hover btn-outline-primary" type="button">Button</button></td>
          <td><button class="btn hover btn-outline-dark" type="button">Button</button></td>
          <td><button class="btn hover btn-text-primary" type="button">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Pressed</th>
          <td>
            <button class="btn display-active btn-primary" type="button">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-outline-primary" type="button">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-outline-dark" type="button">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-text-primary" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td><button disabled class="btn btn-primary" type="button">Button</button></td>
          <td><button disabled class="btn btn-outline-primary" type="button">Button</button></td>
          <td><button disabled class="btn btn-outline-dark" type="button">Button</button></td>
          <td><button disabled class="btn btn-text-primary" type="button">Button</button></td>
        </tr>
      </tbody>
</table>

#### Color Progression States

<table class="table table-bordered" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Primary</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-primary" type="button">Button</button>
          </td>
          <td>
            <button class="btn btn-secondary" type="button">Button</button>
          </td>
          <td>
            <button class="btn btn-tertiary" type="button">Button</button>
          </td>
          <td>
            <button class="btn btn-text-primary" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-primary" type="button">Button</button></td>
          <td><button class="btn hover btn-secondary" type="button">Button</button></td>
          <td><button class="btn hover btn-tertiary" type="button">Button</button></td>
          <td><button class="btn hover btn-text-primary" type="button">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Pressed</th>
          <td>
            <button class="btn display-active btn-primary" type="button">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-secondary" type="button">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-tertiary" type="button">Button</button>
          </td>
          <td>
            <button class="btn display-active btn-text-primary" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td><button disabled class="btn btn-primary" type="button">Button</button></td>
          <td><button disabled class="btn btn-secondary" type="button">Button</button></td>
          <td><button disabled class="btn btn-tertiary" type="button">Button</button></td>
          <td><button disabled class="btn btn-text-primary" type="button">Button</button></td>
        </tr>
      </tbody>
</table>

#### Auxiliary Button States

<table class="table table-bordered" style="width: max-content">
      <thead class="thead-light">
        <tr>
          <th>State</th>
          <th>Icon Only</th>
          <th>Danger</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Default</th>
          <td>
            <button class="btn btn-icon-only btn-text-dark" type="button">
            <i class="modus-icons notranslate" aria-hidden="true">settings</i>
            </button>
          </td>
          <td>
            <button class="btn btn-danger" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Hover</th>
          <td><button class="btn hover btn-icon-only btn-text-dark">
            <i class="modus-icons notranslate" aria-hidden="true">settings</i>
          </button></td>
          <td><button class="btn hover btn-danger" type="button">Button</button></td>
        </tr>
        <tr>
          <th scope="row">Pressed</th>
          <td>
            <button class="btn display-active btn-icon-only btn-text-dark">
            <i class="modus-icons notranslate" aria-hidden="true">settings</i>
          </button>
          </td>
          <td>
            <button class="btn display-active btn-danger" type="button">Button</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Disabled</th>
          <td>
          <button disabled class="btn btn-icon-only btn-text-dark">
            <i class="modus-icons notranslate" aria-hidden="true">settings</i>
          </button></td>
          <td><button disabled class="btn btn-danger" type="button">Button</button></td>
        </tr>
      </tbody>
</table>

Icon button state colors may vary based on product. Always make sure the colors of all states (except for disabled) meet [color contrast accessibility standards](/foundations/accessibility/).

### Editorial

- All buttons in the Modus Design System employ **sentence case**.
- Label a button with a verb, like “Copy”, or verb-phrase, like “Copy document.”
- Strive for short button labels that clearly describe an action.
- Try to limit button labels to three words or less. Using one or two words, if possible, is ideal.
- When writing buttons, you can remove most prepositions and articles (e.g. a, an, the).
- If a question is asked in a modal, use button labels that match the question. Keep in mind the following guidelines as well:
  - Don't use OK/Cancel to answer yes or no questions.
  - Make sure you keep "your" and "my" consistent.
  - Avoid saying "click" when referring to buttons (and other UI elements).
