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
} = require("./handlers");

express()

.use(express.json())
.use(express.urlencoded({ extended: false }))


.get("/api/get-user/:email", getUserByEmail)
.get("/api/get-paintings", getAllPaintings)
.post("/api/addpost/:email", addPost)
.post("/api/addRating/:email", addNewRating)
.get("/api/get-painting/:profileId", getSinglePainting)
.patch("/api/get-painting/:profileId", updateSinglePainting)
.get("/api/get-single/:_id", getSingleUser)
.patch("/api/get-single/:_id", updateSingleUser)



.listen(8000, () => {
    console.log(`Server launched on port 8000`)
});