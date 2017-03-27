const router = require('express').Router()
const usersRoutes = require('./user.routes')
const listsRoutes = require('./list.routes')

// register routes ===========================================================================
router.use('/api/users', usersRoutes)
router.use('/api/lists', listsRoutes)

//Handle API 404
router.use('/api/*', function (req, res, next) {
    res.sendStatus(404)
})

//Handle 500
router.use(function (req, res, next) {
    //if the error object doesn't exist
    if (!err) {
        return next()
    }
    //log it
    console.error(err.stack)
    //redirect to error page
    res.sendStatus(500)
})

module.exports = router