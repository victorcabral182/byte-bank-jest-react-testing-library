import api from './api'
import { buscaTransacoes } from './transacoes'

jest.mock('./api')
const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '22/11/2022',
    mes: 'Novembro',
  },
]

const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: retorno })
    }, 200)
  })
}

describe('Requisições para API', () => {
  // test('Deve retornar uma lista de transações', async () => {
  //   const transacoes = await buscaTransacoes()
  //   expect(transacoes).toHaveLength(3)
  //   render(<App />, { wrapper: BrowserRouter })
  //   const transacao = await screen.findAllByText('Novembro')
  //   transacao.forEach((e) => expect(e).toBeInTheDocument())
  // })

  test('Deve retornar uma lista de transações', async () => {
    api.get.mockImplementation(() => mockRequisicao(mockTransacao))
    const transacoes = await buscaTransacoes()
    expect(transacoes).toEqual(mockTransacao)
    expect(api.get).toHaveBeenCalledWith('/transacoes')
  })
})
