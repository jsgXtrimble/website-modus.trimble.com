---
title: "Stats"
layout: "single"
description: "Download stats for Modus projects"
url: "/stats/"
start: true
hideDate: true
hideToc: true
sitemap_exclude: true
tags:
  - search_exclude
---

<style>
  main a:after {
   content: none !important;
  }
</style>

<div class="row">

{{< card-stats npmjs="@trimbleinc/modus-bootstrap" date="2020-11-11" >}}
Modus Bootstrap
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-icons" github="trimble-oss/modus-icons" date="2023-02-02" >}}
Modus Icons
{{</ card-stats >}}

{{< card-stats npmjs="@trimbleinc/modus-react-bootstrap" github="trimble-oss/modus-react-bootstrap" date="2021-10-10" >}}
Modus React Bootstrap
{{</ card-stats >}}

{{< card-stats npmjs="@trimble-oss/modus-web-components" github="trimble-oss/modus-web-components" date="2022-02-02" >}}
Modus Web Components
{{</ card-stats >}}

</div>

<style data-pagefind-ignore>
a[href^="https://github.com"]::after {
  display: none !important;
  width: 0 !important;
}
</style>
