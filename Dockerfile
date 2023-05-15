FROM node:18-alpine
WORKDIR /app

# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --omit=dev

COPY . .

CMD [ "npm", "run", "start" ]
