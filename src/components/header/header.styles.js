import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerStiles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px){
        height: 60px;
        paddind: 10px:
        margin-bottom: 25px;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px){
        width: 50px;
        padding: 10px;
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px){
        width: 90%;
    }
`

export const OptionLink = styled(Link)`
    ${OptionContainerStiles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStiles}
`

export const UserImage = styled.div`
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${props => props.imageLink})
`
export const SignedInContainer = styled.div`
    display: flex;
    align-items: center;
`