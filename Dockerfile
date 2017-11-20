FROM node:6
ADD . /app
WORKDIR /app
#RUN npm i
COPY node_modules node_modules/
COPY bin bin/
COPY config config/
COPY pages pages/
COPY test test/
COPY .env .
COPY .eslintrc .
COPY package.json .