import { EMPTY_PERIOD_MESSAGE } from '../../../data/schedule'
import type { SchedulePeriod } from '../../../data/schedule'
import type { Appointment } from '../../../types/appointment'
import { AppointmentItem } from './AppointmentItem'

type PeriodSectionProps = {
  period: SchedulePeriod
  appointments: Appointment[]
  onDeleteAppointment: (appointmentId: string) => void
}

export function PeriodSection({
  period,
  appointments,
  onDeleteAppointment,
}: PeriodSectionProps) {
  const headingId = `period-${period.id}`

  return (
    <section className="period" aria-labelledby={headingId}>
      <header className="period__header">
        <h3 className="period__title" id={headingId}>
          {period.label}
        </h3>
        <span className="period__rule" aria-hidden="true" />
      </header>

      {appointments.length > 0 ? (
        <ul className="appointment-list">
          {appointments.map((appointment) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              onDelete={onDeleteAppointment}
            />
          ))}
        </ul>
      ) : (
        <p className="period__empty">{EMPTY_PERIOD_MESSAGE}</p>
      )}
    </section>
  )
}
