module.exports = usersService

function usersService(options) {
    let User

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    User = options.modelService

    return {
        getAll,
        insert,
        getOne,
        update,
        deleteOne
    }

    function getAll() {
        return User.find()
    }

    function insert(document) {
        let user = new User(document)
        return user.save()
    }

    function getOne(queryCondition) {
        return User.findOne(queryCondition)
    }

    function update(queryCondition, document) {
        return User.findOneAndUpdate(queryCondition, {
            $set: document
        }, {
            new: true
        })
    }

    function deleteOne(queryCondition) {
        return User.remove(queryCondition)
    }

}