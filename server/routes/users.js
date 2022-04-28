import express from 'express'
import { getUsers, createUser, login, getProfile } from '../controllers/users.js'

const router = express.Router()

router.get('/', getUsers)
router.post('/register', createUser)
router.post('/login', login)
router.get('/profile', getProfile)

export default router
