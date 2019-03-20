def reverse_words(text):
    output = []
    textArr = text.split(' ')
    for i in range(0, len(textArr)):
        output.append(textArr[i][::0-1])
    return ' '.join(output)