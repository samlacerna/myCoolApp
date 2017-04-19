module.exports = itemService

function itemService(options) {
    let Item

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    Item = options.modelService

    return {
        getAll,
        insert,
        getOne,
        updateOne,
        deleteOne
    }

    function getAll() {
        return Item.find()
    }

    function insert(document) {
        let item = new Item(document)
        return item.save()
    }

    function getOne(queryCondition) {
        return Item.findOne(queryCondition)
    }

    function updateOne(queryCondition, document) {
        return Item.findOneAndUpdate(queryCondition, {
            $set: document
        }, {
            new: true
        })
    }

    function deleteOne(queryCondition) {
        return Item.remove(queryCondition)
    }
}