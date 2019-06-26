const knex = require('knex')

const knexConfig = {
  client:'sqlite3',
  connection:{
    filename:'./data/lambda.db3'
  },
  useNullAsDefault:true,
};

const db = knex(knexConfig);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find(){
  return db('zoos');
}

function findById(id){
  return db('zoos')
  .where({id})
  .first();
}

function add(zoo){
  return db('zoos')
  .insert(zoo,'id')
  .then(ids=>{
    const [id] = ids;
    return findById(id)
  });
}

function update(id,change){
  return db('zoos')
  .where({id})
  .update(change)
  .then(here =>{
    if(here>0){
      return findById(id)
    }else{
      return null
    }
  })
}

function remove(id) {
  return findById(id).then(zoo => {
      if (zoo) {
          return db('zoos')
              .where({ id })
              .del()
              .then(() => {
                  return zoo;
              })
      } else {
          return null;
      }
  })
}