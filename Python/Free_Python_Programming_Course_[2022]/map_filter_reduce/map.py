numbers = [1, 2, 3]

def double(a):
    return a * 2

double_lambda = lambda a : a * 2

result = map(double, numbers)
result = map(double, numbers)
result_lambda = map(double_lambda, numbers)
result_anonim = map(lambda a : a * 2, numbers)

print(list(result))
print(list(result_lambda))
print(list(result_anonim))