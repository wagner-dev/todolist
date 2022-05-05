import { format } from 'date-fns'

const FormatDateToCustomDate = (date: Date, formatType: string = 'P') => {
  const customDate = format(date, formatType) // dd/mm/yyyy

  return customDate
}

export { FormatDateToCustomDate }
