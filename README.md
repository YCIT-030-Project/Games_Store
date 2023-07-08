# Video Games E-commerce Website (YCIT-030-Project)

This is a video games e-commerce website built with the following technologies:

- **Frontend:** React, Redux, Redux Persist, TailwindCSS, Axios, Stripe, React Toastify
- **Backend:** Node.js, Express
- **Database:** Firebase, Firestore

## Live Demo

[Games E-commerce](https://gamesst.netlify.app/ "PROJECT YCT-30").

## Features

- Shopping cart
- User authentication
- Stripe payment integration
- React-Toastify notifications
- Firebase Auth
- Firestore database
- Add new games by admin

## New Features

- Search for items in the header
- Quantity in cart

# BackEnd side and Endpoints

## Dependencies

- `express`: Web framework for Node.js
- `cors`: Middleware to enable CORS
- `axios`: HTTP client for making requests
- `body-parser`: Middleware to parse incoming request bodies
- `dotenv`: Loads environment variables from a `.env` file

## Usage

1. Install dependencies by running `npm install`.
2. Rename `.env.example` to `.env` and add you Apis
3. Start the server by running `npm start`.
4. The server will be listening on the specified port and has the following routes:
   - `GET /`: Returns "Hello World!".
   - `POST /pay`: Accepts a payment token and amount, and creates a charge using the Stripe API.
   - `GET /newapi`: Fetches data from the Steam Store API and returns it in a new structure.

# Front End

## Dependencies

1. React
2. Redux & Redux toolkit
3. Redux Persist
4. Axios
5. Firebase
6. React dom & React router dom
7. React icons
8. TailwindCss
9. React Spinners
10. React Toastify for notification
11. React Stripe

## Usage

- After clone the Repo:

1.  `cd ./client`
2.  Install dependencies by running `npm install`.
3.  Rename `.env.example` to `.env` and add you Apis
4.  Start the App by running `npm run dev`.

## ScreenShots

### Home Page

![alt text](./screenshots/HomePage.png)

### Products Page

![alt text](./screenshots/ProductsPage.png)

### Contact Page

![alt text](./screenshots/ContactPage.png)

### Cart Checkout

![alt text](./screenshots/cart.png)

### User Profile

![alt text](./screenshots/profile.png)

### Sign In Page

![alt text](./screenshots/signin.png)
