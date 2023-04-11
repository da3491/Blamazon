
## Blamazon (Amazon clone)

Welcome to my e-commerce project, which is a This is a clone of Amazon, created as a personal project to learn new packages (Tailwind, Vite, Express, Stripe) and showcase my skills in API usage, Context, Authorization, and Online Purchases. It took around a month to complete the MVP, with roughly 20 hours of work per week.
## Tech Stack
- React
- Tailwind
- Vite
- Express
- Stripe
- auth0

## Features

- Utilize API for Product Catalog
- Filter by category
- Express backend for Stripe payment processing
- Location services
- Shopping Cart functionality
- Login authentication

## To Complete/Extra Features

Although this is a working MVP, there are still a number of things I would like to further develop and include.

**Mobile responsiveness:**
Yes I know, mobile first development. I felt comfortable in my abilities to create something responsive, but that was not the focus for this project.

**Better Home Promotions:**
The layout for my Home page isn't exactly identical to Amazon, and as much as I want to make it exact, it is a good amount of time to replicate the adds and building a section of content with so much variation. I do see some merit in handling this much and knowing how to lazy load.

**Search Bar:**
The dummyjson api is acting as a placeholder until I use something a little more substantial. It's small enough of a db it isnt super necessary, but once I decide to move to something bigger and more complicated I will create this feature.

**Order Management:**
This is an advanced feature that would take me some time to figure out how best to achieve. This is obviously an essential feature in any real commerce site, and I would like to include this.

## Lessons Learned

I started my project with establishing the primary routes and my api endpoints to my API. I then implemented secure login with auth0.

As I moved on to incorporate basic checkout features with Stripe, I took some time to learn the basics of Express and its use case for cross/same origin. During this time, React.dev was released and CRA became less relevant. This presented a good opportunity for me to learn an alternative like Vite.

I researched the concepts of Vite and Next. Since I had already invested time in learning Express, I wanted to pickup something lightweight and simple. I decided to learn Vite. 

After a week or so learning how to use Vite with Express, I finally set up my Express server and got Stripe to accept payments and re-route to success/canceled payments.

Having successfully implementing the basic essential features of my site, I began building out the front-end and styling it exactly like Amazon. This was actually a lot of fun, and I enjoyed the challenges of creating the Hero slider with the gradient, and the filtering dropdown next to the searchbar (I ended up using context API to achieve this).

As I continued to build out the front end, I wanted to incorporate a few more features like location tracking, and displaying the users information in the nav to make it more personalized. With building more and more components, I did more code-splitting to organize everything semantically. This is a point of inexperience, and I'm sure the more I build out this application the better it can be arranged. 

