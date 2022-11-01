In terminal:
```
kubectl cluster-info
```
Get current context: `kubectl config current-context`
List all contexts: `kubectl config get-contexts`

Change context: 
```
kubectl config use-context demo
kubectl config current-context
```

Rename context `kubectl config rename-context docker-desktop sanyi`

Delete context: `kubectl config delete-context [contextName]`

Kubernetes config file: c:\Users\lendo\.kube\config
