# Create and use a Persistenc Volume

## Create the Persistent Volume

```
kubectl apply -f pv.yaml
```

## Look at the pv

```
kubectl get pv
```

## Deploy the claim

```
kubectl apply -f pvc.yaml
```

## Look at the pvc

```
kubectl get pvc
kubectl get pv
```

The status of pv now `Bound`

## Deploy the pod

```
kubectl apply -f pod.yaml
```

## Connect to the Busybox instance

```
kubectl exec mybox -it -- sh
```

In terminal see the `demo` folder.
```
ls
```

## Create a file 

```
cd demo
cat > hello.txt
Hello volume
[CTRL] + D
ls 
cat hello.txt
exit
```

## Delete the pod 

Let's delete the pod and deploy it again to validate that the file persisted.

```
kubectl delete -f pod.yaml --force --grace-period=0
kubectl get po
```

## Deploy the pod again

```
kubectl apply -f pod.yaml
```

## Connect to the Busybox instance

```
kubectl exec mybox -it -- sh
```

In terminal
```
cd demo
ls
cat hello.txt
exit
```

## Clean up

```
kubectl delete -f pod.yaml --force --grace-period=0
kubectl delete -f pvc.yaml
kubectl delete -f pv.yaml
```