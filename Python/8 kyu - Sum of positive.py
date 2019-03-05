def positive_sum(arr):
    output = 0
    for number in arr:
        if number > 0:
            output += number
    return output
