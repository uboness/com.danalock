'use strict';

const ZwaveLockDevice = require('homey-meshdriver').ZwaveLockDevice;

class UniversalModuleV3 extends ZwaveLockDevice {
	async onMeshInit() {
		await super.onMeshInit();
		this.registerCapability('locked', 'DOOR_LOCK');
		this.registerCapability('locked', 'NOTIFICATION');
	}
}

module.exports = UniversalModuleV3;
