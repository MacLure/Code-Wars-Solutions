def fizz_buzz_cuckoo_clock(time):
    minutes = int(time.split(':')[1])
    hours = int(time.split(':')[0])

    if minutes == 0:
        string = ''
        if hours == 0:
            for n in range(12): 
                string += 'Cuckoo '
        if hours > 12:
            hours = hours - 12
        for n in range(hours): 
            string += 'Cuckoo '
        return string[:-1]
    if minutes == 30:
        return 'Cuckoo'
    if minutes % 3 == 0 and minutes % 5 == 0:
        return "Fizz Buzz"
    if minutes % 5 == 0:
        return "Buzz"
    if minutes % 3 == 0:
        return "Fizz"
    return 'tick'
