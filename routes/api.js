const express = require("express");
const router = express.Router();
const studentcontroller = require("../controller/studentcontroller.js");

router.get("/students",studentcontroller.index)
router.put("/students", (req,res)=> {
    res.send("menambahkan data student")
});
router.put("/students/:id", (req,res)=> {
    const {id} = req.params;
    res.send("edit data student",{id})
});
router.delete("/students", (req,res)=> {
    const {id} = req.params;
    res.send("menghapus data student", {id})
});


module.exports = router;