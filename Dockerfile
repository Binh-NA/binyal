FROM node:14.15.0
WORKDIR /app
COPY ../ ./
WORKDIR /app/binyal
RUN npm install
WORKDIR /app/gallery
RUN npm install
# RUN npm run build
WORKDIR /app/gallery

EXPOSE 6006
CMD ["npm", "run", "dev"]
