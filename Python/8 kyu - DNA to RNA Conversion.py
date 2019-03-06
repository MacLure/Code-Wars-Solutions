def DNAtoRNA(dna):
    output = ''
    for i in dna:
        if i == "G" or i == "C" or i == "A":
            output += i
        elif i == "T":
            output += 'U'
    return output