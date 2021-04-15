//define request data schema

const Joi = require('celebrate').Joi
const Segments = require('celebrate').Segments

 const createBucketItem = {
    [Segments.BODY]: Joi.object().keys({
        description: Joi.string().required(),
        date: Joi.date().default(Date.now)
    })
}

 const updateBucketItem = {
    [Segments.BODY]: Joi.object().keys({
        description: Joi.string().required(),
        date: Joi.date().required()
    })
}

module.exports = {
    createBucketItem, updateBucketItem
}