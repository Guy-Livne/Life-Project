# STAGE 1: Build the React code
FROM node:20.20-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
# This compiles your React code into static HTML/JS files in a /build folder
RUN npm run build 

# STAGE 2: Serve with Nginx (Production)
FROM nginx:1.25.4-alpine
# We copy the static files from Stage 1 into the Nginx web folder
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]