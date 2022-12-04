FROM node:16 as builder

# Create app directory
WORKDIR /usr/src/app
ADD . .
RUN yarn install
RUN yarn build

FROM nginx:alpine as production

# Create nginx server
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]