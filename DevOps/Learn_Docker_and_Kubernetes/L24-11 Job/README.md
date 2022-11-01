# Job 

Let's now use the Job template

## Create the Job

```
kubectl apply -f job.yaml
```

## Get the job list

```
kubectl get jobs
```

## Get more info

```
kubectl describe job
kubectl describe job hello
```

## Get more info

Get the pod's log. Somethin starting with **hello-**
```
kubectl get pods
```

## Get the jobs list 

Get the container's log. You should see **Hello from the Job**.
```
kubectl logs hello-hd526

```

## Cleanup

```
kubectl delete -f job.yaml
kubectl get jobs
```