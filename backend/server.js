const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { errorHandler } = require("../backend/middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user/", userRoutes);
app.use("/api/service/", serviceRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is connected on port ${port}`));
