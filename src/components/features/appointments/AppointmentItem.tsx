import type { Appointment } from '../../../types/appointment'
import { TrashIcon } from '../../ui/icons'

type AppointmentItemProps = {
  appointment: Appointment
  onDelete: (appointmentId: string) => void
}

export function AppointmentItem({
  appointment,
  onDelete,
}: AppointmentItemProps) {
  return (
    <li className="appointment">
      <span className="appointment__time">{appointment.time}</span>
      <span className="appointment__name">{appointment.clientName}</span>
      <button
        type="button"
        className="appointment__delete"
        onClick={() => onDelete(appointment.id)}
        aria-label={`Excluir agendamento de ${appointment.clientName} às ${appointment.time}`}
      >
        <TrashIcon className="appointment__delete-icon" />
      </button>
    </li>
  )
}
