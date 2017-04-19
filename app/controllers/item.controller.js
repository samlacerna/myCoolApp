const responses = require('../models/responses')
const itemModel = require('../models/item')
const itemService = require('../services/item.service')({
    modelService: itemModel
})

const util = require('util')

module.exports = {
    getAllItems,
    insertItem,
    getOneItem,
    updateOneItem,
    deleteOneItem
}

function getAllItems(req, res) {
    itemService.getAll()
        .then((items) => {
            const responseModel = new responses.ItemsResponse()
            responseModel.items = items
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function insertItem(req, res) {
    itemService.insert(req.body)
        .then((item) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = item
            res.status(201).json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function getOneItem(req, res) {
    let queryCondition = {
        _id: req.params.id
    }
    itemService.getOne(queryCondition)
        .then((item) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = item
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function updateOneItem(req, res) {
    let queryCondition = {
        _id: req.params.id
    }

    itemService.updateOne(queryCondition, req.body)
        .then((item) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = item
            res.status(200)
                .json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function deleteOneItem(req, res) {
    let queryCondition = {
        _id: req.params.id
    }

    itemService.deleteOne(queryCondition)
        .then((item) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = item
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

