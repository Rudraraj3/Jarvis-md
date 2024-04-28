FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/nijin-husni/Maalutty_V2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/nijin-husni/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
