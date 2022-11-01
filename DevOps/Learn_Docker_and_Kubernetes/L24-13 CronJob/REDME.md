# CronJob

Let's now use the CronJob template.

## Create the Job 

```
kubectl apply -f cronjob.yaml
```

## Get the job list

```
kubectl get cronjobs
```

## Get more info

```
kubectl describe cronjob
```

## Get more info

```
kubectl describe cronjob
```

## Get the pod name 

```
kubectl get pods
```

## Get the jobs list

Get the container's log. You should see **Hello from the Job**.

```
kubectl logs hello-cron-27785408-5shq5
```

## Cleanup

```
kubectl delete -f cronjob.yaml
kubectl get pods
```