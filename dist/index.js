"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createRoutine = function createRoutine(actionPrefix) {
  var types = {
    REQUEST: actionPrefix + ".REQUEST",
    SUCCESS: actionPrefix + ".SUCCESS",
    FAILURE: actionPrefix + ".FAILURE"
  };
  return _extends({}, types, {
    request: function request(payload) {
      return {
        type: types.REQUEST,
        payload: payload
      };
    },
    success: function success(payload) {
      return {
        type: types.SUCCESS,
        payload: payload
      };
    },
    failure: function failure(error) {
      return {
        type: types.FAILURE,
        error: error
      };
    }
  });
};

exports.default = createRoutine;