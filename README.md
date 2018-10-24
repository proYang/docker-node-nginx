# FE Docker 实践基础示例（ pm2 + node + nginx ）

## Dockerfile最佳实践
[官方文档](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
[如何编写最佳的Dockerfile](https://blog.fundebug.com/2017/05/15/write-excellent-dockerfile/)

## docker-compose 常用命令
Docker for Mac && Windows 内置 docker-compost，其余Linux系统需要安装Docker后，再安装Docker Compose
```bash
docker-compost stop     # 停止容器  
docker-compose rm       # 删除容器
docker-compose build    # 重新建立
docker-compose up -d    # 启动运行 加-d 表示后台运行
```

## docker 常用命令
[Top 10 Docker CLI commands you can’t live without](https://medium.com/the-code-review/top-10-docker-commands-you-cant-live-without-54fb6377f481)