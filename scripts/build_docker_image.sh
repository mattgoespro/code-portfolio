#!/bin/bash

echo "${NGINX_SSL_PRIVATE_KEY}" | base64 --decode > ./nginx/ssl/hoppingmode.com.key;
echo "${NGINX_SSL_CERT}" | base64 --decode > ./nginx/ssl/hoppingmode.com.crt;
docker build . -t hoppingmode-web/frontend;