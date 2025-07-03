FROM nginx:1.23.3-alpine

EXPOSE 80

RUN rm /usr/share/nginx/html/*

COPY config/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]