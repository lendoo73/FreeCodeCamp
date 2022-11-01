# Scale Pods

Let's use the Horizontal Pod Autoscaler to scale a pod.

## Metric Server

Is the Metric Server installed in your cluster? Look for a pod called **metric-server** in the kube-system namespace
```
kubectl get po -n kube-system
```

If not, install the Metric Server
```
kubectl apply -f components.yaml
kubectl get po -n kube-system
```

The YAML file was downloaded from the Metrics Server Git repo located here:
```
https://github.com/kubernetes-sigs/metrics-server/releases
```

The file was edited to include an extra parameter in the args section of the Deployment
```
- --kubelet-insecure-tls
```

## Create the deployment

```
kubectl apply -f deploy.yaml
kubectl get pods
```

## Set the autoscaling limits

```
kubectl autoscale deployment hpa-deployment --cpu-percent=50 --min=1 --max=4
```

Validate
```
kubectl get hpa
```

## Deploy Busybox

```
kubectl apply -f pod.yaml
```

## Connect to the BusyBox container

```
kubectl exec mybox -it -- sh
```

## Increase load

Type this endless loop:
```
while true; do wget -q -O- http://php-apache; done
[CTRL] + C
exit
```

Validate
```
kubectl get hpa
```

## Delete the autoscaler

```
kubectl delete hpa hpa-deployment
```

## Cleanup

```
kubectl delete -f pod.yaml --grace-period=0 --force
kubectl delete -f deploy.yaml
```

Optionally, delete the Metrics Server
```
kubectl delete -f components.yaml
```