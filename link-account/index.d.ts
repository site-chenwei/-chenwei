import {IonicNativePlugin} from '@ionic-native/core';

interface LinkAccountPluginResult {
    /**
     * 结果状态，0：失败，1：成功   当为调用一键登录时可能返回状态2，代表用户选择了以其它方式登录
     */
    status: string;
    /**
     *  一键登录或号码认证 token，移动、联通、电信均返回
     */
    accessToken: string;
    /**
     * 一键登录或号码认证 auth，电信返回
     */
    gwAuth: string;
    /**
     * CM: 中国移动 CU: 中国联通 CT: 中国电信 XX: 未知
     */
    operatorType: string;
    /**
     * 系统标识，0：iOS 1: Android
     */
    platform: string;
}

export declare class LinkAccountPlugin extends IonicNativePlugin {
    /**
     * 初始化SDK，需在APP启动后调用一次
     */
    init(appKey: string): Promise<LinkAccountPluginResult>;

    /**
     * 预取号，必须在调用Login前请求一次
     */
    getMobileAuth(): Promise<LinkAccountPluginResult>;

    /**
     * 一键登录
     */
    login(privacy: { name: string, url: string }): Promise<LinkAccountPluginResult>;
}
