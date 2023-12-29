import  Sequelize  from "sequelize";
//CONFIG ketika tidak menggunakan .env
// const sequelize = new sequelize({
//     database: "express_api",
//     username: "root",
//     password: "",
//     host: "localhost",
//     diialect: "mysl",
// });
// try {
//     await sequelize.authenticate();
//     console.log("database connected");
// }catch(error){
//     console.error("cannot connect to database :", error);
// }

// export default sequelize;

import "dotenv/config";
const {
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST
} = process.env;

const sequelize = new Sequelize({
    database: DB_DATABASE,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect: "mysql",
});
try {
    await sequelize.authenticate();
    console.log("database connected");
}catch(error){
    console.error("cannot connect to database :", error);
}

export default sequelize;
