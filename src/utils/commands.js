/**
 * Commands;
 *
 *  {
 *    command: '', - The command (eg /nick)
 *    description: '', - Description of command
 *    paramaters: [], - Paramaters after command
 *    usage: '', - For /help
 *    action: (trigger) => {}, - Will dispatch actions based on command, trigger holds paramaters from the command
 *  }
 */

export default [{
  command: 'nick',
  description: 'Changes nickname.',
  paramaters: ['{username}'],
  usage: '/nick {username}',
  action: (trigger) => {
    let newUsername = trigger.params[0] || false

    if (newUsername.toString().length > 16) {
      return this.log('Username cannot be greater than 16 characters.', { error: true })
    }

    // Remove things that arent digits or chars
    newUsername = newUsername.replace(/[^A-Za-z0-9]/g, '-')

    if (!newUsername.match(/^[A-Z]/i)) {
      return this.log('Username must start with a letter.', { error: true })
    }
  },
}, {
  command: 'help',
  description: 'Shows a list of commands.',
  paramaters: [],
  usage: '/help',
  action: () => {
    const commands = this.map(command => `/${command}`)

    this.log(`Valid commands: ${commands.sort().join(', ')}`, { notice: true })
  },
}, {
  command: 'me',
  description: 'Invoke virtual action',
  paramaters: ['{action}'],
  usage: '/me {action}',
  action: (trigger) => {

    const actionMessage = trigger.params.join(' ')

    this.darkwire.encodeMessage(actionMessage, 'action').then((socketData) => {
      this.addChatMessage({
        username,
        message: actionMessage,
        messageType: 'action',
      })
      this.socket.emit('new message', socketData)
    }).catch((err) => {
      console.log(err)
    })
  },
}, {
  command: 'clear',
  description: 'Clears the chat screen',
  paramaters: [],
  usage: '/clear',
  action: (trigger) => {
    this.clear()
  },
}]