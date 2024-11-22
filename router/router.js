const express = require("express");
const { getEveryThing, createContact, postRequests } = require("../controller/controller");
const router = express.Router();




router.post('/postRequest',postRequests)

module.exports = router;