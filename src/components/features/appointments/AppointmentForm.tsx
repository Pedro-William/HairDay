import { useState } from 'react'
import type { FormEvent } from 'react'
import { AVAILABLE_TIMES } from '../../../data/schedule'
import type { NewAppointment } from '../../../types/appointment'
import { Button } from '../../ui/Button'
import { Field } from '../../ui/Field'
import { CalendarIcon } from '../../ui/icons'

type AppointmentFormProps = {
  onCreate: (appointment: NewAppointment) => void
}

type FormErrors = {
  clientName?: string
  date?: string
  time?: string
}

export function AppointmentForm({ onCreate }: AppointmentFormProps) {
  const [clientName, setClientName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  function clearError(field: keyof FormErrors) {
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors: FormErrors = {}

    if (!clientName.trim()) {
      nextErrors.clientName = 'Informe o nome do cliente.'
    }

    if (!date) {
      nextErrors.date = 'Selecione a data.'
    }

    if (!time) {
      nextErrors.time = 'Selecione o horário.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    onCreate({ clientName: clientName.trim(), date, time })

    setClientName('')
    setDate('')
    setTime('')
    setErrors({})
  }

  return (
    <form className="appointment-form" noValidate onSubmit={handleSubmit}>
      <Field id="appointment-date" label="Data" error={errors.date}>
        <div className="date-field">
          <CalendarIcon className="date-field__icon" />
          <input
            id="appointment-date"
            className="input date-field__input"
            type="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value)
              clearError('date')
            }}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'appointment-date-error' : undefined}
          />
        </div>
      </Field>

      <fieldset
        className="time-field"
        aria-describedby={errors.time ? 'appointment-time-error' : undefined}
      >
        <legend className="field__label">Horários disponíveis</legend>
        <div className="time-grid">
          {AVAILABLE_TIMES.map((availableTime) => (
            <label className="time-slot" key={availableTime}>
              <input
                className="time-slot__input"
                type="radio"
                name="appointment-time"
                value={availableTime}
                checked={time === availableTime}
                onChange={() => {
                  setTime(availableTime)
                  clearError('time')
                }}
              />
              <span className="time-slot__label">{availableTime}</span>
            </label>
          ))}
        </div>
        {errors.time ? (
          <p className="field__error" id="appointment-time-error" role="alert">
            {errors.time}
          </p>
        ) : null}
      </fieldset>

      <Field id="appointment-client" label="Cliente" error={errors.clientName}>
        <input
          id="appointment-client"
          className="input"
          type="text"
          value={clientName}
          placeholder="Nome do cliente"
          autoComplete="off"
          onChange={(event) => {
            setClientName(event.target.value)
            clearError('clientName')
          }}
          aria-invalid={Boolean(errors.clientName)}
          aria-describedby={
            errors.clientName ? 'appointment-client-error' : undefined
          }
        />
      </Field>

      <Button type="submit" className="button--primary">
        Agendar
      </Button>
    </form>
  )
}
