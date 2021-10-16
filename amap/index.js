var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import {Injectable} from '@angular/core';
import {IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet} from '@ionic-native/core';

var AMapPlugin = /** @class */ (function (_super) {
    __extends(AMapPlugin, _super);

    function AMapPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    AMapPlugin.prototype.getLocation = function () {
        return cordova(this, "getLocation", {}, arguments);
    };
    AMapPlugin.prototype.getWeatherInfo = function (params) {
        return cordova(this, "getWeatherInfo", {}, arguments);
    };
    AMapPlugin.prototype.calculateDistance = function (params) {
        return cordova(this, "calculateDistance", {}, arguments);
    };
    AMapPlugin.prototype.addGeofence = function (params) {
        return cordova(this, "addGeofence", {}, arguments);
    };
    AMapPlugin.prototype.geofenceResult = function (params) {
        return cordova(this, "geofenceResult", {}, arguments);
    };
    AMapPlugin.prototype.clearGeofence = function (params) {
        return cordova(this, "clearGeofence", {}, arguments);
    };
    AMapPlugin.prototype.showMap = function () {
        return cordova(this, "showMap", {}, arguments);
    };
    AMapPlugin.pluginName = "AMapPlugin";
    AMapPlugin.plugin = "cordova-plugin-amap";
    AMapPlugin.pluginRef = "AMapPlugin";
    AMapPlugin.repo = "https://github.com/chenwei116057/cordova-plugin-amap";
    AMapPlugin.platforms = ["Android", "iOS"];
    AMapPlugin = __decorate([
        Injectable()
    ], AMapPlugin);
    return AMapPlugin;
}(IonicNativePlugin));
export {AMapPlugin};
