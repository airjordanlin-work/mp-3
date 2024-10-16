import styled from 'styled-components';
import HobbiesImage from '../assets/hobbies.jpg';

const HobbiesWrapper = styled.div`
    padding: 5%;
  
`;

const Paragraph = styled.p`
    font-size: calc(0.5rem + 0.5vw);
    color: white;
   
`;

const SectionTitle = styled.h3`
    font-size: calc(1.5rem + 0.5vw);
    color: white;
    
`;

const Image = styled.img`
    margin-top: 40%;
    width: 100%;
    height: 50vh;
    border-radius: 10px;
    @media screen and (max-width: 750px){
        width: 80%;
        height: 40vh;
    }
   
`;

export default function Hobbies() {
    return (
        <HobbiesWrapper>

            <Image src={HobbiesImage} alt="travel" />
            <Paragraph>
                I am a huge fan of Texas hold'em and Omaha. In terms of hands, my favorite is the Doyle Brunson (10 and 2 off suit).
            </Paragraph>

            <SectionTitle>Traveling</SectionTitle>
            <Paragraph>
                Over the past summer, I explored parts of South Korea and Japan. To be more specific, I was at Seoul, Kyoto, Tokyo, Hiroshima, Osaka.
            </Paragraph>

            <SectionTitle>Spending time with friends</SectionTitle>
            <Paragraph>I like my friends.</Paragraph>
        </HobbiesWrapper>
    );
}
