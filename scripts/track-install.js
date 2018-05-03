/* eslint-disable-next-line */
'use strict'

const os = require('os')
const track = require('../dist/utils/telemetry/track')

track('serverless-components Installed', {
  nodeVersion: process.version,
  platform: os.platform()
})
