def cigar_party(cigars, is_weekend):
  if is_weekend:
    return cigars >= 40
  return cigars in range(40, 61)