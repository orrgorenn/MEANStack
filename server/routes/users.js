import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ route: 'Get' })
})

router.get('/register', (req, res) => {
  res.status(200).json({ route: 'Register' })
})

router.get('/profile', (req, res) => {
  res.status(200).json({ route: 'Profile' })
})

router.get('/login', (req, res) => {
  res.status(200).json({ route: 'Login' })
})

export default router
