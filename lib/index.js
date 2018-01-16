/**
  * @module SecuritytextOrgAPILib
  *
  * An API for securitytext.org
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const WhoisController = require('./Controllers/WhoisController');
const AttributesUuidModel = require('./Models/AttributesUuidModel');
const RequestsQueryModel = require('./Models/RequestsQueryModel');
const AttributesTimestampsModel = require('./Models/AttributesTimestampsModel');
const ResponsesQueryModel = require('./Models/ResponsesQueryModel');
const ResponsesErrorException = require('./Exceptions/ResponsesErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of SecuritytextOrgAPILib
    Configuration,
    Logger,
    // controllers of SecuritytextOrgAPILib
    WhoisController,
    // models of SecuritytextOrgAPILib
    AttributesUuidModel,
    RequestsQueryModel,
    AttributesTimestampsModel,
    ResponsesQueryModel,
    // exceptions of SecuritytextOrgAPILib
    ResponsesErrorException,
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
