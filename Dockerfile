FROM node:12.10 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

FROM node:12.10 as runtime
RUN yarn global add http-server
WORKDIR /app
COPY --from=build /app/dist .

EXPOSE 8080
CMD ["http-server", "/app"]