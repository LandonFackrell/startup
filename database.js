const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('users');
const metadataCollection = client.db('startup').collection('startup-metadata') // TODO Implement this in mongo

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function getVisits(){
  let currNumVisitsObj = metadataCollection.distinct("numVisits")[0];
  updateNumVisits(currNumVisitsObj["numVisits"]);
  return currNumVisitsObj["numVisits"];
}

async function updateNumVisits(currNumVisits){
  const updateDocument = {
    $set: {
       numVisits: currNumVisits + 1,
    },
  };
  const filter = { type: "numVisits" };
  metadataCollection.updateOne(filter, updateDocument);
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  getVisits
};
