module.exports = listService

function listService(options) {
    let List

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    List = options.modelService

    return {
        getAll,
        insertList,
        getOneList,
        updateList,
        deleteList
    }

    function getAll() {
        return List.find()
    }

    function insertList(document) {
        let list = new List(document)
        return list.save()
    }

    function getOneList(queryCondition) {
        return List.findOne(queryCondition)
    }

    function updateList(queryCondition, document) {
        return List.findOneAndUpdate(queryCondition, {
            $set: document
        }, {
            new: true
        })
    }

    function deleteList(queryCondition) {
        return List.remove(queryCondition)
    }
}