import type { ReactNode } from 'react'

type FieldProps = {
  id: string
  label: string
  error?: string
  children: ReactNode
}

export function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
