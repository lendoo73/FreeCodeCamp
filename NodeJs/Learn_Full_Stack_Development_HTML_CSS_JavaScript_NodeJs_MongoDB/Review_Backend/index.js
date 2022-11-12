import app from "./server.js";
import mongodb from "mongodb";
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import ReviewsDao from "./dao/reviewsDao.js";

dotenv.config()

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.xzfvqzk.mongodb.net/?retryWrites=true&w=majority`;

const port = process.env.PORT;

MongoClient
    .connect(uri, {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await ReviewsDao.injectDb(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })
;