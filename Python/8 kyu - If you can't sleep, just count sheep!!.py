def count_sheep(n):
    output = ''
    for i in range(1, n + 1):
        output += '%s sheep...' % i
    return output