// const knex = require('knex');
// const router = require('express').Router();
// const knexConfig = {
//   client:'sqlite3',
//   connection:{
//     filename:'./data/lambda.db3'
//   },
//   useNullAsDefault:true,
// };
// const db = knex(knexConfig);

// router.get('/api',(req,res)=> {
//   db('zoos')
//   .then(zoos => {
//     res.status(200).json(zoos)
//   })
//   .catch(err => {
//     res.status(500).json({err,message:'something wrong in get'})
//   })
// })

// server.get('/',async(req,res)=>{
//   try{
//     const info = db.
//     res.status(200).json(info)
//   }catch(err){
//     res.status(500).json({message:'somethig is wrong in get'})
//   }
// })


// ////////////// 
// server.post('/',async(req,res)=>{
//   try{

//   }catch(err){
  //   res.status(500).json({})
  // }
// })
// server.put('/',async(req,res)=>{
//   try{

//   }catch(err){
  //   res.status(500).json({})
  // }
// })
// server.delete('/',async(req,res)=>{
//   try{

//   }catch(err){
    // res.status(500).json({})
  // }
// })

module.exports = router ;