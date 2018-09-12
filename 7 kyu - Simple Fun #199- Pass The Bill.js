function passTheBill(totalMembers, conservativePartyMembers, reformistPartyMembers) {
  let independents = totalMembers - conservativePartyMembers - reformistPartyMembers;
  if (conservativePartyMembers + independents <= reformistPartyMembers) {return -1}
  if (reformistPartyMembers + independents <= conservativePartyMembers) {return 0}
  return (Math.floor(totalMembers / 2) - conservativePartyMembers + 1)
}