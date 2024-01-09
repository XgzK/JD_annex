"""
星空代理微调
2024-01-09 19:00
const $ = new Env("星空代理签到");
cron: 10 00 * * *
"""
# 变量 export xingkong="账户1:密码&账户2:密码"
import os
from datetime import datetime

import requests

from sendNotify import send

try:
    xingkong = os.environ["xingkong"]
    headers = {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Content-Length": "10",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://www.xkdaili.com",
        "Pragma": "no-cache",
        "Referer": "https://www.xkdaili.com/main/UserCenter.aspx",
        "Sec-Ch-Ua": "\"Not A(Brand\";v=\"99\", \"Microsoft Edge\";v=\"121\", \"Chromium\";v=\"121\"",
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "\"Windows\"",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
        "X-Requested-With": "XMLHttpRequest"
    }
    # 用于拼接
    msg = ""
    # 按照空格分隔多个账户
    accounts = xingkong.split("&")
    for i in accounts:
        up = i.split(":")
        data = {
            "username": up[0],
            "password": up[1],
            "remember": 1,
            "code": ""
        }
        try:
            sess = requests.session()
            aa = sess.post("https://www.xkdaili.com/tools/submit_ajax.ashx?action=user_login&site_id=1",
                           headers=headers,
                           data=data)

            data = {
                'type': 'login',
            }

            response = sess.post('https://www.xkdaili.com/tools/submit_ajax.ashx?action=user_receive_point',
                                 headers=headers, data=data, verify=False)
            txt = response.json()
            print("星空签到 ", txt['msg'])
            msg += f"账户 {up[0]} 星空签到 {txt['msg']}\n"
        except Exception as e:
            print(f"账户 {up[0]} 星空签到异常 {str(e)}")
            msg += f"账户 {up[0]} 星空签到异常 {str(e)}\n"
    # 执行完毕发送通知
    title = "🗣消息提醒：星空签到"
    msg = f"⏰{str(datetime.now())[:19]}\n" + msg
    send(title, msg)
except Exception as e:
    print("星空签到失败,失败原因 ", str(e))
    if str(e) == "list index out of range":
        title = "🗣消息提醒：星空签到"
        msg = f"⏰{str(datetime.now())[:19]}\n" + f"星空代理签到失败,失败原因 {e}"
        send(title, msg)
