import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    opacity: 1;
    transition: all ease .3;
    background-color: #1550FF;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }
`

export const IconArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    border-right: 1px solid rgba(255, 255, 255, .2);
`

export const Icon = styled.img`
    height: 20px;
    padding: 0px 20px;
`

export const Label = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`