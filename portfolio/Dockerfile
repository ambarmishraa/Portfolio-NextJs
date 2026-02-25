# 1️⃣ Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Build Next.js for production
RUN npm run build

# 2️⃣ Production Stage
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy build and node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]