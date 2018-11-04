let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
let multer = require("multer");
// let fs = require('fs');
let googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCAVWS4_tC_2jFtffVLaa7fdAoKrd2CyOc'
});
// let mysql = require('mysql');
let mysql = require('promise-mysql');
let connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'lake'
});

// connection.connect();
connection.query('SELECT * FROM people;', function (error, results, fields) {
  if (error) return console.log(error);
  console.log('The results is: ', results[0]);
});
const t = connection.query('SELECT * FROM people;')
// console.log('mysql', t)
// connection.end();

let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');
import schema from './graphql'

// let schema = buildSchema(`
//     type Query {
//         course(id: Int!): Course
//         courses(topic: String): [Course]
//     },
//     type Course {
//         id: Int
//         title: String
//         author: String
//         description: String
//         topic: String
//         url: String
//     },
//     type Mutation {
//       addCourse(data: CourseInput): Course
//     },
//     input CourseInput {
//       title: String!,
//       author: String
//     }
// `);
// let coursesData = [
//   {
//     id: 1,
//     title: 'The Complete Node.js Developer Course',
//     author: 'Andrew Mead, Rob Percival',
//     description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
//     topic: 'Node.js',
//     url: 'https://codingthesmartway.com/courses/nodejs/'
//   },
//   {
//     id: 2,
//     title: 'Node.js, Express & MongoDB Dev to Deployment',
//     author: 'Brad Traversy',
//     description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
//     topic: 'Node.js',
//     url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
//   },
//   {
//     id: 3,
//     title: 'JavaScript: Understanding The Weird Parts',
//     author: 'Anthony Alicea',
//     description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
//     topic: 'JavaScript',
//     url: 'https://codingthesmartway.com/courses/understand-javascript/'
//   }
// ]
//
// let getCourse = function(args) {
//   let id = args.id;
//   return coursesData.filter(course => {
//     return course.id === id;
//   })[0];
// }
// let getCourses = function(args) {
//   if (args.topic) {
//     let topic = args.topic;
//     return coursesData.filter(course => course.topic === topic);
//   } else {
//     return coursesData;
//   }
// }
// let root = {
//   course: getCourse,
//   courses: getCourses,
//   addCourse: (args) => {
//     coursesData.push({title: args.title, author: args.author})
//     return coursesData[0]
//   }
// };

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/waterfall");

multer({limits: { fieldSize: 25 * 1024 * 1024 }});

let upload = multer({dest: "static/media"});

let app = express();

app.set("port", process.env.PORT || 3002);

app.get('/', (req, res) => {
  res.send('Hello World..');
});

app.use(cors());

app.use('/graphql', graphqlHTTP(() => ({
  schema: schema,
  graphiql: true,
  // rootValue: root,
  pretty: true
})))

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.get('/graphql', graphqlHTTP(() => ({
//   schema: schema,
//   graphiql: true,
//   pretty: true
// })))
//
// app.post('/graphql', graphqlHTTP(() => ({
//   schema: schema,
//   graphiql: true,
//   pretty: true
// })))




const server = app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
