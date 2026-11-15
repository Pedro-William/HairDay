import { useCallback, useState } from 'react'
import type { Appointment, NewAppointment } from '../types/appointment'
import { getTodayValue } from '../utils/date'

function createAppointmentId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return `appointment-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [selectedDate, setSelectedDate] = useState<string>(getTodayValue)

  const addAppointment = useCallback((newAppointment: NewAppointment) => {
    const clientName = newAppointment.clientName.trim()

    if (!clientName || !newAppointment.date || !newAppointment.time) {
      return
    }

    const appointment: Appointment = {
      id: createAppointmentId(),
      clientName,
      date: newAppointment.date,
      time: newAppointment.time,
    }

    setAppointments((currentAppointments) => [
      ...currentAppointments,
      appointment,
    ])
    setSelectedDate(appointment.date)
  }, [])

  const removeAppointment = useCallback((appointmentId: string) => {
    setAppointments((currentAppointments) =>
      currentAppointments.filter(
        (appointment) => appointment.id !== appointmentId,
      ),
    )
  }, [])

  return {
    appointments,
    selectedDate,
    setSelectedDate,
    addAppointment,
    removeAppointment,
  }
}
