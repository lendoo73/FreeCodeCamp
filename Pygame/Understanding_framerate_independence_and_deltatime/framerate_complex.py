import pygame, sys, time

pygame.init()
screen = pygame.display.set_mode((1280, 720))
clock = pygame.time.Clock()

class Test(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()

        # animation
        self.frames = [pygame.image.load(f"frames/2_entity_000_ATTACK_00{i}.png").convert_alpha() for i in range(1, 7)]
        self.frame_index = 0

        # image & rect
        self.image = self.frames[self.frame_index]
        self.image = pygame.transform.scale(self.image, (256, 256))
        self.rect = self.image.get_rect(midleft=(0, 360))

        # movement
        self.rotation = 0
        self.direction = 1
        self.move_speed = 200
        self.animation_speed = 5
        self.pos = pygame.math.Vector2(self.rect.topleft)

    def animate(self, dt):
        self.frame_index += self.animation_speed * dt
        if self.frame_index >= len(self.frames):
            self.frame_index = 0
        self.image = self.frames[int(self.frame_index)]
        self.image = pygame.transform.scale(self.image, (256, 256))

    def move(self, dt):
        self.pos.x += self.direction * self.move_speed * dt
        self.rect.x = round(self.pos.x)
        self.rect.y = round(self.pos.y)
        if self.rect.right > 1280 or self.rect.left < 0:
            self.direction *= -1

    def rotate(self, dt):
        self.rotation += 50 * dt
        self.image = pygame.transform.rotozoom(self.image, self.rotation, 1)

    def update(self, dt):
        self.animate(dt)
        self.move(dt)
        self.rotate(dt)

test_group = pygame.sprite.Group()
test_group.add(Test())

prev_time = time.time()

while True:
    dt = time.time() - prev_time
    prev_time = time.time()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    screen.fill("white")

    test_group.update(dt)
    test_group.draw(screen)

    pygame.display.update()
    clock.tick(60)
