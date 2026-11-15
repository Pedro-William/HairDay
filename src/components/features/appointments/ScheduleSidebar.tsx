import type { NewAppointment } from '../../../types/appointment'
import { AppointmentForm } from './AppointmentForm'

type ScheduleSidebarProps = {
  onCreate: (appointment: NewAppointment) => void
}

export function ScheduleSidebar({ onCreate }: ScheduleSidebarProps) {
  return (
    <aside className="sidebar">
      <h1 className="brand">
        Hair<span className="brand__accent">Day</span>
      </h1>

      <div className="sidebar__intro">
        <h2 className="sidebar__title">Agende um atendimento</h2>
      </div>

      <AppointmentForm onCreate={onCreate} />
    </aside>
  )
}
