# Gunakan image resmi Node.js
FROM node:20-alpine

# Tentukan direktori kerja di dalam kontainer
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi aplikasi
RUN npm install

# Instal PM2 secara global
#RUN npm install pm2 -g

# Salin seluruh kode aplikasi ke dalam kontainer
COPY . .

# Ekspos port yang digunakan oleh aplikasi
#EXPOSE 3000
EXPOSE 3001

# Jalankan aplikasi dengan PM2
#CMD ["pm2", "start", "npm", "--", "start", "--name", "portfolio:3001"]
#CMD ["pm2-runtime", "start", "ecosystem.config.js"]
#CMD pm2 start "npm start" --name my-node-app:3001

CMD ["npm", "start"]