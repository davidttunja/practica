FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["sh", "-c", "node init.js && node index.js"]
