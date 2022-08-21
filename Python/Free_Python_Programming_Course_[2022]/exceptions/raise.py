import errno


try:
    raise Exception("An error!")
except Exception as error:
    print(error)