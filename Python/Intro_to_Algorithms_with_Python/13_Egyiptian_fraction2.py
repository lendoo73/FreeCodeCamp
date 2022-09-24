import math

def egyiptian_fraction(numerator, denominator):
    # Creating our list of denominators for our Eqyptian Fractions

    egyiptian_lst = []
    while numerator != 0:
        x = math.ceil(denominator / numerator)
        egyiptian_lst.append(x)

        numerator = x * numerator - denominator
        denominator *= x

    str = ""

    for ones in egyiptian_lst:
        str += f"1/{ones} + "

    final_string = str[:-3]
    return final_string

print(egyiptian_fraction(7, 12))