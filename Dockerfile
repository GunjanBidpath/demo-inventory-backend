FROM node:20-alpine

WORKDIR /app

# Copy only the package files first (for caching installs)
COPY package*.json ./

RUN npm install

COPY . .

# Log files in the container after copying
RUN echo "📦 Files in container:" && ls -al && ls -al src || echo "No src folder"

# Build the app and show output
RUN echo "🏗️ Building app..." && npm run build

RUN echo "📂 dist content:" && ls -al dist || echo "No dist folder found"

EXPOSE 4000

CMD ["npm", "run", "start:prod"]