const con = require('../db/mongoose')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  
    const token = req.header('Authorization')
    jwt.verify(token, 'freecharge',(err, verifiedJwt) => {
      if(err){
        res.send(err.message )
      }else{
        con.query(`SELECT * FROM users WHERE email =${mysql.escape(verifiedJwt.email)}`,async function (err, response) {
          if (err) throw err
          if(response.length == 0)
          {
          res.status(401);
           return res.send("Not authorized");
          }
          else{
            next(); 
          }
        });
        
      }
      
    })
       
}

module.exports = auth