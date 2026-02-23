import { Resend } from 'resend'

const required = (value, name) => {
  if (!value) throw new Error(`Missing env ${name}`)
  return value
}

const resendApiKey = process.env.RESEND_API_KEY
const resend = new Resend(resendApiKey)

const fromAddress = process.env.EMAIL_FROM || 'onboarding@resend.dev'
const toAddress = process.env.EMAIL_TO || process.env.SMTP_TO || process.env.SMTP_USER

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body || '{}')
    const { name, phone, location, service, notes } = data
    if (!name || !phone || !location || !service) {
      return { statusCode: 400, body: 'Missing required fields' }
    }

    const html = `
      <h2>New Orha Care Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Service:</strong> ${service}</p>
      ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
      <p style="color:#666;font-size:12px;">Sent ${new Date().toISOString()}</p>
    `

    const res = await resend.emails.send({
      from: required(fromAddress, 'EMAIL_FROM'),
      to: required(toAddress, 'EMAIL_TO'),
      subject: `Care request – ${service} – ${name}`,
      html,
    })

    if (res.error) {
      throw new Error(res.error.message || 'Resend failed')
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-email error', err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email',
        details: err.message,
      }),
    }
  }
}
