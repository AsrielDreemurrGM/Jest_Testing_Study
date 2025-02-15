import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('Testes para o componente principal', () => {
    test('Deve renderizar corretamente', () => {
        render(<App />)
        expect(screen.getByText('Adicionar')).toBeInTheDocument()
    })

    test('Deve adicionar "Estudar React" na lista', () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('task-input'), {
            target: {
                value: 'Estudar React'
            }
        })
        fireEvent.click(screen.getByTestId('add-task-button'))
        expect(screen.getByText('Estudar React')).toBeInTheDocument()
    })
})
