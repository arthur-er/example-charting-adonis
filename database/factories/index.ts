import Factory from '@ioc:Adonis/Lucid/Factory'
import Message from 'App/Models/Message'

export const MessageFactory = Factory.define(Message, ({}) => {
  return {
    status: 'queued' as const,
  }
})
  .state('sent', (message) => (message.status = 'sent' as const))
  .state('failed', (message) => (message.status = 'failed' as const))
  .build()
