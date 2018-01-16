/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ResponsesQueryModel
 */
class ResponsesQueryModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.found = this.constructor.getValue(obj.found);
        this.status = this.constructor.getValue(obj.status);
        this.output = this.constructor.getValue(obj.output);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'found', realName: 'found' },
            { name: 'status', realName: 'status' },
            { name: 'output', realName: 'output' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = ResponsesQueryModel;
