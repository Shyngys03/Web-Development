def power(a, n):
    return pow(a, n)

a, n = map(float, input().split())
n = int(n)

if power(a, n) == int(power(a, n)):
    print(int(power(a, n)))
else:
    print(power(a, n))