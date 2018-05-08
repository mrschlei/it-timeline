FROM drupal7-cosign:latest

COPY . /var/www/html/

COPY start.sh /usr/local/bin
RUN chmod 755 /usr/local/bin/start.sh
CMD /usr/local/bin/start.sh
