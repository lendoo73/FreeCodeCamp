def arithmetic_arranger(problems, isResult = False):
  row1 = ""
  row2 = ""
  separator = ""
  result = ""

  def addColumn(row):
    column = "    " # four space character
    if row != "":
      row += column
    return row

  def addOperandus(row, len1, len2, rightAlign, operandus):
    if len1 > len2:
      row += str(operandus)
    else:
      row += " " * (rightAlign) + str(operandus)
    return row

  # validate the argument (problems):
  if len(problems) > 5:
    return "Error: Too many problems."

  for problem in problems:
    # accept only addition and subtraction:
    operator = "-" if "-" in problem else "+" if "+" in problem else ""
    if not(operator):
      return "Error: Operator must be '+' or '-'."
    # split the string at the operator to get the numbers:
    numbers = problem.split(operator);
    operandus1 = None
    for num in numbers:
      # removes any whitespace from the beginning or the end:
      num = num.strip()
      # constructs an integer number from string:
      try:
        integer = int(num)
        # check if the num is a floating number:
        floating = float(num)
        if integer != floating:
          return "Error: Numbers must only contain digits."
      except:
        return "Error: Numbers must only contain digits."
      # check the value of integer:
      if integer > 9999:
        return "Error: Numbers cannot be more than four digits."
      # save the operandus for later use:
      if operandus1 is None:
        operandus1 = integer
      else:
        operandus2 = integer

    # the given argument checked and did not find any error:
    len1 = len(str(operandus1))
    len2 = len(str(operandus2))
    rightAlign = abs(len1 - len2)

    # start to build the return string:
    # create row1:
    # add column if necessary:
    row1 = addColumn(row1)
    # add extra space before the first operandus:
    row1 += "  "
    # add the first operandus:
    row1 = addOperandus(row1, len1, len2, rightAlign, operandus1)

    # create row2:
    # add column if necessary:
    row2 = addColumn(row2)
    # add the operator and an extra space:
    row2 += operator + " "
    # add the second operandus:
    row2 = addOperandus(row2, len2, len1, rightAlign, operandus2)

    # create separator:
    # add column if necessary:
    separator = addColumn(separator)
    biggestDigit = len1 if len1 > len2 else len2
    separator += "-" * (2 + biggestDigit)

    # create result:
    if isResult:
      if operator == "-":
        res = str(operandus1 - operandus2)
      else:
        res = str(operandus1 + operandus2)
      # add column if necessary:
      result = addColumn(result)
      result += " " * (biggestDigit + 2 - len(res))  + res

  if isResult:
    arranged_problems = """{}
{}
{}
{}"""
    return arranged_problems.format(row1, row2, separator, result)
  else:
    arranged_problems = """{}
{}
{}"""
    return arranged_problems.format(row1, row2, separator)
