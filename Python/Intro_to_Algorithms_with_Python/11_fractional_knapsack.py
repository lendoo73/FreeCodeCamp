weight = [30, 50, 10, 70, 40]
value = [150, 100, 90, 140, 120]
capacity = 150

def fractional_knapsack(value, weight, capacity):
    items = list(range(len(value)))
    print("items: ", items)
    ratios = [v // w for v, w in zip(value, weight)]
    print("ratios: ", ratios)
    sorted_ratios = sorted(ratios, reverse=True)
    print("sorted_ratios: ", sorted_ratios)
    items.sort(key=lambda i: ratios[i], reverse=True)
    print("items: ", items)

    max_value = 0
    fractions = [0] * len(value)
    print("fractions", fractions)

    for i in items:
        if weight[i] <= capacity:
            fractions[i] = 1
            max_value += value[i]
            capacity -= weight[i]
        else:
            fractions[i] = capacity // weight[i]
            max_value += value[i] * capacity // weight[i]

    return  max_value

print(fractional_knapsack(value, weight, capacity))