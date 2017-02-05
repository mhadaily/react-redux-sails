FROM node:7.4.0

RUN useradd --user-group --create-home --shell /bin/false mymoria && \
    apt-get clean

ENV HOME=/home/mymoria

COPY package.json npm-shrinkwrap.json $HOME/app/

COPY . $HOME/app

RUN chown -R mymoria:mymoria $HOME/* /usr/local/

WORKDIR $HOME/app

RUN npm install sails --global --silent --progress=false --production

RUN npm cache clean && npm install --silent --progress=false --production

RUN chown -R mymoria:mymoria $HOME/*

USER mymoria

ENV NODE_ENV=development
ENV PORT=1337

EXPOSE 1337

CMD ["sails", "lift"]
