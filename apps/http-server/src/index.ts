
import express from "express";
import { prisma } from "@repo/db/client";

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })
    res.json({
        id: user.id
    })
})

app.listen(3001, () => {
    console.log("Running on Port 3001")
})