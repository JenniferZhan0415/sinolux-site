FROM node:12

WORKDIR /var/www/sinolux-site

RUN git config --global user.email "jennifer@sinoluxfilm.com"
RUN git config --global user.name "XuanyiZhan"

# install global dependencies
RUN yarn global add gatsby-cli

# copy project files
ADD . .

# install project dependencies
RUN yarn add 

# build
RUN gatsby build
