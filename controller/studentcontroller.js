import Student from "../models/Student.js";
import Op from "sequelize";
class studentcontroller{
    async index(req,res){
        const student = await Student.findAll();
        const data = {
            message  : "menampilkan data student",
            data : student,
        };
        res.json(data);
    };
    async show(req,res){
        // const filter = req.params.filter;
        // const sort = req.params.sort || "asc";
        // const student = await Student.findAll();
        // const data = {
        //     message  : `menampilkan data filter by ${filter} sort by ${sort}`,
        //     data : student,
        // };
        // res.json(data);
        const { filter, sort, filter_content} = req.body;
        const sortOrder = sort || "asc";
        const student = await Student.findAll({
            // Tambahkan kondisi sesuai kebutuhan
             where : {
                [filter] : filter_content
            },
            order: [
                // Tambahkan aturan pengurutan jika diperlukan
                [filter,`${sortOrder}`], 
            ],
        });
        const data = {
            message: `menampilkan data filter by ${filter} sort by ${sortOrder}`,
            data: student,
        };
        res.json(data);
    };
    async store(req,res) {
        //validasi sederhana, handle jika salah satu data tidak dikirim
        
        const {nama, nim, email,jurusan}= req.body;
        if(!nama || !nim || !email||!jurusan){
            const data = {
                message : "semua data harus dikirim",
            };
            return res.status(422).json(data)
        }
        else {
            const student = await Student.create({
                nama: `${nama}`,
                nim:`${nim}`,
                email:`${email}`,
                jurusan:`${jurusan}`,
            }
        );
            const data = {
            message  : `menambahkan data student ${nama}`,
            data : student,
            };
            res.json(data);
        }
    };
    async update(req,res){
        const student = await Student.update();
        const {id} = req.params;
        const {nama} = req.body;
        const data = {
            message  : `mengedit data student ${id},nama : ${nama}`,
            data : student,
        };
        res.json(data);
    };
    async destroy(req,res) {
        const {id} = req.params;
        const student = await Student.destroy({
            where : {
                id : id
            }
        });
        const data = {
            message  : `menghapus data student ${id}`,
            data : student,
        };
        res.json(data);
    };   
    async find(req,res){
        const{id} = req.params;
        // const student = await Student.findOne({where: {id : id}});
        const student = await Student.findAll(
            { where : {
                id : id
            }
        }
        )
        const data={
            message :  `menampilkan data student ${id}`,
            data : student,
        };
        res.json(data);
    };
};

// const object = new studentcontroller();
// module.exports = object;
export default new studentcontroller();