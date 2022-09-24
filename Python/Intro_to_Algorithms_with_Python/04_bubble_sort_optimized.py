def bubble_optimized(a):
    iterations = 0
    for i in range(len(a)):
        for j in range(len(a) - i - 1):
            iterations += 1
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
    return a, iterations

a = [9, 8, 7, 6, 5, 4, 3, 2, 1]
print(bubble_optimized(a))

def swap(a, i, j):
    temp = a[i];
    a[i] = a[j]
    a[j] = temp

def bubble_unoptimized(a):
    iterations = 0
    for i in a:
        for j in range(len(a) - 1):
            iterations += 1
            if a[j] > a[j + 1]:
                swap(a, j, j + 1)
    return a, iterations

print(bubble_unoptimized(a))