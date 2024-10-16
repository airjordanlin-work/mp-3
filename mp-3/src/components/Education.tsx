import styled from 'styled-components';

// Styled components
const EducationWrapper = styled.main`
    padding: 5%;
    width: 100%;
  
`;

const EducationAttend = styled.div`
    text-align: left;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
        
    }
`;

const Title = styled.h1`
    font-size: calc(1.5rem + 2vw);
    color: blue;
`;

const SchoolLinkBox = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 20px;
    margin-bottom: 2%;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;

const SchoolLink = styled.a`
    display: block;
    font-size: calc(1rem + 1.5vw);
    color: red;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

// Usage in component
export default function Education() {
    return (
        <EducationWrapper>
            <Title>Education</Title>
            <EducationAttend>
                <SchoolLinkBox>
                    <SchoolLink href="https://www.bu.edu">Boston University</SchoolLink>
                </SchoolLinkBox>
                <SchoolLinkBox>
                    <SchoolLink href="https://www.dvhigh.net">Dougherty Valley High School</SchoolLink>
                </SchoolLinkBox>
                <SchoolLinkBox>
                    <SchoolLink href="https://www.d214.org/phs">Prospect High School</SchoolLink>
                </SchoolLinkBox>
            </EducationAttend>
        </EducationWrapper>
    );
}
