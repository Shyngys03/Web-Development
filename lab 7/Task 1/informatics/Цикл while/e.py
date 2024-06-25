def check(n: int) -> bool:
    while n % 2 == 0:
        n //= 2

    return n == 1

def find_degree(n: int) -> int:
    cnt = 0

    while n % 2 == 0:
        n //= 2
        cnt += 1

    return cnt

n = int(input())
k = n

while True:
    if not check(k):
        k += 1
        continue

    print(find_degree(k))
    break