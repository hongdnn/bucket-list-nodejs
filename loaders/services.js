//set dependency injection for all services

const Container = require('typedi').Container;
const BucketService = require('../controllers/bucketListItem/service')

function setServices() {
    Container.set('bucketService', new BucketService())
}

module.exports = { setServices }