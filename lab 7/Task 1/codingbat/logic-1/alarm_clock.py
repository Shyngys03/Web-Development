def alarm_clock(day, vacation):
  if not vacation:
    if day in range(1, 6):
      return '7:00'
    return '10:00'
  
  if day in range(1, 6):
    return '10:00'
  
  return 'off'