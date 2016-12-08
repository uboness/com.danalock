"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

module.exports = new ZwaveDriver( path.basename(__dirname), {
	    debug: true,
	capabilities: {
		'locked': {
			'command_class'				: 'COMMAND_CLASS_DOOR_LOCK',
			'command_get'				: 'DOOR_LOCK_OPERATION_GET',
			'command_set'				: 'DOOR_LOCK_OPERATION_SET',
			'command_set_parser'		: function( value ){
				return {
					'Door Lock Mode': ( value ) ? 'Door Secured' : 'Door Unsecured'
				}
			},
			'command_report'			: 'DOOR_LOCK_OPERATION_REPORT',
			'command_report_parser'		: function( report ){
				return report['Door Lock Mode'] === 'Door Secured';

			}
		}
	},
	settings: {
		"direction": {
			"index": 1,
			"size": 1,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"speed": {
			"index": 2,
			"size": 1,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"sound": {
			"index": 6,
			"size": 1,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"turnandgo": {
			"index": 9,
			"size": 1,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
		"batteryalarm": {
			"index": 8,
			"size": 1,
			"parser": function( input ) {
				return new Buffer([ parseInt(input) ]);
			}
		},
	}
})
