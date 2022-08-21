from ast import Lambda


numbers = [1, 2, 3, 4, 5]

numbers_power_2 = [n**2 for n in numbers]
print(numbers_power_2)

numbers_power_loop = []
for n in numbers:
    numbers_power_loop.append(n**2)
print(numbers_power_loop)

numbers_power_map = list(map(lambda n : n**2, numbers))
print(numbers_power_map)

