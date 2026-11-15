export type Appointment = {
  id: string
  clientName: string
  date: string
  time: string
}

export type NewAppointment = Pick<Appointment, 'clientName' | 'date' | 'time'>
