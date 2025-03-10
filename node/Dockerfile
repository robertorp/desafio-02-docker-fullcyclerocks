FROM node:15

# Set working directory
WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1
RUN curl -L https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    | tar -C /usr/local/bin -xzf - \
    && chmod +x /usr/local/bin/dockerize

COPY . .

EXPOSE 3000

#CMD [ "node", "index.js" ]