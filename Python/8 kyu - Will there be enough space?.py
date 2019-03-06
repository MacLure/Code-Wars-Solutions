def enough(cap, on, wait):
    return 0 if (on + wait - cap) <= 0 else on + wait - cap