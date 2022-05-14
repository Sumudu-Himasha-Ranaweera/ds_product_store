import express from "express";
import cors from 'cors'
import db from "./models/index.js"

import tutorialRoutes from "./routes/tutorial.routes.js"


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// // route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Farm Portal Server" })
})
app.use('/tutorial', tutorialRoutes);

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server is Running on PORT : " + PORT)
})