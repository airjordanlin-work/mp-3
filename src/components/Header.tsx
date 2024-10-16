
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    position: absolute;  
    top: 0;             
    left: 0;            
    background-color: orange;
    padding: 5px;      
    font-size: calc(12px + 0px) ;    
    color: white;
    width: 105%;  
    height: 15vh;
    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    `;


export function Header()
{
    return (
        <HeaderWrapper>
            <h1>Jordan Lin</h1>
        </HeaderWrapper>
    )
}
export default Header;