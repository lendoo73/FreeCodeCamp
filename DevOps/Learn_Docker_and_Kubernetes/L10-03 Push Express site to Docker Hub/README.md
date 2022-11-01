[CTRL] + S + P
>Docker: Add Docker Files to Workspace...
* Node.js
* package.json
* 3000
* No

In terminal:
```
docker build -t lendoo73/express:v1 .
docker push lendoo73/express:v1
```

Remove from local: 
```
docker rmi lendoo73/express:v1
```

Pull from dockerhub:
```
docker pull lendoo73/express:v1
```

Create version 2
```
docker build -t lendoo73/express:v2 .
docker push lendoo73/express:v2
```