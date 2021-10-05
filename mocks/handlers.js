import { rest } from 'msw'

const fakeClient = [
  {
    id: '1',
    name: 'John Doe',
    email: 'j.doe@mail.com',
    phone: 1234567890,
    address: '123 JS Street',
    company: 'Programmers R Us',
    notes: 'I love RTL'
  }
]

export const handlers = [
  rest.get('http://localhost:3000/api/clients', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        clients: fakeClient
      })
    )
  })
]
