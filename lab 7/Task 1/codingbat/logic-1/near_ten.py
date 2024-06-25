def near_ten(num):
  for i in range(3):
    if (num + i) % 10 == 0 or (num - i) % 10 == 0:
      return True
      
  return False