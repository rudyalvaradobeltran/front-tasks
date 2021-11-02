FROM node:16-alpine

RUN mkdir -p /srv/app/tasks-front
WORKDIR /srv/app/tasks-front

COPY package.json /srv/app/tasks-front
COPY package-lock.json /srv/app/tasks-front

RUN npm install

COPY . /srv/app/tasks-front

CMD npm start