def squirrel_play(temp, is_summer):
  if not is_summer:
    return temp in range(60, 91)
    
  return temp in range(60, 101)