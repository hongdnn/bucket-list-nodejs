//config express framework

const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('../controllers/bucketListItem/route')

function configExpess(app){
    app.use(cors())
    app.use(morgan('tiny'))
    app.use(bodyParser.json())

    app.use('/api/bucketListItems', bucketListItemRoutes)

    app.get('/', (req, res) => res.send('Hello world'))
}

module.exports = { configExpess }