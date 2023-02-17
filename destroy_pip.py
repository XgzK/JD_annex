import os
import re

# !/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2023/2/17 16:30
# @Belongs  : InteIJ群管理者所有
# @File    : destroy_pip.py
# @Reason : 适应群内项目
# @Revise : 适配代理项目的py个人定制版本
"""
暴力修改requests依赖下sessions.py
以达到给所有请求加上代理
解决 ALL_PROXY 有小问题
不代理域名设置变量 export GLOBAL_AGENT_NO_PROXY="www.bai.com,*.telegram.org"
需要配合 定制版本 jdCookie.py 使用
每次重启青龙必须执行一次
"""


def read_txt(file_name: str):
    """
    读取文件内容
    :param file_name:文件路径
    :return: 返回文件数据,异常返回[]
    """
    try:
        with open(file_name, mode='r', encoding='utf-8') as f:
            tx = f.readlines()
            f.close()
        return tx
    except Exception as e:
        return []


pip = os.popen('pip show pip')
text2 = pip.read()
re_file = re.findall('Location: (.*)', text2)[0].replace("\\", "/") + "/requests/sessions.py"
pip.close()
lin_file = read_txt(file_name=re_file)
for_list = ["import re", "IP_ALL_PROXY = os.environ.get('IP_ALL_PROXY', None)", "if IP_ALL_PROXY:", "    tf = True",
            "    for i in os.environ.get('GLOBAL_AGENT_NO_PROXY', '').replace('.', '\.').replace('*', '.*?').split(','):",
            "        if re.search(i, url):",
            "            tf = False", "            break", "    if tf:",
            "        proxies = {'https': IP_ALL_PROXY, 'http': IP_ALL_PROXY}",
            "    else:", "        proxies =  proxies  or  {}", "else:", "    proxies = proxies  or  {}"]
with open(re_file, mode='wt', encoding='utf-8') as f:
    for line in lin_file:
        if re.findall("proxies = proxies or \{\}", line):
            print("找到需要替换的文件,并且替换成功")
            for i in for_list:
                f.write(line.replace("proxies = proxies or {}", i))
        else:
            f.write(line)
print('执行完毕')
