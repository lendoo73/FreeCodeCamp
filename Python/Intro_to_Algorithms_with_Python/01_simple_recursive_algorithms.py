def iterative_factorial(n):
    fact = 1;
    for i in range(2, n + 1):
        fact *= i
    return fact
print(iterative_factorial(5))

def recur_factorial(n):
    if n == 1: return 1
    return n * recur_factorial(n - 1)
print(recur_factorial(5))