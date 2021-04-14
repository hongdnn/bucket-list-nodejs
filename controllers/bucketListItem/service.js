//data access layer

const BucketListItem = require('../../models/BucketListItem')

class BucketService {
    async getAll() {
        const bucketListItems = await BucketListItem.find()
        if(bucketListItems) {
            bucketListItems.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
        }
        return bucketListItems
    }

    async create(newItem) {
        const newBucketListItem = new BucketListItem(newItem)
        return await newBucketListItem.save()
    }

    async update(id, newItem) {
        return await BucketListItem.findByIdAndUpdate(id, newItem)
    }

    async delete(id) {
        return await BucketListItem.findByIdAndDelete(id)
    }
}

module.exports = BucketService




// constructor(container) {
    //     //this.repository = container.get('repositoryManager').getRepository(BucketListItem)
    //     this.repository = container.get(BucketListItem)
    // }