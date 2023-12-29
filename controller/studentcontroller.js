import Student from "../models/Student.js";
class studentcontroller{
    async index(req,res){
        const student = await Student.findAll();
        const data = {
            message  : "menampilkan data student",
            data : student,
        };
        res.json(data);
    };
    async store(req,res) {
        const student = await Student.create();
        const {nama} = req.body;
        const data = {
            message  : `menambahkan data student ${nama}`,
            data : student,
        };
        res.json(data);
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