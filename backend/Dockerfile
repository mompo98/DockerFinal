# Etapa de construcción
FROM node:19-alpine AS build

# Establecer directorio de trabajo
WORKDIR /backend

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar archivos de la aplicación
COPY . .

# Compilar la aplicación (si es necesario)

# Etapa de producción
FROM node:19-alpine

# Establecer directorio de trabajo
WORKDIR /backend

# Copiar archivos de la etapa de construcción
COPY --from=build /backend/package*.json ./
COPY --from=build /backend/server.js ./
COPY --from=build /backend/config.js ./
# Instalar solo dependencias de producción
RUN npm install --only=production

# Exponer puerto
EXPOSE 4000

# Comando de inicio
CMD ["npm", "start"]