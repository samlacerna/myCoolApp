const router = require('express').Router()
const itemController = require('../controllers/item.controller')

module.exports = router

//API Routes ==============================================================
router.get('/', itemController.getAllItems)
router.get('/:id', itemController.getOneItem)
router.post('/', itemController.insertItem)
router.put('/:id', itemController.updateOneItem)
router.delete('/:id', itemController.deleteOneItem)