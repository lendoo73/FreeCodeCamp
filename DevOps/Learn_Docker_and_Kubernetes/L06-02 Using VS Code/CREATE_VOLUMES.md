docker volume create myvol
docker volume ls
docker run -d --name voltest myvol:/app nginx:latest
docker exec -it voltest bash
ls
/# apt-get update
/# apt-get install nano
/# cd app
/# cd nano test.txt
Hello Volume!
[CTRL] + O
[CTRL] + X
/# ls
/# exit
docker stop voltest
docker rm voltest
docker run -d --name voltest myvol:/app 
docker exec -it voltest bash
/# cd app
/# ls
/# cat test.txt
/# exit
docker volume rm myvol
docker stop voltest
docker rm voltest
docker volume rm myvol
docker volume create myvol


