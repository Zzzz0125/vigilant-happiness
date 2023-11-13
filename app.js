
[rewrite_local]

# JavDB //api.yijingluowangluo.xyz, jdforrepam.com
^https:\/\/(api\.yijingluowangluo\.xyz|jdforrepam\.com)\/api\/(v1\/(ads|startup|users)|v4\/movies\/\w+) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/(api\.yijingluowangluo\.xyz|jdforrepam\.com)\/api\/v1\/movies\/\w+\/play\? url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/javdb.js
# JavDB //api.hechuangxinxi.xyz, jdforrepam.com
^https:\/\/(api\.hechuangxinxi\.xyz|jdforrepam\.com)\/api\/(v1\/(ads|startup|users)|v4\/movies\/\w+) url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/(api\.hechuangxinxi\.xyz|jdforrepam\.com)\/api\/v1\/movies\/\w+\/play\? url script-request-header https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/break/javdb.js

# 经济学人·商论
^https:\/\/api\.hummingbird\.businessreview\.global\/api\/subscriptions\/get_active url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/jjxrsl.js
hostname=api.hummingbird.businessreview.global


[mitm]
hostname=api.hechuangxinxi.xyz,jdforrepam.com,api.hummingbird.businessreview.global
