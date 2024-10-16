
import styled from 'styled-components';
import kumonImage from '../assets/kumon.jpg';

// Styled components
const MainWrapper = styled.main`
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageContainer = styled.img`
    margin-top: 40%;
    width: 100%;
    height: 50vh; 
    border-radius: 10px;
    
    @media screen and (max-width: 750px){
        width: 80%;
        height: 40vh;
    }
    
`;


const Description = styled.div`
    width: 100%;
    color: #fff;
    
`;

const DescriptionUl = styled.ul`
    list-style: none;
    padding: 0;
`;

const DescriptionLi = styled.li`
  
    font-size: calc(0.5rem + 1vw);
`;

const WorkLink = styled.a`
    margin-top: 20px;
    font-size: calc(1.2rem + 1vw);
    color: #0073e6;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

// React Component
export default function Education() {
    return (
        <MainWrapper>
            <ImageContainer   src={kumonImage} alt="Work at Kumon"/>
            <Description>
                <DescriptionUl>
                    <DescriptionLi>Coached, mentored, and trained team members to improve their job performance</DescriptionLi>
                    <DescriptionLi>Exercised good judgment and decision-making in escalating concerns and resolving issues</DescriptionLi>
                </DescriptionUl>
            </Description>
            <WorkLink href="https://www.kumon.com/danville">Kumon</WorkLink>
        </MainWrapper>
    );
}
