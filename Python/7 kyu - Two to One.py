def longest(s1, s2):
    strings = s1 + s2
    output = ''
    for i in range(0, len(strings)):
        if strings[i] not in output:
            output += strings[i]
    return ''.join(sorted(output))