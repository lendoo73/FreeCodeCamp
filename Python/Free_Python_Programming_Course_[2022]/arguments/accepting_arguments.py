import sys
import argparse

print(sys.argv)
name = sys.argv[1]
print("Hello " + name)

# pipenv run python arguments/accepting_arguments.py csaba 39