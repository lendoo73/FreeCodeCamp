# Create and use Secrets

To quickly ecode/decode strings into base64

```
https://www.base64encode.org/
https://www.base64decode.org/
```

or on Windows, install base64
```
choco install base64
```

on Linux/Mac
```
echo Hello | base64
echo SGVsbG8K | base64 -d
```

## Create the Secrets

```
kubectl apply -f secrets.yaml
```

## Look at the secrets

```
kubectl get secret
kubectl describe secrets secrets
kubectl get secret secrets -o YAML
```

## Deploy the pod 

```
kubectl apply -f pod.yaml
```

## Connect to the Busybox

```
kubectl exec mybox -it -- sh
```

## Display the USERNAME and PASSWORD env variables

```
echo $USERNAME
echo $PASSWORD
exit
```

## Cleanup

```
kubectl delete -f secrets.yaml
kubectl delete -f pod.yaml --force # -grace-period=0
```