import styled, { css } from 'styled-components/native'
import { h1FontSize, h2FontSize, h3FontSize } from './fonts'
import { white } from './colors'

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
