import { DateTime } from 'luxon'

// Example output
interface Output {
  hour_created: DateTime
  status: 'sent' | 'queued' | 'failed'
  count: number
}

// Another output that would be even better
interface Output2 {
  hour_created: DateTime
  sent: number
  queued: number
  failed: number
}
