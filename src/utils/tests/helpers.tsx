import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'
import { store } from 'store'
import theme from 'styles/theme'

export const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
