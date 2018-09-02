const routeChainer = require('../middleware/routeChain.js')


//import routes
const _base = require('../resources/_base/_base.js')
const projects = require('../resources/projects/projects.js')
const users = require('../resources/users/users.js')

const router = routeChainer([
    _base,
    projects,
    users
])

module.exports = router;
