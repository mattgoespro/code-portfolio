FROM nginx:latest

WORKDIR /etc/nginx/

COPY ./nginx.conf /etc/nginx/

CMD ["nginx", "-t", "-g", "daemon off;"]