import { fireEvent, screen } from '@testing-library/react'

import Produto from '..'
import { renderWithProvider } from '../../../utils/tests'

const game = {
  id: 1,
  categoria: 'Roguelike',
  imagem: '',
  plataformas: ['Windows', 'Android'],
  preco: 8.49,
  precoAntigo: 22.19,
  titulo: 'The Binding of Isaac'
}

describe('Testes para o componente Produto', () => {
  test('Deve renderizar corretamente', () => {
    renderWithProvider(<Produto game={game} />)
    expect(screen.getByText('The Binding of Isaac')).toBeInTheDocument()
  })
  test('Deve adicionar um jogo', () => {
    const { store } = renderWithProvider(<Produto game={game} />)
    const button = screen.getByTestId('btn-add-product')
    fireEvent.click(button)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
