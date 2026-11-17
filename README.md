# TrueOrigin

TrueOrigin is a German-first, static chocolate shop website with a product catalogue, individual product pages, a persistent cart, and cocoa-route maps.

Website: [trueorigin.netlify.app](https://trueorigin.netlify.app)

## Features

- German by default, with a German/English language switcher.
- Light and dark themes; the first visit follows the device preference.
- Seven product pages with individual product details and images.
- Article numbers `TO-001` through `TO-007`; the homepage lookup opens the matching product page.
- Cart contents are stored in the browser's local storage.
- Responsive OpenStreetMap maps on product pages.
- Clean Netlify routes for the shop, products, cart, and checkout.

## Supply-chain route status

The routes currently shown on product pages are **plausible examples, not verified TrueOrigin supply chains**. They illustrate possible cocoa-growing regions, export ports, European ports, and a schematic destination region in Germany. They do not identify actual suppliers, production sites, or the origins of other ingredients.

Before presenting a route as factual, replace its example locations with confirmed product-specific data in `src/catalog.js` and update its status and on-page disclosure accordingly.

## Run locally

There is no build step or package installation. From the project root, run:

```powershell
python -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173). Netlify's clean routes are configured in `_redirects`; the local Python server may add a trailing slash to directory routes.

## Project structure

```text
.
├── assets/
│   ├── images/       # Product photography and TrueOrigin logo
│   └── styles.css
├── src/
│   ├── catalog.js    # Product data, article numbers, route examples, and translations
│   ├── cart.js       # Local-storage cart
│   ├── components.js # Shared header, footer, and product components
│   ├── main.js       # Page rendering and interactions
│   └── theme-init.js
├── product/          # Individual product route entry pages
├── shop/
├── warenkorb/
├── checkout/
├── index.html
└── _redirects
```

## Updating products and images

- Edit product names, descriptions, availability, article numbers, and route stops in `src/catalog.js`.
- The `supplyChain.stops` entries contain a stage, localized label, and map coordinates in `[latitude, longitude]` order. Keep example routes marked as examples until the locations are confirmed.
- Replace an image in `assets/images/` while keeping its filename, or change the corresponding `image` path in `src/catalog.js`.
- The shared logo is `assets/images/True Origin Logo.png`.

## Deployment and checkout

The site is hosted at [trueorigin.netlify.app](https://trueorigin.netlify.app). It is a static site: use the repository root as the publish directory and leave the build command empty. `_redirects` maps the clean URLs to their static page files.

The checkout is intentionally unavailable. The site does not accept orders or process payments.
