const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(
        process.env.DB_URL,
        { useNewUrlParser: true}
    )
    .then(() => console.log("DB connection successful"))
    .catch((err) => console.error("DB connection error: ", err));
};

module.exports = connectDatabase;
