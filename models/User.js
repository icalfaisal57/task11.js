import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
    //buat kolom username, email, password 
    username: {
        type : DataTypes.STRING,
        allownull : false,
    },
    email: {
        type : DataTypes.STRING,
        allownull : false,
        unique: true,
    },
    password: {
        type : DataTypes.STRING,
        allownull : false,
    },
});

try {
    await User.sync();
    console.log("the user table was created");
}catch(error){
    console.log("cannot create table :", error);
}
export default User;
// module.exports = Student;