class Rectangle:
  # constructor:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  # methods:
  def __str__(self):
    return "Rectangle(width={}, height={})".format(self.width, self.height)

  def validate(self, data):
    try:
      return float(data)
    except:
      return None

  def set_width(self, width):
    width = int(self.validate(width))
    if width:
      self.width = width

  def set_height(self, height):
    height = int(self.validate(height))
    if height:
      self.height = height

  def get_area(self):
    return self.width * self.height

  def get_perimeter(self):
    return (self.width + self.height) * 2
  
  def get_diagonal(self):
    return (self.width ** 2 + self.height ** 2) ** 0.5

  def get_picture(self):
    width = self.width
    height = self.height
    if self.width > 50 or self.height > 50:
      return "Too big for picture."
    display_horizontal = "*" * width
    display_horizontal_br = display_horizontal + "\n"
    picture = """{display_horizontal}
{display_horizontal_br}{display_horizontal}
""".format(display_horizontal = display_horizontal, display_horizontal_br = display_horizontal_br * (height - 2))
    return picture

  def get_amount_inside(self, shape):
    # try to avoid ZeroDivisionError:
    if shape.width > 0 and shape.height > 0:
      width = int(self.width / shape.width)
      if width > 0:
        height = int(self.height / shape.height)
        if height > 0:
          return width * height
    return 0

class Square(Rectangle):
  # constructor
  def __init__(self, side):
    super().__init__(side, side)

  # methods
  def __str__(self):
    return "Square(side={})".format(self.height)

  def set_side(self, side):
    width = int(self.validate(side))
    if width:
      self.width = width
    height = int(self.validate(side))
    if height:
      self.height = height
  
  # overrided methods:
  def set_width(self, width):
    self.set_side(width)
  
  def set_height(self, height):
    self.set_side(height)
