
// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const { users } = require("./data");

// const { MONGO_URI } = process.env;
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     };
//     console.log("outside")
//     const ratingExport = async() => {
//         const client = new MongoClient(MONGO_URI, options)
//     console.log("try")

//         try{
//             const db = client.db("Rating");
//         await client.connect();
//         await db.collection('users').updateOne(users)

//             // })

//             }
//             catch (error) {
//                 console.log(error)
//             }
//             client.close();
//             console.log("disconnect")
        
//     }

//     ratingExport();