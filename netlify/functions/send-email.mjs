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
      <div style="background:#f4f6f8;padding:20px 0;font-family:Arial,Helvetica,sans-serif;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
          
          <!-- Header -->
          <tr>
            <td style="background:#0f766e;color:#ffffff;padding:18px 24px;font-size:20px;font-weight:bold;">
              New Orha Care Request
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px;font-size:14px;color:#111827;line-height:1.6;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                
                <tr>
                  <td style="padding:8px 0;color:#6b7280;width:150px;"><strong>Name</strong></td>
                  <td style="padding:8px 0;">${name}</td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b7280;"><strong>Phone / WhatsApp</strong></td>
                  <td style="padding:8px 0;">${phone}</td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b7280;"><strong>Location</strong></td>
                  <td style="padding:8px 0;">${location}</td>
                </tr>

                <tr>
                  <td style="padding:8px 0;color:#6b7280;"><strong>Service</strong></td>
                  <td style="padding:8px 0;">${service}</td>
                </tr>

                ${
                  notes
                    ? `
                <tr>
                  <td style="padding:8px 0;color:#6b7280;vertical-align:top;"><strong>Notes</strong></td>
                  <td style="padding:8px 0;">${notes}</td>
                </tr>`
                    : ""
                }

              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:14px 24px;font-size:12px;color:#6b7280;text-align:center;">
              Sent ${new Date().toLocaleString()}
            </td>
          </tr>

        </table>
      </div>
    `;

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
