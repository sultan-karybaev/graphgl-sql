import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'
import { userType } from '../../types/user'
import userModel from '../../../models/user'
let mysql = require('promise-mysql');
let connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'lake'
})

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params) {
    return userModel.findById(params.id).exec()
    // console.log(connection.query('SELECT * FROM people;'))
    // return connection.query('SELECT * FROM people;')
  }
}
