FROM node:11.15.0
# https://morioh.com/p/c3e99e32e846
# The RUN step with mkdir and chown commands,
# which are the only commands we need to run as root,
# creates the working directory and makes sure that it’s
#  owned by the node user.
RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app
COPY package*.json ./

# RUN mkdir -p /app/folderversion
#copia de tu  host al host de la imagen
# ADD mary.js ./folderversion

USER node
RUN npm i
COPY --chown=node:node . .
