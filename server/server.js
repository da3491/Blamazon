require("dotenv").config();

const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.urlencoded());
const stripe = require("stripe")(import.meta.env.REACT_APP_STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.json({ message: "success" });
  // res.send("at root");
});

app.post("/charge", async (req, res) => {
  console.log("url given to server: ", REACT_APP_CLIENT_URL);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      //   These will change to SERVER_URL if they are on same url
      success_url: `${import.meta.env.REACT_APP_CLIENT_URL}/success.html`,
      cancel_url: `${import.meta.env.REACT_APP_CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message });
  }
});

app.use((req, res, next) => {
  console.log(req);
  res.status(404).send("Not found");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
