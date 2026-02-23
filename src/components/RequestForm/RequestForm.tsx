import React, { useState } from 'react'
import './RequestForm.css'

type FormState = {
  name: string
  phone: string
  location: string
  service: string
  notes: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  location: '',
  service: '',
  notes: '',
}

interface Props {
  compact?: boolean
}

const RequestForm: React.FC<Props> = ({ compact }) => {
  const [values, setValues] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors: Partial<FormState> = {}
    if (!values.name) newErrors.name = 'Name is required'
    if (!values.phone || !/^\+?\d{7,15}$/.test(values.phone)) newErrors.phone = 'Valid phone required'
    if (!values.location) newErrors.location = 'Location is required'
    if (!values.service) newErrors.service = 'Select a service'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setSubmitError(null)

    fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed')
        setSubmitted(true)
        setValues(initialState)
      })
      .catch(() => setSubmitError('Could not send. Please try again or call us.'))
      .finally(() => setSubmitting(false))
  }

  if (submitted) {
    return (
      <div className={compact ? 'request-wrapper compact' : 'request-wrapper'}>
        <div className="success success-card">Thanks! We’ll call you shortly to confirm your request.</div>
      </div>
    )
  }

  return (
    <div className={compact ? 'request-wrapper compact' : 'request-wrapper'}>
      {!compact && (
        <div className="request-meta">
          <span>Response within 15 minutes (8:00 AM–10:00 PM)</span>
        </div>
      )}
      <form className={compact ? 'request-form compact' : 'request-form'} onSubmit={handleSubmit} id="request">
        <div className="form-row">
          <div>
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" value={values.name} onChange={handleChange} required aria-invalid={!!errors.name} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="phone">Phone / WhatsApp</label>
            <input id="phone" name="phone" value={values.phone} onChange={handleChange} required aria-invalid={!!errors.phone} />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
        </div>
        <div className="form-row">
          <div>
            <label htmlFor="location">Location</label>
            <input id="location" name="location" value={values.location} onChange={handleChange} required aria-invalid={!!errors.location} />
            {errors.location && <div className="error">{errors.location}</div>}
          </div>
          <div>
            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={values.service} onChange={handleChange} required aria-invalid={!!errors.service}>
              <option value="">Select</option>
              <option value="bedside">Bedside nursing care</option>
              <option value="mother-baby">Mother & baby care</option>
              <option value="elderly">Elderly support</option>
              <option value="travel">Travel nurse assistance</option>
            </select>
            {errors.service && <div className="error">{errors.service}</div>}
          </div>
        </div>
        {!compact && (
          <div>
            <label htmlFor="notes">Notes (optional)</label>
            <textarea id="notes" name="notes" value={values.notes} onChange={handleChange} rows={3} />
          </div>
        )}
        <button type="submit" className={`btn${submitting ? ' loading' : ''}`} aria-label="Submit request" disabled={submitting}>
          {submitting ? 'Sending…' : 'Submit request'}
        </button>
      </form>
      {submitError && <div className="error" role="alert">{submitError}</div>}
    </div>
  )
}

export default RequestForm
