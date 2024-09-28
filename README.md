1.cd blog-platform
2.npm init -y
3.npm install express mongoose bcryptjs jsonwebtoken dotenv cors
4.npm install nodemon --save-dev
5.connect with your mongodb "mongodb://127.0.0.1:27017/blog"
6.change in db.js "mongodb://127.0.0.1:27017/blog"
7.npm run dev
8.Go to thunder client post the "localhost:5000/api/auth/register"
9.Go to body add it :
{
  "username":"hello",
  "email":"hello@gmail.com",
  "password":"1234"
}
