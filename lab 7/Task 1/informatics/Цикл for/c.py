from math import sqrt

a = int(input())
b = int(input())

for i in range(a, b + 1):
    x = int(sqrt(i))
    if x**2 == i:
        print(i, end=' ')