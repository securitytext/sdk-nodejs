/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const AttributesUuidModel = require('../lib/Models/AttributesUuidModel');
const RequestsQueryModel = require('../lib/Models/RequestsQueryModel');
const AttributesTimestampsModel = require('../lib/Models/AttributesTimestampsModel');
const ResponsesQueryModel = require('../lib/Models/ResponsesQueryModel');
const ResponsesErrorException = require('../lib/Exceptions/ResponsesErrorException');

const classMap = {
    AttributesUuidModel,
    RequestsQueryModel,
    AttributesTimestampsModel,
    ResponsesQueryModel,
    ResponsesErrorException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
