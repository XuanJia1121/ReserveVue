FROM node:lts-alpine as mybuild
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "http-server", "dist" ]

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/
COPY --from=mybuild /app/dist /usr/share/nginx/html/

EXPOSE 8080