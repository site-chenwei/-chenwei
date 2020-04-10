import {IonicNativePlugin} from '@ionic-native/core';

interface LocationResult {
    latitude: number;
    altitude: number;
    addrStr: string;
    adcode: string;
    address: string;
    city: string;
    cityCode: string;
    country: string;
    countryCode: string;
    district: string;
    street: string;
    streetNumber: string;
    town: string;
    locationDescribe: string;
    /**
     *
     61    GPS定位结果 GPS定位成功
     62    定位失败 无法获取有效定位依据，请检查运营商网络或者WiFi网络是否正常开启，尝试重新请求定位
     63    网络异常 没有成功向服务器发起请求，请确认当前测试手机网络是否通畅，尝试重新请求定位
     66    离线定位结果 通过requestOfflineLocaiton调用时对应的返回结果
     67    离线定位失败
     161    网络定位成功
     162    请求串密文解析失败
     167    服务端定位失败
     505    AK不存在或者非法
     */
    locType: number;
}

export interface LocationOption {
    /**
     * 0：高精度定位模式；1：低功耗定位模式；2：仅使用设备定位
     */
    mode: "0" | "1" | "2";
    /**
     * gcj102：国测局坐标；bd09ll：百度经纬度坐标，bd09：百度墨卡托坐标，海外定位时统一返回WGS84类型坐标
     */
    coordinateType: "gcj102" | "bd09ll" | "bd09";
    /**
     * 是否使用GPS，当设置定位模式(mode)值为高精度模式(mode:0)或仅使用设备定位(mode:2)时，此值默认为true（打开）且无法修改
     */
    openGps: true | false;
    /**
     * 首次启动定位时，会先判断当前Wi-Fi是否超出有效期，若超出有效期，会先重新扫描Wi-Fi，然后定位，默认有效时长5分钟
     */
    timeOutMillis: number;
    /**
     * 是否过滤GPS仿真信息，默认为false，即过滤
     */
    enableSimulateGps: true | false;
}

export declare class BMapPlugin extends IonicNativePlugin {
    locate(option?: LocationOption): Promise<LocationResult>;
}
