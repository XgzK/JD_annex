/*
cjhy签到有礼
不自动入会，不自动入会，不自动入会
地址：
export jd_cjhy_signActivity_ids = "id1&id2&id3"     活动Id   必须
export jd_cjhy_signActivity_num="10"                执行前多少个号  不设置则默认执行前10个
export jd_cjhy_signActivity_openCard="1"            设置为1则自动入会 不设置或者设置为0则不自动入会

cron "1 1 1 1 1" jd_cjhy_signActivity.js
*/

const $ = new Env('cjhy签到有礼')
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxee935 = ["", "\x6A\x64\x5F\x63\x6A\x68\x79\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x69\x64\x73", "\x65\x6E\x76", "\x6A\x64\x5F\x63\x6A\x68\x79\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x6E\x75\x6D", "\x6A\x64\x5F\x63\x6A\x68\x79\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6A\x64\x5F\x63\x6A\x68\x79\x5F\x62\x6C\x61\x63\x6B\x5F\x70\x69\x6E", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x32\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x43\x61\x72\x64", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x62\x65\x61\x6E\x4E\x75\x6C\x6C", "\x70\x72\x69\x7A\x65\x4C\x69\x73\x74", "\x26", "\x69\x6E\x64\x65\x78\x4F\x66", "\x73\x70\x6C\x69\x74", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x6C\x65\x6E\x67\x74\x68", "\u3010\u4FDD\u62A4\u73AF\u5883\u3011\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x70\x72\x6F\x65\x6E\x76\x63\x20\u63D0\u9192\u4F60\x3A", "\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x63\x6A\x68\x79\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x69\x64\x73\x3D\x22\x69\x64\x31\x26\x69\x64\x32\x26\x69\x64\x33\x2E\x2E\x2E\x22\x20\u672A\u8BBE\u7F6E\x20\u9000\u51FA\uFF01\uFF01\uFF01", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x72\x61\x6E\x64\x6F\x6D\x4E\x75\x6D", "\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6A\x68\x79\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x73\x69\x67\x6E\x2F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\u5F53\u524D\u6D3B\u52A8\x3A\x20", "\u6D3B\u52A8\u5730\u5740\x3A\x20", "\x72\x61\x6E\x64\x6F\x6D", "\x77\x61\x69\x74", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x69\x73\x4C\x6F\x67\x69\x6E", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548", "\u4EAC\u4E1C\u8D26\u53F7", "\x20", "\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\u9ED1\u540D\u5355\u5185\x2C\u8DF3\u8FC7\x21", "\u6267\u884C\u4E86", "\u4E2A\u9000\u51FA", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67\x20\u83B7\u53D6\u5931\u8D25", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67", "\x67\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79", "\u62BD\u5956\u89C4\u5219\x3A", "\x72\x75\x6C\x65", "\x67\x65\x74\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\u5E97\u94FA\x3A\x20", "\x73\x68\x6F\x70\x4E\x61\x6D\x65", "\u4F1A\u5458\x3A\x20", "\x75\x73\x65\x72\x49\x64", "\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F", "\x6C\x61\x73\x74\x53\x69\x67\x6E\x44\x61\x74\x65", "\u4ECA\u65E5\u5DF2\u7B7E\u5230", "\x67\x65\x74\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x65\x64\x43\x61\x72\x64", "\u53BB\u5165\u4F1A\x3A\x20", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u7B2C\x33\u6B21\u91CD\u8BD5", "\u5982\u9700\u81EA\u52A8\u5165\u4F1A\x2C\x20\u8BF7\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\x3A\x20\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x63\x6A\x68\x79\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x5F\x6F\x70\x65\x6E\x43\x61\x72\x64\x3D\x22\x31\x22", "\u5DF2\u5165\u4F1A\x3A", "\x6E\x65\x77\x46\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x73\x69\x67\x6E\x55\x70", "\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67", "\u4EAC\u8C46\u8BA1\u5212\u4F59\u989D\u4E0D\u8DB3\x2C\x20\u9000\u51FA", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x6A\x68\x79\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x26\x6C\x6D\x74\x3D\x30", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x75\x73\x65\x72\x49\x64\x3D", "\x26\x74\x6F\x6B\x65\x6E\x3D", "\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79", "\x61\x63\x74\x49\x64\x3D", "\x26\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F", "\x26\x70\x69\x6E\x3D", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x2F\x77\x78\x44\x72\x61\x77\x41\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x72\x61\x77\x4D\x79\x4F\x6B\x4C\x69\x73\x74", "\x26\x74\x79\x70\x65\x3D", "\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65", "\x64\x72\x61\x77\x4D\x79\x4F\x6B\x4C\x69\x73\x74", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x70\x69\x6E\x3D", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67", "\x26\x63\x6F\x64\x65\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x70\x61\x67\x65\x55\x72\x6C\x3D", "\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D", "\x2F\x6D\x63\x2F\x6E\x65\x77\x2F\x62\x72\x61\x6E\x64\x43\x61\x72\x64\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x73\x68\x6F\x70\x41\x6E\x64\x42\x72\x61\x6E\x64\x2F\x67\x65\x74\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x26\x62\x75\x79\x65\x72\x50\x69\x6E\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x6E\x65\x77\x46\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x76\x65\x6E\x64\x65\x72\x49\x64", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x73\x69\x67\x6E\x55\x70", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67", "\x26\x63\x6C\x69\x65\x6E\x74\x54\x79\x70\x65\x3D\x61\x70\x70", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x20", "\x72\x65\x73\x75\x6C\x74", "\x64\x61\x74\x61", "\x6A\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x73\x68\x6F\x70\x49\x64", "\x73\x65\x63\x72\x65\x74\x50\x69\x6E", "\x74\x6F\x75\x78\x69\x61\x6E\x67\x49\x6D\x67", "\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C", "\x69\x73\x4F\x6B", "\x61\x63\x74", "\x61\x63\x74\x52\x75\x6C\x65", "\x66\x6F\x6C\x6C\x6F\x77\x44\x61\x79\x73", "\x63\x6F\x6E\x74\x69\x53\x69\x67\x6E\x4E\x75\x6D", "\x73\x69\x67\x6E\x52\x65\x63\x6F\x72\x64", "\x74\x6F\x74\x61\x6C\x53\x69\x67\x6E\x4E\x75\x6D", "\u5173\u6CE8\u5929\u6570\x3A\x20", "\x20\u5929", "\u8FDE\u7EED\u7B7E\u5230\x3A\x20", "\u7B7E\u5230\u603B\u6570\x3A\x20", "\x73\x68\x6F\x70\x49\x6E\x66\x6F", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x3A", "\u5173\u6CE8\x3A", "\x67\x69\x66\x74", "\x64\x72\x61\x77\x4E\x61\x6D\x65", "\x67\x69\x66\x74\x4E\x61\x6D\x65", "\u7A7A\u6C14", "\u7B7E\u5230\u7ED3\u679C\x3A", "\u4F59\u989D\u4E0D\u8DB3", "\u6765\u665A\u4E86", "\u7ED3\u675F", "\u660E\u65E5\u518D\u6765", "\u7B7E\u5230\u7ED3\u679C\x3A\x20", "\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67\x3A", "\x2D\x3E\x20", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\u706B\u7206", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x52\x65\x66\x65\x72\x65\x72", "\x26\x73\x69\x64\x3D\x26\x75\x6E\x5F\x61\x72\x65\x61\x3D", "\x43\x6F\x6F\x6B\x69\x65", "\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D", "\x74\x65\x78\x74\x2F\x68\x74\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x68\x74\x6D\x6C\x2B\x78\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x6D\x6C\x3B\x71\x3D\x30\x2E\x39\x2C\x69\x6D\x61\x67\x65\x2F\x61\x76\x69\x66\x2C\x69\x6D\x61\x67\x65\x2F\x77\x65\x62\x70\x2C\x69\x6D\x61\x67\x65\x2F\x61\x70\x6E\x67\x2C\x69\x6D\x61\x67\x65\x2F\x74\x70\x67\x2C\x2A\x2F\x2A\x3B\x71\x3D\x30\x2E\x38\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x73\x69\x67\x6E\x65\x64\x2D\x65\x78\x63\x68\x61\x6E\x67\x65\x3B\x76\x3D\x62\x33\x3B\x71\x3D\x30\x2E\x39", "\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C", "\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\u6D3B\u52A8\u5DF2\u7ED3\u675F", "\x67\x65\x74", "\x72\x65\x61\x6C\x41\x63\x74\x69\x76\x69\x74\x79\x55\x52\x4C", "\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65", "\x68\x65\x61\x64\x65\x72\x73", "\x3B", "\x3D", "\x73\x75\x62\x73\x74\x72", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x5F\x6E\x65\x77\x2F\x69\x6E\x66\x6F\x2F\x47\x65\x74\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x55\x6E\x69\x6F\x6E", "\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x2A\x2F\x2A", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x34\x2E\x30\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x75\x66\x63\x3D\x26", "\x72\x65\x74\x63\x6F\x64\x65", "\x31\x30\x30\x31", "\x30", "\x75\x73\x65\x72\x49\x6E\x66\x6F", "\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\x62\x61\x73\x65\x49\x6E\x66\x6F", "\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E", "\x3F\x76\x65\x6E\x64\x65\x72\x69\x64\x3D", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x3F\x74\x79\x70\x65\x3D\x63\x6A\x68\x79", "\x63\x6F\x64\x65", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x36\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x74\x6F\x4F\x62\x6A", "\x73\x75\x63\x63\x65\x73\x73", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x2C\x22\x70\x61\x79\x55\x70\x53\x68\x6F\x70\x22\x3A\x74\x72\x75\x65\x2C\x22\x71\x75\x65\x72\x79\x56\x65\x72\x73\x69\x6F\x6E\x22\x3A\x22\x31\x30\x2E\x35\x2E\x32\x22\x7D", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x6E\x6F\x77", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x37\x31\x34\x31\x31\x61\x39\x65\x31\x38\x6E\x38\x6A\x6D\x6D\x44\x4B\x48\x4D\x35\x71\x59\x32\x47\x51\x45\x48\x4E\x38\x4D\x45\x44\x6E\x78\x6E\x4D\x4E\x42\x56\x55\x47\x56\x49\x74\x52\x65\x65\x54\x33\x30\x46\x78\x41\x33\x4E\x49\x6F\x49\x6A\x71\x70\x57\x54\x37\x54\x65\x38\x62\x46\x33\x37\x46\x4A\x32\x57\x2B\x57\x7A\x69\x69\x78\x4C\x48\x68\x46\x30\x31\x3B\x33\x39\x32\x63\x66\x39\x62\x61\x64\x65\x34\x65\x31\x62\x30\x32\x65\x36\x66\x61\x38\x33\x63\x31\x64\x34\x37\x64\x37\x66\x31\x32\x34\x35\x65\x35\x61\x37\x61\x65\x39\x65\x62\x39\x32\x36\x34\x35\x31\x34\x32\x32\x37\x61\x64\x36\x66\x39\x33\x35\x64\x66\x39\x65\x3B\x33\x2E\x30\x3B", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x72\x65\x70\x6C\x61\x63\x65", "\x29", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x72\x65\x66", "\x28\x5E\x7C\x5B\x26\x3F\x5D\x29", "\x3D\x28\x5B\x5E\x26\x5D\x2A\x29\x28\x26\x7C\x24\x29", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxee935[0x0];
let jd_cjhy_signActivity_ids = process[__Oxee935[0x2]][__Oxee935[0x1]] ? process[__Oxee935[0x2]][__Oxee935[0x1]] : __Oxee935[0x0];
let jd_cjhy_signActivity_num = parseInt(process[__Oxee935[0x2]][__Oxee935[0x3]]) ? parseInt(process[__Oxee935[0x2]][__Oxee935[0x3]]) : 10;
let jd_cjhy_signActivity_openCard = parseInt(process[__Oxee935[0x2]][__Oxee935[0x4]]) ? parseInt(process[__Oxee935[0x2]][__Oxee935[0x4]]) : 0;
let jd_cjhy_black_pin = process[__Oxee935[0x2]][__Oxee935[0x5]] ? process[__Oxee935[0x2]][__Oxee935[0x5]] : __Oxee935[0x0];
let ver1 = __Oxee935[0x6];
let ver2 = __Oxee935[0x7];
let url1 = __Oxee935[0x8];
let url2 = __Oxee935[0x9];
if ($[__Oxee935[0xa]]()) {
    Object[__Oxee935[0xd]](jdCookieNode)[__Oxee935[0xc]]((_0x911axb) => {
        cookiesArr[__Oxee935[0xb]](jdCookieNode[_0x911axb])
    });
    if (process[__Oxee935[0x2]][__Oxee935[0xe]] && process[__Oxee935[0x2]][__Oxee935[0xe]] === __Oxee935[0xf]) {
        console[__Oxee935[0x10]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxee935[0x13]](__Oxee935[0x12]), $[__Oxee935[0x13]](__Oxee935[0x14]), ...jsonParse($[__Oxee935[0x13]](__Oxee935[0x17]) || __Oxee935[0x18])[__Oxee935[0x16]]((_0x911axb) => {
        return _0x911axb[__Oxee935[0x15]]
    })][__Oxee935[0x11]]((_0x911axb) => {
        return !!_0x911axb
    })
}
;allMessage = __Oxee935[0x0], message = __Oxee935[0x0];
$[__Oxee935[0x19]] = false;
$[__Oxee935[0x1a]] = false;
$[__Oxee935[0x1b]] = false;
$[__Oxee935[0x1c]] = false;
let lz_jdpin_token_cookie = __Oxee935[0x0];
let activityCookie = __Oxee935[0x0];
let lz_cookie = {};
let ids = [];
$[__Oxee935[0x1d]] = [];
if (jd_cjhy_signActivity_ids[__Oxee935[0x1f]](__Oxee935[0x1e]) > -1) {
    ids = jd_cjhy_signActivity_ids[__Oxee935[0x20]](__Oxee935[0x1e])
} else {
    ids = [jd_cjhy_signActivity_ids]
}
;!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxee935[0x28]]($[__Oxee935[0x25]], __Oxee935[0x26], __Oxee935[0x27], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxee935[0x27]});
        return
    }
    ;
    if (ids[__Oxee935[0x29]] < 1 || !jd_cjhy_signActivity_ids) {
        console[__Oxee935[0x10]](`${__Oxee935[0x2a]}`);
        console[__Oxee935[0x10]](`${__Oxee935[0x2b]}`);
        return
    }
    ;
    for (let _0x911ax11 = 0; _0x911ax11 < ids[__Oxee935[0x29]]; _0x911ax11++) {
        $[__Oxee935[0x2c]] = ids[_0x911ax11];
        $[__Oxee935[0x2d]] = $[__Oxee935[0x2c]];
        $[__Oxee935[0x2e]] = `${__Oxee935[0x2f]}${$[__Oxee935[0x2c]]}${__Oxee935[0x0]}`;
        console[__Oxee935[0x10]](`${__Oxee935[0x30]}${$[__Oxee935[0x2c]]}${__Oxee935[0x0]}`);
        console[__Oxee935[0x10]](`${__Oxee935[0x31]}${$[__Oxee935[0x2e]]}${__Oxee935[0x0]}`);
        await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 1500 + 1500, 10));
        for (let _0x911ax12 = 0; _0x911ax12 < cookiesArr[__Oxee935[0x29]]; _0x911ax12++) {
            cookie = cookiesArr[_0x911ax12];
            originCookie = cookiesArr[_0x911ax12];
            if (cookie) {
                $[__Oxee935[0x34]] = decodeURIComponent(cookie[__Oxee935[0x35]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxee935[0x35]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $[__Oxee935[0x36]] = _0x911ax12 + 1;
                message = __Oxee935[0x0];
                $[__Oxee935[0x37]] = 0;
                $[__Oxee935[0x19]] = false;
                $[__Oxee935[0x38]] = __Oxee935[0x0];
                $[__Oxee935[0x39]] = true;
                console[__Oxee935[0x10]](`${__Oxee935[0x3a]}${$[__Oxee935[0x36]]}${__Oxee935[0x3b]}${$[__Oxee935[0x38]] || $[__Oxee935[0x34]]}${__Oxee935[0x3c]}`);
                if (!$[__Oxee935[0x39]]) {
                    $[__Oxee935[0x28]]($[__Oxee935[0x25]], `${__Oxee935[0x3d]}`, `${__Oxee935[0x3e]}${$[__Oxee935[0x36]]}${__Oxee935[0x3f]}${$[__Oxee935[0x38]] || $[__Oxee935[0x34]]}${__Oxee935[0x40]}`, {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxee935[0x41]});
                    if ($[__Oxee935[0xa]]()) {
                    }
                    ;
                    continue
                }
                ;
                if (jd_cjhy_black_pin[__Oxee935[0x1f]]($.UserName) > -1) {
                    console[__Oxee935[0x10]](`${__Oxee935[0x42]}`);
                    continue
                }
                ;await getUA();
                try {
                    await run()
                } catch (e) {
                    console[__Oxee935[0x10]](e)
                }
                ;
                if ($[__Oxee935[0x36]] >= jd_cjhy_signActivity_num) {
                    console[__Oxee935[0x10]](`${__Oxee935[0x43]}${jd_cjhy_signActivity_num}${__Oxee935[0x44]}`);
                    break
                }
                ;
                if ($[__Oxee935[0x1c]] == true) {
                    break
                }
                ;
                if ($[__Oxee935[0x1a]] || $[__Oxee935[0x1b]]) {
                    break
                }
                ;await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 2500 + 2500, 10));
                if ($[__Oxee935[0x36]] % 3 == 0) {
                    await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 10000 + 10000, 10))
                }
            }
        }
        ;await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 15000 + 15000, 10))
    }
    ;
    if ($[__Oxee935[0x1a]]) {
        let _0x911ax13 = __Oxee935[0x45];
        $[__Oxee935[0x28]]($[__Oxee935[0x25]], `${__Oxee935[0x0]}`, `${__Oxee935[0x0]}${_0x911ax13}${__Oxee935[0x0]}`);
        if ($[__Oxee935[0xa]]()) {
            await notify[__Oxee935[0x46]](`${__Oxee935[0x0]}${$[__Oxee935[0x25]]}${__Oxee935[0x0]}`, `${__Oxee935[0x0]}${_0x911ax13}${__Oxee935[0x0]}`)
        }
    }
})()[__Oxee935[0x24]]((_0x911ax10) => {
    return $[__Oxee935[0x23]](_0x911ax10)
})[__Oxee935[0x22]](() => {
    return $[__Oxee935[0x21]]()
});

async function run() {
    try {
        lz_jdpin_token_cookie = __Oxee935[0x0];
        $[__Oxee935[0x47]] = __Oxee935[0x0];
        $[__Oxee935[0x48]] = __Oxee935[0x0];
        $[__Oxee935[0x1b]] = false;
        $[__Oxee935[0x1c]] = false;
        let _0x911ax15 = false;
        await takePostRequest(__Oxee935[0x49]);
        if ($[__Oxee935[0x47]] == __Oxee935[0x0]) {
            console[__Oxee935[0x10]](__Oxee935[0x4a]);
            return
        }
        ;await getCk();
        if ($[__Oxee935[0x1b]] == true) {
            return
        }
        ;
        if (activityCookie == __Oxee935[0x0]) {
            console[__Oxee935[0x10]](`${__Oxee935[0x4b]}`);
            return
        }
        ;await takePostRequest(__Oxee935[0x4c]);
        await takePostRequest(__Oxee935[0x4d]);
        if (!$[__Oxee935[0x48]]) {
            console[__Oxee935[0x10]](`${__Oxee935[0x4e]}`);
            return
        }
        ;await takePostRequest(__Oxee935[0x4f]);
        await takePostRequest(__Oxee935[0x50]);
        if ($[__Oxee935[0x36]] == 1) {
            console[__Oxee935[0x10]](`${__Oxee935[0x51]}${$[__Oxee935[0x52]]}${__Oxee935[0x0]}`)
        }
        ;await takePostRequest(__Oxee935[0x53]);
        if ($[__Oxee935[0x36]] == 1) {
            console[__Oxee935[0x10]](`${__Oxee935[0x54]}${$[__Oxee935[0x55]]}${__Oxee935[0x0]}`);
            console[__Oxee935[0x10]](`${__Oxee935[0x56]}${$[__Oxee935[0x57]]}${__Oxee935[0x0]}`)
        }
        ;await takePostRequest(__Oxee935[0x50]);
        await takePostRequest(__Oxee935[0x58]);
        await takePostRequest(__Oxee935[0x59]);
        let _0x911ax16 = await getNowDate();
        if (_0x911ax16 == $[__Oxee935[0x5a]]) {
            console[__Oxee935[0x10]](`${__Oxee935[0x5b]}`);
            await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 2500 + 2500, 10));
            return
        }
        ;await takePostRequest(__Oxee935[0x5c]);
        await $[__Oxee935[0x33]](500);
        if ($[__Oxee935[0x5d]] == false) {
            if (jd_cjhy_signActivity_openCard == 1) {
                console[__Oxee935[0x10]](`${__Oxee935[0x5e]}${$[__Oxee935[0x57]]}${__Oxee935[0x0]}`);
                _0x911ax15 = true;
                $[__Oxee935[0x5f]] = $[__Oxee935[0x57]];
                await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 2500 + 1500, 10));
                await joinShop();
                await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 500 + 500, 10));
                if ($[__Oxee935[0x61]][__Oxee935[0x1f]](__Oxee935[0x60]) > -1 || $[__Oxee935[0x61]][__Oxee935[0x1f]](__Oxee935[0x62]) > -1) {
                    console[__Oxee935[0x10]](__Oxee935[0x63]);
                    await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 1500 + 1000, 10));
                    await joinShop()
                }
                ;
                if ($[__Oxee935[0x61]][__Oxee935[0x1f]](__Oxee935[0x60]) > -1 || $[__Oxee935[0x61]][__Oxee935[0x1f]](__Oxee935[0x62]) > -1) {
                    console[__Oxee935[0x10]](__Oxee935[0x64]);
                    await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 1000 + 1000, 10));
                    await joinShop()
                }
                ;
                if ($[__Oxee935[0x61]][__Oxee935[0x1f]](__Oxee935[0x60]) > -1 || $[__Oxee935[0x61]][__Oxee935[0x1f]](__Oxee935[0x62]) > -1) {
                    console[__Oxee935[0x10]](__Oxee935[0x65]);
                    await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 1500 + 1500, 10));
                    await joinShop()
                }
            } else {
                console[__Oxee935[0x10]](`${__Oxee935[0x66]}`);
                return
            }
        } else {
            console[__Oxee935[0x10]](`${__Oxee935[0x67]}${$[__Oxee935[0x57]]}${__Oxee935[0x0]}`)
        }
        ;await takePostRequest(__Oxee935[0x68]);
        await takePostRequest(__Oxee935[0x69]);
        await takePostRequest(__Oxee935[0x6a]);
        if ($[__Oxee935[0x1c]] == true) {
            console[__Oxee935[0x10]](__Oxee935[0x6b]);
            return
        }
        ;await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 2500 + 2500, 10))
    } catch (e) {
    }
}

async function takePostRequest(_0x911ax18) {
    if ($[__Oxee935[0x1a]]) {
        return
    }
    ;let _0x911ax19 = __Oxee935[0x6c];
    let _0x911ax1a = `${__Oxee935[0x0]}`;
    let _0x911ax1b = __Oxee935[0x6d];
    let _0x911ax1c = __Oxee935[0x0];
    switch (_0x911ax18) {
        case __Oxee935[0x49]:
            url = `${__Oxee935[0x6e]}`;
            _0x911ax1a = await getToken();
            break;
        case __Oxee935[0x4c]:
            url = `${__Oxee935[0x6f]}`;
            _0x911ax1a = `${__Oxee935[0x70]}${$[__Oxee935[0x2c]]}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x4d]:
            url = `${__Oxee935[0x71]}`;
            _0x911ax1a = `${__Oxee935[0x72]}${$[__Oxee935[0x57]]}${__Oxee935[0x73]}${$[__Oxee935[0x47]]}${__Oxee935[0x74]}`;
            break;
        case __Oxee935[0x50]:
            url = `${__Oxee935[0x75]}`;
            _0x911ax1a = `${__Oxee935[0x76]}${$[__Oxee935[0x2c]]}${__Oxee935[0x77]}${$[__Oxee935[0x57]]}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x59]:
            url = __Oxee935[0x78];
            _0x911ax1a = `${__Oxee935[0x76]}${$[__Oxee935[0x2c]]}${__Oxee935[0x77]}${$[__Oxee935[0x57]]}${__Oxee935[0x79]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x53]:
            url = `${__Oxee935[0x7a]}`;
            _0x911ax1a = `${__Oxee935[0x7b]}${$[__Oxee935[0x57]]}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x7f]:
            url = `${__Oxee935[0x7c]}`;
            _0x911ax1a = `${__Oxee935[0x70]}${$[__Oxee935[0x2c]]}${__Oxee935[0x7d]}${$[__Oxee935[0x7e]]}${__Oxee935[0x79]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x58]:
            url = `${__Oxee935[0x80]}`;
            _0x911ax1a = `${__Oxee935[0x81]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x4f]:
            url = `${__Oxee935[0x82]}`;
            let _0x911ax1d = `${__Oxee935[0x0]}${$[__Oxee935[0x2e]]}${__Oxee935[0x0]}`;
            _0x911ax1a = `${__Oxee935[0x7b]}${$[__Oxee935[0x57]]}${__Oxee935[0x83]}${$[__Oxee935[0x7e]]}${__Oxee935[0x79]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x84]}${$[__Oxee935[0x2c]]}${__Oxee935[0x85]}${encodeURIComponent(_0x911ax1d)}${__Oxee935[0x86]}`;
            break;
        case __Oxee935[0x5c]:
            url = `${__Oxee935[0x87]}`;
            _0x911ax1a = `${__Oxee935[0x7b]}${$[__Oxee935[0x57]]}${__Oxee935[0x88]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x89]}${$[__Oxee935[0x7e]]}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x68]:
            url = `${__Oxee935[0x8a]}`;
            _0x911ax1a = `${__Oxee935[0x70]}${$[__Oxee935[0x2c]]}${__Oxee935[0x77]}${$[__Oxee935[0x8b]]}${__Oxee935[0x88]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x89]}${$[__Oxee935[0x7e]]}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x69]:
            url = `${__Oxee935[0x8c]}`;
            _0x911ax1a = `${__Oxee935[0x76]}${$[__Oxee935[0x2c]]}${__Oxee935[0x79]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x0]}`;
            break;
        case __Oxee935[0x6a]:
            url = `${__Oxee935[0x8d]}`;
            _0x911ax1a = `${__Oxee935[0x7b]}${$[__Oxee935[0x57]]}${__Oxee935[0x89]}${$[__Oxee935[0x7e]]}${__Oxee935[0x84]}${$[__Oxee935[0x2c]]}${__Oxee935[0x79]}${encodeURIComponent(encodeURIComponent($.Pin))}${__Oxee935[0x8e]}`;
            break;
        default:
            console[__Oxee935[0x10]](`${__Oxee935[0x8f]}${_0x911ax18}${__Oxee935[0x0]}`)
    }
    ;
    if (_0x911ax18 == __Oxee935[0x49]) {
        url = url
    } else {
        url = __Oxee935[0x6c] + url
    }
    ;let _0x911ax1e = getPostRequest(url, _0x911ax1a, _0x911ax1b);
    await $[__Oxee935[0x33]](parseInt(Math[__Oxee935[0x32]]() * 500 + 500, 10));
    return new Promise(async (_0x911ax1f) => {
        $[__Oxee935[0x95]](_0x911ax1e, (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                setActivityCookie(_0x911ax21);
                if (_0x911ax20) {
                    if (_0x911ax21 && typeof _0x911ax21[__Oxee935[0x90]] != __Oxee935[0x91]) {
                        if (_0x911ax21[__Oxee935[0x90]] == 493) {
                            console[__Oxee935[0x10]](__Oxee935[0x92]);
                            $[__Oxee935[0x1a]] = true
                        }
                    }
                    ;console[__Oxee935[0x10]](`${__Oxee935[0x0]}${$[__Oxee935[0x93]](_0x911ax20, _0x911ax20)}${__Oxee935[0x0]}`);
                    console[__Oxee935[0x10]](`${__Oxee935[0x0]}${_0x911ax18}${__Oxee935[0x94]}`)
                } else {
                    dealReturn(_0x911ax18, _0x911ax22)
                }
            } catch (e) {
                console[__Oxee935[0x10]](e, _0x911ax21)
            } finally {
                _0x911ax1f()
            }
        })
    })
}

async function dealReturn(_0x911ax18, _0x911ax22) {
    let _0x911ax24 = __Oxee935[0x0];
    try {
        if (_0x911ax18 != __Oxee935[0x4f] || _0x911ax18 != __Oxee935[0x6a]) {
            if (_0x911ax22) {
                _0x911ax24 = JSON[__Oxee935[0x96]](_0x911ax22)
            }
        }
    } catch (e) {
        console[__Oxee935[0x10]](`${__Oxee935[0x0]}${_0x911ax18}${__Oxee935[0x97]}`);
        $[__Oxee935[0x98]] = false
    }
    ;
    try {
        switch (_0x911ax18) {
            case __Oxee935[0x49]:
                if (typeof _0x911ax24 == __Oxee935[0x99]) {
                    if (_0x911ax24[__Oxee935[0x9a]] == 0) {
                        if (typeof _0x911ax24[__Oxee935[0x9b]] != __Oxee935[0x91]) {
                            $[__Oxee935[0x47]] = _0x911ax24[__Oxee935[0x9b]]
                        }
                    } else {
                        if (_0x911ax24[__Oxee935[0x9c]]) {
                            console[__Oxee935[0x10]](`${__Oxee935[0x9d]}${_0x911ax24[__Oxee935[0x9c]] || __Oxee935[0x0]}${__Oxee935[0x0]}`)
                        } else {
                            console[__Oxee935[0x10]](_0x911ax22)
                        }
                    }
                } else {
                    console[__Oxee935[0x10]](_0x911ax22)
                }
                ;
                break;
            case __Oxee935[0x4c]:
                if (_0x911ax24[__Oxee935[0x9e]] == true && _0x911ax24[__Oxee935[0x9f]]) {
                    $[__Oxee935[0x2c]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0x2c]];
                    $[__Oxee935[0x7e]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0x7e]];
                    $[__Oxee935[0xa0]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0xa0]];
                    $[__Oxee935[0xa1]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0xa1]];
                    $[__Oxee935[0x8b]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0x8b]]
                }
                ;
                break;
            case __Oxee935[0x4d]:
                if (_0x911ax24[__Oxee935[0x9e]] == true && _0x911ax24[__Oxee935[0x9f]]) {
                    $[__Oxee935[0x48]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0xa2]];
                    $[__Oxee935[0xa3]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0xa4]]
                }
                ;
                break;
            case __Oxee935[0x50]:
                if (_0x911ax24[__Oxee935[0xa5]] == true && _0x911ax24[__Oxee935[0xa6]]) {
                    $[__Oxee935[0x52]] = _0x911ax24[__Oxee935[0xa6]][__Oxee935[0xa7]]
                }
                ;
                break;
            case __Oxee935[0x59]:
                if (_0x911ax24[__Oxee935[0xa5]] == true) {
                    $[__Oxee935[0xa8]] = _0x911ax24[__Oxee935[0xa8]] ? _0x911ax24[__Oxee935[0xa8]] : 0;
                    $[__Oxee935[0xa9]] = _0x911ax24[__Oxee935[0xaa]][__Oxee935[0xa9]] ? _0x911ax24[__Oxee935[0xaa]][__Oxee935[0xa9]] : 0;
                    $[__Oxee935[0xab]] = _0x911ax24[__Oxee935[0xaa]][__Oxee935[0xab]] ? _0x911ax24[__Oxee935[0xaa]][__Oxee935[0xab]] : 0;
                    console[__Oxee935[0x10]](`${__Oxee935[0xac]}${$[__Oxee935[0xa8]]}${__Oxee935[0xad]}`);
                    console[__Oxee935[0x10]](`${__Oxee935[0xae]}${$[__Oxee935[0xa9]]}${__Oxee935[0xad]}`);
                    console[__Oxee935[0x10]](`${__Oxee935[0xaf]}${$[__Oxee935[0xab]]}${__Oxee935[0xad]}`)
                } else {
                    console[__Oxee935[0x10]](`${__Oxee935[0x0]}${_0x911ax24[__Oxee935[0x28]]}${__Oxee935[0x0]}`)
                }
                ;
                break;
            case __Oxee935[0x53]:
                if (_0x911ax24[__Oxee935[0xa5]] == true && _0x911ax24[__Oxee935[0xb0]]) {
                    $[__Oxee935[0x55]] = _0x911ax24[__Oxee935[0xb0]][__Oxee935[0x55]]
                }
                ;
                break;
            case __Oxee935[0x7f]:
                break;
            case __Oxee935[0x58]:
                break;
            case __Oxee935[0x4f]:
                console[__Oxee935[0x10]](`${__Oxee935[0xb1]}${_0x911ax22}${__Oxee935[0x0]}`);
                break;
            case __Oxee935[0x5c]:
                if (_0x911ax24[__Oxee935[0x9e]] == true && _0x911ax24[__Oxee935[0x9f]]) {
                    $[__Oxee935[0x5d]] = _0x911ax24[__Oxee935[0x9f]][__Oxee935[0x5d]]
                }
                ;
                break;
            case __Oxee935[0x68]:
                console[__Oxee935[0x10]](`${__Oxee935[0xb2]}${_0x911ax22}${__Oxee935[0x0]}`);
                break;
            case __Oxee935[0x69]:
                if (_0x911ax24[__Oxee935[0xa5]] == true && _0x911ax24[__Oxee935[0xb3]]) {
                    try {
                        $[__Oxee935[0xb4]] = _0x911ax24[__Oxee935[0xb3]][__Oxee935[0xb5]] ? _0x911ax24[__Oxee935[0xb3]][__Oxee935[0xb5]] : __Oxee935[0xb6]
                    } catch (e) {
                        $[__Oxee935[0xb4]] = __Oxee935[0xb6]
                    }
                    ;console[__Oxee935[0x10]](`${__Oxee935[0xb7]}${$[__Oxee935[0xb4]]}${__Oxee935[0x0]}`)
                } else {
                    if (_0x911ax24[__Oxee935[0x28]][__Oxee935[0x1f]](__Oxee935[0xb8]) > -1) {
                        $[__Oxee935[0x1c]] = true
                    }
                    ;
                    if (_0x911ax24[__Oxee935[0x28]][__Oxee935[0x1f]](__Oxee935[0xb9]) > -1) {
                        $[__Oxee935[0x1c]] = true
                    }
                    ;
                    if (_0x911ax24[__Oxee935[0x28]][__Oxee935[0x1f]](__Oxee935[0xba]) > -1) {
                        $[__Oxee935[0x1c]] = true
                    }
                    ;
                    if (_0x911ax24[__Oxee935[0x28]][__Oxee935[0x1f]](__Oxee935[0xbb]) > -1) {
                        $[__Oxee935[0x1c]] = true
                    }
                    ;console[__Oxee935[0x10]](`${__Oxee935[0xbc]}${_0x911ax24[__Oxee935[0x28]]}${__Oxee935[0x0]}`)
                }
                ;
                break;
            case __Oxee935[0x6a]:
                console[__Oxee935[0x10]](`${__Oxee935[0xbd]}${_0x911ax22}${__Oxee935[0x0]}`);
                break;
            default:
                console[__Oxee935[0x10]](`${__Oxee935[0x0]}${_0x911ax18}${__Oxee935[0xbe]}${_0x911ax22}${__Oxee935[0x0]}`);
                break
        }
        ;
        if (typeof _0x911ax24 == __Oxee935[0x99]) {
            if (_0x911ax24[__Oxee935[0xbf]]) {
                if (_0x911ax24[__Oxee935[0xbf]][__Oxee935[0x1f]](__Oxee935[0xc0]) > -1) {
                    $[__Oxee935[0x19]] = true
                }
            }
        }
    } catch (e) {
    }
}

function getPostRequest(_0x911ax26, _0x911ax1a, _0x911ax1b = __Oxee935[0x6d]) {
    let _0x911ax27 = {
        "\x41\x63\x63\x65\x70\x74": __Oxee935[0xc1],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxee935[0xc2],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxee935[0xc3],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxee935[0xc4],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxee935[0xc5],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxee935[0xc6]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxee935[0xc7]
    };
    if (_0x911ax26[__Oxee935[0x1f]](__Oxee935[0x6c]) > -1) {
        _0x911ax27[__Oxee935[0xc8]] = `${__Oxee935[0x0]}${$[__Oxee935[0x2e]]}${__Oxee935[0xc9]}`;
        _0x911ax27[__Oxee935[0xca]] = `${__Oxee935[0x0]}${activityCookie}${__Oxee935[0xcb]}${$[__Oxee935[0x48]]}${__Oxee935[0x0]}`
    } else {
        _0x911ax27[__Oxee935[0xca]] = cookie
    }
    ;
    return {url: _0x911ax26, method: _0x911ax1b, headers: _0x911ax27, body: _0x911ax1a, timeout: 90000}
}

function getCk() {
    return new Promise((_0x911ax1f) => {
        let _0x911ax29 = {
            url: `${__Oxee935[0x0]}${$[__Oxee935[0x2e]]}${__Oxee935[0xc9]}`,
            headers: {
                "\x41\x63\x63\x65\x70\x74": __Oxee935[0xcc],
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxee935[0xc6]],
                "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxee935[0xcd]
            },
            timeout: 90000
        };
        $[__Oxee935[0xd0]](_0x911ax29, async (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                if (_0x911ax20) {
                    if (_0x911ax21 && typeof _0x911ax21[__Oxee935[0x90]] != __Oxee935[0x91]) {
                        if (_0x911ax21[__Oxee935[0x90]] == 493) {
                            console[__Oxee935[0x10]](__Oxee935[0x92]);
                            $[__Oxee935[0x1a]] = true
                        }
                    }
                    ;console[__Oxee935[0x10]](`${__Oxee935[0x0]}${$[__Oxee935[0x93]](_0x911ax20)}${__Oxee935[0x0]}`);
                    console[__Oxee935[0x10]](`${__Oxee935[0x0]}${$[__Oxee935[0x25]]}${__Oxee935[0xce]}`)
                } else {
                    let _0x911ax2a = _0x911ax22[__Oxee935[0x35]](/<title>(活动已结束)<\/title>/) && _0x911ax22[__Oxee935[0x35]](/<title>(活动已结束)<\/title>/)[0x1] || __Oxee935[0x0];
                    if (_0x911ax2a) {
                        $[__Oxee935[0x1b]] = true;
                        console[__Oxee935[0x10]](__Oxee935[0xcf])
                    }
                    ;$[__Oxee935[0x8b]] = _0x911ax22[__Oxee935[0x35]](/<input type="hidden" id="venderId" value="(.\w+)">/) && _0x911ax22[__Oxee935[0x35]](/<input type="hidden" id="venderId" value="(.\w+)">/)[0x1] || __Oxee935[0x0];
                    $[__Oxee935[0x57]] = _0x911ax22[__Oxee935[0x35]](/<input type="hidden" id="userId" value="(.\w+)">/) && _0x911ax22[__Oxee935[0x35]](/<input type="hidden" id="userId" value="(.\w+)">/)[0x1] || __Oxee935[0x0];
                    setActivityCookie(_0x911ax21)
                }
            } catch (e) {
                $[__Oxee935[0x23]](e, _0x911ax21)
            } finally {
                _0x911ax1f()
            }
        })
    })
}

function getActInfo() {
    return new Promise((_0x911ax1f) => {
        let _0x911ax29 = {
            url: `${__Oxee935[0x0]}${$[__Oxee935[0xd1]]}${__Oxee935[0x0]}`,
            followRedirect: false,
            headers: {
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxee935[0xc6]],
                '\x52\x65\x66\x65\x72\x65\x72': $[__Oxee935[0x2c]]
            },
            timeout: 90000
        };
        $[__Oxee935[0xd0]](_0x911ax29, async (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                if (_0x911ax20) {
                } else {
                }
            } catch (e) {
                $[__Oxee935[0x23]](e, _0x911ax21)
            } finally {
                _0x911ax1f()
            }
        })
    })
}

function setActivityCookie(_0x911ax21) {
    try {
        if (_0x911ax21[__Oxee935[0xd3]][__Oxee935[0xd2]]) {
            cookie = originCookie + __Oxee935[0xd4];
            for (let _0x911ax2d of _0x911ax21[__Oxee935[0xd3]][__Oxee935[0xd2]]) {
                lz_cookie[_0x911ax2d[__Oxee935[0x20]](__Oxee935[0xd4])[0x0][__Oxee935[0xd6]](0, _0x911ax2d[__Oxee935[0x20]](__Oxee935[0xd4])[0x0][__Oxee935[0x1f]](__Oxee935[0xd5]))] = _0x911ax2d[__Oxee935[0x20]](__Oxee935[0xd4])[0x0][__Oxee935[0xd6]](_0x911ax2d[__Oxee935[0x20]](__Oxee935[0xd4])[0x0][__Oxee935[0x1f]](__Oxee935[0xd5]) + 1)
            }
            ;
            for (const _0x911ax2e of Object[__Oxee935[0xd]](lz_cookie)) {
                cookie += (_0x911ax2e + __Oxee935[0xd5] + lz_cookie[_0x911ax2e] + __Oxee935[0xd4])
            }
            ;activityCookie = cookie
        }
    } catch (e) {
        activityCookie = cookie
    }
}

async function getUA() {
    $[__Oxee935[0xc6]] = `${__Oxee935[0xd7]}${randomString(40)}${__Oxee935[0xd8]}`
}

function randomString(_0x911ax10) {
    _0x911ax10 = _0x911ax10 || 32;
    let _0x911ax31 = __Oxee935[0xd9], _0x911ax32 = _0x911ax31[__Oxee935[0x29]], _0x911ax33 = __Oxee935[0x0];
    for (i = 0; i < _0x911ax10; i++) {
        _0x911ax33 += _0x911ax31[__Oxee935[0xdb]](Math[__Oxee935[0xda]](Math[__Oxee935[0x32]]() * _0x911ax32))
    }
    ;
    return _0x911ax33
}

function jsonParse(_0x911ax35) {
    if (typeof _0x911ax35 == __Oxee935[0xdc]) {
        try {
            return JSON[__Oxee935[0x96]](_0x911ax35)
        } catch (e) {
            console[__Oxee935[0x10]](e);
            $[__Oxee935[0x28]]($[__Oxee935[0x25]], __Oxee935[0x0], __Oxee935[0xdd]);
            return []
        }
    }
}

function checkCookie() {
    const _0x911ax37 = {
        url: __Oxee935[0xde],
        headers: {
            "\x48\x6F\x73\x74": __Oxee935[0xdf],
            "\x41\x63\x63\x65\x70\x74": __Oxee935[0xe0],
            "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxee935[0xc4],
            "\x43\x6F\x6F\x6B\x69\x65": cookie,
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxee935[0xe1],
            "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxee935[0xc3],
            "\x52\x65\x66\x65\x72\x65\x72": __Oxee935[0xe2],
            "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxee935[0xc2]
        }
    };
    return new Promise((_0x911ax1f) => {
        $[__Oxee935[0xd0]](_0x911ax37, (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                if (_0x911ax20) {
                    $[__Oxee935[0x23]](_0x911ax20)
                } else {
                    if (_0x911ax22) {
                        _0x911ax22 = JSON[__Oxee935[0x96]](_0x911ax22);
                        if (_0x911ax22[__Oxee935[0xe3]] == __Oxee935[0xe4]) {
                            $[__Oxee935[0x39]] = false;
                            return
                        } else {
                            $[__Oxee935[0x39]] = true;
                            return
                        }
                        ;
                        if (_0x911ax22[__Oxee935[0xe3]] === __Oxee935[0xe5] && _0x911ax22[__Oxee935[0x9f]][__Oxee935[0xe7]](__Oxee935[0xe6])) {
                            $[__Oxee935[0x38]] = _0x911ax22[__Oxee935[0x9f]][__Oxee935[0xe6]][__Oxee935[0xe9]][__Oxee935[0xe8]]
                        }
                    } else {
                        $[__Oxee935[0x10]](__Oxee935[0xea])
                    }
                }
            } catch (e) {
                $[__Oxee935[0x23]](e)
            } finally {
                _0x911ax1f()
            }
        })
    })
}

function random(_0x911ax39, _0x911ax3a) {
    return Math[__Oxee935[0xda]](Math[__Oxee935[0x32]]() * (_0x911ax3a - _0x911ax39)) + _0x911ax39
}

function getCard(_0x911ax3c) {
    return new Promise((_0x911ax1f) => {
        $[__Oxee935[0xd0]]({
            url: `${__Oxee935[0x0]}${url2}${__Oxee935[0xeb]}${_0x911ax3c}${__Oxee935[0x0]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": ver2},
            timeout: 99000
        }, (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                if (_0x911ax20) {
                    console[__Oxee935[0x10]](`${__Oxee935[0xec]}`)
                } else {
                    _0x911ax22 = _0x911ax22
                }
            } catch (e) {
            } finally {
                _0x911ax1f(_0x911ax22 || __Oxee935[0x0])
            }
        })
    })
}

function getToken() {
    return new Promise((_0x911ax1f) => {
        $[__Oxee935[0xd0]]({
            url: `${__Oxee935[0x0]}${url1}${__Oxee935[0xed]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": ver1},
            timeout: 60000
        }, (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                if (_0x911ax20) {
                    console[__Oxee935[0x10]](`${__Oxee935[0xec]}`)
                } else {
                    try {
                        _0x911ax22 = JSON[__Oxee935[0x96]](_0x911ax22);
                        if (_0x911ax22[__Oxee935[0xee]] == 0) {
                            _0x911ax22 = _0x911ax22[__Oxee935[0x9f]]
                        } else {
                            _0x911ax22 = __Oxee935[0x0]
                        }
                    } catch (e) {
                        _0x911ax22 = __Oxee935[0x0]
                    }
                }
            } catch (e) {
            } finally {
                _0x911ax1f(_0x911ax22 || __Oxee935[0x0])
            }
        })
    })
}

async function joinShop() {
    if (!$[__Oxee935[0x5f]]) {
        return
    }
    ;
    return new Promise(async (_0x911ax1f) => {
        $[__Oxee935[0x61]] = __Oxee935[0x60];
        let _0x911ax3f = `${__Oxee935[0x0]}`;
        await getshopactivityId();
        if ($[__Oxee935[0xef]]) {
            _0x911ax3f = `${__Oxee935[0xf0]}${$[__Oxee935[0xef]]}${__Oxee935[0x0]}`
        }
        ;body = __Oxee935[0xf1] + $[__Oxee935[0x5f]] + __Oxee935[0xf2] + $[__Oxee935[0x5f]] + __Oxee935[0xf3];
        let _0x911ax40 = __Oxee935[0x0];
        _0x911ax40 = await getCard($[__Oxee935[0x5f]]);
        _0x911ax40 = encodeURIComponent(_0x911ax40);
        const _0x911ax37 = {
            url: `${__Oxee935[0xf4]}${body}${__Oxee935[0xf5]}${_0x911ax40}${__Oxee935[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxee935[0xe0],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxee935[0xc2],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxee935[0xf6],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxee935[0xf7],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxee935[0xc6]]
            }
        };
        await $[__Oxee935[0x33]](500);
        $[__Oxee935[0xd0]](_0x911ax37, async (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                _0x911ax22 = _0x911ax22 && _0x911ax22[__Oxee935[0x35]](/jsonp_.*?\((.*?)\);/) && _0x911ax22[__Oxee935[0x35]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x911ax22;
                let _0x911ax24 = $[__Oxee935[0xf8]](_0x911ax22, _0x911ax22);
                if (_0x911ax24 && typeof _0x911ax24 == __Oxee935[0x99]) {
                    if (_0x911ax24 && _0x911ax24[__Oxee935[0xf9]] === true) {
                        console[__Oxee935[0x10]](_0x911ax24[__Oxee935[0x9c]]);
                        $[__Oxee935[0x61]] = _0x911ax24[__Oxee935[0x9c]];
                        if (_0x911ax24[__Oxee935[0x9e]] && _0x911ax24[__Oxee935[0x9e]][__Oxee935[0xfa]]) {
                            for (let _0x911ax12 of _0x911ax24[__Oxee935[0x9e]][__Oxee935[0xfa]][__Oxee935[0xfb]]) {
                                console[__Oxee935[0x10]](`${__Oxee935[0xfc]}${_0x911ax12[__Oxee935[0xfd]]}${__Oxee935[0x0]}${_0x911ax12[__Oxee935[0xfe]]}${__Oxee935[0x0]}${_0x911ax12[__Oxee935[0xff]]}${__Oxee935[0x0]}`)
                            }
                        }
                    } else {
                        if (_0x911ax24 && typeof _0x911ax24 == __Oxee935[0x99] && _0x911ax24[__Oxee935[0x9c]]) {
                            $[__Oxee935[0x61]] = _0x911ax24[__Oxee935[0x9c]];
                            console[__Oxee935[0x10]](`${__Oxee935[0x0]}${_0x911ax24[__Oxee935[0x9c]] || __Oxee935[0x0]}${__Oxee935[0x0]}`)
                        } else {
                            console[__Oxee935[0x10]](_0x911ax22)
                        }
                    }
                } else {
                    console[__Oxee935[0x10]](_0x911ax22)
                }
            } catch (e) {
                $[__Oxee935[0x23]](e, _0x911ax21)
            } finally {
                _0x911ax1f()
            }
        })
    })
}

async function getshopactivityId() {
    return new Promise(async (_0x911ax1f) => {
        let _0x911ax1a = `${__Oxee935[0xf1]}${$[__Oxee935[0x5f]]}${__Oxee935[0x100]}`;
        let _0x911ax40 = `${__Oxee935[0x0]}${new Date(Date[__Oxee935[0x102]]()).Format(__Oxee935[0x101])}${__Oxee935[0xd4]}${generateFp()}${__Oxee935[0x103]}${Date[__Oxee935[0x102]]()}${__Oxee935[0x0]}`;
        _0x911ax40 = encodeURIComponent(_0x911ax40);
        const _0x911ax37 = {
            url: `${__Oxee935[0x104]}${_0x911ax1a}${__Oxee935[0xf5]}${_0x911ax40}${__Oxee935[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxee935[0xe0],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxee935[0xc2],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxee935[0xf6],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxee935[0xf7],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxee935[0xc6]]
            }
        };
        await $[__Oxee935[0x33]](500);
        $[__Oxee935[0xd0]](_0x911ax37, async (_0x911ax20, _0x911ax21, _0x911ax22) => {
            try {
                _0x911ax22 = _0x911ax22 && _0x911ax22[__Oxee935[0x35]](/jsonp_.*?\((.*?)\);/) && _0x911ax22[__Oxee935[0x35]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x911ax22;
                let _0x911ax24 = $[__Oxee935[0xf8]](_0x911ax22, _0x911ax22);
                if (_0x911ax24 && typeof _0x911ax24 == __Oxee935[0x99]) {
                    if (_0x911ax24 && _0x911ax24[__Oxee935[0xf9]] == true) {
                        console[__Oxee935[0x10]](`${__Oxee935[0x105]}${_0x911ax24[__Oxee935[0x9e]][0x0][__Oxee935[0x107]][__Oxee935[0x106]] || __Oxee935[0x0]}${__Oxee935[0x0]}`);
                        $[__Oxee935[0xef]] = _0x911ax24[__Oxee935[0x9e]][0x0][__Oxee935[0x108]] && _0x911ax24[__Oxee935[0x9e]][0x0][__Oxee935[0x108]][0x0] && _0x911ax24[__Oxee935[0x9e]][0x0][__Oxee935[0x108]][0x0][__Oxee935[0x109]] && _0x911ax24[__Oxee935[0x9e]][0x0][__Oxee935[0x108]][0x0][__Oxee935[0x109]][__Oxee935[0x2c]] || __Oxee935[0x0]
                    }
                } else {
                    console[__Oxee935[0x10]](_0x911ax22)
                }
            } catch (e) {
                $[__Oxee935[0x23]](e, _0x911ax21)
            } finally {
                _0x911ax1f()
            }
        })
    })
}

function generateFp() {
    let _0x911ax10 = __Oxee935[0x10a];
    let _0x911ax32 = 13;
    let _0x911ax12 = __Oxee935[0x0];
    for (; _0x911ax32--;) {
        _0x911ax12 += _0x911ax10[Math[__Oxee935[0x32]]() * _0x911ax10[__Oxee935[0x29]] | 0]
    }
    ;
    return (_0x911ax12 + Date[__Oxee935[0x102]]())[__Oxee935[0x10b]](0, 16)
}

function geth5st() {
    let _0x911ax44 = Date[__Oxee935[0x102]]();
    let _0x911ax45 = generateFp();
    let _0x911ax46 = new Date(_0x911ax44).Format(__Oxee935[0x101]);
    let _0x911ax47 = __Oxee935[0x0];
    let _0x911ax48 = __Oxee935[0x0];
    let _0x911ax49 = [__Oxee935[0x10c], __Oxee935[0x10d], __Oxee935[0x10e]];
    let _0x911ax4a = _0x911ax49[random(0, _0x911ax49[__Oxee935[0x29]])];
    return encodeURIComponent(_0x911ax46 + __Oxee935[0xd4] + _0x911ax4a + _0x911ax45 + __Oxee935[0x0] + Date[__Oxee935[0x102]]())
}

function getH5st() {
    let _0x911ax44 = Date[__Oxee935[0x102]]();
    let _0x911ax45 = generateFp();
    let _0x911ax46 = new Date(_0x911ax44).Format(__Oxee935[0x101]);
    return encodeURIComponent(_0x911ax46 + __Oxee935[0xd4] + __Oxee935[0x0] + _0x911ax45 + __Oxee935[0x10d] + Date[__Oxee935[0x102]]())
}

Date[__Oxee935[0x110]][__Oxee935[0x10f]] = function (_0x911ax4c) {
    var _0x911ax10, _0x911ax33 = this, _0x911ax4d = _0x911ax4c, _0x911ax4e = {
        "\x4D\x2B": _0x911ax33[__Oxee935[0x111]]() + 1,
        "\x64\x2B": _0x911ax33[__Oxee935[0x112]](),
        "\x44\x2B": _0x911ax33[__Oxee935[0x112]](),
        "\x68\x2B": _0x911ax33[__Oxee935[0x113]](),
        "\x48\x2B": _0x911ax33[__Oxee935[0x113]](),
        "\x6D\x2B": _0x911ax33[__Oxee935[0x114]](),
        "\x73\x2B": _0x911ax33[__Oxee935[0x115]](),
        "\x77\x2B": _0x911ax33[__Oxee935[0x116]](),
        "\x71\x2B": Math[__Oxee935[0xda]]((_0x911ax33[__Oxee935[0x111]]() + 3) / 3),
        "\x53\x2B": _0x911ax33[__Oxee935[0x117]]()
    };
    /(y+)/i[__Oxee935[0x118]](_0x911ax4d) && (_0x911ax4d = _0x911ax4d[__Oxee935[0x11c]](RegExp.$1, __Oxee935[0x0][__Oxee935[0x11b]](_0x911ax33[__Oxee935[0x11a]]())[__Oxee935[0xd6]](4 - RegExp[__Oxee935[0x119]][__Oxee935[0x29]])));
    for (var _0x911ax4f in _0x911ax4e) {
        if (new RegExp(__Oxee935[0x11e][__Oxee935[0x11b]](_0x911ax4f, __Oxee935[0x11d]))[__Oxee935[0x118]](_0x911ax4d)) {
            var _0x911ax31, _0x911ax32 = __Oxee935[0x11f] === _0x911ax4f ? __Oxee935[0x120] : __Oxee935[0x121];
            _0x911ax4d = _0x911ax4d[__Oxee935[0x11c]](RegExp.$1, 1 == RegExp[__Oxee935[0x119]][__Oxee935[0x29]] ? _0x911ax4e[_0x911ax4f] : (__Oxee935[0x0][__Oxee935[0x11b]](_0x911ax32) + _0x911ax4e[_0x911ax4f])[__Oxee935[0xd6]](__Oxee935[0x0][__Oxee935[0x11b]](_0x911ax4e[_0x911ax4f])[__Oxee935[0x29]]))
        }
    }
    ;
    return _0x911ax4d
};

function random(_0x911ax39, _0x911ax3a) {
    return Math[__Oxee935[0xda]](Math[__Oxee935[0x32]]() * (_0x911ax3a - _0x911ax39)) + _0x911ax39
}

function getUrlQueryValueByKey(_0x911ax51, _0x911ax26) {
    if (!_0x911ax26) {
        _0x911ax26 = location[__Oxee935[0x122]]
    }
    ;var _0x911ax52 = new RegExp(__Oxee935[0x123] + _0x911ax51 + __Oxee935[0x124]);
    var _0x911ax53 = _0x911ax26[__Oxee935[0x35]](_0x911ax52);
    if (_0x911ax53 != null) {
        return decodeURIComponent(_0x911ax53[0x2])
    }
    ;
    return __Oxee935[0x0]
}

function getNowDate() {
    let _0x911ax55 = new Date();
    let _0x911ax56 = _0x911ax55[__Oxee935[0x111]]() + 1;
    let _0x911ax57 = _0x911ax55[__Oxee935[0x112]]();
    let _0x911ax58 = __Oxee935[0x0];
    if (_0x911ax56 >= 1 && _0x911ax56 <= 9) {
        _0x911ax56 = __Oxee935[0xe5] + _0x911ax56
    }
    ;
    if (_0x911ax57 >= 0 && _0x911ax57 <= 9) {
        _0x911ax57 = __Oxee935[0xe5] + _0x911ax57
    }
    ;let _0x911ax59 = _0x911ax55[__Oxee935[0x11a]]() + _0x911ax58 + _0x911ax56 + _0x911ax58 + _0x911ax57;
    return _0x911ax59
}

(function (_0x911ax5a, _0x911ax5b, _0x911ax5c, _0x911ax5d, _0x911ax5e, _0x911ax4f) {
    _0x911ax4f = __Oxee935[0x91];
    _0x911ax5d = function (_0x911ax5f) {
        if (typeof alert !== _0x911ax4f) {
            alert(_0x911ax5f)
        }
        ;
        if (typeof console !== _0x911ax4f) {
            console[__Oxee935[0x10]](_0x911ax5f)
        }
    };
    _0x911ax5c = function (_0x911ax32, _0x911ax5a) {
        return _0x911ax32 + _0x911ax5a
    };
    _0x911ax5e = _0x911ax5c(__Oxee935[0x125], _0x911ax5c(_0x911ax5c(__Oxee935[0x126], __Oxee935[0x127]), __Oxee935[0x128]));
    try {
        _0x911ax5a = __encode;
        if (!(typeof _0x911ax5a !== _0x911ax4f && _0x911ax5a === _0x911ax5c(__Oxee935[0x129], __Oxee935[0x12a]))) {
            _0x911ax5d(_0x911ax5e)
        }
    } catch (e) {
        _0x911ax5d(_0x911ax5e)
    }
})({})


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
