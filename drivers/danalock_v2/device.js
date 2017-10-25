'use strict';

const ZwaveLockDevice = require('homey-meshdriver').ZwaveLockDevice;

class DanalockV2 extends ZwaveLockDevice {
	async onMeshInit() {
		await super.onMeshInit();
		this.registerCapability('locked', 'DOOR_LOCK');
		this.registerCapability('locked', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY');
	}
}

module.exports = DanalockV2;
