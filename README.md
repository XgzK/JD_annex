# 私人学习研究专用,未经允许出现任何情况自行承担

# 删除所有非自己写的代码，后面有时间自己写几个非加密本玩玩
默认关闭代理,请参考文件注释使用

# js代理文件 proxy.js

把proxy.js 放到 jdCookie.js同级目录下，一般只修改库下
添加如下

```javascript
require('./proxy.js');
```

修改 jdCookie.js 把上面内容尽量添加在前面

# py代理文件 proxy.py

把proxy.py 放到 jdCookie.py 同级目录下，一般是库下
添加如下

```python
from proxy import proxy
```

修改 jdCookie.py 把上面内容尽量添加在前面

## py一次性脚本

2022-2-17之前执行destroy_pip.py请卸载requests依赖重新添加requests依赖，请确保脚本更新日期是最新的
destroy_pip.py
方法一

```text
如果你使用青龙添加的requests依赖，需求每次青龙重启后都执行
```

方法二

```text
如果你没有使用青龙添加requests依赖，而是直接进入青龙容器执行 pip install requests 并且青龙面板依赖看不到requests依赖只需要执行一次destroy_pip.py即可
```

测试使用