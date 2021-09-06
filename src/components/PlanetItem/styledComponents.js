import styled from 'styled-components'

export const PlanetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlanetImage = styled.img`
  width: 270px;
  height: 250px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const PlanetTitle = styled.h1`
color: #f8fafc;
font-family: 'Roboto';
font-size: 18px
font-weight: bold;
text-align: center;
line-height: 2;
`
export const PlanetDescription = styled.p`
color: #f1f5f9;
font-family: 'Roboto';
font-size: 14px
font-weight: 300;
text-align: center;
line-height: 2;
`
