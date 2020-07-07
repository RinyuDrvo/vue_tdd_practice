FROM node:10.20.1-alpine

WORKDIR /var/www/app

RUN apk update && \
  apk add --no-cache curl && \
  curl -o- -L https://yarnpkg.com/install.sh | sh && \
  yarn global add @vue/cli
