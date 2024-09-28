cd blog-platform
npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv cors
npm install nodemon --save-dev

connect your database with mongodb

change db.js  "mongodb://127.0.0.1:27017/blog"  

npm run dev 

go to thunder client in your vs code localhost:5000/api/auth/register post and send   it 
in body :
{
  "username":"hello",
  "email":"hello@gmail.com",
  "password":"1234"
}

