const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
        initDB();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("6a8f3dfa10ac387b960ee6d8"),
}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();