const responses = require('../models/responses')
const userModel = require('../models/user')
const usersService = require('../services/users.service')({
    modelService: userModel
})

const util = require('util')

module.exports = {
    getAll,
    insertUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
}

function getAll(req, res) {
    usersService.getAll()
        .then((users) => {
            const responseModel = new responses.ItemsResponse()
            responseModel.items = users
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function insertUser(req, res) {
    usersService.insert(req.body)
        .then((user) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = user
            res.status(201).json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function getOneUser(req, res) {
    let queryCondition = {
        _id: req.params.id
    }
    usersService.getOne(queryCondition)
        .then((user) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = user
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function updateOneUser(req, res) {
    let queryCondition = {
        _id: req.params.id
    }

    usersService.update(queryCondition, req.body)
        .then((user) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = user
            res.status(200)
                .json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

function deleteOneUser(req, res) {
    let queryCondition = {
        _id: req.params.id
    }

    usersService.deleteOne(queryCondition)
        .then((user) => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = user
            res.json(responseModel)
        }).catch((err) => {
            res.status(500).send(new responses.ErrorResponse(err))
        })
}

