FROM node:latest

LABEL maintainer="DIGIT-INNO@ec.europa.eu"

# Install Java
RUN apt-get update \
    && apt-get install -y --no-install-recommends default-jre \
    && rm -rf /var/lib/apt/lists/*

CMD [ "node" ]
