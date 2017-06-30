var express = require('express');
var authenticate = require('../middlewares/authenticate');
var axios = require('axios');

var router = express.Router();

router.get('/:request', authenticate, (req, res) => {
    var request = req.params.request;

    if (request == 'new-merchants') {
        axios
            .get('http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/merchants', {params: req.query})
            .then(innerRes => {
                var resJSON = JSON.stringify(innerRes.data);

                res.json(resJSON)
            }, err => {
                res
                    .status(err.response.status)
                    .send(err.response.statusText);
            });
    } else if (request == 'operations') {
        axios
            .get('http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/operations', {params: req.query})
            .then(innerRes => {
                var resJSON = JSON.stringify(innerRes.data);

                res.json(resJSON)
            }, err => {
                res
                    .status(err.response.status)
                    .send(err.response.statusText);
            });
    } else if (request == 'partners') {
        axios
            .get('http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/partners', {params: req.query})
            .then(innerRes => {
                var resJSON = JSON.stringify(innerRes.data);

                res.json(resJSON)
            }, err => {
                res
                    .status(err.response.status)
                    .send(err.response.statusText);
            });
    } else if (request == 'shops') {
        axios
            .get('http://5932a02f76652a0011dcf8b8.mockapi.io/api/v1/shops', {params: req.query})
            .then(innerRes => {
                var resJSON = JSON.stringify(innerRes.data);

                res.json(resJSON)
            }, err => {
                res
                    .status(err.response.status)
                    .send(err.response.statusText);
            });
    }
});

module.exports = router;