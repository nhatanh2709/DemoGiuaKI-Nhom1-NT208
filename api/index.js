const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const ratingRoute = require("./routes/ratings")
dotenv.config();
const app = express();
const PORT = 8800;
app.use(cors());
mongoose.connect(process.env.MONGO_URL , {
    
}).then(() => console.log("DB Connection Succesfull")).catch((err) => console.log(err))


app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/ratings", ratingRoute);
app.listen(PORT, () => {
    console.log("Backend server is running!");
});