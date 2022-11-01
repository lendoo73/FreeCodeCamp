# Selectors

## Deploy the app

```
kubectl apply -f myapp.yaml
```

## Deploy the service

```
kubectl apply -f myservice.yaml
```

## Is the service connected to the pod?

If so, the endpoint will point to the pod IP address. Get the IP address of the pod:
```
kubectl get po -o wide
```

Then get the service endpoint. The IP address should match.
```
kubectl get ep myservice
```

## Port forward to the service

```
kubectl port-forward service/myservice 8080:80
```

Open a browser and point to http://localhost:8080
Stop the port forward by typing [CTR] + C

## Edit the app YAML file

Change the **app** label to myapp2 and save the file
Deploy the change
```
kubectl apply -f myapp.yaml
```

ENDPOINTS is <none>

The labels in pod definition (myapp.yaml) must match with the selector in the service.

## Cleanup

```
kubectl delete -f myservice.yaml
kubectl delete -f myapp.yaml
```