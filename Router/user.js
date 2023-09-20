const router = require('express').Router();

const { postUser ,getUsers, getUser,deleteUserById, updateUser} = require("../Controller/user")

// here will create end point for the router and will the get the info the send form controller
router.post("/createUser", postUser);
router.get("/getUsers", getUsers);
router.get("/getUser/:id", getUser);
router.delete("/deleteUserById/:id", deleteUserById);
router.put("/updateUser/:id", updateUser);


module.exports = router;