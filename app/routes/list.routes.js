const router = require('express').Router()
const listController = require('../controllers/list.controller')

module.exports = router

//API Routes ==============================================================
router.get('/', listController.getAllLists)
router.get('/:id', listController.getListById)
router.post('/', listController.newList)
router.put('/:id', listController.updateOneList)
router.delete('/:id', listController.deleteOneList)