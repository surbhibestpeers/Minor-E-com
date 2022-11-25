const express = require('express');
const app = express();
const cors = require('cors');
const Connection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
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


app.listen(PORT, ()=> console.log(`server is running successfully at PORT ${PORT}`))