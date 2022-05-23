FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production

RUN npm install

# Copy source code to working directory.
COPY . .

# Build with webpack
# RUN npm run build

# Run on port 4000.
EXPOSE 4000

CMD [ "npm", "run", "start:prod"]
