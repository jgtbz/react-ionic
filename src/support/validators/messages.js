const required = 'Campo Obrigatório'

const email = 'Email inválido'

const minLength = (value) => `Mínimo de ${value} caracteres`

const maxLength = (value) => `Máximo de ${value} caracteres`

const asSamePassword = 'As senhas não conferem'

export default {
  required,
  email,
  minLength,
  maxLength,
  asSamePassword
}
