from functools import reduce

expenses = [
    ("Dinner", 80),
    ("Car repair", 120)
]

sum = 0
for expense in expenses:
    sum += expense[1]

print(sum)

sum_reduce = reduce(lambda a, b: a[1] + b[1], expenses)
print(sum_reduce)