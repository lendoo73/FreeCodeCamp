#import copy
import random
# Consider using the modules imported above.

class Hat:
  
  def __init__(self, **balls):
    self.contents = self.create_contents(**balls)

  # methods:
  def create_contents(self, **balls):
    contents = []
    for color, quantity  in balls.items():
      group = [color] * quantity
      contents.extend(group)
    return contents

  def draw(self, num):
    if num >= len(self.contents):
      # cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.
      result = list(self.contents)
    else:
      result = random.sample(self.contents, k = num)

    # This method should remove balls at random from contents... Why need to remove it???
    self.remove_balls(result)
    # If the number of balls to draw exceeds the available quantity, return all the balls. ???
    # Both methods unnecessary!

    return result
  
  def remove_balls(self, balls):
    for ball in balls:
      self.contents.remove(ball)
    
  
  def return_balls(self, balls):
    self.contents.extend(balls)

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  M = 0

  def check_sample(expected, sample):
    for ball in expected:
      if ball in sample:
        sample.remove(ball)
      else:
        return False
    return True
      
  for i in range(num_experiments):
    # inicialize the expected list:
    expected = hat.create_contents(**expected_balls)
    sample = hat.draw(num_balls_drawn)
    # If the number of balls to draw exceeds the available quantity, return all the balls. ???
    hat.return_balls(sample)
    if check_sample(expected, sample):
      M += 1

  return M / num_experiments


