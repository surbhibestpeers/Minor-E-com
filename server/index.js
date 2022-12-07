const express = require('express');
const app = express();
const cors = require('cors');
const Connection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const wishlistRoutes = require("./routes/wishlist");
const addressRoutes = require("./routes/address");

 //let { expressjwt: jwt } = require("express-jwt");
require("dotenv").config();
Connection();

app.use(express.json())
app.use(cors())
// app.use(
//   jwt({
//     secret: process.env.JWT_KEY,
//     algorithms: ["RS256","HS256"],
//   }).unless({ path: ["/api/auth", authRoutes ] })
// );

const PORT = 8000;
// app.use(jwt())
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/address",addressRoutes)

app.listen(PORT, ()=> console.log(`server is running successfully at PORT ${PORT}`))