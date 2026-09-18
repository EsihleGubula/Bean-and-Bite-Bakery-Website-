# Bean & Bite Bakery

## Project Overview

Bean & Bite Bakery is a responsive bakery website created for a fictional artisan bakery established by childhood friends Maya and Liam. The bakery combines traditional artisan baking techniques with a modern and welcoming café environment.

The website allows customers to explore Bean & Bite Bakery, view bakery products, learn about the bakery and its founders, find contact and location information, and place products into an online shopping cart. The website also includes a checkout and order confirmation flow.

The website focuses on artisan sourdough, seasonal pastries and specialty coffee while promoting fresh, locally sourced ingredients, sustainability and community.

## Website Goals

The main goals of the website are to:

* Promote Bean & Bite Bakery and its products online.
* Allow customers to browse bakery products and menus.
* Provide an easy online pre-order experience.
* Allow customers to add products to a shopping cart.
* Provide a simple checkout and order confirmation process.
* Provide information about the bakery, its founders and its values.
* Help customers find the bakery through its location and opening hours.
* Encourage customers to subscribe to the bakery newsletter.
* Provide a responsive website experience across desktop, tablet and mobile screen sizes.

## Target Audience

The website is aimed at:

* Local families
* Remote workers
* Coffee enthusiasts
* Local community members
* Customers interested in artisan baked goods
* Customers who value locally sourced ingredients and sustainable practices

## Website Pages

The Bean & Bite Bakery website includes the following pages:

1. **Home** – Introduces the bakery, highlights products and provides links to important actions.
2. **About Us** – Explains the bakery's history, founders, mission, vision and ingredient sourcing.
3. **Products** – Displays the bakery's available products.
4. **Gallery** – Displays images representing the bakery and its products.
5. **Contact Us** – Provides location, opening hours and contact information.
6. **Cart** – Allows customers to review selected products and quantities.
7. **Checkout** – Provides the checkout process for completing an order.
8. **Order Confirmation** – Confirms that the customer's order has been completed.

## Key Features

* Responsive website layout
* Mobile-friendly layout
* Clear navigation
* Bakery product sections
* Coffee and pastry content
* Product browsing
* Shopping cart functionality
* Quantity controls
* Checkout process
* Order confirmation
* Newsletter sign-up section
* 10% first-visit discount promotion
* Contact information
* Location and directions
* Interactive map
* Consistent branding across all pages
* Responsive images
* Responsive layouts for desktop, tablet and mobile devices
* Hover, focus and active states for interactive elements

## Technologies Used

### HTML5

HTML5 was used to create the structure and semantic content of the website. The pages are organised using appropriate HTML elements to provide a clear website structure.

### CSS3

CSS3 was used to create the visual design of Bean & Bite Bakery. It was used for colours, typography, layouts, spacing, buttons, cards, responsive design and visual effects.

### JavaScript

JavaScript was used to provide interactive functionality throughout the website, including shopping cart functionality, navigation interactions and other interactive website elements.

## Design and Branding

The website uses a warm bakery-inspired visual identity based on coffee, pastries and artisan baking.

### Colour Palette

| Colour                  | Hex Code  | Usage                                    |
| ----------------------- | --------- | ---------------------------------------- |
| Deep Espresso Brown     | `#4A2E1B` | Headings, buttons and key branding       |
| Warm Almond/Pastry Gold | `#D9A773` | Highlights, links and secondary elements |
| Soft Cream/Oatmeal      | `#FDFBF7` | Main website background                  |
| Charcoal Black          | `#2B2927` | Main body text                           |

The existing Bean & Bite Bakery colour palette was maintained during Part 2 to keep the website visually consistent with the original design.

### Typography

The website uses a clean and readable typography system. CSS typography properties were applied to establish consistent font sizing, line height, font weight and letter spacing throughout the website.

## User Experience

The website was designed to provide a simple and comfortable experience for customers.

The navigation allows users to access important information quickly, while the responsive layout allows the website to adapt to different screen sizes.

The ordering process follows a straightforward flow:

**Products → Cart → Checkout → Order Confirmation**

The design also uses clear buttons, readable text, consistent spacing and a consistent colour scheme to help customers understand where to click and how to navigate the website.

## Part 2 CSS Development

During Part 2, the website's existing design was improved using an external CSS stylesheet.

The following CSS improvements were implemented:

* Added a CSS reset using the universal selector.
* Added consistent default font size.
* Added line-height for improved readability.
* Added font weight and letter spacing to the base typography.
* Used Flexbox to improve the layout of the Bestsellers section.
* Used Flexbox properties including `display`, `flex-wrap`, `justify-content`, `align-items` and `gap`.
* Continued using CSS Grid for product and gallery layouts.
* Added focus states to form controls and buttons.
* Added an active state to buttons and links.
* Added a tablet breakpoint for screen widths between 769px and 1024px.
* Added responsive image rules using `max-width: 100%` and `height: auto`.
* Converted selected fixed pixel values to relative `rem` units for improved scalability.
* Maintained the original Bean & Bite Bakery colour palette and overall visual design.

## Responsive Design

The website was tested across desktop, tablet and mobile screen sizes.

### Desktop

The desktop layout was tested using the normal browser view. The navigation, content sections, images, product layouts and footer were checked for correct display.

### Tablet

The tablet layout was tested using the iPad Mini device view at 768px. The navigation, images, text and responsive layouts were checked to ensure that content did not overlap or extend outside the screen.

### Mobile

The mobile layout was tested using an iPhone device view. The navigation, images, text, product sections and other content were checked to ensure that the website remained readable and usable on a smaller screen.

## Responsive Testing Evidence

Screenshots were captured during responsive testing and are included with the project submission.

The following tests were completed:

| Test         | Device/View        | Result |
| ------------ | ------------------ | ------ |
| Desktop Test | Desktop browser    | Passed |
| Tablet Test  | iPad Mini – 768px  | Passed |
| Mobile Test  | iPhone device view | Passed |

The responsive tests confirmed that the website content remained visible, readable and correctly positioned across the tested screen sizes.

## Technical Requirements

The proposed technical architecture includes:

* HTML5
* CSS3
* JavaScript
* Responsive web design
* Cloud hosting
* CDN integration
* Online payment integration
* Email marketing integration
* Google Maps integration

Cloudflare was considered for CDN services to improve website performance and content delivery (Cloudflare, 2026).

Hosting options considered for the project include Hostinger and SiteGround (Hostinger, 2026; SiteGround, 2026).

Mailchimp was considered for email marketing and newsletter functionality (Mailchimp, 2026).

## Online Ordering

The website includes an online ordering flow that allows customers to:

1. Browse products.
2. Select products.
3. Add products to the shopping cart.
4. Review their selected items.
5. Continue to checkout.
6. Complete the order process.
7. View an order confirmation.

## Project Structure

```text
Bean-Bite-Bakery/
│
├── index.html
├── about.html
├── products.html
├── gallery.html
├── contact.html
├── cart.html
├── checkout.html
├── order-confirmation.html
│
├── CSS/
│   └── style.css
│
├── MEDIA/
│   └── website images
│
├── README.md
│
└── JavaScript files
```

## How to Run the Website

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Open `index.html`.
4. Run the website using a web browser or a local development server such as Live Server.
5. Use the navigation menu to explore the different pages and test the website functionality.

## Performance and Hosting

The proposed website aims to provide a fast and reliable experience for customers. CDN technology such as Cloudflare can assist with delivering website content efficiently (Cloudflare, 2026).

Hosting services such as Hostinger and SiteGround were considered when planning the hosting requirements and estimated costs of the website (Hostinger, 2026; SiteGround, 2026).

## Project Timeline

| Week   | Project Stage                             |
| ------ | ----------------------------------------- |
| Week 1 | Project Proposal & Research               |
| Week 2 | Website Structure & Planning              |
| Week 3 | HTML Development & Integration            |
| Week 4 | CSS Styling, Responsive Design & Testing  |
| Week 5 | GitHub, README Documentation & Submission |

## Changelog

### Version 2.0 – Part 2

#### CSS Styling

* Added a CSS reset to remove default browser margin and padding.
* Added `box-sizing: border-box` to improve layout control.
* Added base font size, line height, font weight and letter spacing.
* Improved the Bestsellers layout using Flexbox.
* Added Flexbox wrapping, alignment and spacing.
* Continued using CSS Grid for product and gallery layouts.
* Added focus states for inputs, textareas, select elements and buttons.
* Added active states for buttons and links.
* Added a tablet media query for screen widths between 769px and 1024px.
* Added responsive image styling using `max-width: 100%` and `height: auto`.
* Converted selected fixed pixel measurements to `rem` units.
* Added CSS comments to organise the stylesheet into sections.

#### Part 1 Feedback Corrections

The following corrections from Part 1 feedback were completed:

* Corrected broken image paths in `gallery.html`.
* Corrected the broken pastry box image path in `products.html`.
* Added the missing closing `</div>` element in `gallery.html`.
* Checked the website file naming convention and maintained lowercase filenames with hyphens where applicable.
* Continued using an external CSS stylesheet for the website styling.

#### Responsive Testing

* Tested the website on a desktop browser.
* Tested the website using an iPad Mini at 768px.
* Tested the website using an iPhone mobile device view.
* Checked navigation, images, text, product sections and page layout at different screen sizes.
* Captured screenshots as evidence of responsive testing.

### Version 1.0 – Part 1

* Created the Bean & Bite Bakery website concept.
* Developed the website structure and navigation.
* Created the website pages.
* Added responsive styling.
* Added bakery, coffee and pastry content.
* Added product browsing functionality.
* Added shopping cart functionality.
* Added checkout functionality.
* Added order confirmation functionality.
* Applied the Bean & Bite Bakery colour palette.
* Added typography and visual branding.
* Added supporting images and website assets.
* Prepared the project for GitHub submission.
* Created project documentation.

## References

Cloudflare (2026) *Content Delivery Network (CDN) Services*. Available at: https://www.cloudflare.com

Google (2024) *Google Fonts*. Available at: https://fonts.google.com

Hostinger (2026) *Web Hosting Plans and Pricing*. Available at: https://www.hostinger.com

Mailchimp (2026) *Email Marketing Pricing Plans*. Available at: https://mailchimp.com

SiteGround (2026) *Web Hosting Services and Pricing*. Available at: https://www.siteground.com

## Student Information

**Name:** Esihle Gubula
**Student Number:** ST10519904
**Subject Code:** WEDE5020POE
**Subject:** Introduction to Web Development
**Project:** Bean & Bite Bakery
**Phase:** Phase 2
**Year:** 2026
