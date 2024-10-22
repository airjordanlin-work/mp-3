import { useState } from 'react';
import styled from 'styled-components';
import Me from '../../public/Me.jpg';


const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    background-color: #f4f4f4;
    text-align: center;
    padding-top: 350px;
`;

const ProfileImage = styled.img`
    width: 45%;
    height: auto; 
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const IntroText = styled.p`
    font-size: calc(1rem + 0.5vw);
    color: #333;
    width: 60%;
    line-height: 1.6;
`;

export default function Home() {
    const [showIntro, setShowIntro] = useState(false);

    const toggleIntro = () => {
        setShowIntro(prevShowIntro => !prevShowIntro);
    };

    return (
        <HomeWrapper>
            <ProfileImage
                src={Me}
                alt="Me"
                onClick={toggleIntro}

            />
            <h1>click Image to see more</h1>

            {showIntro && (
                <IntroText>
                    Hello, my name is Jordan Lin, and I am an undergraduate at Boston University.
                    I currently pursue a major in Computer Science and am keen on learning ubiquitous
                    computing and artificial intelligence.
                </IntroText>
            )}
        </HomeWrapper>
    );
}
