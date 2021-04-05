FROM ruby:2.7

WORKDIR /app

# Additional packages.
# If you don't use Yarn, you can choose to not install it.
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" >> /etc/apt/sources.list.d/yarn.list
RUN apt -qq update > /dev/null
RUN apt -qqy install nodejs yarn postgresql-client > /dev/null

# Entrypoint.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]
