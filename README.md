# Project Title

This project is for an e-commerce website built using React and JavaScript, with the intention of learning and incorporating new technologies such as Tailwind and Shopify. The main features of the e-commerce site will include:

## Features

**Utilize Commerce.js for Product Catalog**

- ProductList: Renders products from product db
- ProductCard: Renders item data for a single product

**Search and Filtering**

- SearchBar: Allows users to search for products
- FilterBar: Allows users to filter results by certain criteria

**Shopping Cart**

- Cart: Displays the items in a users shopping cart
- CartItem: Data for single item in cart

**Authentication/Authorization**

- User Login
- Purchases

**Payment Processing Through Stripe**

- PaymentForm: Allows Users to enter their payment information
- PaymentConfirmation: Confirms the payment for the user
- OrderSummary: Displays summary of order including shipping/payment info

**User Account**

- LoginForm: Allows users to LoginForm
- UserProfile: Displays users account information, including purchase history and order status

**Order Management**

- OrderList: Displays list of customer's orders
- OrderDetails: Displays details of a single order, including items purchased and order status

## Tech Stack

React, Express, Stripe,

Possible: Tailwind, Vite


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

To start with, I used dummyjson to obtain base product data from an API with the intention of incorporating a different option, such as Shopify, later on. I established the components with the correct routes.

As I moved on to incorporate basic checkout features with Stripe, I took some time to learn the basics of Express and its use case for cross/same origin. During this time, React.dev was released and CRA became less relevant. This presented a good opportunity for me to learn an alternative.

I researched the concepts of Vite and Next. Since I had already invested time in learning Express, I dont think I require the functionality of a backend with Nextjs. So my goal now is to learn Vite, which is lightweight yet fast. But before this, I will be working in the functionality of stripe checkouts with existing app thus far, incorporate vite, and create the frontend. 
