/*global QUnit*/

sap.ui.define([
	"comgsitmfiori/form_template/controller/LearningStep1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LearningStep1 Controller");

	QUnit.test("I should test the LearningStep1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
