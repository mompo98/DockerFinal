# Etapa de construcción
FROM node:19-alpine AS build

# Establecer directorio de trabajo
WORKDIR /frontend

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar archivos de la aplicación
COPY . .

# Compilar la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar archivos de la etapa de construcción
COPY --from=build /frontend/build /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]