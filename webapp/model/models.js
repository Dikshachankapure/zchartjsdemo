sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		getAppModel: function () {
			var oDataset = {
				barGraph: [15, 16, 12, 14],
				lineGraph: [100, 50, 80, 65]
			};

			var oModel = new JSONModel(oDataset);
			oModel.setDefaultBindingMode("TwoWay");
			return  oModel;
		}

	};
});