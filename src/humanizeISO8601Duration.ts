import { parse, toSeconds } from 'iso8601-duration'
import humanizeDuration from 'humanize-duration'

const humanizeISO8601Duration = (duration) =>
  duration && humanizeDuration(toSeconds(parse(duration)) * 1000)

export default humanizeISO8601Duration
