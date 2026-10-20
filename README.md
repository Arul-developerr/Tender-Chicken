# Tender Chicken

A frontend-only South Tamil Nadu inspired restaurant concept. Dishes, prices, outlet details, and promotional copy are demonstration content and are not verified business information.

## Run locally

```bash
npm install
npm run dev
```

Build and lint with `npm run build` and `npm run lint`.

## Routes

`/` home, `/menu` interactive menu, `/story`, `/specials`, `/contact`, `/cart`, `/checkout`, and a 404 page.

## Edit content

- Menu dishes and sample prices: `src/data/menu.ts`
- Outlet details and social URLs: `business` object in `src/data/menu.ts`
- All checkout and contact actions are browser-only simulations. Cart quantities persist in `localStorage`; personal form entries do not.

Food artwork in `public/food/` was created for this demonstration. Motion uses free React Bits source installed into `src/components/`: ScrollExpand, GlareHover, Magnet, Noise, and ShinyText.
