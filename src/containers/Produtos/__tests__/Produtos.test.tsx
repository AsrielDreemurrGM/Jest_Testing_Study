import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Produtos from '..'
import { renderWithProvider } from '../../../utils/tests'
import { screen, waitFor } from '@testing-library/react'

const mocks = [
  {
    id: 1,
    categoria: 'Roguelike',
    imagem: '',
    plataformas: ['Windows', 'Android'],
    preco: 8.49,
    precoAntigo: 22.19,
    titulo: 'The Binding of Isaac'
  },
  {
    id: 2,
    categoria: 'Roguelike',
    imagem: '',
    plataformas: ['Windows'],
    preco: 73.99,
    precoAntigo: 99.99,
    titulo: 'Hades'
  },
  {
    id: 3,
    categoria: 'Ação',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150,
    precoAntigo: 200,
    titulo: 'Hogwarts Legacy'
  },
  {
    id: 4,
    categoria: 'Aventura',
    imagem: '',
    plataformas: ['Nintendo Switch'],
    preco: 189.99,
    precoAntigo: 299.99,
    titulo: 'Donkey Kong'
  }
]

const server = setupServer(
  rest.get('http://localhost:4000', (req, res, ctx) => {
    return res(ctx.json(mocks))
  })
)

describe('testes para o container Produtos', () => {
  beforeAll(() => {
    server.listen()
  })
  afterEach(() => {
    server.resetHandlers()
  })
  afterAll(() => {
    server.close()
  })

  test('Deve renderizar corretamente com o texto de carregamento', () => {
    renderWithProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a lista de jogos', async () => {
    const { debug } = renderWithProvider(<Produtos />)
    await waitFor(() => {
      debug()
      expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
    })
  })
})
