class DogNotFoundException(Exception):
    print("inside")
    pass

try: 
    raise DogNotFoundException()
except DogNotFoundException:
    print("Dog not found!")