const { celebrate } = require('celebrate')
const { Router } = require('express')
const { default: Container } = require('typedi')
const { createBucketItem, updateBucketItem } = require('./dto')

const router = Router()


router.get('/', async (req, res) => {
    try {
        const bucketService = Container.get('bucketService')
        const bucketListItems = await bucketService.getAll()
        if (!bucketListItems) throw new Error('Not found any item')
        res.status(200).json(bucketListItems)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/',celebrate(createBucketItem) , async (req, res, next) => {
    try {
        const bucketService = Container.get('bucketService')
        const bucketRecord = bucketService.create(req.body)
        res.status(200).json(bucketRecord)
        //return res.status(HttpStatus.OK).send(HttpResponse.success({ data: bucketRecord }))
    } catch (error) {
        console.log(error)
        //return res.status(error.code || HttpStatus.INTERNAL_SERVER_ERROR).json(HttpResponse.error(error))
    }
})

router.put('/:id', celebrate(updateBucketItem), async (req, res) => {
    const { id } = req.params
    try {
        const bucketService = Container.get('bucketService')
        const response = bucketService.update(id, req.body)
        if(!response) throw Error('Something went wrong')
        const updated = { ... response._doc, ... req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const bucketService = Container.get('bucketService')
        const removed = bucketService.delete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router