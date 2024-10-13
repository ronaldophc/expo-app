
# pull base image
FROM node:22

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

# copy in our source code last, as it changes the most
WORKDIR /var/www/my-app

# for development, we bind mount volumes; comment out for production
COPY ./my-app .