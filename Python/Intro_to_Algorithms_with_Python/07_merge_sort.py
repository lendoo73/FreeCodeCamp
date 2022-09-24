def brutal_force(a):
    sorted = []
    while a:
        minimum = a[0]
        for x in a:
            if x < minimum: minimum = x
        sorted.append(minimum)
        a.remove(minimum)
    return sorted

a = [5, 2, 7, 4, 11, -2, 0]
print(brutal_force(a))

def merge_sort(left, right):
    sorted = []
    while min(len(left), len(right)) > 0:
        if left[0] > right[0]:
            insert = right.pop(0)
            sorted.append(insert)
        elif left[0] <= right[0]:
            insert = left.pop(0)
            sorted.append(insert)
    if len(left) > 0:
        for i in left:
            sorted.append(i)
    if len(right) > 0:
        for i in right:
            sorted.append(i)

    return sorted

left = [2, 5, 6, 10]
right = [3, 4, 12, 20]
print(merge_sort(left, right))

def merge_top_down(a):
    if len(a) <= 1:
        return a

    middle = len(a) // 2

    left = merge_top_down(a[:middle])
    right = merge_top_down(a[middle:])
    merged = []

    while left and right:
        if left[0] <= right[0]: merged.append(left.pop(0))
        else: merged.append(right.pop(0))

    merged.extend(right if right else left)
    return merged

a = [5, 2, 7, 4, 11, -2, 0]
print(merge_top_down(a))

def merge_brute_force(a):
    if len(a)  <= 1: return a

    mid = len(a) // 2
    left = a[:mid]
    left_sorted = []
    while left:
        minimum = left[0]
        for x in left:
            if x < minimum: minimum = x
        left_sorted.append(minimum)
        left.remove(minimum)

    right = a[mid:]
    right_sorted = []
    while right:
        minimum = right[0]
        for x in right:
            if x < minimum: minimum = x
        right_sorted.append(minimum)
        right.remove(minimum)

    merged = []
    while left_sorted and right_sorted:
        if left_sorted[0] <= right_sorted[0]:
            merged.append(left_sorted.pop(0))
        else:
            merged.append(right_sorted.pop(0))

    merged.extend(right_sorted if right_sorted else left_sorted)
    return merged

print("merge_brute_force: ", merge_brute_force(a))

def merged_iterative(a):
    mid = len(a) // 2
    left = sorted(a[:mid])
    right =sorted(a[mid:])

    merged = []
    while min(len(left), len(right)) > 0:
        if left[0] > right[0]:
            insert = right.pop(0)
            merged.append(insert)
        elif left[0] <= right[0]:
            insert = left.pop(0)
            merged.append(insert)

    if len(left):
        for i in left:
            merged.append(i)

    if len(right):
        for i in right:
            merged.append(i)

    return merged

print("merged_iterative", merged_iterative(a))


