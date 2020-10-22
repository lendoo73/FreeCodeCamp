import numpy as np

def calculate(list):
  # If a list containing less than 9 elements then raise a ValueError:
  if len(list) < 9:
    raise ValueError("List must contain nine numbers.")

  # convert the list into a 3 x 3 Numpy array: 
  reshape_list = np.reshape(list, (3, 3))

  # get statistical data with higher order function: 
  def get_stat_data(func):
    # return python list (not numpy array) using tolist()
    return [func(reshape_list, axis = 0).tolist(), func(reshape_list, axis = 1).tolist(), func(list).tolist()]

  return {
    "mean": get_stat_data(np.mean), 
    "variance": get_stat_data(np.var),
    "standard deviation": get_stat_data(np.std),
    "max": get_stat_data(np.max),
    "min": get_stat_data(np.min),
    "sum": get_stat_data(np.sum)
  }
