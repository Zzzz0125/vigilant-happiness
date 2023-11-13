
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

# 牛津高阶词典第十版
^https:\/\/oxfordx\.cp\.com\.cn\/api\/pay\/apple_notify url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/niujin10.js
# 牛津高阶词典-去除首页下方广告
^https:\/\/oxadmin\.cp\.com\.cn\/api\/(hot\/index|advertise\/banner) url reject-dict
[mitm]
hostname=api.hechuangxinxi.xyz, jdforrepam.com,api.hummingbird.businessreview.global,oxfordx.cp.com.cn

***********************************/
