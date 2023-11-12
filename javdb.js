
[rewrite_local]

# ～ 阿里云盘（2023-01-05）@ddgksf2013
# JavDB //api.yijingluowangluo.xyz, jdforrepam.com
^https:\/\/(api\.yijingluowangluo\.xyz|jdforrepam\.com)\/api\/(v1\/(ads|startup|users)|v4\/movies\/\w+) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/(api\.yijingluowangluo\.xyz|jdforrepam\.com)\/api\/v1\/movies\/\w+\/play\? url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/javdb.js
# JavDB //api.hechuangxinxi.xyz, jdforrepam.com
^https:\/\/(api\.hechuangxinxi\.xyz|jdforrepam\.com)\/api\/(v1\/(ads|startup|users)|v4\/movies\/\w+) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/(api\.hechuangxinxi\.xyz|jdforrepam\.com)\/api\/v1\/movies\/\w+\/play\? url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/javdb.js
[mitm]

hostname=api.hechuangxinxi.xyz, jdforrepam.com

***********************************/







$notify("Tips", "", "此脚本停止维护，请使用新的重写，点击可跳转",{"open-url":"https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js"});
let ddgksf2013=JSON.parse($response.body);ddgksf2013.result&&(ddgksf2013.result=Object.values(ddgksf2013.result).filter(d=>"file"==d.appCode||"video"==d.appCode)),ddgksf2013.activities&&delete ddgksf2013.activities,ddgksf2013.myBackup&&delete ddgksf2013.myBackup,$done({body:JSON.stringify(ddgksf2013)});
