# StatefulSet

Let's now create a StatefulSet

## Create the Deployment

```
kubectl apply -f statefulset.yaml
```

## Get the pods list

```
kubectl get pods -o wide
```

## Get a list of the PersistentVolumes Claims

```
kubectl get pvc
kubectl describe po nginx-sts-2
```

## Create a file in nginx-sts-2

Open a session in nginx-sts-2 and create a file in the folder mapped to the volume.
```
kubectl exec nginx-sts-2 -it -- sh
cd var/www
echo Hello > hello.txt
```

## Modify the default Web page

```
cd /usr/share/nginx/html
cat > index.html
Hello
[CTRL] + D
exit
cat index.html
exit
```

## Open a session in nginx-sts-0 and rach nginx-sts-2

```
kubectl exec nginx-sts-0 -it -- sh
culr http://nginx-sts-2.nginx-headless
exit
```

## Delete pod 2

Delete a pod and watch as it is recreated with the same name.
```
kubectl delete pod nginx-sts-2
kubectl get po
```

## Is the file still there?

Open a session in nginx-sts-2 and see if the file is still present.
```
kubctl exec nginx-sts-2 -it -- sh
ls var/www
exit
```

## Cleanup

```
kubectl delete -f statefulset.yaml
kubectl delete pvc www-nginx-sts-0
kubectl delete pvc www-nginx-sts-1
kubectl delete pvc www-nginx-sts-2
```