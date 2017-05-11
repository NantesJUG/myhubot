module.exports = (robot) => {

  robot.respond(/give a kiss to @(.*)/i, (res) => {
    const to = res.match[1]
    res.send(`@${to} :kiss: from @${res.envelope.user.name}`);
  })
}
