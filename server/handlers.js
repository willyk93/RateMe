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
        const obj = {email: data[i].email, name: data[i].name, paintSRC: data[i].Paintings[j].paintSRC, paintName: data[i].Paintings[j].paintName, description: data[i].Paintings[j].description}
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
    

try{
    await client.connect();
    const db = client.db("RateMe");
    const data = await db.collection("users").updateOne({_id:_id,"data" :{ "$elemMatch": {_id: _id} }},{"$set": {"data.$.bio": bio, "data.$.name": name}})
    
    console.log(data)
    res.status(200).json({status: 200, data: data})
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
};