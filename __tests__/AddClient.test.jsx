import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import AddClient from '../pages/add-client'
jest.mock('../utils/notify-message.js')

it('clears form values when data submitted', async () => {
  render(<AddClient />)
  const name = screen.getByRole('textbox', {
    name: /name \(required\)/i
  })
  const email = screen.getByRole('textbox', { name: /email \(required\)/i })
  const phone = screen.getByRole('textbox', { name: /phone \(required\)/i })
  const submit = screen.getByRole('button', { name: /add/i })
  const address = screen.getByRole('textbox', { name: /address/i })
  const company = screen.getByRole('textbox', { name: /company/i })
  const notes = screen.getByRole('textbox', { name: /notes/i })

  user.type(name, 'john')
  user.type(email, 'test@mail.com')
  user.type(phone, '1234567890')
  user.type(address, '123 Test Street')
  user.type(company, 'Test Company')
  user.type(notes, 'Sample notes')

  user.click(submit)

  await waitFor(() => {
    expect(screen.getByTestId('add-form')).toHaveFormValues({
      name: '',
      email: '',
      phone: '',
      address: '',
      company: '',
      notes: ''
    })
  })
})

it('prevents form submission when required values not included', async () => {
  const fakeClient = {
    address: '123 Test Street',
    company: 'Test Company',
    notes: 'Sample notes'
  }
  render(<AddClient />)
  const submit = screen.getByRole('button', { name: /add/i })
  const address = screen.getByRole('textbox', { name: /address/i })
  const company = screen.getByRole('textbox', { name: /company/i })
  const notes = screen.getByRole('textbox', { name: /notes/i })

  user.type(address, fakeClient.address)
  user.type(company, fakeClient.company)
  user.type(notes, fakeClient.notes)

  user.click(submit)

  await waitFor(() => {
    expect(screen.getByTestId('add-form')).toHaveFormValues({
      address: fakeClient.address,
      company: fakeClient.company,
      notes: fakeClient.notes
    })
  })
})
