import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1rem;
  gap: 1rem;
  background: #0d5c63;
  @media (max-width: 1031px) {
    width: 100%;
    height: 100%;
  }
`
export const CardHeader = styled.div`
  width: auto;
  max-width: 4rem;
  display: flex;
  gap: 1rem;
  min-height: 100%;
  background: #f2f2f2;
`
