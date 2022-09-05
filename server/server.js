const express = require("express");

const {
    addNewRating,
    getUserByEmail,
    addPost
} = require("./handlers");

express()

.use(express.json())
.use(express.urlencoded({ extended: false }))


.get("/api/get-user/:email", getUserByEmail)
.get("/api/get-ratings", addNewRating)
.post("/api/addpost/:email", addPost)


.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});