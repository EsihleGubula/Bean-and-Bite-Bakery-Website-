# Bean & Bite Bakery

## Project Overview

Bean & Bite Bakery is a responsive website created for a fictional artisan bakery established by childhood friends Maya and Liam. The bakery combines traditional artisan baking techniques with a modern and welcoming café environment.

The website allows customers to explore the bakery, view products, learn about its founders, browse the gallery, make enquiries, contact the bakery and place products into an online shopping cart. It also includes a checkout and order confirmation flow.

The website focuses on artisan sourdough, seasonal pastries and specialty coffee while promoting fresh, locally sourced ingredients, sustainability and community.

## Website Goals

The main goals of the website are to:

- Promote Bean & Bite Bakery and its products online.
- Allow customers to browse bakery products.
- Provide an easy online pre-order experience.
- Allow customers to add products to a shopping cart.
- Provide a simple checkout and order confirmation process.
- Provide information about the bakery, its founders and values.
- Help customers find the bakery through its location and opening hours.
- Encourage customers to subscribe to the bakery newsletter.
- Provide a responsive experience across desktop, tablet and mobile devices.
- Allow customers to submit enquiries and general messages.

## Target Audience

The website is aimed at:

- Local families
- Remote workers
- Coffee enthusiasts
- Local community members
- Customers interested in artisan baked goods
- Customers who value locally sourced ingredients and sustainable practices

## Website Pages

The Bean & Bite Bakery website includes the following pages:

1. **Home** – Introduces the bakery, highlights products and provides links to important actions.
2. **About Us** – Explains the bakery's history, founders, mission, vision and ingredient sourcing.
3. **Products** – Displays the bakery's available products.
4. **Gallery** – Displays images representing the bakery and its products.
5. **Contact Us** – Provides contact information and a form for general messages.
6. **Enquiries** – Allows customers to enquire about products, services, volunteering and sponsorship.
7. **Cart** – Allows customers to review selected products and quantities.
8. **Checkout** – Provides the checkout process for completing an order.
9. **Order Confirmation** – Confirms that the customer's order has been completed.

## Key Features

- Responsive website layout
- Mobile-friendly design
- Clear navigation
- Bakery product sections
- Product browsing
- Product search
- Product sorting by price
- Interactive gallery lightbox
- Shopping cart functionality
- Quantity controls
- Checkout process
- Order confirmation
- Newsletter sign-up section
- 10% first-visit discount promotion
- Contact information
- Location and directions
- Interactive map
- Enquiry form
- Contact form
- JavaScript form validation
- Formspree form integration
- Consistent branding across all pages
- Descriptive image alternative text
- Hover, focus and active states for interactive elements

## Technologies Used

### HTML5

HTML5 was used to create the structure and semantic content of the website. The pages are organised using appropriate HTML elements to provide a clear website structure.

### CSS3

CSS3 was used to create the visual design of Bean & Bite Bakery. It was used for colours, typography, layouts, spacing, buttons, cards, responsive design and visual effects.

### JavaScript

JavaScript was used to provide interactive functionality throughout the website, including shopping cart functionality, product searching, product sorting, gallery lightbox interactions and form validation and submission.

### Formspree

Formspree was integrated to process enquiry and contact form submissions asynchronously using JavaScript Fetch API requests.

### MailerLite

MailerLite was explored for newsletter sign-up functionality.

## Design and Branding

The website uses a warm bakery-inspired visual identity based on coffee, pastries and artisan baking.

### Colour Palette

| Colour | Hex Code | Usage |
|---|---|---|
| Deep Espresso Brown | `#4A2E1B` | Headings, buttons and key branding |
| Warm Almond/Pastry Gold | `#D9A773` | Highlights, links and secondary elements |
| Soft Cream/Oatmeal | `#FDFBF7` | Main website background |
| Charcoal Black | `#2B2927` | Main body text |

CSS `:root` variables were introduced to maintain consistent colours throughout the stylesheet.

### Typography

The website uses a clean and readable typography system. CSS typography properties were applied to establish consistent font sizing, line height, font weight and letter spacing.

## User Experience

The website was designed to provide a simple and comfortable experience for customers.

The navigation allows users to access important information quickly, while the responsive layout allows the website to adapt to different screen sizes.

The ordering process follows a straightforward flow:

**Products → Cart → Checkout → Order Confirmation**

The design also uses clear buttons, readable text, consistent spacing and a consistent colour scheme to help customers understand where to click and how to navigate the website.

## Part 2 – CSS Development

During Part 2, the website's existing design was improved using an external CSS stylesheet.

The following CSS improvements were implemented:

- Added a CSS reset using the universal selector.
- Added consistent default font sizing.
- Added line-height for improved readability.
- Added font weight and letter spacing to the base typography.
- Added CSS `:root` colour variables for the espresso, pastry gold, soft cream and charcoal colour palette.
- Used Flexbox to improve the layout of the Bestsellers section.
- Used Flexbox properties including `display`, `flex-wrap`, `justify-content`, `align-items` and `gap`.
- Continued using CSS Grid for product and gallery layouts.
- Added focus states to form controls and buttons.
- Added active states to buttons and links.
- Added a tablet breakpoint for screen widths between 769px and 1024px.
- Added responsive image rules using `max-width: 100%` and `height: auto`.
- Converted selected fixed pixel values to relative `rem` units for improved scalability.
- Added CSS comments to organise the stylesheet into sections.

### Part 1 Feedback Corrections

The following corrections were completed:

- Corrected broken image paths in `gallery.html`.
- Corrected the pastry box image path in `products.html`.
- Added the missing closing `</div>` element in `gallery.html`.
- Checked website file naming and maintained lowercase filenames with hyphens where applicable.
- Continued using an external CSS stylesheet.

## Responsive Design and Testing

The website was tested across desktop, tablet and mobile screen sizes.

### Desktop

The desktop layout was tested using the normal browser view. Navigation, content sections, images, product layouts and the footer were checked.

### Tablet

The tablet layout was tested using the iPad Mini device view at 768px. Navigation, images, text and responsive layouts were checked to ensure that content did not overlap or extend outside the screen.

### Mobile

The mobile layout was tested using an iPhone device view. Navigation, images, text, product sections and other content were checked to ensure that the website remained readable and usable on a smaller screen.

### Responsive Testing Evidence

Screenshots captured during responsive testing are included below.

#### Desktop Test

![Desktop Test](screenshots/desktop-test.png)

#### Tablet Test

![Tablet Test](screenshots/tablet-test.png)

#### Mobile Test

![Mobile Test](screenshots/mobile-test.png)

| Test | Device/View | Result |
|---|---|---|
| Desktop Test | Desktop browser | Passed |
| Tablet Test | iPad Mini – 768px | Passed |
| Mobile Test | iPhone device view | Passed |

The responsive tests confirmed that the website content remained visible, readable and correctly positioned across the tested screen sizes.

## Part 3 – Functionality and SEO Enhancements

### 2.1 Interactive Elements

#### Gallery Lightbox

An interactive gallery lightbox was implemented using JavaScript and CSS.

- Added click functionality to gallery images.
- Clicking an image opens an enlarged version.
- Added a close button to dismiss the enlarged image.
- Tested the lightbox to confirm that images open and close correctly.

### 2.2 Dynamic Content and Product Interactions

JavaScript was used to improve product browsing and interaction.

#### Product Search

- Added a search field to the products page.
- Implemented JavaScript search functionality.
- Products are filtered according to the customer's search input.
- Tested the search feature using product names.

#### Product Sorting

- Added a product sorting dropdown.
- Implemented sorting from lowest to highest price.
- Implemented sorting from highest to lowest price.
- Tested both sorting options.

### 3.1 On-Page SEO

Search engine optimisation improvements were made throughout the website.

#### Page Titles and Meta Descriptions

- Added or improved page titles for the website pages.
- Added individual meta descriptions to the website pages.
- Included relevant bakery-related keywords in page titles and descriptions.

#### Heading Structure

- Reviewed heading elements to maintain a logical content structure.
- Used appropriate heading levels for page sections and product names.

#### Image Optimisation and Accessibility

- Updated image alternative text to provide descriptive information about images.
- Corrected broken image paths.
- Used descriptive image names where applicable.

#### Internal Linking and Mobile Friendliness

- Reviewed website navigation and internal page links.
- Maintained responsive layouts for desktop, tablet and mobile devices.

### 3.2 Off-Page SEO

The following strategies were identified to improve the bakery's online visibility:

#### Backlinks

- Obtain backlinks from local business directories and food blogs.
- Collaborate with local businesses to share links to the Bean & Bite Bakery website.

#### Social Media Promotion

- Promote Bean & Bite Bakery through Instagram, Facebook and TikTok.
- Share product photos, bakery promotions and links to the website.

#### Local SEO

- Create a Google Business Profile for Bean & Bite Bakery.
- Include the bakery's business name, location, contact details and operating hours.
- Use location-based keywords such as "artisan bakery in Cape Town".
- Encourage customer reviews to improve local search visibility.

These are proposed off-page SEO strategies and have not yet been implemented on external platforms.

### 3.3 Additional SEO Requirements

#### robots.txt

Created a `robots.txt` file in the project root directory.

The file provides instructions to search engine crawlers about accessing the website.

#### sitemap.xml

Created a `sitemap.xml` file containing the website page structure to help search engines discover its pages.

The sitemap and robots.txt currently contain placeholder website URLs. These must be updated with the final published website address before deployment.

#### Page Speed

- Reviewed image file sizes.
- Identified larger images that could benefit from compression.
- PageSpeed Insights testing is still pending publication of the website.

#### Security

- Reviewed the JavaScript file for exposed passwords, API keys and secret values.
- Checked that sensitive payment and password information is not stored in the website's local storage.
- HTTPS enforcement will be checked after the website is published.

## Part 4 – Form Functionality and Validation

### Enquiry Form

Created a separate `enquiry.html` page for customers interested in:

- Products
- Services
- Volunteering
- Sponsorship

The enquiry form includes:

- Full name input.
- Email address input.
- Enquiry type dropdown.
- Message textarea.
- Required-field validation.
- Email format validation.
- Minimum message length validation.
- JavaScript responses based on the selected enquiry type.

Formspree was integrated to process submissions asynchronously using the JavaScript Fetch API.

### Contact Form

The existing contact form was improved to allow customers to send general messages.

The contact form includes:

- Full name input.
- Email address input.
- Message type dropdown.
- Message textarea.
- Required-field validation.
- Email format validation.
- Minimum message length validation.

Formspree was integrated to process contact form submissions asynchronously using JavaScript Fetch API requests.

### Form Testing

Both forms were tested successfully.

- Submitted a test enquiry through the Enquiry Form.
- Submitted a test message through the Contact Form.
- Confirmed that Formspree received two submissions.
- Confirmed that successful submission messages were displayed.

## Technical Requirements

The proposed technical architecture includes:

- HTML5
- CSS3
- JavaScript
- Responsive web design
- Cloud hosting
- CDN integration
- Online payment integration
- Email marketing integration
- Google Maps integration

Cloudflare was considered for CDN services to improve website performance and content delivery (Cloudflare, 2026).

Hosting options considered for the project include Hostinger and SiteGround (Hostinger, 2026; SiteGround, 2026).

Mailchimp was considered for email marketing and newsletter functionality (Mailchimp, 2026).

## Online Ordering

The website includes an online ordering flow that allows customers to:

1. Browse products.
2. Select products.
3. Add products to the shopping cart.
4. Review selected items.
5. Continue to checkout.
6. Complete the order process.
7. View an order confirmation.

## Project Structure

The project is organised into the following folders and files:

```text
Bean-and-Bite-Bakery/
│
├── HTML/
│   ├── index.html
│   ├── about.html
│   ├── products.html
│   ├── gallery.html
│   ├── contact.html
│   ├── enquiry.html
│   ├── cart.html
│   ├── checkout.html
│   └── order-confirmation.html
│
├── CSS/
│   └── style.css
│
├── MEDIA/
│   └── Website images
│
├── JAVASCRIPT/
│   └── javascript.js
│
├── robots.txt
├── sitemap.xml
└── README.md
```

## How to Run the Website

1. Clone or download the GitHub repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Open the `HTML` folder.
4. Open `index.html`.
5. Run the website using a web browser or a local development server such as Live Server.
6. Use the navigation menu to explore the different pages and test the website functionality.

## Performance and Hosting

The website aims to provide a fast and reliable experience for customers.

Image sizes were reviewed to identify opportunities for further optimisation. Additional performance testing using Google PageSpeed Insights will be completed after publication.

Hosting services such as Hostinger and SiteGround were considered when planning the hosting requirements and estimated costs of the website.

## Project Timeline

| Week | Project Stage |
|---|---|
| Week 1 | Project Proposal and Research |
| Week 2 | Website Structure and Planning |
| Week 3 | HTML Development and Integration |
| Week 4 | CSS Styling, Responsive Design and Testing |
| Week 5 | GitHub, README Documentation and Submission |

## Changelog

### Version 4.0 – Part 4

#### Form Functionality and Validation

- Created a separate `enquiry.html` page.
- Added enquiry categories for products, services, volunteering and sponsorship.
- Added required-field, email and message-length validation.
- Added JavaScript responses based on the selected enquiry type.
- Improved the contact form with a message-type dropdown.
- Integrated Formspree with the Enquiry Form and Contact Form.
- Implemented asynchronous form submissions using the JavaScript Fetch API.
- Tested both forms successfully.
- Confirmed that two test submissions were received through Formspree.

### Version 3.0 – Part 3

#### Interactive Elements and Dynamic Functionality

- Added an interactive gallery lightbox.
- Added JavaScript functionality to enlarge and close gallery images.
- Added product search functionality.
- Added product sorting by price from low to high and high to low.
- Tested the gallery lightbox, product search and sorting features.

#### Search Engine Optimisation

- Updated page titles and meta descriptions across the website pages.
- Reviewed heading structures.
- Improved image alternative text.
- Reviewed internal links and mobile responsiveness.
- Created a `robots.txt` file.
- Created a `sitemap.xml` file.
- Reviewed image file sizes for performance optimisation.
- Conducted basic checks for exposed sensitive information in JavaScript.

#### Off-Page SEO Planning

- Documented backlink strategies.
- Identified social media promotion opportunities.
- Documented local SEO strategies for the fictional bakery.

### Version 2.0 – Part 2

#### CSS Styling

- Added CSS `:root` colour variables for the espresso, pastry gold, soft cream and charcoal colour palette.
- Added a CSS reset to remove default browser margin and padding.
- Added `box-sizing: border-box` to improve layout control.
- Added base font size, line height, font weight and letter spacing.
- Improved the Bestsellers layout using Flexbox.
- Added Flexbox wrapping, alignment and spacing.
- Continued using CSS Grid for product and gallery layouts.
- Added focus states for inputs, textareas, select elements and buttons.
- Added active states for buttons and links.
- Added a tablet media query for screen widths between 769px and 1024px.
- Added responsive image styling using `max-width: 100%` and `height: auto`.
- Converted selected fixed pixel measurements to `rem` units.
- Added CSS comments to organise the stylesheet into sections.

#### Part 1 Feedback Corrections

- Corrected broken image paths in `gallery.html`.
- Updated the preparation image path to `../MEDIA/prepare.jpg`.
- Corrected the customer coffee image path to `../MEDIA/coffee drinking.jpg`.
- Fixed the customer enjoyment image path to `../MEDIA/customer enjoy.jpg`.
- Corrected the pastry box image path in `products.html`.
- Added the missing closing `</div>` element in `gallery.html`.
- Checked website file naming and maintained lowercase filenames with hyphens where applicable.

#### Responsive Testing

- Tested the website on a desktop browser.
- Tested the website using an iPad Mini at 768px.
- Tested the website using an iPhone mobile device view.
- Checked navigation, images, text, product sections and page layout at different screen sizes.
- Captured screenshots as evidence of responsive testing.

### Version 1.0 – Part 1

- Created the Bean & Bite Bakery website concept.
- Developed the website structure and navigation.
- Created the website pages.
- Added responsive styling.
- Added bakery, coffee and pastry content.
- Added product browsing functionality.
- Added shopping cart functionality.
- Added checkout functionality.
- Added order confirmation functionality.
- Applied the Bean & Bite Bakery colour palette.
- Added typography and visual branding.
- Added supporting images and website assets.
- Prepared the project for GitHub submission.
- Created project documentation.

## References

Cloudflare (2026) *Content Delivery Network (CDN) Services*. Available at: https://www.cloudflare.com

Google (2024) *Google Fonts*. Available at: https://fonts.google.com

Hostinger (2026) *Web Hosting Plans and Pricing*. Available at: https://www.hostinger.com

Mailchimp (2026) *Email Marketing Pricing Plans*. Available at: https://mailchimp.com

SiteGround (2026) *Web Hosting Services and Pricing*. Available at: https://www.siteground.com

Formspree (n.d.) *Formspree – Form Backend Platform*. Available at: https://formspree.io/

MailerLite (n.d.) *Email Marketing Platform*. Available at: https://www.mailerlite.com/

STUDENT INFORMATION 
Name: Esihle Gubula
Student Number: ST10519904
Project: Bean & Bite Bakery
Year: 2026