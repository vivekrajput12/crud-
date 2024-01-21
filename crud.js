// const con = require('./server.js')
// const create = (req , res)=>{
//     const{ID , NAME ,AGE ,CITY} = req.body;
//     var sqlInsert = `INSERT INTO employees(id,name,age,city)VALUES (${ID} , ${NAME},${AGE},${CITY})`;
//     con.query(sqlInsert , function(err , result){
//             if(err) throw err;
//             res.send("row added");
//     })
// }
// const deleteTable = ()=>{
    
// }
// const update = ()=>{
    
// }
// const read = ()=>{
    
// }
// module.exports= create;
// const {createConnection} = require('./server.js');

// const initializeConnection = async () => {
//   try {
//     const con = await createConnection();
//     return con;
//   } catch (error) {
//     throw error;
//   }
// };

const create = async (req, res) => {
  try {
    const con = await initializeConnection();
    const { ID, NAME, AGE, CITY } = req.body;
    const sqlInsert = `INSERT INTO employees(id, name, age, city) VALUES (${ID}, '${NAME}', ${AGE}, '${CITY}')`;
    con.query(sqlInsert, function (err, result) {
      if (err) throw err;
      res.send("row added");
      con.end(); // Close the connection after the query is executed
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Implement delete, update, and read functions similarly

module.exports = {
  create,
  // Export other CRUD functions
};