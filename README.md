# node-docker-sample

Build the image:

`docker build -t ataube/node-docker-sample .`

Run the container with a shell attached:

`docker run -it --rm ataube/node-docker-sample /bin/sh`

Run the app

`docker run -it --rm -p 3000:3000 ataube/node-docker-sample`

`http://localhost:3000/hello`
