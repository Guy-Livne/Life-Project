FROM node:20.20-bookworm-slim
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
CMD ["npm", "start"]