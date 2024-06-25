def caught_speeding(speed, is_birthday):
  if is_birthday:
    if speed <= 65:
      return 0
    if speed <= 85:
      return 1
    return 2
  
  if speed <= 60:
    return 0
  if speed <= 80:
    return 1
  return 2