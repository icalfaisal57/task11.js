// const express = require("express");
import express from "express"
import studentcontroller from "../controller/studentcontroller.js";
const router = express.Router();
// const studentcontroller = require("../controller/studentcontroller.js");
// const instance =new studentcontroller();

router.get("/students",studentcontroller.index)
router.post("/students",studentcontroller.store)
router.put("/students/:id", studentcontroller.update)
router.delete("/students/:id", studentcontroller.destroy)
router.get("/students/:id", studentcontroller.find)


// module.exports = router;
export default router;
