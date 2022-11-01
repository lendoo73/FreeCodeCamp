## Create the deployment

```
kubectl apply -f myapp.yaml
```

Wait for main pod to come up
```
kubectl get pods
docker ps
```

## Connect to the Nginx container

```
kubectl exec -it init-demo -- bash
```

## Hit the default webpage

It should be the one downloaded by the Init container from http://info.cern.ch
```
curl localhost
exit
```

## Cleanup

```
kubectl delete -f myapp.yaml
```
