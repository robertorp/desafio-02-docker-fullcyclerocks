FROM node:22

# Set working directory
WORKDIR /usr/src/app

# Try to fix apt issues with retries
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    for i in $(seq 1 3); do apt-get update -y && break || sleep 5; done && \
    apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

# CMD commented out because we're using entrypoint in docker-compose
#CMD [ "node", "index.js" ]