const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});



const db = require('./data/databfunc.js')

// endpoints here
server.get('/api/zoos',async(req,res)=>{
  try{
    const item = await db.find(req.query)
    res.status(200).json(item);
  }catch(err){
    res.status(500).json({message:'something wrong in get'})
  }
})

// server.post('/api/zoos',async(req,res)=>{
//   try{
//     const posting = db.add(req.body)
//     res.status(200).json(posting)
//   }catch(er){
//     res.status(500).json({er,message:'theres something wrong with post'})
//   }
// })

server.post('/api/zoos', (req, res) => {

  db.add(req.body)
    .then(zoo => {
      res.status(200).json(zoo);
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

server.put('/api/zoos/:id', (req, res) => {
  // update roles
  db.update(req.params.id, req.body)
    .then(zoo => {
      if (zoo) {
        res.status(200).json(zoo)
      } else {
        res.status(404).json({ message: 'zoo not found' })
      }
    })
    .catch(er=> {
      res.status(500).json({er,message:'put not working'})
    })
});

server.delete('/api/zoos/:id', (req, res) => {
  // remove roles (inactivate the role)
  db.remove(req.params.id)
    .then(zoo => {
      if (zoo) {
        res.status(204).end(); //we could respond with 200 and message
      } else {
        res.status(404).json({ message: 'zoo not found' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
});
