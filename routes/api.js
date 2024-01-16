// const express = require("express");
import express from "express"
import studentcontroller from "../controller/studentcontroller.js";
import authcontroller from "../controller/authcontroller.js";
import auth from "../middleware/auth.js"
const router = express.Router();
// const studentcontroller = require("../controller/studentcontroller.js");
// const instance =new studentcontroller();

router.get("/students",auth,studentcontroller.index)
router.get("/students/show/:filter/:sort",auth,studentcontroller.show)
router.post("/students",studentcontroller.store)
router.put("/students/:id", studentcontroller.update)
router.delete("/students/:id", studentcontroller.destroy)
router.get("/students/:id", studentcontroller.find)
router.post("/students", studentcontroller.store)
router.post("/login", authcontroller.login);
router.post("/register", authcontroller.register);

// module.exports = router;
export default router;
