import styled from 'styled-components'

export const buttonTiffanyBlue = {
  background: '#78CDD7',
  color: 'black',
  fontWeight: 600,
  boxShadow: 'none',
}

export const CardOptions = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  background-color: ${({ isSelected }) => (isSelected ? '#44A1A0' : '#17373a')};
  border-radius: 1rem;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.5rem;
`
