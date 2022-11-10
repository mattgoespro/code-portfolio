# Build frontend
FROM tiangolo/node-frontend:latest as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

# Copy nginx configuration
FROM nginx:1.15

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/public/ /usr/share/nginx/html/public

COPY ./nginx/default.conf /etc/nginx/conf.d/

CMD [ "nginx", "-g", "daemon off;" ]