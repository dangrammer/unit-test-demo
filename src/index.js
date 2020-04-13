const launchSkyNet = () => {
  return 'TERMINATOR'
}

const targetOrganizer = (targets) => {
  return targets.sort((a, b) => a.localeCompare(b))
}

module.exports = {launchSkyNet, targetOrganizer}
