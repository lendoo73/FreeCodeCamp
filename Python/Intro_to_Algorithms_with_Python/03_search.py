def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i

arr = [2, 5, 8, 9, 10, 16, 22]
target = 10
print(linear_search(arr, target))

def itarative_binary_search(arr, start, end, target):
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] < target:
            start = mid + 1
        elif arr[mid] > target:
            end = mid - 1
        else:
            return mid
    return start

result = itarative_binary_search(arr, 0, len(arr) - 1, target)
print(result)

def recursive_binary_search(arr, start, end, target):
    if end >= start:
        mid = start + end - 1 // 2

        if arr[mid] < target:
            recursive_binary_search(arr, mid + 1, end, target)
        elif arr[mid] > target:
            return recursive_binary_search(arr, start, mid - 1, target)
        else: return mid
    else: return -1

print(recursive_binary_search(arr, 0, len(arr) - 1, target))

