def points(games):
    score = 0
    for game in games:
        if game[0] > game[2]:
            score += 3
        elif game[0] == game[2]:
            score += 1
    return score