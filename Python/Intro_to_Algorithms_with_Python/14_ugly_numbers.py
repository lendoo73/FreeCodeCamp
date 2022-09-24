called = 0
def successive_div(x, y):
    global called
    called += 1
    while x % y == 0:
        x = x // y
    return x

# print(successive_div(6, 2))
def ugly_check(num):
    num = successive_div(num, 2)
    num = successive_div(num, 3)
    num = successive_div(num, 5)

    if num == 1: return True
    return False

# print(ugly_check(6))

def nth_ugly_nums(n):
    i = 1
    counter = 1

    while n > counter:
        i += 1
        if ugly_check(i):
            counter += 1

    return i

ugly_15 = nth_ugly_nums(15)
print("ugly_15: ", ugly_15, "; called: ", called)

def nth_ugly_nums_dinamic(n):
    dpUgly = [0] * n
    dpUgly[0] = 1

    u2 = u3 = u5 = 0

    multiple_2 = 2
    multiple_3 = 3
    multiple_5 = 5

    for i in range(1, n):
        dpUgly[i] = min(multiple_2, multiple_3, multiple_5)

        if dpUgly[i] == multiple_2:
            u2 += 1
            multiple_2 = dpUgly[u2] * 2

        if dpUgly[i] == multiple_3:
            u3 += 1
            multiple_3 = dpUgly[u3] * 3

        if dpUgly[i] == multiple_5:
            u5 += 1
            multiple_5 = dpUgly[u5] * 5

    return dpUgly[n - 1]

print("15th ugly number is:", nth_ugly_nums_dinamic(15))