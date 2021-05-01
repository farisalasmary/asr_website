FROM jraqula/rails-gems:latest
RUN apt-get update && apt-get install -y yarn
RUN mkdir /app
WORKDIR /app
EXPOSE 3000
COPY . /app
RUN gem update bundler
RUN bundle install --jobs 5
ENTRYPOINT ["/bin/bash", "/app/run_website_server.sh"]