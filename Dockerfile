# ---- BASE STAGE ----
FROM node:18 AS base
WORKDIR /app

# ---- DEPENDENCIES STAGE ----
FROM base AS dependencies
COPY package.json package-lock.json ./
RUN npm install

# ---- BUILD STAGE ----
FROM dependencies AS build
COPY . .
RUN npm run build

# ---- PRODUCTION STAGE ----
FROM node:18 AS production
WORKDIR /app
COPY --from=build /app /app
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
