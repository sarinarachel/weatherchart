const fetch = require('node-fetch')

const key = '76991c0ca92305734870a29b5c40e507'

const root = 'https://api.darksky.net/forecast'

module.exports = async function(req, res) {
    const {lat, lon} = req.query
    try {
      const url = `${root}/${key}/${lat},${lon}`
      const r = await fetch(url)
      const json = await r.json()
      res.status(200).send(json)
    } catch(e) {
      res.status(500).send('fail: '+e.message)
    }
  }