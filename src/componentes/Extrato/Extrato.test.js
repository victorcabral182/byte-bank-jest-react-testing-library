import { render, screen } from '@testing-library/react'
import Extrato from './index'

test('Deve renderizar uma lista de transções', () => {
  const transacoes = [{ transacao: 'Depósito', valor: 100 }]
  render(<Extrato transacoes={transacoes} />)
  const list = screen.getByRole('listitem')
  expect(list).toBeInTheDocument()
})
