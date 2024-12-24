FROM node:18-alpine

# 1) Arbeitsverzeichnis
WORKDIR /app

# 2) package*.json kopieren + Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# 3) Restlichen Code kopieren
COPY . .

# 4) Produktions-Build erzeugen
RUN npm run build

# 5) Port 3000 freigeben (Next.js-Default)
EXPOSE 3000

# 6) Startbefehl
CMD ["npm", "start"]
