FROM node:20.7.0
# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./
COPY src/ ./src/

# Instala las dependencias
RUN npm install

# Expone el puerto en el que tu aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]