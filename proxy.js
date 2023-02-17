/*
TG: https://t.me/InteTU
日期: 2023-2-17 17:08
所属组织: InteIJ群管理者所有
添加代理变量 export JK_ALL_PROXY="http://IP:端口";

定时任务 export BAN_TIMING="0&1&2";
时间0-23 如果问为什么没有24 设置的时间会不走代理

脚本黑白名单 export PASS_SCRIPT="jd_fruit_task.js&jd_wsdlb.js";
如果需要白名单走代理就 把大概61行左右解开注释 //
如果需要黑名单走代理就把 把大概66行左右解开注释 //
下面是代理有关代码部分
bootstrap();
GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;

专门适配活动参数的,暂时没有修复
export NOT_CJ="pt_pin1&pt_pin2" CJ开头黑名单
export NOT_LZ="pt_pin1&pt_pin2" LZ开头黑名单

添加内置非代理域名
 */
const {bootstrap} = require("global-agent");

// 代理api的变量
let JK_ALL_PROXY = process.env.JK_ALL_PROXY ? process.env.JK_ALL_PROXY : '';
// 定时任务黑名单
let BAN_TIMING = process.env.BAN_TIMING ? process.env.BAN_TIMING : '';

const White_date = new Date();
let NOT_CJ = [];
let NOT_LZ = [];

let hours_ti = White_date.getHours();
// 定时任务,不走代理时间
if (BAN_TIMING.split('&').indexOf(String(hours_ti)) > -1) {
    // 你设置时间后会进来的会不走代理
    console.log(`检测到 ${hours_ti} 时在 BAN_TIMING 变量中跳过代理执行`);
    return
}

// 获取活动参数类型, https://github.com/XgzK/QL_variable 专用
let NOT_TYPE = process.env.NOT_TYPE ? process.env.NOT_TYPE : '';
if (NOT_TYPE) {
    // 这里是活动的，如果你只是使用代理而没有使用活动请勿修改
    // QL_variable 项目的，执行活动必进来
    NOT_CJ = process.env.NOT_CJ ? process.env.NOT_CJ : '';
    NOT_LZ = process.env.NOT_LZ ? process.env.NOT_LZ : '';
    NOT_LZ = NOT_LZ.split('&');
    NOT_CJ = NOT_CJ.split('&');
    console.log('检测到活动类型执行');
    // 下面两行和代理有关
    // bootstrap();
    // GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;
    return
}

// 代理获取执行脚本名称的
let PASS_SCRIPT = process.env.PASS_SCRIPT ? process.env.PASS_SCRIPT : '';
// 检测脚本在不在黑白名单
if (PASS_SCRIPT.split('&').indexOf(process.argv[1].split('/').reverse()[0]) !== -1) {
    console.log("这里可以填写代理 PASS_SCRIPT为白名单");
    // 下面两行和代理有关
    // bootstrap();
    // GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;
    return
} else {
    console.log("PASS_SCRIPT 黑名单提示你，你已经进入PASS_SCRIPT管辖范围");
    // 下面两行和代理有关
    // bootstrap();
    // GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;
    return
}