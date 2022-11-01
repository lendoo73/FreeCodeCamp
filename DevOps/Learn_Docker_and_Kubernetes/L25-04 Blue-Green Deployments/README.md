# Blue-Green Deployments

## Create a V1 Deployment

```
kubectl create -f hello-dep-v1.yaml
```

### Create the ClusterIP service

```
kubectl create -f clusterip.yaml
```

### Get the pods list

```
kubectl get pods -o wide
kubectl get svc
```

### Display the app in a browser

Firs, port forward to the ClusterIP to the localhost:8080 
```
kubectl port-forward service/svc-front 8080:8080
[CTRL] + C
```

Open a browser and navigate to http://localhost:8080
The app version will be V1.

## Create a V2 Deployment

```
kubectl create -f hello-dep-v2.yaml
```

### Get the pods list

```
kubectl get pods -o wide
kubectl get svc
```

### Edit the ClusterIP manifest

> Edit the `clusterip.yaml` file and change the last line so that the service points to our V2 deployment.
```
app: hello-v2
```

### Update the ClusterIP service

```
kubeclt apply -f clusterip.yaml
```

### Display the app in a browser

First, port forward to the ClusterIP:

```
kubectl port-forward service/svc-front 8080:8080
[CTRL] + C
```

Open a browser and navigate to http://localhost:8080
The app version will be V2.

## Cleanup

```
kubectl delete -f hello-dep-v1.yaml
kubectl delete -f hello-dep-v2.yaml
kubectl delete -f clusterip.yaml
```


