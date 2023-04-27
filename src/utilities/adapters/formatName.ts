import formatPhone from '../scripts/formatPhone'

export function formatNameAdapter(name: string, phone: string) {
  if (phone === name && name !== null) {
    return `+${formatPhone(phone)}`
  } else {
    return name
  }
}
