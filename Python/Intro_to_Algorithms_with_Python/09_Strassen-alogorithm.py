import numpy as np

x = np.array([
    [1, 2],
    [2, 3]
])

y = np.array([
    [2, 3],
    [3, 4]
])

# https://en.wikipedia.org/wiki/Strassen_algorithm
def strassen_iterative(x, y):
    # Splitting the matrices into quadrants.
    a11, a12, a21, a22 = x[0, 0], x[0, 1], x[1, 0], x[1, 1]
    b11, b12, b21, b22 = y[0, 0], y[0, 1], y[1, 0], y[1, 1]

    # Computing the seven products
    m1 = (a11 + a22) * (b11 + b22)
    m2 = (a21 + a22) * b11
    m3 = a11 * (b12 - b22)
    m4 = a22 * (b21 - b11)
    m5 = (a11 + a12) * b22
    m6 = (a21 - a11) * (b11 + b12)
    m7 = (a12 - a22) * (b21 + b22)

    # Computing the values of the 4 quadrants of the final matrix c
    c11 = m1 + m4 - m5 + m7
    c12 = m3 + m5
    c21 = m2 + m4
    c22 = m1 - m2 + m3 + m6

    return np.array([
        [c11, c12],
        [c21, c22]
    ])

print(strassen_iterative(x, y))

def split(matrix):
    row, col = matrix.shape
    row2, col2 = row // 2, col // 2
    return matrix[:row2, :col2], matrix[:row2, col2:], matrix[row2:, :col2], matrix[row2:, col2:]

def strassen_recursive(x, y):

    # Splitting the matrices into quadrants
    a11, a12, a21, a22 = split(x)
    b11, b12, b21, b22 = split(y)

    # Computing the seven products
    if (len(x) == 1):
        return x[0][0] * y[0][0]

    m1 = strassen_recursive(a11 + a22, b11 + b22)
    m2 = strassen_recursive(a21 + a22, b11)
    m3 = strassen_recursive(a11, b12 - b22)
    m4 = strassen_recursive(a22, b21 - b11)
    m5 = strassen_recursive(a11 + a12, b22)
    m6 = strassen_recursive(a21 - a11, b11 + b12)
    m7 = strassen_recursive(a12 - a22, b21 + b22)

    # Computing the values of the 4 quadrants of the final matrix c
    c11 = m1 + m4 - m5 + m7
    c12 = m3 + m5
    c21 = m2 + m4
    c22 = m1 - m2 + m3 + m6

    # Combining the 4 quadrants into a single matrix by stacking horizontally and vertically.
    c = np.vstack((
        np.hstack((c11, c12)),
        np.hstack((c21, c22))
    ))

    return c

print("strassen_recursive: ", strassen_recursive(x, y))
