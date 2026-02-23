import React, { useState } from 'react'
import './FAQ.css'

type Item = {
  question: string
  answer: string
}

const items: Item[] = [
  {
    question: 'Which areas do you serve?',
    answer: 'We serve Kampala and surrounding areas. Tell us your location and we will confirm availability.',
  },
  {
    question: 'Are your nurses registered?',
    answer: 'Yes, all nurses are registered, vetted, and supervised. We match skills to your care needs.',
  },
  {
    question: 'Do you support night shifts?',
    answer: 'Yes, we can arrange day or night shifts based on your schedule.',
  },
]

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<string | null>(items[0].question)

  return (
    <div className="faq">
      {items.map((item) => {
        const isOpen = open === item.question
        return (
          <div key={item.question} className="faq-item">
            <button className="faq-question" onClick={() => setOpen(isOpen ? null : item.question)}>
              <span>{item.question}</span>
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="faq-answer">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default FAQ
