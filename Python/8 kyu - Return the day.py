def whatday(num):

    def sunday():
        return "Sunday"
    def monday():
        return "Monday"
    def tuesday():
        return "Tuesday"
    def wednesday():
        return "Wednesday"
    def thursday():
        return "Thursday"
    def friday():
        return "Friday"
    def saturday():
        return "Saturday"
    def default():
        return 'Wrong, please enter a number between 1 and 7'


    switcher = {
        1: sunday,
        2: monday,
        3: tuesday,
        4: wednesday,
        5: thursday,
        6: friday,
        7: saturday
        }
       
    return switcher.get(num, default)()