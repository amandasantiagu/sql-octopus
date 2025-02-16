import styled from 'styled-components'

export const Sign = styled.div`
  width: 100%;
  display: grid;
  min-height: 100%;
  align-items: center;
  justify-items: center;
  background: #f2f2f2;
  justify-content: center;
  @media (max-width: 1031px) {
    width: 100%;
    height: 100%;
  }
`

export const CardSign = styled.div`
  width: 28rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 6px;
  padding: 2rem;
  align-items: center;
  @media (max-width: 1031px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`