FROM node:18-alpine

# 1) Arbeitsverzeichnis im Container
WORKDIR /app

# 2) package*.json kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# 3) Restlichen Code kopieren
COPY . .

# 4) Kompilieren, falls du TypeScript erst builden willst:
#    (Optional, wenn du TS erst hier kompilieren möchtest)
# RUN npx tsc

# 5) Port 4000 freigeben
EXPOSE 4000

# 6) Startbefehl
#    Wenn du im Produktionsmodus bist, nimm "npm start",
#    sonst "npm run dev" (wenn du das in package.json definiert hast).
CMD ["npm", "start"]
