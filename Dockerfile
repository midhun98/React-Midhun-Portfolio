# ----------------------------
# 1️⃣ Build Stage
# ----------------------------
FROM node:20.19.0 AS builder

# Set working directory
WORKDIR /app

# Copy dependency files and install (faster with Docker caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the production-ready static files
RUN npm run build


# ----------------------------
# 2️⃣ Production Stage
# ----------------------------
FROM node:20.19.0 AS runner

WORKDIR /app

# Install lightweight static server
RUN npm install -g serve

# Copy only the built output from builder stage
COPY --from=builder /app/dist ./dist

# Environment variable for port (Railway sets PORT automatically)
ENV PORT=8080

# Expose port
EXPOSE 8080

# Start static server
CMD ["serve", "-s", "dist", "-l", "8080"]
