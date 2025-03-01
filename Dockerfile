# Stage 1
FROM --platform=linux/X86_64 node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2
FROM --platform=linux/X86_64 nginx:alpine
COPY --from=node /app/dist/mysite /usr/share/nginx/html

# Expose port 80
EXPOSE 80