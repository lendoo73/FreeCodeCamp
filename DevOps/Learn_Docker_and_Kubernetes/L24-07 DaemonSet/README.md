# DeamonSet

let's deploy a Busybox as a DeamonSet.

## Create the Deployment

```
kubectl apply -f daemonset.yaml
```

## Get the pods list

There should be one for each worker node.
```
kubectl get pods
kubectl get pods -o wide
kubeclt get pods --selector=app=daemonset-example -o wide
```

## Cleanup

```
kubeclt delete -f damonset.yaml
```