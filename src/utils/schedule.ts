import { SCHEDULE_PERIODS } from '../data/schedule'
import type { PeriodId } from '../data/schedule'
import type { Appointment } from '../types/appointment'

export type AppointmentsByPeriod = Record<PeriodId, Appointment[]>

export function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)

  return hours * 60 + minutes
}

export function sortByTime(a: Appointment, b: Appointment): number {
  return timeToMinutes(a.time) - timeToMinutes(b.time)
}

export function getPeriodIdForTime(time: string): PeriodId | null {
  const appointmentMinutes = timeToMinutes(time)

  const period = SCHEDULE_PERIODS.find(
    (schedulePeriod) =>
      appointmentMinutes >= timeToMinutes(schedulePeriod.startTime) &&
      appointmentMinutes <= timeToMinutes(schedulePeriod.endTime),
  )

  return period?.id ?? null
}

export function groupAppointmentsByPeriod(
  appointments: Appointment[],
): AppointmentsByPeriod {
  return appointments.reduce<AppointmentsByPeriod>(
    (groups, appointment) => {
      const periodId = getPeriodIdForTime(appointment.time)

      if (!periodId) {
        return groups
      }

      return {
        ...groups,
        [periodId]: [...groups[periodId], appointment],
      }
    },
    { morning: [], afternoon: [], evening: [] },
  )
}
