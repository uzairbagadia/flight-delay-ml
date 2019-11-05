const routes = require('next-routes')();

routes
    .add('/insurances/new','/insurances/new')
    .add('/insurances/:address', '/insurances/show')
    .add('/insurances/:address/depositshow', '/insurances/deposit/indexd');
    


module.exports = routes;