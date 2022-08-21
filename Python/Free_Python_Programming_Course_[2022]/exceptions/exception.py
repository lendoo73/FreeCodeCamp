# result = 2 / 0

# print(result) # ZeroDivisionError: division by zero

try:
    result = 2 / 0
except EOFError:
    pass
except ZeroDivisionError:
    print("Cannot divide by zero!")
except:
    pass
else:
    # no errors
    pass
finally:
    # always run
    result = 1

print(result)