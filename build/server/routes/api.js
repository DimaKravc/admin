var express = require('express');
var authenticate = require('../middlewares/authenticate');
var data = require('../database/datatable.json');
var axios = require('axios');

let router = express.Router();

router.get('/:request', authenticate, (req, res) => {
    let request = req.params.request;

    if (request == 'new-merchants') {
        axios
            .get('http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/merchants', {params: req.query})
            .then(innerRes => {
                const resJSON = JSON.stringify(innerRes.data);

                res.json(resJSON)
            }, err => {
                res
                    .status(err.response.status)
                    .send(err.response.statusText);
            });
    }

});

module.exports = router;