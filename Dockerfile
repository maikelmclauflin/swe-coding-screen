FROM node:12-alpine

RUN apk update
RUN apk add postgresql postgresql-contrib git
RUN rm -rf /var/cache/apk/*

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

CMD npm run start
