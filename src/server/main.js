require("dotenv").config();

const cors = require("cors");
const express = require("express");
const ViteExpress = require("vite-express");

const app = express();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

ViteExpress.config({ mode: "production" });

app.use(cors());
app.use(express.json());

app.post("/charge", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.brand + item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      //   These will change to SERVER_URL if they are on same url
      success_url: `${process.env.VITE_CLIENT_URL}/payment_success`,
      cancel_url: `${process.env.VITE_CLIENT_URL}/payment_cancel`,
    });
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
