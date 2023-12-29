import Student from "../models/Student.js";
class studentcontroller{
    async index(req,res){
        const student = await Student.findAll();
        const data = {
            message  : "menampilkan data student",
            data : [student],
        };
        res.json(data);
    };
    store(req,res) {
        const {nama} = req.body;
        const data = {
            message  : `menambahkan data student ${nama}`,
            data : [],
        };
        res.json(data);
    };
    update(req,res){
        const {id} = req.params;
        const {nama} = req.body;
        const data = {
            message  : `mengedit data student ${id},nama : ${nama}`,
            data : [],
        };
        res.json(data);
    };
    destroy(req,res) {
        const {id} = req.params;
        const data = {
            message  : `menghapus data student ${id}`,
            data : [],
        };
        res.json(data);
    };   
    find(req,res){
        const{id} = req.params;
        const data={
            message :  `menampilkan data student ${id}`,
            data : [],
        };
    };
};

// const object = new studentcontroller();
// module.exports = object;
export default new studentcontroller();