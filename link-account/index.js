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
import {cordova, IonicNativePlugin} from '@ionic-native/core';

var LinkAccountPlugin = /** @class */ (function (_super) {
    __extends(LinkAccountPlugin, _super);

    function LinkAccountPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    LinkAccountPlugin.prototype.init = function (appKey) {
        return cordova(this, "init", {}, arguments);
    };
    LinkAccountPlugin.prototype.getMobileAuth = function () {
        return cordova(this, "getMobileAuth", {}, arguments);
    };
    LinkAccountPlugin.prototype.login = function (privacy) {
        return cordova(this, "login", {}, arguments);
    };
    LinkAccountPlugin.pluginName = "LinkAccountPlugin";
    LinkAccountPlugin.plugin = "chenwei-plugin-link-account";
    LinkAccountPlugin.pluginRef = "LinkAccountPlugin";
    LinkAccountPlugin.repo = "https://github.com/chenwei116057/chenwei-plugin-link-account";
    LinkAccountPlugin.platforms = ["Android,IOS"];
    LinkAccountPlugin = __decorate([
        Injectable()
    ], LinkAccountPlugin);
    return LinkAccountPlugin;
}(IonicNativePlugin));
export {LinkAccountPlugin};
