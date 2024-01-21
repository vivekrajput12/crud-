const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const calRoute  =  require('./routes/calRoutes.js')
app.use(bodyParser.json());
var mysql = require('mysql')
const cors = require('cors');
//comment added here
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      exposedHeaders: ["Content-Length", "Authorization"],
      credentials: true,
    })
  );
  var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ajjuvivek123",
    database:"server" 
  })
  con.connect(function(err){
    if(err) throw err;
    console.log("connected");
   
  })
  
app.get("/getTable" , function(req,res){
    // res.send("helo")
    con.query('select * from employees' ,(err , result)=>{
      if(err){
        console.log(err);
       } else{
          console.log("table hogya")
          res.json(result)
        }
      }
     )
    console.log('server')
});
app.post("/insertData" , function(req,res){
  // res.send("helo")
  const{ID , NAME ,AGE ,CITY} = req.body;
  console.log(ID)
  con.query(`INSERT INTO employees(id,name,age,city)VALUES (${ID} , '${NAME}',${AGE},'${CITY}')` ,(err , result)=>{
    if(err){
      console.log(err);
     } else{
        console.log("add hogya")
        res.json(result)
      }
    }
   )
  console.log('server')
});
app.delete("/delete/:id" , function(req,res){
  // res.send("helo")
  const ID = req.params.id;
  console.log(ID)
  con.query(`DELETE FROM employees WHERE id=${ID}` ,(err , result)=>{
    if(err){
      console.log(err);
     } else{
        console.log("add hogya")
        res.json(result)
      } 
    }
   )
  console.log('server')
});
app.put("/:id",function(req , res){
  const id1 = req.params.id
  const {ID , NAME ,AGE,CITY} = req.body;
  con.query(`UPDATE employees SET id = ${ID},name = '${NAME}',age = ${AGE},city = '${CITY}' WHERE id = ${id1}`, function(err,r){
    if(err){
      console.log(err);
     } else{
        console.log("update hogya")
        res.json(r)
      } 
    
  })
})
app.use("/beckend/cal" , calRoute);
app.listen(8000);    
module.exports = {
  query: (sql, callback) => con.query(sql, callback),
  close: () => con.end()
};


 // var sql = "CREATE TABLE myTeam(id INT,name VARCHAR(255) , age INT(2),city VARCHAR(255))";
    // var sqlInsert = "INSERT INTO employees(id,name,age,city)VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";
    // con.query(sqlInsert,function(err , result){
    //   if(err) throw err;
    //   console.log("my team table updated now")
    // })
    // con.query("CREATE DATABASE server" , function(err , result){
    //   if(err) throw err;
    //   console.log("database created");
    // })