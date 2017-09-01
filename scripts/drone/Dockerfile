FROM node:latest

LABEL maintainer="DIGIT-INNO@ec.europa.eu"

# Add Java repo
RUN apt-get update \
    && apt-get install -y --no-install-recommends debconf-utils software-properties-common \
    && add-apt-repository "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main"

# Accept Java License and install
RUN apt-get update \
    && echo "oracle-java8-installer shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections \
    && apt-get install -y --no-install-recommends oracle-java8-installer \
    && rm -rf /var/lib/apt/lists/*

CMD [ "node" ]
