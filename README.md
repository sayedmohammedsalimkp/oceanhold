# Oceanhold Exports — Website

Static website for **Oceanhold Exports**, an India-based agricultural sourcing and export company
(millets, white sorghum, moringa leaf powder, plus rice, coffee and spices sourced to buyer requirements).

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `products.html` | Products (core range, additional sourcing, packaging) |
| `sourcing.html` | Our Sourcing (process, quality, certifications, documentation) |
| `about.html` | About Us |
| `contact.html` | Contact & enquiry form |

Shared styles are in `assets/css/style.css`, scripts and icons in `assets/js/main.js`, images in `assets/img/`.

## Enquiry form

The contact form posts to [FormSubmit](https://formsubmit.co) and delivers enquiries to
`oceanholdexports@gmail.com`. The first submission triggers a one-time activation email to that
address; click the link in it to start receiving enquiries. If sending fails, the form falls back to
opening a pre-filled email.

To change the destination address, edit `data-endpoint` on the `<form>` in `contact.html`.

## Run locally

```bash
python -m http.server 5510
```

Then open http://localhost:5510.

## Deploy

No build step. Deploy the repository root as a static site (Vercel, Netlify, GitHub Pages or any
static host). `vercel.json` tells Vercel to serve the files as-is.
