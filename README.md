# 保持程序一直运行

主要用于花生壳客户端。免费版的花生壳客户端有时会自动退出来。
本程序在电脑启动时运行，花生壳作为其子程序运行。一旦花生壳退出，会马上重新启动花生壳。

# 要点

1. 花生壳客户端：不要开机启动
2. 将本程序的 autoStart.cmd 的快捷方式放入 启动菜单 ("启动菜单" 可通过运行：shell:startup 打开)
3. config.json 用来配置需要保持运行的程序，支持多个
