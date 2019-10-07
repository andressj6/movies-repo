FROM node:11-alpine

WORKDIR .

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

RUN npm install -g nodemon --quiet

CMD [ "yarn", "nodemon", "build/server.js" ] 
