import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import './App.tsx'
import { describe, it, expect } from 'vitest'

afterEach(() => {
  cleanup()
})

describe('pinta a bulbasaur', () => {
  it('en la página principal aparece la imagen de bulbasaur', () => {
    expect(App).toBe('I')
  })
})
