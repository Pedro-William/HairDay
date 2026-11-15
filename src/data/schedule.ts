export type PeriodId = 'morning' | 'afternoon' | 'evening'

export type SchedulePeriod = {
  id: PeriodId
  label: string
  startTime: string
  endTime: string
}

export const SCHEDULE_PERIODS: readonly SchedulePeriod[] = [
  { id: 'morning', label: 'Manhã', startTime: '09:00', endTime: '12:00' },
  { id: 'afternoon', label: 'Tarde', startTime: '13:00', endTime: '18:00' },
  { id: 'evening', label: 'Noite', startTime: '19:00', endTime: '21:00' },
]

export const AVAILABLE_TIMES: readonly string[] = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
]

export const EMPTY_PERIOD_MESSAGE =
  'Você ainda não tem agendamentos cadastrados nesse período.'
