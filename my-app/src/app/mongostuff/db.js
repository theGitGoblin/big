import clientPromise from ".";

let client,db,revenue;

async function init() {
    try{
        client = await clientPromise;
        db = await client.db()
        revenue =   await db.collections('revenue')
    }catch(error){
        throw new Error('Client failed to connect to db');
    }
};
