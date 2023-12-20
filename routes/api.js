const express = require("express");
const router = express.Router();
const studentcontroller = require("../controller/studentcontroller.js");

router.get("/students",studentcontroller.index)
router.post("/students",studentcontroller.store)
router.put("/students/:id", studentcontroller.update)
router.delete("/students/:id", studentcontroller.destroy)


module.exports = router;