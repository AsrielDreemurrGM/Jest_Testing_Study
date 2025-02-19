import { PreloadedState } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
import { RootState, AppStore, storeConfig } from '../store'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

//  Interface que estende as opções de renderização do Testing Library,
//  adicionando a possibilidade de passar um estado pré-carregado (preloadedState)
//  e uma store personalizada para os testes;
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState> // Estado inicial opcional da store;
  store?: AppStore // Instância opcional da store personalizada;
}

// Função utilitária para renderizar componentes dentro de um Provider do Redux;
// Permite fornecer um estado inicial ou uma store específica para os testes;
// @param element - O componente React que será renderizado;
// @param options - Configurações opcionais, incluindo estado pré-carregado e store personalizada;
// @returns O componente renderizado e a instância da store utilizada;
export function renderWithProvider(
  element: React.ReactElement,
  {
    preloadedState = {}, // O estado pré-carregado padrão é um objeto vazio;
    store = storeConfig(preloadedState), // Cria uma nova instância da store com o estado fornecido;
    ...extraOptions // Outras opções adicionais para a renderização;
  }: ExtendedRenderOptions = {} // Objeto de opções padrão;
) {
  // Componente Wrapper que envolve o elemento renderizado com o Provider do Redux;
  // Isso garante que qualquer componente testado tenha acesso ao estado global da aplicação;
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store, // Retorna a store para ser utilizada nos testes;
    ...render(element, {
      wrapper: Wrapper, // Envolve o componente com o Provider do Redux;
      ...extraOptions // Aplica opções adicionais de renderização;
    })
  }
}
