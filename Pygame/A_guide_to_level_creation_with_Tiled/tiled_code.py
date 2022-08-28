import pygame, sys
from pytmx.util_pygame import load_pygame

class Tile(pygame.sprite.Sprite):
    def __init__(self, pos, surf, groups):
        super().__init__(groups)
        self.image = surf
        self.rect = self.image.get_rect(topleft = pos)

pygame.init()
screen = pygame.display.set_mode((1280, 720))
tmx_data = load_pygame("data/tmx/basic_sample.tmx")
sprite_group = pygame.sprite.Group()

# cycle through all layers
for layer in tmx_data.visible_layers:
    # if layer.name in ("Floor", "Plants and rocks", "Pipes"):
    if hasattr(layer, "data"):
        for x, y, surf in layer.tiles():
            pos = (x * 128, y * 128)
            Tile(pos, surf=surf, groups=sprite_group)

for obj in tmx_data.objects:
    pos = (obj.x, obj.y)
    if obj.type in ("Building", "Vegetation"):
        Tile(pos, surf=obj.image, groups=sprite_group)


# get layers
# print(tmx_data.layers) # get all layers
# for layer in tmx_data.visible_layers: # get visible layers
#     print(layer)
#
# print(tmx_data.layernames) # get all layer names as dict
#
# print(tmx_data.get_layer_by_name("Floor")) # get one layer by name

# for obj in tmx_data.objectgroups: # get object layers
#     print(obj)

# get tiles
layer = tmx_data.get_layer_by_name("Floor")
# for x, y, surf in layer.tiles(): # get all the information
#     print(x * 128)
#     print(y * 128)
#     print(surf)

# print(layer.data) # csv data
# print(layer.name)
# print(layer.id)

# get objects
object_layer = tmx_data.get_layer_by_name("Objects")
# for obj in object_layer:
    # print(obj.x)
    # print(obj.y)
    # print(obj.type)
    # if obj.type == "Shape":
        # if obj.name == "Marker":
        #     print(obj.x)
        #     print(obj.y)
        # if obj.name == "Rectangle":
        #     print(obj.x)
        #     print(obj.y)
        #     print(obj.width)
        #     print(obj.height)
        #     print(obj.as_points)
        # if obj.name == "Ellipse":
        #     print(obj)
        # if obj.name == "Polygon":
        #     print(obj.as_points) # the points of box around the polygon
        #     print(obj.points) # the points of the polygon

# for obj in tmx_data.objects:
#     print(obj)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        screen.fill("black")
        sprite_group.draw(screen)

        for obj in tmx_data.objects:
            pos = (obj.x, obj.y)
            if obj.type == "Shape":
                if obj.name == "Marker":
                    pygame.draw.circle(screen, "red", (obj.x, obj.y), 5)
            if obj.name == "Rectangle":
                rect = pygame.Rect(obj.x, obj.y, obj.width, obj. height)
                pygame.draw.rect(screen, "yellow", rect)
            if obj.name == "Ellipse":
                rect = pygame.Rect(obj.x, obj.y, obj.width, obj. height)
                pygame.draw.ellipse(screen, "blue", rect)
            if obj.name == "Polygon":
                points = [(point.x, point.y) for point in obj.points]
                pygame.draw.polygon(screen, "green", points)
        pygame.display.update()

