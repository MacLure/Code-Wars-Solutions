def guess_blue(blue_start, red_start, blue_pulled, red_pulled)
  return ((blue_start - blue_pulled).to_f / (blue_start - blue_pulled + red_start - red_pulled).to_f)
end