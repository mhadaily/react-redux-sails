FROM node:7.4.0

RUN useradd --user-group --create-home --shell /bin/false mymoria && \
    apt-get clean

ENV HOME=/home/mymoria

COPY package.json $HOME/app/

COPY . $HOME/app

RUN chown -R mymoria:mymoria $HOME/* /usr/local/

WORKDIR $HOME/app

RUN npm cache clean && npm install --silent --progress=false --production

RUN chown -R mymoria:mymoria $HOME/*

USER mymoria

ENV NODE_ENV = development
ENV PORT = 3000

EXPOSE 3030

CMD ["npm", "start"]
