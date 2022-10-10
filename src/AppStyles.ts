import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 750px;
  padding: 50px 0;

  @media(max-width: 750px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media(max-width: 750px) {
        align-items: center;
        margin-bottom: 50px;
    }
`

export const LogoLink = styled.a`
    display: block;
`

export const InfoArea = styled.div`
    margin: 10px 0;
    width: 100%;

    @media(max-width : 750px) {
        display: flex;
        justify-content: space-around;
    }
`

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media(max-width : 750px) {
        margin: 0px 20px;
        justify-content: center;
    }
`

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap : 10px;

    @media(max-width : 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
`