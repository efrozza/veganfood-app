import styled, { css } from 'styled-components/native'
import { white } from './colors'

export const h1FontSize = '20px'
export const h2FontSize = '18px'
export const h3FontSize = '16px'

export const Text = styled.Text`
  ${({ h1 }) =>
    h1 &&
    css`
        font-size: ${h1FontSize};
        color: ${white};
    `};

  ${({ h2 }) =>
    h2 &&
    css`
        font-size: ${h2FontSize}
        color: ${white};
    `};

  ${({ h3 }) =>
    h3 &&
    css`
        font-size: ${h3FontSize}
        color: ${white};
    `};
`
