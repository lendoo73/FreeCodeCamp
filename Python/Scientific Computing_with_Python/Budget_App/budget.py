class Category:
  def __init__(self, name):
    self.category = name
    self.ledger = []
    self.balance = float(0)
    self.spent = 0

  def __str__(self):
    # create title:
    len_title = "*" * int((30 - len(self.category)) / 2)
    title = len_title + self.category + len_title
    if len(title) < 30:
      title += "*"
    title += "\n"
    
    # create rows:
    rows = ""
    for item in self.ledger:
      description = item["description"][:23]
      amount = "{:.2f}".format(item["amount"])[:7]
      spaces = " " * (30 - len(description) - len(amount))
      rows += description + spaces + amount + "\n"
    
    # create Total line
    rows += "Total: {:.2f}".format(self.balance)

    return title + rows

  def deposit(self, amount, description = ""):
    self.ledger.append({
      "amount": amount,
      "description": description
    })
    self.balance += amount

  def withdraw(self, amount, description = ""):
    is_enough = self.check_funds(amount)
    if is_enough:
      self.deposit(amount * -1, description)
      self.spent += amount
      return True
    return False
    

  def get_balance(self):
    return self.balance

  def transfer(self, amount, budget):
    if self.withdraw(amount, "Transfer to {}".format(budget.category)): 
      budget.deposit(amount, "Transfer from {}".format(self.category))
      return True
    return False

  def check_funds(self, amount):
    return self.balance >= amount

def get_dataset(categories):
  names = []
  spent = []
  spent_total = 0
  # create datasets from categories:
  for category in categories:
    names.append(category.category)
    spent.append(category.spent)
    spent_total += category.spent
  
  return names, spent, spent_total

def create_spend_chart(categories):
  
  names, spent, spent_total = get_dataset(categories)
  spent_percentage = []
  for amount in spent:
    spent_percentage.append(int(amount / spent_total * 10))
  title = "Percentage spent by category\n"
  # create chart:
  chart = ""
  for row in range(100, -10 , -10):
    indent = " " * (3 - len(str(row)))
    chart += "{}{}| ".format(indent, row)
    # create bars:
    for bar in spent_percentage:
      if bar * 10 >= row:
        chart += "o  "
      else:
        chart += "   "
    chart += "\n"
  
  # add x-axis:
  chart += " " * 4 + "-" + "---" * len(spent_percentage) + "\n"
  
  # add vertical string:
  indent = " " * 5
  # sort the names-list by length and create rows:
  sorted_names = sorted(names, key=len)
  for row in range(len(sorted_names[-1])):
    chart += indent
    # add char to the row:
    for name in names:
      if len(name) > row:
        chart += name[row] + "  "
      else:
        chart += "   "
    chart += "\n"
  return (title + chart)[:-1]
