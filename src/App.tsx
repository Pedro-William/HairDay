import './App.css'
import { AppointmentList } from './components/features/appointments/AppointmentList'
import { ScheduleSidebar } from './components/features/appointments/ScheduleSidebar'
import { useAppointments } from './hooks/useAppointments'

function App() {
  const {
    appointments,
    selectedDate,
    setSelectedDate,
    addAppointment,
    removeAppointment,
  } = useAppointments()

  return (
    <div className="app-shell">
      <div className="app">
        <ScheduleSidebar onCreate={addAppointment} />
        <AppointmentList
          appointments={appointments}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          onDeleteAppointment={removeAppointment}
        />
      </div>
    </div>
  )
}

export default App
