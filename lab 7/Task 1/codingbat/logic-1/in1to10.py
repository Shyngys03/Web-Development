def in1to10(n, outside_mode):
  if not outside_mode:
    return n in range(1, 11)
  
  return n not in range(2, 10)