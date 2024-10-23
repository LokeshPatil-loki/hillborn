FROM node:22-alpine AS SETUP

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

FROM gcr.io/distroless/nodejs22-debian12 AS FINAL

WORKDIR /app

COPY --from=SETUP /app .

CMD ["server.js"]



