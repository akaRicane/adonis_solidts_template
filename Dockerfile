FROM node:20.12.2-alpine3.18 AS base

# All deps stage
FROM base AS deps
WORKDIR /app
ADD package.json ./
RUN npm install

# Production only deps stage
FROM base AS production-deps
WORKDIR /app
ADD package.json ./
RUN npm install --omit=dev

# Build stage
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules /app/node_modules
ADD . .
RUN npm run build

# Production stage
FROM base AS deploy
WORKDIR /app
COPY .env.production .env
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app
EXPOSE 8080
CMD ["node", "./bin/server.js"]
