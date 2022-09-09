const express = require("express");

const {
    addNewRating,
    getUserByEmail,
    addPost,
    getAllPaintings,
    getSinglePainting,
    updateSinglePainting,
    getSingleUser,
    updateSingleUser,
    getSingleRating,
} = require("./handlers");

express()

.use(express.json())
.use(express.urlencoded({ extended: false }))


.get("/api/get-user/:email", getUserByEmail)
.get("/api/get-paintings", getAllPaintings)
.get("/api/get-painting/:profileId", getSinglePainting)
.get("/api/get-single/:_id", getSingleUser)
.get("/api/get-rating/:_id/:email", getSingleRating)
.patch("/api/get-painting/:profileId", updateSinglePainting)
.patch("/api/get-single/:_id", updateSingleUser)
.post("/api/addpost/:email", addPost)
.post("/api/set-rating/:_id/:email", addNewRating)



.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});