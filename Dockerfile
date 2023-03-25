FROM node:16 as build

WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN ng build --output-path=dist

FROM nginx:1.16.0-alpine
# using this config file to avoid 404 on route reload within angular app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]