import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import jwt from 'jsonwebtoken'

export const getUsers = (req, res) => {
  res.send('NOT IMPLEMENTED: Get Users')
}

export const createUser = async (req, res) => {
  const { firstName, lastName, username, password, email } = req.body

  try {
    const hash_pwd = bcrypt.hashSync(password, 10)

    const newUser = new User({
      firstName,
      lastName,
      username,
      password: hash_pwd,
      email,
    })

    var user = await newUser.save()

    res.status(200).json({ success: true, message: 'User was created.', user })
  } catch (err) {
    return res.status(501).json({ success: false, message: 'Failed to register a new user.', error: err.message })
  }
}

export const login = async (req, res) => {
  res.status(200).json({ route: 'Login' })
}

export const getProfile = async (req, res) => {
  res.status(200).json({ route: 'Get Profile' })
}
