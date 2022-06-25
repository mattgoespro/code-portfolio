# Build frontend
FROM tiangolo/node-frontend:latest as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY ./ /app/

RUN npm run build

# Copy nginx configuration
FROM nginx:1.15

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/

# Test for valid nginx configuration
CMD [ "nginx", "-t" ]