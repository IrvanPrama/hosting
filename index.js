const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server up and running..."));
