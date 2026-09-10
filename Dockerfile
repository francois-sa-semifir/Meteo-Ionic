# Stage 0, based on Node.js, to build and compile the frontend
FROM node:22-alpine AS build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:stable-alpine
COPY --from=build-stage /app/www/ /usr/share/nginx/html
# Copy the default nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
