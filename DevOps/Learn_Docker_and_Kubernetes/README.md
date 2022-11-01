docker login
docker run -d  -p 8080:80 --name webserver nginx
docker ps
docker images
docker container exec -it webserver bash

root@da56a3c0f37d:/# ls
root@da56a3c0f37d:/# ls bin
root@da56a3c0f37d:/# exit

docker stop webserver
docker ps
docker ps -a
docker rm webserver
docker ps -a
docker images
docker rmi nginx