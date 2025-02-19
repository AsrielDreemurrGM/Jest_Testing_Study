import { screen } from '@testing-library/react'
import Header from '../index'
import { renderWithProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    // Utiliza a nova função utilitária renderWithProvider para evitar repetição de código
    renderWithProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
