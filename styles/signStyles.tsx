import styled from 'styled-components'

export const Sign = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-items: center;
  background: #f2f2f2;
  @media (max-width: 1031px) {
    width: 100%;
    height: 100%;
  }
`

export const CardSign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  background: linear-gradient(180deg, #347372 32%, #c9d6d6 100%);
  border-radius: 6px;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1031px) {
    width: 100%;
    height: 100%;
  }
`
