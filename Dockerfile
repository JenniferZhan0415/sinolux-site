FROM node:12

RUN git config --global user.email "jennifer@sinoluxfilm.com"
RUN git config --global user.name "XuanyiZhan"

# install global dependencies
RUN yarn global add gatsby-cli
