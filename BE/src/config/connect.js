const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
Mongoose.connect("mongodb://localhost/db_codelab");

const Admins = Mongoose.model("admin",{
    adminAccount: String,
    adminPassword: String,
});

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended :true}));

app.post("/admin", async (req, res) => {
    try {
        var admin = new Admins(request.body);
        var result = await admin.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

