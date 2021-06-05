import express from "express"

const route = express.Router()

route.route("/").get((req, res) => res.send("Hello World"))

export default route