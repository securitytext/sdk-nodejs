/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class WhoisController {
    /**
     * Query the server for a Domain object
     *
     * @param {RequestsQueryModel} body Body of API request
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createApiWhoisQuery(body, callback) {
        _logger.info('createApiWhoisQuery being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for createApiWhoisQuery');
        if (body === null || body === undefined) {
            const _err = { errorMessage: 'The parameter `body` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for createApiWhoisQuery');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/query'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createApiWhoisQuery');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'securitytextorg-sdk/v1',
        };

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };
        _logger.debug(`'Raw request for createApiWhoisQuery  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createApiWhoisQuery...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                let response = '';
                if (_context.response.body) {
                    response = JSON.parse(_context.response.body);
                }
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createApiWhoisQuery');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for createApiWhoisQuery...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for createApiWhoisQuery');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'ResponsesQueryModel');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'createApiWhoisQuery');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ResponsesErrorException');
                    mappedObject.reason = 'Bad Request';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Bad Request', errorCode: 400, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 406) {
                    _baseController.printErrorLog(_response.statusCode, 'createApiWhoisQuery');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ResponsesErrorException');
                    mappedObject.reason = 'Not Acceptable';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Not Acceptable', errorCode: 406, errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 500) {
                    _baseController.printErrorLog(_response.statusCode, 'createApiWhoisQuery');
                    const mappedObject = _baseController.getObjectMapper()
                        .mapObject(response, 'ResponsesErrorException');
                    mappedObject.reason = 'Internal Server Error';
                    mappedObject.context = _context;
                    const _err = { errorMessage: 'Internal Server Error',
                        errorCode: 500,
                        errorResponse: mappedObject };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createApiWhoisQuery ');
                    errorResponse = _baseController.validateResponse(_context, 'createApiWhoisQuery');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = WhoisController;
