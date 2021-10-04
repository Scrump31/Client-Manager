import { store } from 'react-notifications-component'
/**
 * @param  {string} message Created server-side
 * @param  {string} notifyType Sets bgcolor. Use'success' or 'danger'
 * @param  {string} title ex. 'Success!' or 'Danger'
 */
const notifyMessage = (message, notifyType, title) => {
  return store.addNotification({
    title,
    message,
    type: notifyType,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: 3000,
      onScreen: true
    }
  })
}

export default notifyMessage
