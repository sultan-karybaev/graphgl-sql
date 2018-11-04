import {
  GraphQLList,
  GraphQLID
} from 'graphql'
import { userType } from '../../types/user'
import userModel from '../../../models/user'

export default {
  type: new GraphQLList(userType),
  args: {
    id: {
      name: 'ID',
      type: new GraphQLList(GraphQLID)
    }
  },
  resolve (root, params) {
    // const users = userModel.find().exec()
    let proArr = []
    let userArr = []
    // console.log('user')
    for (let i = 0; i < params.id.length; i++) {
      proArr.push(new Promise((res, rej) => {
        userModel.findById(params.id[i])
          .exec((err, user) => {
            if (err) return
            // console.log('user', user)
            userArr.push(user)
            res()
          })
      }))
    }
    let allArr = params.id.map((a) => { return { _id: a } })
    console.log('allArr', allArr)
    const users = userModel.find({ $or: allArr }).exec()
    Promise.all(proArr).then(() => {
      // console.log('userArr', userArr)
      // return userArr
    })
    console.log('proArr', Promise.all(proArr))
    // return Promise.all(proArr)
    // if (!users) {
    //   throw new Error('Error getting users')
    // }
    return users
  }
}
