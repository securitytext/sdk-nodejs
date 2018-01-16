/**
 * SecuritytextOrgAPILib
 *
 * This file was automatically generated for SecurityTextOrg by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of AttributesTimestampsModel
 */
class AttributesTimestampsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'createdAt',
                realName: 'created_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'updatedAt',
                realName: 'updated_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
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

module.exports = AttributesTimestampsModel;
