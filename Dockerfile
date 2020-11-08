FROM node:lts AS base

WORKDIR /app
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm install
RUN npm run-script build
RUN npm install -g serve
CMD ["serve", "-s", "build"]
