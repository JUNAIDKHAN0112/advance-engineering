# National Engineering Works

A responsive React / Vite website for the Solapur-based food processing machinery manufacturer.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
npm test
npm run lint
```

All 15 original public routes are preserved. The catalogue and machine details share `src/data/catalogue.js`; the design system is in `src/index.css` and shared components are in `src/components/UI.jsx`.

## Enquiries

The enquiry form prepares a `mailto:` message in the visitor's email application. The visitor must review and send it there. This website does not store leads, submit them to a server, or indicate delivery. Contact details and company address are maintained in `src/data/catalogue.js`.

Machine-specific enquiry links preselect the requested product. Model specifications and capacities remain subject to consultation; none have been invented.

## Images

Optimised local WebP copies of the repository's existing project photographs are in `public/media`. They are used as project / installation references rather than guaranteed model-specific product photos. Original images are retained in `public/Images`.

## Hosting

Publish `dist/` after `npm run build`. SPA hosting must rewrite non-file requests (such as `/machines`, `/destoner`, and `/quote`) to `index.html`. The repository retains its Vercel rewrite configuration. Other hosting providers need an equivalent fallback rule.

## Checks

The test suite renders all original routes and checks page landmarks, page headings, a single shared footer, product enquiry context, and a deliberate unknown-route recovery page. Browser QA verified desktop layouts, catalogue filtering, product navigation, and enquiry selection. Responsive layouts and mobile navigation are implemented; a device-width browser check is still required.
