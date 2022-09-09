"use strict";

const { v4: uuidv4 } = require("uuid");
const { users } = require("./data")

const { request } = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const client = new MongoClient(MONGO_URI, options);


const addNewRating = async (req, res) => {
    
    const {_id, email} = req.params
    console.log(req.params)

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("userRatings").find().toArray()
    const filtered = data.filter((element) => {
        // console.log(_id)
        // console.log(element.id)
        // console.log(email)
        // console.log(element.email)
        // console.log(element.id === _id)
        // console.log(element.email === email)
        return element.id === _id && element.email === email
    });
    
    // console.log("filtered array" , filtered)

    if (filtered.length > 0) {
        await db.collection("userRatings").updateOne({id: _id, email: email}, {$set: {rating: req.body.rating}})
        res.status(200).json({status: 200, data: req.body.rating, message: "Successfully updated"})
    } else {
        await db.collection("userRatings").insertOne({id: _id, email: email, rating: req.body.rating})
        res.status(200).json({status: 200, data: req.body.rating, message: "Successfully created"})
    }
    
}
catch (error) {
    res.status(500).json({status: 500, error: error})

}

}

const getUserByEmail = async (req, res) => {

    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").find().toArray()
    
    // console.log(data)
    let result = data.filter((element) => {
        return (element.email === req.params.email)
    })
    // console.log(result[0].Paintings)
    let rateArray = []
    for (const painting of result[0].Paintings) {
        // console.log(typeof painting._id)
        const rateData = await db.collection("userRatings").find({id: painting._id}).toArray()
        // console.log(rateData)
        
        const paintingAverageArray = rateData.filter((rating) => {
            return rating.id === painting._id
        })
        // console.log(paintingAverageArray)
        let ratingTotal = 0
        paintingAverageArray.forEach((rating) => {
            // console.log(rating)
            ratingTotal += rating.rating
        })
        
        let ratingAverage = ratingTotal / paintingAverageArray.length
        // console.log(ratingAverage)
        rateArray = [...rateArray, {[painting._id]: ratingAverage, paintingId : painting._id}]
    }
    // console.log(rateArray)
    // console.log(result[0].Paintings)
    result = [{...result[0], rateArray}]
    console.log(result)
    // result[0].Paintings.for(element => {
    
    //     // console.log(element._id)

    // });
    
    res.status(200).json({
        status: 200,
        data : result[0]
    })
    // console.log(users)

}

const addPost = async (req, res) => {

    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").find({email : req.params.email}).toArray()
    
    console.log(data[0].Paintings)
    
    data[0].Paintings.push({paintSRC: null,
                        paintName: req.body.status2,
                        description: req.body.status,
                        ratings: 0})
    console.log(data[0].Paintings)
    await db.collection("users").updateOne({email : req.params.email}, {$set: {Paintings: data[0].Paintings}})
    res.status(200).json({
        status: 200,
        data : "hello"
    })
    // console.log(users)

}

const getAllPaintings = async (req, res) => {

    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").find().toArray()
    
    console.log(data.length)

    let array2 = []
for (let i = 0; i < data.length ; i++) {
    for (let j = 0; j < data[i].Paintings.length ; j++) {
        const obj = {email: data[i].email, name: data[i].name, paintSRC: 
            data[i].Paintings[j].paintSRC, paintName: data[i].Paintings[j].paintName, 
            description: data[i].Paintings[j].description, _id: data[i].Paintings[j]._id}

        array2.push(obj)
        console.log(obj)
    }

}
    console.log(array2)

res.status(200).json({status: 200, data: array2})
}

const getSinglePainting = async (req, res) => {
    const profileId = req.params.profileId
    // const id = req.params.id
    

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").findOne({_id:profileId})
    
    console.log(data)
    res.status(200).json({status: 200, data: data})
}
catch (error) {
    res.status(500).json({status: 500, error: error})

}

}

const updateSinglePainting = async (req, res) => {
    const profileId = req.params.profileId
    const {id,description,paintName} = req.body
    

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").updateOne({_id:profileId,"Paintings" :{ "$elemMatch": {_id: id} }},{"$set": {"Paintings.$.description": description, "Paintings.$.paintName": paintName}})
    
    console.log(data)
    res.status(200).json({status: 200, data: data})
}
catch (error) {
    res.status(500).json({status: 500, error: error})

}}

const getSingleUser = async (req, res) => {
    const {_id} = req.params
    // const id = req.params.id
    

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").findOne({_id:_id})
    
    console.log("single user" + data)
    console.log(_id)
    res.status(200).json({status: 200, data: data})
}
catch (error) {
    res.status(500).json({status: 500, error: error})

}

}


const updateSingleUser = async (req, res) => {
    
    const {_id, bio, name} = req.body
    console.log(req.body)

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").updateOne({_id:_id}, {$set: {bio: bio, name: name}})
    
    console.log(data)
    res.status(200).json({status: 200, data: data})
}
catch (error) {
    res.status(500).json({status: 500, error: error})

}

}

const getSingleRating = async (req, res) => {
    
    const {_id, email} = req.params
    console.log(req.params)

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("userRatings").find().toArray()
    const filtered = data.filter((element) => {
        return element.id === _id && element.email === email
    });
    
    console.log("hello",filtered)

    if (filtered[0]) {
        res.status(200).json({status: 200, data: filtered[0].rating})
    } else {
        res.status(200).json({status: 200, data: 0})
    }
    
}
catch (error) {
    res.status(500).json({status: 500, error: error})

}

}


module.exports = {
    addNewRating,
    getUserByEmail,
    addPost,
    getAllPaintings,
    getSinglePainting,
    updateSinglePainting,
    getSingleUser,
    updateSingleUser,
    getSingleRating,
};