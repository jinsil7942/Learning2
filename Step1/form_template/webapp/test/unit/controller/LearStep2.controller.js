/*global QUnit*/

sap.ui.define([
	"comgsitmfiori/form_template/controller/LearStep2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LearStep1 Controller");

	QUnit.test("I should test the LearStep1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
