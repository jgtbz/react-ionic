export default (errors = []) => errors
  .filter(({ description }) => !!description)
  .map(({ description }) => `<br>${description}</br>`)
  .join('')
