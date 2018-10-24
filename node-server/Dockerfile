FROM node:8.12.0-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app

# 复制 package.json，如果依赖包不发生变化，当前npm模块会有镜像缓存
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# 安装 app 依赖
RUN npm install --production --silent --registry=https://registry.npm.taobao.org

COPY ./src ./src

EXPOSE 2368

CMD npm start