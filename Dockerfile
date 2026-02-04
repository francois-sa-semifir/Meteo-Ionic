# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:lts-bullseye as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:stable
COPY --from=build-stage /app/www/ /usr/share/nginx/html
# Copy the default nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
