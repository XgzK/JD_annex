/*
cjhy 七日签到
不自动入会，不自动入会，不自动入会
地址：
export jd_cjhy_sevenDay_ids = "id1&id2&id3"     活动Id   必须
export jd_cjhy_sevenDay_num="10"                执行前多少个号  不设置则默认执行前10个
export jd_cjhy_sevenDay_openCard="1"            设置为1则自动入会 不设置或者设置为0则不自动入会

cron "2 2 29 2 *" jd_cjhy_sevenDay.js
*/

const $ = new Env('cjhy七日签到')
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxefa4f = ["", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x65\x76\x65\x6E\x44\x61\x79\x5F\x69\x64\x73", "\x65\x6E\x76", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x65\x76\x65\x6E\x44\x61\x79\x5F\x6E\x75\x6D", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x65\x76\x65\x6E\x44\x61\x79\x5F\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x62\x6C\x61\x63\x6B\x5F\x70\x69\x6E", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x32\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x43\x61\x72\x64", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x62\x65\x61\x6E\x4E\x75\x6C\x6C", "\x70\x72\x69\x7A\x65\x4C\x69\x73\x74", "\x26", "\x69\x6E\x64\x65\x78\x4F\x66", "\x73\x70\x6C\x69\x74", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x6C\x65\x6E\x67\x74\x68", "\u3010\u4FDD\u62A4\u73AF\u5883\u3011\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x70\x72\x6F\x65\x6E\x76\x63\x20\u63D0\u9192\u4F60\x3A", "\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x65\x76\x65\x6E\x44\x61\x79\x5F\x69\x64\x73\x3D\x22\x69\x64\x31\x26\x69\x64\x32\x26\x69\x64\x33\x2E\x2E\x2E\x22\x20\u672A\u8BBE\u7F6E\x20\u9000\u51FA\uFF01\uFF01\uFF01", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x72\x61\x6E\x64\x6F\x6D\x4E\x75\x6D", "\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x73\x69\x67\x6E\x2F\x73\x65\x76\x65\x6E\x44\x61\x79\x2F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\u5F53\u524D\u6D3B\u52A8\x3A\x20", "\u6D3B\u52A8\u5730\u5740\x3A\x20", "\x72\x61\x6E\x64\x6F\x6D", "\x77\x61\x69\x74", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x69\x73\x4C\x6F\x67\x69\x6E", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548", "\u4EAC\u4E1C\u8D26\u53F7", "\x20", "\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\u9ED1\u540D\u5355\u5185\x2C\u8DF3\u8FC7\x21", "\u6267\u884C\u4E86", "\u4E2A\u9000\u51FA", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67\x20\u83B7\u53D6\u5931\u8D25", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F", "\u62BD\u5956\u89C4\u5219\x3A", "\x72\x75\x6C\x65", "\x69\x73\x53\x69\x67\x6E", "\x79", "\u5F53\u65E5\u5DF2\u7B7E\u5230", "\x67\x65\x74\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\u5E97\u94FA\x3A\x20", "\x73\x68\x6F\x70\x4E\x61\x6D\x65", "\u4F1A\u5458\x3A\x20", "\x75\x73\x65\x72\x49\x64", "\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x67\x65\x74\x41\x63\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x65\x64\x43\x61\x72\x64", "\u53BB\u5165\u4F1A\x3A", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u7B2C\x33\u6B21\u91CD\u8BD5", "\u5982\u9700\u81EA\u52A8\u5165\u4F1A\x2C\x20\u8BF7\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\x3A\x20\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x65\x76\x65\x6E\x44\x61\x79\x5F\x6F\x70\x65\x6E\x43\x61\x72\x64\x3D\x22\x31\x22", "\u5DF2\u5165\u4F1A\x3A", "\x73\x69\x67\x6E\x55\x70", "\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67", "\u4EAC\u8C46\u8BA1\u5212\u4F59\u989D\u4E0D\u8DB3\x2C\x20\u9000\u51FA", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x26\x6C\x6D\x74\x3D\x30", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x75\x73\x65\x72\x49\x64\x3D", "\x26\x74\x6F\x6B\x65\x6E\x3D", "\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50", "\x2F\x73\x69\x67\x6E\x2F\x73\x65\x76\x65\x6E\x44\x61\x79\x2F\x77\x78\x2F\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F", "\x61\x63\x74\x49\x64\x3D", "\x26\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x26\x70\x69\x6E\x3D", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x2F\x77\x78\x44\x72\x61\x77\x41\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x72\x61\x77\x4D\x79\x4F\x6B\x4C\x69\x73\x74", "\x26\x74\x79\x70\x65\x3D", "\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65", "\x64\x72\x61\x77\x4D\x79\x4F\x6B\x4C\x69\x73\x74", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x70\x69\x6E\x3D", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x26\x63\x6F\x64\x65\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x70\x61\x67\x65\x55\x72\x6C\x3D", "\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D", "\x2F\x77\x78\x43\x6F\x6D\x6D\x6F\x6E\x49\x6E\x66\x6F\x2F\x67\x65\x74\x41\x63\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x66\x6F", "\x2F\x73\x69\x67\x6E\x2F\x73\x65\x76\x65\x6E\x44\x61\x79\x2F\x77\x78\x2F\x73\x69\x67\x6E\x55\x70", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x54\x79\x70\x65\x3D\x61\x70\x70", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x20", "\x72\x65\x73\x75\x6C\x74", "\x64\x61\x74\x61", "\x6A\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x73\x68\x6F\x70\x49\x64", "\x76\x65\x6E\x64\x65\x72\x49\x64", "\x73\x65\x63\x72\x65\x74\x50\x69\x6E", "\x74\x6F\x75\x78\x69\x61\x6E\x67\x49\x6D\x67", "\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C", "\x69\x73\x4F\x6B", "\x61\x63\x74\x52\x75\x6C\x65", "\x6E", "\x69\x73\x4F\x76\x65\x72", "\x66\x6F\x6C\x6C\x6F\x77\x44\x61\x79\x73", "\x63\x6F\x6E\x74\x69\x53\x69\x67\x6E\x44\x61\x79\x73", "\u5173\u6CE8\u5929\u6570\x3A\x20", "\x20\u5929", "\u8FDE\u7EED\u7B7E\u5230\x3A\x20", "\x73\x68\x6F\x70\x49\x6E\x66\x6F", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44\x3A", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x67\x69\x66\x74", "\x64\x72\x61\x77\x4E\x61\x6D\x65", "\x67\x69\x66\x74\x4E\x61\x6D\x65", "\x73\x69\x67\x6E\x52\x65\x73\x75\x6C\x74", "\u7A7A\u6C14", "\u7B7E\u5230\u7ED3\u679C\x3A", "\u4F59\u989D\u4E0D\u8DB3", "\u6765\u665A\u4E86", "\u7ED3\u675F", "\u660E\u65E5\u518D\u6765", "\u7B7E\u5230\u7ED3\u679C\x3A\x20", "\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67\x3A", "\x2D\x3E\x20", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\u706B\u7206", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x52\x65\x66\x65\x72\x65\x72", "\x26\x73\x69\x64\x3D\x26\x75\x6E\x5F\x61\x72\x65\x61\x3D", "\x43\x6F\x6F\x6B\x69\x65", "\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D", "\x74\x65\x78\x74\x2F\x68\x74\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x68\x74\x6D\x6C\x2B\x78\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x6D\x6C\x3B\x71\x3D\x30\x2E\x39\x2C\x69\x6D\x61\x67\x65\x2F\x61\x76\x69\x66\x2C\x69\x6D\x61\x67\x65\x2F\x77\x65\x62\x70\x2C\x69\x6D\x61\x67\x65\x2F\x61\x70\x6E\x67\x2C\x69\x6D\x61\x67\x65\x2F\x74\x70\x67\x2C\x2A\x2F\x2A\x3B\x71\x3D\x30\x2E\x38\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x73\x69\x67\x6E\x65\x64\x2D\x65\x78\x63\x68\x61\x6E\x67\x65\x3B\x76\x3D\x62\x33\x3B\x71\x3D\x30\x2E\x39", "\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C", "\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\u6D3B\u52A8\u5DF2\u7ED3\u675F", "\x67\x65\x74", "\x72\x65\x61\x6C\x41\x63\x74\x69\x76\x69\x74\x79\x55\x52\x4C", "\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65", "\x68\x65\x61\x64\x65\x72\x73", "\x3B", "\x3D", "\x73\x75\x62\x73\x74\x72", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x5F\x6E\x65\x77\x2F\x69\x6E\x66\x6F\x2F\x47\x65\x74\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x55\x6E\x69\x6F\x6E", "\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x2A\x2F\x2A", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x34\x2E\x30\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x75\x66\x63\x3D\x26", "\x72\x65\x74\x63\x6F\x64\x65", "\x31\x30\x30\x31", "\x30", "\x75\x73\x65\x72\x49\x6E\x66\x6F", "\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\x62\x61\x73\x65\x49\x6E\x66\x6F", "\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E", "\x3F\x76\x65\x6E\x64\x65\x72\x69\x64\x3D", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x3F\x74\x79\x70\x65\x3D\x6C\x7A\x6B\x6A", "\x63\x6F\x64\x65", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x36\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x74\x6F\x4F\x62\x6A", "\x73\x75\x63\x63\x65\x73\x73", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x2C\x22\x70\x61\x79\x55\x70\x53\x68\x6F\x70\x22\x3A\x74\x72\x75\x65\x2C\x22\x71\x75\x65\x72\x79\x56\x65\x72\x73\x69\x6F\x6E\x22\x3A\x22\x31\x30\x2E\x35\x2E\x32\x22\x7D", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x6E\x6F\x77", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x37\x31\x34\x31\x31\x61\x39\x65\x31\x38\x6E\x38\x6A\x6D\x6D\x44\x4B\x48\x4D\x35\x71\x59\x32\x47\x51\x45\x48\x4E\x38\x4D\x45\x44\x6E\x78\x6E\x4D\x4E\x42\x56\x55\x47\x56\x49\x74\x52\x65\x65\x54\x33\x30\x46\x78\x41\x33\x4E\x49\x6F\x49\x6A\x71\x70\x57\x54\x37\x54\x65\x38\x62\x46\x33\x37\x46\x4A\x32\x57\x2B\x57\x7A\x69\x69\x78\x4C\x48\x68\x46\x30\x31\x3B\x33\x39\x32\x63\x66\x39\x62\x61\x64\x65\x34\x65\x31\x62\x30\x32\x65\x36\x66\x61\x38\x33\x63\x31\x64\x34\x37\x64\x37\x66\x31\x32\x34\x35\x65\x35\x61\x37\x61\x65\x39\x65\x62\x39\x32\x36\x34\x35\x31\x34\x32\x32\x37\x61\x64\x36\x66\x39\x33\x35\x64\x66\x39\x65\x3B\x33\x2E\x30\x3B", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x72\x65\x70\x6C\x61\x63\x65", "\x29", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x72\x65\x66", "\x28\x5E\x7C\x5B\x26\x3F\x5D\x29", "\x3D\x28\x5B\x5E\x26\x5D\x2A\x29\x28\x26\x7C\x24\x29", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxefa4f[0x0];
let jd_lzkj_sevenDay_ids = process[__Oxefa4f[0x2]][__Oxefa4f[0x1]] ? process[__Oxefa4f[0x2]][__Oxefa4f[0x1]] : __Oxefa4f[0x0];
let jd_lzkj_sevenDay_num = parseInt(process[__Oxefa4f[0x2]][__Oxefa4f[0x3]]) ? parseInt(process[__Oxefa4f[0x2]][__Oxefa4f[0x3]]) : 10;
let jd_lzkj_sevenDay_openCard = parseInt(process[__Oxefa4f[0x2]][__Oxefa4f[0x4]]) ? parseInt(process[__Oxefa4f[0x2]][__Oxefa4f[0x4]]) : 0;
let jd_lzkj_black_pin = process[__Oxefa4f[0x2]][__Oxefa4f[0x5]] ? process[__Oxefa4f[0x2]][__Oxefa4f[0x5]] : __Oxefa4f[0x0];
let ver1 = __Oxefa4f[0x6];
let ver2 = __Oxefa4f[0x7];
let url1 = __Oxefa4f[0x8];
let url2 = __Oxefa4f[0x9];
if ($[__Oxefa4f[0xa]]()) {
    Object[__Oxefa4f[0xd]](jdCookieNode)[__Oxefa4f[0xc]]((_0xd0e4xb) => {
        cookiesArr[__Oxefa4f[0xb]](jdCookieNode[_0xd0e4xb])
    });
    if (process[__Oxefa4f[0x2]][__Oxefa4f[0xe]] && process[__Oxefa4f[0x2]][__Oxefa4f[0xe]] === __Oxefa4f[0xf]) {
        console[__Oxefa4f[0x10]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxefa4f[0x13]](__Oxefa4f[0x12]), $[__Oxefa4f[0x13]](__Oxefa4f[0x14]), ...jsonParse($[__Oxefa4f[0x13]](__Oxefa4f[0x17]) || __Oxefa4f[0x18])[__Oxefa4f[0x16]]((_0xd0e4xb) => {
        return _0xd0e4xb[__Oxefa4f[0x15]]
    })][__Oxefa4f[0x11]]((_0xd0e4xb) => {
        return !!_0xd0e4xb
    })
}
;allMessage = __Oxefa4f[0x0], message = __Oxefa4f[0x0];
$[__Oxefa4f[0x19]] = false;
$[__Oxefa4f[0x1a]] = false;
$[__Oxefa4f[0x1b]] = false;
$[__Oxefa4f[0x1c]] = false;
let lz_jdpin_token_cookie = __Oxefa4f[0x0];
let activityCookie = __Oxefa4f[0x0];
let lz_cookie = {};
let ids = [];
$[__Oxefa4f[0x1d]] = [];
if (jd_lzkj_sevenDay_ids[__Oxefa4f[0x1f]](__Oxefa4f[0x1e]) > -1) {
    ids = jd_lzkj_sevenDay_ids[__Oxefa4f[0x20]](__Oxefa4f[0x1e])
} else {
    ids = [jd_lzkj_sevenDay_ids]
}
;!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxefa4f[0x28]]($[__Oxefa4f[0x25]], __Oxefa4f[0x26], __Oxefa4f[0x27], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxefa4f[0x27]});
        return
    }
    ;
    if (ids[__Oxefa4f[0x29]] < 1 || !jd_lzkj_sevenDay_ids) {
        console[__Oxefa4f[0x10]](`${__Oxefa4f[0x2a]}`);
        console[__Oxefa4f[0x10]](`${__Oxefa4f[0x2b]}`);
        return
    }
    ;
    for (let _0xd0e4x11 = 0; _0xd0e4x11 < ids[__Oxefa4f[0x29]]; _0xd0e4x11++) {
        $[__Oxefa4f[0x2c]] = ids[_0xd0e4x11];
        $[__Oxefa4f[0x2d]] = $[__Oxefa4f[0x2c]];
        $[__Oxefa4f[0x2e]] = `${__Oxefa4f[0x2f]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x0]}`;
        console[__Oxefa4f[0x10]](`${__Oxefa4f[0x30]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x0]}`);
        console[__Oxefa4f[0x10]](`${__Oxefa4f[0x31]}${$[__Oxefa4f[0x2e]]}${__Oxefa4f[0x0]}`);
        await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 1500 + 1500, 10));
        for (let _0xd0e4x12 = 0; _0xd0e4x12 < cookiesArr[__Oxefa4f[0x29]]; _0xd0e4x12++) {
            cookie = cookiesArr[_0xd0e4x12];
            originCookie = cookiesArr[_0xd0e4x12];
            if (cookie) {
                $[__Oxefa4f[0x34]] = decodeURIComponent(cookie[__Oxefa4f[0x35]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxefa4f[0x35]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $[__Oxefa4f[0x36]] = _0xd0e4x12 + 1;
                message = __Oxefa4f[0x0];
                $[__Oxefa4f[0x37]] = 0;
                $[__Oxefa4f[0x19]] = false;
                $[__Oxefa4f[0x38]] = __Oxefa4f[0x0];
                $[__Oxefa4f[0x39]] = true;
                console[__Oxefa4f[0x10]](`${__Oxefa4f[0x3a]}${$[__Oxefa4f[0x36]]}${__Oxefa4f[0x3b]}${$[__Oxefa4f[0x38]] || $[__Oxefa4f[0x34]]}${__Oxefa4f[0x3c]}`);
                if (!$[__Oxefa4f[0x39]]) {
                    $[__Oxefa4f[0x28]]($[__Oxefa4f[0x25]], `${__Oxefa4f[0x3d]}`, `${__Oxefa4f[0x3e]}${$[__Oxefa4f[0x36]]}${__Oxefa4f[0x3f]}${$[__Oxefa4f[0x38]] || $[__Oxefa4f[0x34]]}${__Oxefa4f[0x40]}`, {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxefa4f[0x41]});
                    if ($[__Oxefa4f[0xa]]()) {
                    }
                    ;
                    continue
                }
                ;
                if (jd_lzkj_black_pin[__Oxefa4f[0x1f]]($.UserName) > -1) {
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0x42]}`);
                    continue
                }
                ;await getUA();
                try {
                    await run()
                } catch (e) {
                    console[__Oxefa4f[0x10]](e)
                }
                ;
                if ($[__Oxefa4f[0x36]] >= jd_lzkj_sevenDay_num) {
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0x43]}${jd_lzkj_sevenDay_num}${__Oxefa4f[0x44]}`);
                    break
                }
                ;
                if ($[__Oxefa4f[0x1c]] == true) {
                    break
                }
                ;
                if ($[__Oxefa4f[0x1a]] || $[__Oxefa4f[0x1b]]) {
                    break
                }
                ;await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 2500 + 2500, 10));
                if ($[__Oxefa4f[0x36]] % 3 == 0) {
                    await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 10000 + 10000, 10))
                }
            }
        }
        ;await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 15000 + 15000, 10))
    }
    ;
    if ($[__Oxefa4f[0x1a]]) {
        let _0xd0e4x13 = __Oxefa4f[0x45];
        $[__Oxefa4f[0x28]]($[__Oxefa4f[0x25]], `${__Oxefa4f[0x0]}`, `${__Oxefa4f[0x0]}${_0xd0e4x13}${__Oxefa4f[0x0]}`);
        if ($[__Oxefa4f[0xa]]()) {
            await notify[__Oxefa4f[0x46]](`${__Oxefa4f[0x0]}${$[__Oxefa4f[0x25]]}${__Oxefa4f[0x0]}`, `${__Oxefa4f[0x0]}${_0xd0e4x13}${__Oxefa4f[0x0]}`)
        }
    }
})()[__Oxefa4f[0x24]]((_0xd0e4x10) => {
    return $[__Oxefa4f[0x23]](_0xd0e4x10)
})[__Oxefa4f[0x22]](() => {
    return $[__Oxefa4f[0x21]]()
});

async function run() {
    try {
        lz_jdpin_token_cookie = __Oxefa4f[0x0];
        $[__Oxefa4f[0x47]] = __Oxefa4f[0x0];
        $[__Oxefa4f[0x48]] = __Oxefa4f[0x0];
        $[__Oxefa4f[0x1b]] = false;
        $[__Oxefa4f[0x1c]] = false;
        let _0xd0e4x15 = false;
        await takePostRequest(__Oxefa4f[0x49]);
        if ($[__Oxefa4f[0x47]] == __Oxefa4f[0x0]) {
            console[__Oxefa4f[0x10]](__Oxefa4f[0x4a]);
            return
        }
        ;await getCk();
        if ($[__Oxefa4f[0x1b]] == true) {
            return
        }
        ;
        if (activityCookie == __Oxefa4f[0x0]) {
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x4b]}`);
            return
        }
        ;await takePostRequest(__Oxefa4f[0x4c]);
        await takePostRequest(__Oxefa4f[0x4d]);
        if (!$[__Oxefa4f[0x48]]) {
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x4e]}`);
            return
        }
        ;await takePostRequest(__Oxefa4f[0x4f]);
        await takePostRequest(__Oxefa4f[0x50]);
        if ($[__Oxefa4f[0x36]] == 1) {
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x51]}${$[__Oxefa4f[0x52]]}${__Oxefa4f[0x0]}`)
        }
        ;
        if ($[__Oxefa4f[0x53]] == __Oxefa4f[0x54]) {
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x55]}`);
            await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 2500 + 2500, 10));
            return
        }
        ;await takePostRequest(__Oxefa4f[0x56]);
        if ($[__Oxefa4f[0x36]] == 1) {
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x57]}${$[__Oxefa4f[0x58]]}${__Oxefa4f[0x0]}`);
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x59]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x0]}`)
        }
        ;await takePostRequest(__Oxefa4f[0x5b]);
        await takePostRequest(__Oxefa4f[0x5c]);
        await $[__Oxefa4f[0x33]](500);
        if ($[__Oxefa4f[0x5d]] == false) {
            if (jd_lzkj_sevenDay_openCard == 1) {
                console[__Oxefa4f[0x10]](`${__Oxefa4f[0x5e]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x0]}`);
                _0xd0e4x15 = true;
                $[__Oxefa4f[0x5f]] = $[__Oxefa4f[0x5a]];
                await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 1500 + 500, 10));
                await joinShop();
                await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 500 + 500, 10));
                if ($[__Oxefa4f[0x61]][__Oxefa4f[0x1f]](__Oxefa4f[0x60]) > -1 || $[__Oxefa4f[0x61]][__Oxefa4f[0x1f]](__Oxefa4f[0x62]) > -1) {
                    console[__Oxefa4f[0x10]](__Oxefa4f[0x63]);
                    await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 1500 + 1000, 10));
                    await joinShop()
                }
                ;
                if ($[__Oxefa4f[0x61]][__Oxefa4f[0x1f]](__Oxefa4f[0x60]) > -1 || $[__Oxefa4f[0x61]][__Oxefa4f[0x1f]](__Oxefa4f[0x62]) > -1) {
                    console[__Oxefa4f[0x10]](__Oxefa4f[0x64]);
                    await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 1000 + 1000, 10));
                    await joinShop()
                }
                ;
                if ($[__Oxefa4f[0x61]][__Oxefa4f[0x1f]](__Oxefa4f[0x60]) > -1 || $[__Oxefa4f[0x61]][__Oxefa4f[0x1f]](__Oxefa4f[0x62]) > -1) {
                    console[__Oxefa4f[0x10]](__Oxefa4f[0x65]);
                    await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 1500 + 1500, 10));
                    await joinShop()
                }
            } else {
                console[__Oxefa4f[0x10]](`${__Oxefa4f[0x66]}`)
            }
        } else {
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x67]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x0]}`)
        }
        ;await takePostRequest(__Oxefa4f[0x68]);
        await takePostRequest(__Oxefa4f[0x69]);
        if ($[__Oxefa4f[0x1c]] == true) {
            console[__Oxefa4f[0x10]](__Oxefa4f[0x6a]);
            return
        }
        ;await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 2500 + 2500, 10))
    } catch (e) {
    }
}

async function takePostRequest(_0xd0e4x17) {
    if ($[__Oxefa4f[0x1a]]) {
        return
    }
    ;let _0xd0e4x18 = __Oxefa4f[0x6b];
    let _0xd0e4x19 = `${__Oxefa4f[0x0]}`;
    let _0xd0e4x1a = __Oxefa4f[0x6c];
    let _0xd0e4x1b = __Oxefa4f[0x0];
    switch (_0xd0e4x17) {
        case __Oxefa4f[0x49]:
            url = `${__Oxefa4f[0x6d]}`;
            _0xd0e4x19 = await getToken();
            break;
        case __Oxefa4f[0x4c]:
            url = `${__Oxefa4f[0x6e]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x6f]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x4d]:
            url = `${__Oxefa4f[0x70]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x71]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x72]}${$[__Oxefa4f[0x47]]}${__Oxefa4f[0x73]}`;
            break;
        case __Oxefa4f[0x50]:
            url = __Oxefa4f[0x74];
            _0xd0e4x19 = `${__Oxefa4f[0x75]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x76]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x77]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x56]:
            url = `${__Oxefa4f[0x78]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x79]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x7d]:
            url = `${__Oxefa4f[0x7a]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x6f]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x7b]}${$[__Oxefa4f[0x7c]]}${__Oxefa4f[0x77]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x5b]:
            url = `${__Oxefa4f[0x7e]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x7f]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x4f]:
            url = `${__Oxefa4f[0x80]}`;
            let _0xd0e4x1c = `${__Oxefa4f[0x0]}${$[__Oxefa4f[0x2e]]}${__Oxefa4f[0x0]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x79]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x81]}${$[__Oxefa4f[0x7c]]}${__Oxefa4f[0x77]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x82]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x83]}${encodeURIComponent(_0xd0e4x1c)}${__Oxefa4f[0x84]}`;
            break;
        case __Oxefa4f[0x5c]:
            url = `${__Oxefa4f[0x85]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x79]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x82]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x77]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x68]:
            url = `${__Oxefa4f[0x86]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x75]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x77]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x0]}`;
            break;
        case __Oxefa4f[0x69]:
            url = `${__Oxefa4f[0x87]}`;
            _0xd0e4x19 = `${__Oxefa4f[0x79]}${$[__Oxefa4f[0x5a]]}${__Oxefa4f[0x88]}${$[__Oxefa4f[0x7c]]}${__Oxefa4f[0x82]}${$[__Oxefa4f[0x2c]]}${__Oxefa4f[0x77]}${encodeURIComponent($.Pin)}${__Oxefa4f[0x89]}`;
            break;
        default:
            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x8a]}${_0xd0e4x17}${__Oxefa4f[0x0]}`)
    }
    ;
    if (_0xd0e4x17 == __Oxefa4f[0x49]) {
        url = url
    } else {
        url = __Oxefa4f[0x6b] + url
    }
    ;let _0xd0e4x1d = getPostRequest(url, _0xd0e4x19, _0xd0e4x1a);
    await $[__Oxefa4f[0x33]](parseInt(Math[__Oxefa4f[0x32]]() * 500 + 500, 10));
    return new Promise(async (_0xd0e4x1e) => {
        $[__Oxefa4f[0x90]](_0xd0e4x1d, (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                setActivityCookie(_0xd0e4x20);
                if (_0xd0e4x1f) {
                    if (_0xd0e4x20 && typeof _0xd0e4x20[__Oxefa4f[0x8b]] != __Oxefa4f[0x8c]) {
                        if (_0xd0e4x20[__Oxefa4f[0x8b]] == 493) {
                            console[__Oxefa4f[0x10]](__Oxefa4f[0x8d]);
                            $[__Oxefa4f[0x1a]] = true
                        }
                    }
                    ;console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${$[__Oxefa4f[0x8e]](_0xd0e4x1f, _0xd0e4x1f)}${__Oxefa4f[0x0]}`);
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${_0xd0e4x17}${__Oxefa4f[0x8f]}`)
                } else {
                    dealReturn(_0xd0e4x17, _0xd0e4x21)
                }
            } catch (e) {
                console[__Oxefa4f[0x10]](e, _0xd0e4x20)
            } finally {
                _0xd0e4x1e()
            }
        })
    })
}

async function dealReturn(_0xd0e4x17, _0xd0e4x21) {
    let _0xd0e4x23 = __Oxefa4f[0x0];
    try {
        if (_0xd0e4x17 != __Oxefa4f[0x4f] || _0xd0e4x17 != __Oxefa4f[0x69]) {
            if (_0xd0e4x21) {
                _0xd0e4x23 = JSON[__Oxefa4f[0x91]](_0xd0e4x21)
            }
        }
    } catch (e) {
        console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${_0xd0e4x17}${__Oxefa4f[0x92]}`);
        $[__Oxefa4f[0x93]] = false
    }
    ;
    try {
        switch (_0xd0e4x17) {
            case __Oxefa4f[0x49]:
                if (typeof _0xd0e4x23 == __Oxefa4f[0x94]) {
                    if (_0xd0e4x23[__Oxefa4f[0x95]] == 0) {
                        if (typeof _0xd0e4x23[__Oxefa4f[0x96]] != __Oxefa4f[0x8c]) {
                            $[__Oxefa4f[0x47]] = _0xd0e4x23[__Oxefa4f[0x96]]
                        }
                    } else {
                        if (_0xd0e4x23[__Oxefa4f[0x97]]) {
                            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x98]}${_0xd0e4x23[__Oxefa4f[0x97]] || __Oxefa4f[0x0]}${__Oxefa4f[0x0]}`)
                        } else {
                            console[__Oxefa4f[0x10]](_0xd0e4x21)
                        }
                    }
                } else {
                    console[__Oxefa4f[0x10]](_0xd0e4x21)
                }
                ;
                break;
            case __Oxefa4f[0x4c]:
                if (_0xd0e4x23[__Oxefa4f[0x99]] == true && _0xd0e4x23[__Oxefa4f[0x9a]]) {
                    $[__Oxefa4f[0x2c]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0x2c]];
                    $[__Oxefa4f[0x7c]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0x7c]];
                    $[__Oxefa4f[0x9b]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0x9b]];
                    $[__Oxefa4f[0x9c]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0x9c]];
                    $[__Oxefa4f[0x9d]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0x9d]]
                }
                ;
                break;
            case __Oxefa4f[0x4d]:
                if (_0xd0e4x23[__Oxefa4f[0x99]] == true && _0xd0e4x23[__Oxefa4f[0x9a]]) {
                    $[__Oxefa4f[0x48]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0x9e]];
                    $[__Oxefa4f[0x9f]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0xa0]]
                }
                ;
                break;
            case __Oxefa4f[0x50]:
                if (_0xd0e4x23[__Oxefa4f[0xa1]] == true) {
                    $[__Oxefa4f[0x52]] = _0xd0e4x23[__Oxefa4f[0xa2]];
                    $[__Oxefa4f[0x53]] = _0xd0e4x23[__Oxefa4f[0x53]] ? _0xd0e4x23[__Oxefa4f[0x53]] : __Oxefa4f[0xa3];
                    $[__Oxefa4f[0xa4]] = _0xd0e4x23[__Oxefa4f[0xa4]] ? _0xd0e4x23[__Oxefa4f[0xa4]] : __Oxefa4f[0xa3];
                    $[__Oxefa4f[0xa5]] = _0xd0e4x23[__Oxefa4f[0xa5]] ? _0xd0e4x23[__Oxefa4f[0xa5]] : 0;
                    $[__Oxefa4f[0xa6]] = _0xd0e4x23[__Oxefa4f[0xa6]] ? _0xd0e4x23[__Oxefa4f[0xa6]] : 0;
                    if ($[__Oxefa4f[0xa4]] == __Oxefa4f[0x54]) {
                        $[__Oxefa4f[0x1b]] = true
                    }
                    ;console[__Oxefa4f[0x10]](`${__Oxefa4f[0xa7]}${$[__Oxefa4f[0xa5]]}${__Oxefa4f[0xa8]}`);
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0xa9]}${$[__Oxefa4f[0xa6]]}${__Oxefa4f[0xa8]}`)
                } else {
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${_0xd0e4x23[__Oxefa4f[0x28]]}${__Oxefa4f[0x0]}`)
                }
                ;
                break;
            case __Oxefa4f[0x56]:
                if (_0xd0e4x23[__Oxefa4f[0xa1]] == true && _0xd0e4x23[__Oxefa4f[0xaa]]) {
                    $[__Oxefa4f[0x58]] = _0xd0e4x23[__Oxefa4f[0xaa]][__Oxefa4f[0x58]]
                }
                ;
                break;
            case __Oxefa4f[0x7d]:
                break;
            case __Oxefa4f[0x5b]:
                break;
            case __Oxefa4f[0x4f]:
                console[__Oxefa4f[0x10]](`${__Oxefa4f[0xab]}${_0xd0e4x21}${__Oxefa4f[0x0]}`);
                break;
            case __Oxefa4f[0x5c]:
                if (_0xd0e4x23[__Oxefa4f[0x99]] == true && _0xd0e4x23[__Oxefa4f[0x9a]]) {
                    $[__Oxefa4f[0x5d]] = _0xd0e4x23[__Oxefa4f[0x9a]][__Oxefa4f[0xac]]
                }
                ;
                break;
            case __Oxefa4f[0x68]:
                if (_0xd0e4x23[__Oxefa4f[0xa1]] == true && _0xd0e4x23[__Oxefa4f[0xad]]) {
                    try {
                        $[__Oxefa4f[0xae]] = _0xd0e4x23[__Oxefa4f[0xb0]][__Oxefa4f[0xad]][__Oxefa4f[0xaf]] ? _0xd0e4x23[__Oxefa4f[0xb0]][__Oxefa4f[0xad]][__Oxefa4f[0xaf]] : __Oxefa4f[0xb1]
                    } catch (e) {
                        $[__Oxefa4f[0xae]] = __Oxefa4f[0xb1]
                    }
                    ;console[__Oxefa4f[0x10]](`${__Oxefa4f[0xb2]}${$[__Oxefa4f[0xae]]}${__Oxefa4f[0x0]}`)
                } else {
                    if (_0xd0e4x23[__Oxefa4f[0x28]][__Oxefa4f[0x1f]](__Oxefa4f[0xb3]) > -1) {
                        $[__Oxefa4f[0x1c]] = true
                    }
                    ;
                    if (_0xd0e4x23[__Oxefa4f[0x28]][__Oxefa4f[0x1f]](__Oxefa4f[0xb4]) > -1) {
                        $[__Oxefa4f[0x1c]] = true
                    }
                    ;
                    if (_0xd0e4x23[__Oxefa4f[0x28]][__Oxefa4f[0x1f]](__Oxefa4f[0xb5]) > -1) {
                        $[__Oxefa4f[0x1c]] = true
                    }
                    ;
                    if (_0xd0e4x23[__Oxefa4f[0x28]][__Oxefa4f[0x1f]](__Oxefa4f[0xb6]) > -1) {
                        $[__Oxefa4f[0x1c]] = true
                    }
                    ;console[__Oxefa4f[0x10]](`${__Oxefa4f[0xb7]}${_0xd0e4x23[__Oxefa4f[0x28]]}${__Oxefa4f[0x0]}`)
                }
                ;
                break;
            case __Oxefa4f[0x69]:
                console[__Oxefa4f[0x10]](`${__Oxefa4f[0xb8]}${_0xd0e4x21}${__Oxefa4f[0x0]}`);
                break;
            default:
                console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${_0xd0e4x17}${__Oxefa4f[0xb9]}${_0xd0e4x21}${__Oxefa4f[0x0]}`);
                break
        }
        ;
        if (typeof _0xd0e4x23 == __Oxefa4f[0x94]) {
            if (_0xd0e4x23[__Oxefa4f[0xba]]) {
                if (_0xd0e4x23[__Oxefa4f[0xba]][__Oxefa4f[0x1f]](__Oxefa4f[0xbb]) > -1) {
                    $[__Oxefa4f[0x19]] = true
                }
            }
        }
    } catch (e) {
    }
}

function getPostRequest(_0xd0e4x25, _0xd0e4x19, _0xd0e4x1a = __Oxefa4f[0x6c]) {
    let _0xd0e4x26 = {
        "\x41\x63\x63\x65\x70\x74": __Oxefa4f[0xbc],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxefa4f[0xbd],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxefa4f[0xbe],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxefa4f[0xbf],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxefa4f[0xc0],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxefa4f[0xc1]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxefa4f[0xc2]
    };
    if (_0xd0e4x25[__Oxefa4f[0x1f]](__Oxefa4f[0x6b]) > -1) {
        _0xd0e4x26[__Oxefa4f[0xc3]] = `${__Oxefa4f[0x0]}${$[__Oxefa4f[0x2e]]}${__Oxefa4f[0xc4]}`;
        _0xd0e4x26[__Oxefa4f[0xc5]] = `${__Oxefa4f[0x0]}${activityCookie}${__Oxefa4f[0xc6]}${$[__Oxefa4f[0x48]]}${__Oxefa4f[0x0]}`
    } else {
        _0xd0e4x26[__Oxefa4f[0xc5]] = cookie
    }
    ;
    return {url: _0xd0e4x25, method: _0xd0e4x1a, headers: _0xd0e4x26, body: _0xd0e4x19, timeout: 90000}
}

function getCk() {
    return new Promise((_0xd0e4x1e) => {
        let _0xd0e4x28 = {
            url: `${__Oxefa4f[0x0]}${$[__Oxefa4f[0x2e]]}${__Oxefa4f[0xc4]}`,
            headers: {
                "\x41\x63\x63\x65\x70\x74": __Oxefa4f[0xc7],
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxefa4f[0xc1]],
                "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxefa4f[0xc8]
            },
            timeout: 90000
        };
        $[__Oxefa4f[0xcb]](_0xd0e4x28, async (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                if (_0xd0e4x1f) {
                    if (_0xd0e4x20 && typeof _0xd0e4x20[__Oxefa4f[0x8b]] != __Oxefa4f[0x8c]) {
                        if (_0xd0e4x20[__Oxefa4f[0x8b]] == 493) {
                            console[__Oxefa4f[0x10]](__Oxefa4f[0x8d]);
                            $[__Oxefa4f[0x1a]] = true
                        }
                    }
                    ;console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${$[__Oxefa4f[0x8e]](_0xd0e4x1f)}${__Oxefa4f[0x0]}`);
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${$[__Oxefa4f[0x25]]}${__Oxefa4f[0xc9]}`)
                } else {
                    let _0xd0e4x29 = _0xd0e4x21[__Oxefa4f[0x35]](/<title>(活动已结束)<\/title>/) && _0xd0e4x21[__Oxefa4f[0x35]](/<title>(活动已结束)<\/title>/)[0x1] || __Oxefa4f[0x0];
                    if (_0xd0e4x29) {
                        $[__Oxefa4f[0x1b]] = true;
                        console[__Oxefa4f[0x10]](__Oxefa4f[0xca])
                    }
                    ;$[__Oxefa4f[0x9d]] = _0xd0e4x21[__Oxefa4f[0x35]](/<input type="hidden" id="venderId" value="(.\w+)">/) && _0xd0e4x21[__Oxefa4f[0x35]](/<input type="hidden" id="venderId" value="(.\w+)">/)[0x1] || __Oxefa4f[0x0];
                    $[__Oxefa4f[0x5a]] = _0xd0e4x21[__Oxefa4f[0x35]](/<input type="hidden" id="userId" value="(.\w+)">/) && _0xd0e4x21[__Oxefa4f[0x35]](/<input type="hidden" id="userId" value="(.\w+)">/)[0x1] || __Oxefa4f[0x0];
                    setActivityCookie(_0xd0e4x20)
                }
            } catch (e) {
                $[__Oxefa4f[0x23]](e, _0xd0e4x20)
            } finally {
                _0xd0e4x1e()
            }
        })
    })
}

function getActInfo() {
    return new Promise((_0xd0e4x1e) => {
        let _0xd0e4x28 = {
            url: `${__Oxefa4f[0x0]}${$[__Oxefa4f[0xcc]]}${__Oxefa4f[0x0]}`,
            followRedirect: false,
            headers: {
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxefa4f[0xc1]],
                '\x52\x65\x66\x65\x72\x65\x72': $[__Oxefa4f[0x2c]]
            },
            timeout: 90000
        };
        $[__Oxefa4f[0xcb]](_0xd0e4x28, async (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                if (_0xd0e4x1f) {
                } else {
                }
            } catch (e) {
                $[__Oxefa4f[0x23]](e, _0xd0e4x20)
            } finally {
                _0xd0e4x1e()
            }
        })
    })
}

function setActivityCookie(_0xd0e4x20) {
    try {
        if (_0xd0e4x20[__Oxefa4f[0xce]][__Oxefa4f[0xcd]]) {
            cookie = originCookie + __Oxefa4f[0xcf];
            for (let _0xd0e4x2c of _0xd0e4x20[__Oxefa4f[0xce]][__Oxefa4f[0xcd]]) {
                lz_cookie[_0xd0e4x2c[__Oxefa4f[0x20]](__Oxefa4f[0xcf])[0x0][__Oxefa4f[0xd1]](0, _0xd0e4x2c[__Oxefa4f[0x20]](__Oxefa4f[0xcf])[0x0][__Oxefa4f[0x1f]](__Oxefa4f[0xd0]))] = _0xd0e4x2c[__Oxefa4f[0x20]](__Oxefa4f[0xcf])[0x0][__Oxefa4f[0xd1]](_0xd0e4x2c[__Oxefa4f[0x20]](__Oxefa4f[0xcf])[0x0][__Oxefa4f[0x1f]](__Oxefa4f[0xd0]) + 1)
            }
            ;
            for (const _0xd0e4x2d of Object[__Oxefa4f[0xd]](lz_cookie)) {
                cookie += (_0xd0e4x2d + __Oxefa4f[0xd0] + lz_cookie[_0xd0e4x2d] + __Oxefa4f[0xcf])
            }
            ;activityCookie = cookie
        }
    } catch (e) {
        activityCookie = cookie
    }
}

async function getUA() {
    $[__Oxefa4f[0xc1]] = `${__Oxefa4f[0xd2]}${randomString(40)}${__Oxefa4f[0xd3]}`
}

function randomString(_0xd0e4x10) {
    _0xd0e4x10 = _0xd0e4x10 || 32;
    let _0xd0e4x30 = __Oxefa4f[0xd4], _0xd0e4x31 = _0xd0e4x30[__Oxefa4f[0x29]], _0xd0e4x32 = __Oxefa4f[0x0];
    for (i = 0; i < _0xd0e4x10; i++) {
        _0xd0e4x32 += _0xd0e4x30[__Oxefa4f[0xd6]](Math[__Oxefa4f[0xd5]](Math[__Oxefa4f[0x32]]() * _0xd0e4x31))
    }
    ;
    return _0xd0e4x32
}

function jsonParse(_0xd0e4x34) {
    if (typeof _0xd0e4x34 == __Oxefa4f[0xd7]) {
        try {
            return JSON[__Oxefa4f[0x91]](_0xd0e4x34)
        } catch (e) {
            console[__Oxefa4f[0x10]](e);
            $[__Oxefa4f[0x28]]($[__Oxefa4f[0x25]], __Oxefa4f[0x0], __Oxefa4f[0xd8]);
            return []
        }
    }
}

function checkCookie() {
    const _0xd0e4x36 = {
        url: __Oxefa4f[0xd9],
        headers: {
            "\x48\x6F\x73\x74": __Oxefa4f[0xda],
            "\x41\x63\x63\x65\x70\x74": __Oxefa4f[0xdb],
            "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxefa4f[0xbf],
            "\x43\x6F\x6F\x6B\x69\x65": cookie,
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxefa4f[0xdc],
            "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxefa4f[0xbe],
            "\x52\x65\x66\x65\x72\x65\x72": __Oxefa4f[0xdd],
            "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxefa4f[0xbd]
        }
    };
    return new Promise((_0xd0e4x1e) => {
        $[__Oxefa4f[0xcb]](_0xd0e4x36, (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                if (_0xd0e4x1f) {
                    $[__Oxefa4f[0x23]](_0xd0e4x1f)
                } else {
                    if (_0xd0e4x21) {
                        _0xd0e4x21 = JSON[__Oxefa4f[0x91]](_0xd0e4x21);
                        if (_0xd0e4x21[__Oxefa4f[0xde]] == __Oxefa4f[0xdf]) {
                            $[__Oxefa4f[0x39]] = false;
                            return
                        } else {
                            $[__Oxefa4f[0x39]] = true;
                            return
                        }
                        ;
                        if (_0xd0e4x21[__Oxefa4f[0xde]] === __Oxefa4f[0xe0] && _0xd0e4x21[__Oxefa4f[0x9a]][__Oxefa4f[0xe2]](__Oxefa4f[0xe1])) {
                            $[__Oxefa4f[0x38]] = _0xd0e4x21[__Oxefa4f[0x9a]][__Oxefa4f[0xe1]][__Oxefa4f[0xe4]][__Oxefa4f[0xe3]]
                        }
                    } else {
                        $[__Oxefa4f[0x10]](__Oxefa4f[0xe5])
                    }
                }
            } catch (e) {
                $[__Oxefa4f[0x23]](e)
            } finally {
                _0xd0e4x1e()
            }
        })
    })
}

function random(_0xd0e4x38, _0xd0e4x39) {
    return Math[__Oxefa4f[0xd5]](Math[__Oxefa4f[0x32]]() * (_0xd0e4x39 - _0xd0e4x38)) + _0xd0e4x38
}

function getCard(_0xd0e4x3b) {
    return new Promise((_0xd0e4x1e) => {
        $[__Oxefa4f[0xcb]]({
            url: `${__Oxefa4f[0x0]}${url2}${__Oxefa4f[0xe6]}${_0xd0e4x3b}${__Oxefa4f[0x0]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": ver2},
            timeout: 99000
        }, (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                if (_0xd0e4x1f) {
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0xe7]}`)
                } else {
                    _0xd0e4x21 = _0xd0e4x21
                }
            } catch (e) {
            } finally {
                _0xd0e4x1e(_0xd0e4x21 || __Oxefa4f[0x0])
            }
        })
    })
}

function getToken() {
    return new Promise((_0xd0e4x1e) => {
        $[__Oxefa4f[0xcb]]({
            url: `${__Oxefa4f[0x0]}${url1}${__Oxefa4f[0xe8]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": ver1},
            timeout: 99000
        }, (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                if (_0xd0e4x1f) {
                    console[__Oxefa4f[0x10]](`${__Oxefa4f[0xe7]}`)
                } else {
                    try {
                        _0xd0e4x21 = JSON[__Oxefa4f[0x91]](_0xd0e4x21);
                        if (_0xd0e4x21[__Oxefa4f[0xe9]] == 0) {
                            _0xd0e4x21 = _0xd0e4x21[__Oxefa4f[0x9a]]
                        } else {
                            _0xd0e4x21 = __Oxefa4f[0x0]
                        }
                    } catch (e) {
                        _0xd0e4x21 = __Oxefa4f[0x0]
                    }
                }
            } catch (e) {
            } finally {
                _0xd0e4x1e(_0xd0e4x21 || __Oxefa4f[0x0])
            }
        })
    })
}

async function joinShop() {
    if (!$[__Oxefa4f[0x5f]]) {
        return
    }
    ;
    return new Promise(async (_0xd0e4x1e) => {
        $[__Oxefa4f[0x61]] = __Oxefa4f[0x60];
        let _0xd0e4x3e = `${__Oxefa4f[0x0]}`;
        await getshopactivityId();
        if ($[__Oxefa4f[0xea]]) {
            _0xd0e4x3e = `${__Oxefa4f[0xeb]}${$[__Oxefa4f[0xea]]}${__Oxefa4f[0x0]}`
        }
        ;body = __Oxefa4f[0xec] + $[__Oxefa4f[0x5f]] + __Oxefa4f[0xed] + $[__Oxefa4f[0x5f]] + __Oxefa4f[0xee];
        let _0xd0e4x3f = __Oxefa4f[0x0];
        _0xd0e4x3f = await getCard($[__Oxefa4f[0x5f]]);
        _0xd0e4x3f = encodeURIComponent(_0xd0e4x3f);
        const _0xd0e4x36 = {
            url: `${__Oxefa4f[0xef]}${body}${__Oxefa4f[0xf0]}${_0xd0e4x3f}${__Oxefa4f[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxefa4f[0xdb],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxefa4f[0xbd],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxefa4f[0xf1],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxefa4f[0xf2],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxefa4f[0xc1]]
            }
        };
        await $[__Oxefa4f[0x33]](500);
        $[__Oxefa4f[0xcb]](_0xd0e4x36, async (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                _0xd0e4x21 = _0xd0e4x21 && _0xd0e4x21[__Oxefa4f[0x35]](/jsonp_.*?\((.*?)\);/) && _0xd0e4x21[__Oxefa4f[0x35]](/jsonp_.*?\((.*?)\);/)[0x1] || _0xd0e4x21;
                let _0xd0e4x23 = $[__Oxefa4f[0xf3]](_0xd0e4x21, _0xd0e4x21);
                if (_0xd0e4x23 && typeof _0xd0e4x23 == __Oxefa4f[0x94]) {
                    if (_0xd0e4x23 && _0xd0e4x23[__Oxefa4f[0xf4]] === true) {
                        console[__Oxefa4f[0x10]](_0xd0e4x23[__Oxefa4f[0x97]]);
                        $[__Oxefa4f[0x61]] = _0xd0e4x23[__Oxefa4f[0x97]];
                        if (_0xd0e4x23[__Oxefa4f[0x99]] && _0xd0e4x23[__Oxefa4f[0x99]][__Oxefa4f[0xf5]]) {
                            for (let _0xd0e4x12 of _0xd0e4x23[__Oxefa4f[0x99]][__Oxefa4f[0xf5]][__Oxefa4f[0xf6]]) {
                                console[__Oxefa4f[0x10]](`${__Oxefa4f[0xf7]}${_0xd0e4x12[__Oxefa4f[0xf8]]}${__Oxefa4f[0x0]}${_0xd0e4x12[__Oxefa4f[0xf9]]}${__Oxefa4f[0x0]}${_0xd0e4x12[__Oxefa4f[0xfa]]}${__Oxefa4f[0x0]}`)
                            }
                        }
                    } else {
                        if (_0xd0e4x23 && typeof _0xd0e4x23 == __Oxefa4f[0x94] && _0xd0e4x23[__Oxefa4f[0x97]]) {
                            $[__Oxefa4f[0x61]] = _0xd0e4x23[__Oxefa4f[0x97]];
                            console[__Oxefa4f[0x10]](`${__Oxefa4f[0x0]}${_0xd0e4x23[__Oxefa4f[0x97]] || __Oxefa4f[0x0]}${__Oxefa4f[0x0]}`)
                        } else {
                            console[__Oxefa4f[0x10]](_0xd0e4x21)
                        }
                    }
                } else {
                    console[__Oxefa4f[0x10]](_0xd0e4x21)
                }
            } catch (e) {
                $[__Oxefa4f[0x23]](e, _0xd0e4x20)
            } finally {
                _0xd0e4x1e()
            }
        })
    })
}

async function getshopactivityId() {
    return new Promise(async (_0xd0e4x1e) => {
        let _0xd0e4x19 = `${__Oxefa4f[0xec]}${$[__Oxefa4f[0x5f]]}${__Oxefa4f[0xfb]}`;
        let _0xd0e4x3f = `${__Oxefa4f[0x0]}${new Date(Date[__Oxefa4f[0xfd]]()).Format(__Oxefa4f[0xfc])}${__Oxefa4f[0xcf]}${generateFp()}${__Oxefa4f[0xfe]}${Date[__Oxefa4f[0xfd]]()}${__Oxefa4f[0x0]}`;
        _0xd0e4x3f = encodeURIComponent(_0xd0e4x3f);
        const _0xd0e4x36 = {
            url: `${__Oxefa4f[0xff]}${_0xd0e4x19}${__Oxefa4f[0xf0]}${_0xd0e4x3f}${__Oxefa4f[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxefa4f[0xdb],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxefa4f[0xbd],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxefa4f[0xf1],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxefa4f[0xf2],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxefa4f[0xc1]]
            }
        };
        await $[__Oxefa4f[0x33]](500);
        $[__Oxefa4f[0xcb]](_0xd0e4x36, async (_0xd0e4x1f, _0xd0e4x20, _0xd0e4x21) => {
            try {
                _0xd0e4x21 = _0xd0e4x21 && _0xd0e4x21[__Oxefa4f[0x35]](/jsonp_.*?\((.*?)\);/) && _0xd0e4x21[__Oxefa4f[0x35]](/jsonp_.*?\((.*?)\);/)[0x1] || _0xd0e4x21;
                let _0xd0e4x23 = $[__Oxefa4f[0xf3]](_0xd0e4x21, _0xd0e4x21);
                if (_0xd0e4x23 && typeof _0xd0e4x23 == __Oxefa4f[0x94]) {
                    if (_0xd0e4x23 && _0xd0e4x23[__Oxefa4f[0xf4]] == true) {
                        console[__Oxefa4f[0x10]](`${__Oxefa4f[0x100]}${_0xd0e4x23[__Oxefa4f[0x99]][0x0][__Oxefa4f[0x102]][__Oxefa4f[0x101]] || __Oxefa4f[0x0]}${__Oxefa4f[0x0]}`);
                        $[__Oxefa4f[0xea]] = _0xd0e4x23[__Oxefa4f[0x99]][0x0][__Oxefa4f[0x103]] && _0xd0e4x23[__Oxefa4f[0x99]][0x0][__Oxefa4f[0x103]][0x0] && _0xd0e4x23[__Oxefa4f[0x99]][0x0][__Oxefa4f[0x103]][0x0][__Oxefa4f[0x104]] && _0xd0e4x23[__Oxefa4f[0x99]][0x0][__Oxefa4f[0x103]][0x0][__Oxefa4f[0x104]][__Oxefa4f[0x2c]] || __Oxefa4f[0x0]
                    }
                } else {
                    console[__Oxefa4f[0x10]](_0xd0e4x21)
                }
            } catch (e) {
                $[__Oxefa4f[0x23]](e, _0xd0e4x20)
            } finally {
                _0xd0e4x1e()
            }
        })
    })
}

function generateFp() {
    let _0xd0e4x10 = __Oxefa4f[0x105];
    let _0xd0e4x31 = 13;
    let _0xd0e4x12 = __Oxefa4f[0x0];
    for (; _0xd0e4x31--;) {
        _0xd0e4x12 += _0xd0e4x10[Math[__Oxefa4f[0x32]]() * _0xd0e4x10[__Oxefa4f[0x29]] | 0]
    }
    ;
    return (_0xd0e4x12 + Date[__Oxefa4f[0xfd]]())[__Oxefa4f[0x106]](0, 16)
}

function geth5st() {
    let _0xd0e4x43 = Date[__Oxefa4f[0xfd]]();
    let _0xd0e4x44 = generateFp();
    let _0xd0e4x45 = new Date(_0xd0e4x43).Format(__Oxefa4f[0xfc]);
    let _0xd0e4x46 = __Oxefa4f[0x0];
    let _0xd0e4x47 = __Oxefa4f[0x0];
    let _0xd0e4x48 = [__Oxefa4f[0x107], __Oxefa4f[0x108], __Oxefa4f[0x109]];
    let _0xd0e4x49 = _0xd0e4x48[random(0, _0xd0e4x48[__Oxefa4f[0x29]])];
    return encodeURIComponent(_0xd0e4x45 + __Oxefa4f[0xcf] + _0xd0e4x49 + _0xd0e4x44 + __Oxefa4f[0x0] + Date[__Oxefa4f[0xfd]]())
}

function getH5st() {
    let _0xd0e4x43 = Date[__Oxefa4f[0xfd]]();
    let _0xd0e4x44 = generateFp();
    let _0xd0e4x45 = new Date(_0xd0e4x43).Format(__Oxefa4f[0xfc]);
    return encodeURIComponent(_0xd0e4x45 + __Oxefa4f[0xcf] + __Oxefa4f[0x0] + _0xd0e4x44 + __Oxefa4f[0x108] + Date[__Oxefa4f[0xfd]]())
}

Date[__Oxefa4f[0x10b]][__Oxefa4f[0x10a]] = function (_0xd0e4x4b) {
    var _0xd0e4x10, _0xd0e4x32 = this, _0xd0e4x4c = _0xd0e4x4b, _0xd0e4x4d = {
        "\x4D\x2B": _0xd0e4x32[__Oxefa4f[0x10c]]() + 1,
        "\x64\x2B": _0xd0e4x32[__Oxefa4f[0x10d]](),
        "\x44\x2B": _0xd0e4x32[__Oxefa4f[0x10d]](),
        "\x68\x2B": _0xd0e4x32[__Oxefa4f[0x10e]](),
        "\x48\x2B": _0xd0e4x32[__Oxefa4f[0x10e]](),
        "\x6D\x2B": _0xd0e4x32[__Oxefa4f[0x10f]](),
        "\x73\x2B": _0xd0e4x32[__Oxefa4f[0x110]](),
        "\x77\x2B": _0xd0e4x32[__Oxefa4f[0x111]](),
        "\x71\x2B": Math[__Oxefa4f[0xd5]]((_0xd0e4x32[__Oxefa4f[0x10c]]() + 3) / 3),
        "\x53\x2B": _0xd0e4x32[__Oxefa4f[0x112]]()
    };
    /(y+)/i[__Oxefa4f[0x113]](_0xd0e4x4c) && (_0xd0e4x4c = _0xd0e4x4c[__Oxefa4f[0x117]](RegExp.$1, __Oxefa4f[0x0][__Oxefa4f[0x116]](_0xd0e4x32[__Oxefa4f[0x115]]())[__Oxefa4f[0xd1]](4 - RegExp[__Oxefa4f[0x114]][__Oxefa4f[0x29]])));
    for (var _0xd0e4x4e in _0xd0e4x4d) {
        if (new RegExp(__Oxefa4f[0x119][__Oxefa4f[0x116]](_0xd0e4x4e, __Oxefa4f[0x118]))[__Oxefa4f[0x113]](_0xd0e4x4c)) {
            var _0xd0e4x30, _0xd0e4x31 = __Oxefa4f[0x11a] === _0xd0e4x4e ? __Oxefa4f[0x11b] : __Oxefa4f[0x11c];
            _0xd0e4x4c = _0xd0e4x4c[__Oxefa4f[0x117]](RegExp.$1, 1 == RegExp[__Oxefa4f[0x114]][__Oxefa4f[0x29]] ? _0xd0e4x4d[_0xd0e4x4e] : (__Oxefa4f[0x0][__Oxefa4f[0x116]](_0xd0e4x31) + _0xd0e4x4d[_0xd0e4x4e])[__Oxefa4f[0xd1]](__Oxefa4f[0x0][__Oxefa4f[0x116]](_0xd0e4x4d[_0xd0e4x4e])[__Oxefa4f[0x29]]))
        }
    }
    ;
    return _0xd0e4x4c
};

function random(_0xd0e4x38, _0xd0e4x39) {
    return Math[__Oxefa4f[0xd5]](Math[__Oxefa4f[0x32]]() * (_0xd0e4x39 - _0xd0e4x38)) + _0xd0e4x38
}

function getUrlQueryValueByKey(_0xd0e4x50, _0xd0e4x25) {
    if (!_0xd0e4x25) {
        _0xd0e4x25 = location[__Oxefa4f[0x11d]]
    }
    ;var _0xd0e4x51 = new RegExp(__Oxefa4f[0x11e] + _0xd0e4x50 + __Oxefa4f[0x11f]);
    var _0xd0e4x52 = _0xd0e4x25[__Oxefa4f[0x35]](_0xd0e4x51);
    if (_0xd0e4x52 != null) {
        return decodeURIComponent(_0xd0e4x52[0x2])
    }
    ;
    return __Oxefa4f[0x0]
}

(function (_0xd0e4x53, _0xd0e4x54, _0xd0e4x55, _0xd0e4x56, _0xd0e4x57, _0xd0e4x4e) {
    _0xd0e4x4e = __Oxefa4f[0x8c];
    _0xd0e4x56 = function (_0xd0e4x58) {
        if (typeof alert !== _0xd0e4x4e) {
            alert(_0xd0e4x58)
        }
        ;
        if (typeof console !== _0xd0e4x4e) {
            console[__Oxefa4f[0x10]](_0xd0e4x58)
        }
    };
    _0xd0e4x55 = function (_0xd0e4x31, _0xd0e4x53) {
        return _0xd0e4x31 + _0xd0e4x53
    };
    _0xd0e4x57 = _0xd0e4x55(__Oxefa4f[0x120], _0xd0e4x55(_0xd0e4x55(__Oxefa4f[0x121], __Oxefa4f[0x122]), __Oxefa4f[0x123]));
    try {
        _0xd0e4x53 = __encode;
        if (!(typeof _0xd0e4x53 !== _0xd0e4x4e && _0xd0e4x53 === _0xd0e4x55(__Oxefa4f[0x124], __Oxefa4f[0x125]))) {
            _0xd0e4x56(_0xd0e4x57)
        }
    } catch (e) {
        _0xd0e4x56(_0xd0e4x57)
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
