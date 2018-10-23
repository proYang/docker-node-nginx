FROM node:8.9.0
ENV NODE_ENV production
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# 安装 app 依赖
RUN npm install --production --silent --registry=https://registry.npm.taobao.org

COPY . .

EXPOSE 2368

CMD npm start