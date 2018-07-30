const database = require("./database-connection");

module.exports = {
    list(){
        return database('resolution').select();
    },
    read(id){
        return database('resolution').select().where('id', id).first();
    },
    create(resolution){
        return database('resolution').insert(resolution);
    },
    update(id, resolution){
        return database('resolution').update(resolution).where('id', id);
    },
    delete(id){
        return database('resolution').delete().where('id', id);
    }
};
