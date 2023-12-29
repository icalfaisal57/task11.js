import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Student = sequelize.define("Student", {
    //buat kolom nama, nim, email, jurusan
    nama : {
        type : DataTypes.STRING,
        allownull : false,
    },
    nim : {
        type : DataTypes.STRING,
        allownull : false,
    },
    email : {
        type : DataTypes.STRING,
        allownull : false,
    },
    jurusan : {
        type : DataTypes.STRING,
        allownull : false,
    }
});

try {
    await Student.sync();
    console.log("the table student was created");
}catch(error){
    console.log("cannot create table :", error);
}
export default Student;
// module.exports = Student;