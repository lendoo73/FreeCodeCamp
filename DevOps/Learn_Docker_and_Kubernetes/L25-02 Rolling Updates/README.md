# Rolling updates

## Create a V1 Deployment

```
kubectl create -f hello-deployment.yaml
```

## Get the deployment status

```
kubectl rollout status deployment/hello-dep
```

## Get the pod list

```
kubectl get pods -o wide
```

## Describe the deployment

```
kubectl describe deploy hello-dep
```

## How many ReplicaSets do we have?

```
kubectl get rs
```

Do not delete the Deployment yet!

## Create V2 Deployment

Edit the YAML file and change the container version from 1.0 ot 2.0. Save the file. `- image: k8sacademy/hello-app:2.0`

### Create the Deployment

```
kubectl apply -f hello-deployment.yaml
```

### Get the deployment status

```
kubectl rollout status deployment/hello-dep
```

### How many ReplicaSets do we have?

```
kubectl get rs
```

### Get the deployment history 

```
kubectl rollout history deployment/hello-dep
```

## Rollback

### Undo the last deployment using either

Rollback to the previous version
```
kubectl rollout undo deployment/hello-dep
```

or specify the revision

```
kubectl rollout undo deployment/hello-dep --to-revision 1
```

### Get the deployment history 

```
kubectl rollout status deployment/hello-dep
kubectl rollout history deployment/hello-dep
```

### How many ReplicaSets do we have?

```
kubectl get rs
```

## Cleanup

```
kubectl delete -f hello-deployment.yaml
```