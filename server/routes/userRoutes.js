import express from 'express'

import {registerUser, loginUser, UserCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth,UserCredits)


export default userRouter

//http://localhost:4000/api/user/register
//http://localhost:4000/api/user/login