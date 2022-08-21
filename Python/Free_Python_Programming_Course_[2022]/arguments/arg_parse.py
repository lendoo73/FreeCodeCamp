import argparse

parser = argparse.ArgumentParser(description="This program prints the name of my dogs")

parser.add_argument(
    "-c", "--color", 
    metavar="color",
    required=True,
    choices={"red", "yellow"},
    help="the color to search for"
)

args = parser.parse_args()

print(args.color)
# pipenv run python arguments/arg_parse.py -c red
# pipenv run python arguments/arg_parse.py
# pipenv run python arguments/arg_parse.py -h
# pipenv run python arguments/arg_parse.py -c green