class studentcontroller{
    index(req,res){
        const data = {
            message  : "menampilkan data student",
            data : [],
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
            message  : `mengedit data student ${id},nama${nama}`,
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
};

const object = new studentcontroller();
module.exports = object;