import nodemailer from 'nodemailer'

const required = (value, name) => {
  if (!value) throw new Error(`Missing env ${name}`)
  return value
}

const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS
const host = process.env.SMTP_HOST || 'smtp.gmail.com'
const port = Number(process.env.SMTP_PORT || 465)
const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user: required(user, 'SMTP_USER'),
    pass: required(pass, 'SMTP_PASS'),
  },
})

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

    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: process.env.SMTP_TO || user,
      subject: `Care request – ${service} – ${name}`,
      html,
      replyTo: phone ? `${phone} <${process.env.SMTP_FROM || user}>` : undefined,
    })

    return { statusCode: 200, body: JSON.stringify({ ok: true }) }
  } catch (err) {
    console.error('send-email error', err)
    return { statusCode: 500, body: 'Failed to send email' }
  }
}
