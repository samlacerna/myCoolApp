const responses = require('../models/responses')
const listModel = require('../models/list')
const listService = require('../services/list.service')({
    modelService: listModel
})

const util = require('util')

module.exports = {
    getAllLists,
    newList,
    getListById,
    updateOneList,
    deleteOneList
}

function getAllLists(req, res) {
    return listService.getAll()
        .then((lists) => {
            const responseModel = new responses.ItemResponse()
            responseModel.items = lists
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function newList(req, res) {
    return listService.insertList(req.body)
        .then((list) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = list
            res.status(201).json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse())
        })
}

function getListById(req, res) {
    let queryCondition = {
        _id: req.params.id
    }
    return listService.getOneList(queryCondition)
        .then((list) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = list
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse())
        })
}

function updateOneList(req, res) {
    let queryCondition = {
        _id: req.params.id
    }
    return listService.updateList(queryCondition, req.body)
        .then((list) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = list
            res.status(204).json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse())
        })
}

function deleteOneList(req, res) {
    let queryCondition = {
        _id: req.params.id
    }

    return listService.deleteList(queryCondition)
        .then((list) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = list
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse())
        })
}