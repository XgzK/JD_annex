import os
import re
import sys
import time

# !/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2023/2/17 16:30
# @Belongs  : InteIJ群管理者所有
# @File    : proxy.py
# @Reason : 适应群内项目
# @Revise : 适配代理和活动项目的个人定制版本
# 请配合 destroy_pip.py脚本使用
"""
添加代理变量 JK_ALL_PROXY
export JK_ALL_PROXY="http://IP:端口";

定时任务 BAN_TIMING
export BAN_TIMING="0&1&2";
时间0-23 默认添加的不执行代理

脚本黑白名单 PASS_SCRIPT
export PASS_SCRIPT="jd_fruit_task.js&jd_wsdlb.js";
如果代理使用白名单，就把61行的 # 删除, 如果使用黑名单就把68 行前面加 # 删除，默认关闭代理

os.environ['ALL_PROXY'] = JK_ALL_PROXY

专门适配活动参数的,没有实现不能使用
export NOT_CJ="pt_pin1&pt_pin2" CJ开头黑名单
export NOT_LZ="pt_pin1&pt_pin2" LZ开头黑名单
"""
JK_ALL_PROXY = os.environ.get('JK_ALL_PROXY', None)


def hours_time() -> bool:
    """
    定时任务
    :return: True 表示中定时任务中
    """
    BAN_TIMING = os.environ.get('BAN_TIMING', '')
    if BAN_TIMING:
        hours_ti = time.localtime().tm_hour
        # 定时任务,默认填写的为黑名单时间
        if hours_ti in BAN_TIMING.split('&'):
            print(f'检测到 {hours_ti} 时在 BAN_TIMING 变量中执行此输出')
            # 下面是代理可以删除
            # os.environ['IP_ALL_PROXY'] = JK_ALL_PROXY
            return True
    return False


def pass_script():
    """
    根据脚本名称使用来控制脚本
    :return:
    """
    # 代理获取执行脚本名称的
    PASS_SCRIPT = os.environ.get('PASS_SCRIPT', '')
    # 检测脚本在不在黑白名单
    if re.findall('(\w+\.py)', sys.argv[0])[0] in PASS_SCRIPT.split("&"):
        print("这里可以填写代理 PASS_SCRIPT为白名单")
        # 下面是代理可以删除
        # os.environ['IP_ALL_PROXY'] = JK_ALL_PROXY
        return True
    else:
        print("这里也可以填写代理 PASS_SCRIPT 为黑名单")
        # 下面是代理可以删除
        # os.environ['IP_ALL_PROXY'] = JK_ALL_PROXY
        return False


def not_type():
    """
    活动有关
    :return:
    """
    NOT_CJ = []
    NOT_LZ = []
    NOT_TYPE = os.environ.get('NOT_TYPE', None)
    if NOT_TYPE:
        # 这里是活动的，如果你只是使用代理而没有使用活动请勿修改
        NOT_CJ = os.environ.get('NOT_CJ', '').split('&')
        NOT_LZ = os.environ.get('NOT_LZ', '').split('&')
        print('检测到活动类型执行')
        # 下面是代理可以删除
        os.environ['IP_ALL_PROXY'] = JK_ALL_PROXY
        return True
    return False


def proxy():
    """

    :return:
    """
    if not JK_ALL_PROXY:
        print("没有设置 JK_ALL_PROXY 变量")
        return

    if hours_time():
        return

    pass_script()


proxy()
