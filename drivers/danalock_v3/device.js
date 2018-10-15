'use strict';

const ZwaveLockDevice = require('homey-meshdriver').ZwaveLockDevice;

//TODO check dana to dos/readme/settings
class DanalockV3 extends ZwaveLockDevice {
	async onMeshInit() {
		await super.onMeshInit();
		this.registerCapability('locked', 'DOOR_LOCK');
		this.registerCapability('locked', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY', {
			getOpts: {
				getOnStart: true,
				pollInterval: 'battery_poll_interval',
				pollMultiplication: 60000 // to minutes
			},
		});
	}
}

module.exports = DanalockV3;
