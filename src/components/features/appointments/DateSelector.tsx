import { CalendarIcon } from '../../ui/icons'

type DateSelectorProps = {
  selectedDate: string
  onDateChange: (date: string) => void
}

export function DateSelector({
  selectedDate,
  onDateChange,
}: DateSelectorProps) {
  return (
    <label className="date-selector">
      <span className="date-selector__label">Data</span>
      <span className="date-selector__control">
        <CalendarIcon className="date-selector__icon" />
        <input
          className="date-selector__input"
          type="date"
          value={selectedDate}
          onChange={(event) => {
            const nextDate = event.target.value

            if (!nextDate) {
              event.currentTarget.value = selectedDate
              return
            }

            onDateChange(nextDate)
          }}
        />
      </span>
    </label>
  )
}
