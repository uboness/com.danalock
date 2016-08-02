"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

module.exports = new ZwaveDriver( path.basename(__dirname), {
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
	settings: {}
})
