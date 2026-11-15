import { SCHEDULE_PERIODS } from '../../../data/schedule'
import type { Appointment } from '../../../types/appointment'
import { formatLongDate } from '../../../utils/date'
import {
  groupAppointmentsByPeriod,
  sortByTime,
} from '../../../utils/schedule'
import { DateSelector } from './DateSelector'
import { PeriodSection } from './PeriodSection'

type AppointmentListProps = {
  appointments: Appointment[]
  selectedDate: string
  onDateChange: (date: string) => void
  onDeleteAppointment: (appointmentId: string) => void
}

export function AppointmentList({
  appointments,
  selectedDate,
  onDateChange,
  onDeleteAppointment,
}: AppointmentListProps) {
  const appointmentsOfDay = appointments
    .filter((appointment) => appointment.date === selectedDate)
    .sort(sortByTime)

  const appointmentsByPeriod = groupAppointmentsByPeriod(appointmentsOfDay)

  return (
    <main className="agenda">
      <header className="agenda__header">
        <div>
          <h2 className="agenda__title">Sua agenda</h2>
          <p className="agenda__date">{formatLongDate(selectedDate)}</p>
        </div>
        <DateSelector
          selectedDate={selectedDate}
          onDateChange={onDateChange}
        />
      </header>

      <div className="agenda__periods">
        {SCHEDULE_PERIODS.map((period) => (
          <PeriodSection
            key={period.id}
            period={period}
            appointments={appointmentsByPeriod[period.id]}
            onDeleteAppointment={onDeleteAppointment}
          />
        ))}
      </div>
    </main>
  )
}
