# Utilizamos la imagen oficial de Node.js como base
FROM node:14

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el código del proyecto en el directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el código del proyecto en el directorio de trabajo
COPY . .

# Configuramos el entorno de desarrollo
ENV NODE_ENV development
ENV PORT 3000

# Ejecutamos el comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "start"]