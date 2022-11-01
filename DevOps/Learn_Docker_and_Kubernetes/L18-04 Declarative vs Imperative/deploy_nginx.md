imperative:
```
kubectl create deployment mynginx1 --image=nginx
kubectl get deploy
```

declarative:
```
kubectl create -f deploy-example.yaml
kubectl get deploy
```

Cleanup
```
kubectl delete deployment mynginx1
```