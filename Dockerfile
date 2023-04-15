# Build frontend
FROM node:19-alpine3.16 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

RUN npm run build

# Copy nginx configuration
FROM nginx:1.19.10-alpine

EXPOSE 443:443

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/public/assets/ /usr/share/nginx/html/assets

RUN mkdir /etc/nginx/ssl/

COPY ./nginx/default.conf /etc/nginx/conf.d/
COPY ./nginx/ssl/hoppingmode.com.key /etc/nginx/ssl/
COPY ./nginx/ssl/hoppingmode.com.crt /etc/nginx/ssl/

CMD [ "nginx", "-g", "daemon off;" ]