import { format } from 'date-fns'

const FormatDateToCustomDate = (date: Date) => {
  const customDate = format(date, 'P') // dd/mm/yyyy

  return customDate
}

export { FormatDateToCustomDate }
