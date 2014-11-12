/**
 *
 * @author      Joe Ray Gregory
 * @copyright   joe@may17.de
 * @since       11.11.14 | KW 46 07:56
 * @package     Core
 *
 */

(function(win) {

    "use strict";

    /**
     * Returns the length of an object
     * @param obj
     * @returns {Number}
     */

    function getObjectLength(obj) {

        return Object.keys(obj).length;

    }

    /**
     * Main Spaceball module
     * @type {*}
     */

    var Spaceball = window.Spaceball = (function() {

        // Spaceball storage Object
        var SballInstances = {};

        // prefix to trigger
        var prefix = "$ball";

        /**
         * Load all domready initalizers
         */

        win.addEventListener('DOMContentLoaded', function() {

            Spaceball.autoload('domready');

        });

        /**
         * Load all onload initalizers
         */

        win.addEventListener('load', function() {

            Spaceball.autoload('load');

        });

        /**
         * Public Methods
         */

        return {

            /**
             * Create a new Spaceball Object
             * @param name
             * @param obj
             */

            create: function(name, obj) {

                var firstLetter = name.charAt(0).toUpperCase();
                var newName = firstLetter + name.substr(1);

                if(!obj.hasOwnProperty('autoload')) {

                    obj.autoload = [true, 'domready'];

                }

                SballInstances[name] = window[this.getPrefix() + newName] = obj;

            },

            /**
             * Define the prefix. Only works if there are no spaceballs already set
             * @param newPrefix
             */

            setPrefix: function(newPrefix) {

                if(getObjectLength(SballInstances) < 1) {

                    prefix = newPrefix;
                    console.log('test');

                } else {

                    throw Error("You can`t change the Spaceball prefix cause there are already spaceballs in use");

                }

            },

            /**
             * Returns the prefix
             * @returns {string}
             */

            getPrefix: function() {

                return prefix;

            },

            /**
             * aoutoloader for objects with init property
             * @param type
             * @returns {boolean}
             */

            autoload: function(type) {


                if(!type === 'load' || !type === 'domready')
                    return false;


                for(var index in SballInstances) {

                    if (SballInstances[index].hasOwnProperty('init') && SballInstances[index].hasOwnProperty('autoload')) {
                        if(SballInstances[index]['autoload'][0] && SballInstances[index]['autoload'][1] == type)
                            SballInstances[index].init();

                    }

                }

            }

        }

    })()

})(window)
