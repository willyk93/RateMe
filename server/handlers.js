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
    
    const db = client.db("RateMe");
    await client.connect();
    const id = uuidv4();
    // const rating =  await db.collection("rateMe").findOneAndUpdate({},
        
    //     )
    
    const rating = await db.collection("rating").insertOne({
    

    })

    if (rating) {
        res.status(200).json({
            status: 200,
            data: rating
        })
    } else {
        res.status(404).json({
            status: 404,
            message: req.body
        })
    }

}

const getUserByEmail = async (req, res) => {

    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").find().toArray()
    
    console.log(data)
    const result = data.filter((element) => {
        return (element.email === req.params.email)
    })
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

module.exports = {
    addNewRating,
    getUserByEmail,
    addPost
};