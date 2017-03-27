const router = require('express').Router()
const usersController = require('../controllers/users.controller')

module.exports = router

//API Routes ========================================================================

router.get('/', usersController.getAll)
router.get('/:id', usersController.getOneUser)
router.post('/', usersController.insertUser)
router.put('/:id', usersController.updateOneUser)
router.delete('/:id', usersController.deleteOneUser)