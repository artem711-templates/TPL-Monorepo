import styled from 'styled-components/native'

interface ITextProps {
  color?: string
}

const SharedStyles = styled.Text<ITextProps>`
  color: ${(props) => props.color || props.theme.colors.text};
`

export const Headline = styled.Text<ITextProps>`
  ${SharedStyles}
`
export const Title = styled.Text<ITextProps>`
  ${SharedStyles}
`
export const Paragraph = styled.Text<ITextProps>`
  ${SharedStyles}
`
export const Caption = styled.Text<ITextProps>`
  ${SharedStyles}
`
