/**
 * Users
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

//Users Model 
module.exports = {
    attributes  : {
    	username: {
            type: 'string',
            required: true,
            unique: true
        },

        password: {
            type: 'string',
            required: true
        }  
    }
};
