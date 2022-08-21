numbers = [1, 2, 3, 4, 5, 6]

def isEven(n):
    return n % 2 == 0

double_lambda = lambda a : a * 2

result = filter(isEven, numbers)
result_labda = filter(lambda n : n % 2 == 0, numbers)

print(list(result))
print(list(result_labda))