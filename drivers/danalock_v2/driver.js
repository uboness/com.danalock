"use strict";

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// Documentation: http://products.z-wavealliance.org/ProductManual/File?folder=&filename=Manuals/1532/Danalock%20Product%20manual.pdf

module.exports = new ZwaveDriver(path.basename(__dirname), {
	debug: true,
	capabilities: {
		'locked': {
			'command_class': 'COMMAND_CLASS_DOOR_LOCK',
			'command_get': 'DOOR_LOCK_OPERATION_GET',
			'command_set': 'DOOR_LOCK_OPERATION_SET',
			'command_set_parser': function (value) {
				return {
					'Door Lock Mode': ( value ) ? 'Door Secured' : 'Door Unsecured'
				}
			},
			'command_report': 'DOOR_LOCK_OPERATION_REPORT',
			'command_report_parser': function (report) {
				return report['Door Lock Mode'] === 'Door Secured';

			}
		}
	},
	settings: {
		direction: {
			index: 1,
			size: 1,
		},
		speed: {
			index: 2,
			size: 1,
		},
		sound: {
			index: 6,
			size: 1,
		},
		turn_and_go: {
			index: 9,
			size: 1,
		},
		battery_alarm: {
			index: 8,
			size: 1,
		},
	}
});
