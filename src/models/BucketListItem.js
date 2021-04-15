const { Schema, model } = require('mongoose')

const BucketListItemSchema = new Schema({
    description: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const BucketListItem = model('bucketListItem', BucketListItemSchema)

module.exports = BucketListItem