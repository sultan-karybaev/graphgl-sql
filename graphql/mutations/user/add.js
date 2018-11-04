import {
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import { userType, userInputType } from '../../types/user'
import UserModel from '../../../models/user'

export default {
  type: userType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    },
    asd: {
      type: GraphQLString
    }
  },
  resolve (root, params) {
    const uModel = new UserModel(params.data)
    const newUser = uModel.save()
    if (!newUser) {
      throw new Error('Error adding user')
    }
    console.log('newUser')
    console.log(newUser)
    return newUser
  }
}
