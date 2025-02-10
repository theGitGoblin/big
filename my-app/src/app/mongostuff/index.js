import { MongoClient } from "mongodb"
const URI = process.env.MONGDB_URI;
const options = {};
if (!URI) throw new Error('Add Mongo URI to .env :\)');
let client = new MongoClient(URI,options);
let clientPromise;
if(process.env.NODE_ENV !== 'production'){
    if (!global_mongoClientPromise){
        global_mongoClientPromise = client.connect()
    }
    clientPromise = global.global_mongoClientPromise;}
    else{
        clientPromise = client.connect()
    }
    export default clientPromise;

