def xyz_there(str):
    if 'xyz' not in str:
        return False
    
    for i in range(len(str) - 2):
        if str[i:i+3] == 'xyz':
            if i == 0 or str[i-1] != '.':
                return True
                
    return False
