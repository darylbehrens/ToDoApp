FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install --save-dev babel-plugin-relay

COPY . .

RUN mkdir -p src/__generated__
RUN npx relay-compiler

CMD ["npm", "run", "dev"]