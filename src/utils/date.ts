const LONG_DATE_FORMATTER = new Intl.DateTimeFormat('pt-BR', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
})

function parseLocalDate(value: string): Date | null {
  const date = new Date(`${value}T00:00:00`)

  return Number.isNaN(date.getTime()) ? null : date
}

function toDateValue(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function getTodayValue(): string {
  return toDateValue(new Date())
}

export function formatLongDate(value: string): string {
  const date = parseLocalDate(value)

  if (!date) {
    return ''
  }

  const formattedDate = LONG_DATE_FORMATTER.format(date)

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}
