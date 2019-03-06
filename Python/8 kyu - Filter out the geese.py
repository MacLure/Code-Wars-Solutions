geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

def goose_filter(bird):

    def not_goose(x):
        return True if x not in geese else False

    return list(filter(not_goose, bird))