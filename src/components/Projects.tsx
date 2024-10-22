import { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
`;

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     width: 200%;
    min-height: 100vh;
    margin-top: 100%;
    padding: 2%; 
    background: #f0f4f8;
    animation: ${fadeIn} 0.8s ease-in-out;
    
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;  
`;

const InputLabel = styled.label`
    font-size: calc(0.8rem + 0.5vw);
    margin-bottom: 2%;
    color: #333;
    animation: ${fadeIn} 1s ease-in-out;
`;

const InputField = styled.input`
    margin-bottom: 5%;
    padding: 2%;
    font-size: calc(1rem + 0.5vw);
    width: 90%;  
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #0073e6;
        box-shadow: 0 0 8px rgba(0, 115, 230, 0.6);
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2%;
    margin-bottom: 5%;
    width: 90%;  
`;

const CalcButton = styled.button`
    padding: 2%;  
    font-size: calc(0.5rem + 0.5vw);
    background-color: #0073e6;
    color: white;
    cursor: pointer;
    min-width: 80px;
    border: none;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #005bb5;
        transform: scale(1.05);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.98);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

const OutputDiv = styled.div<{ isNegative: boolean }>`
    font-size: calc(1.5rem + 0.5vw);
    color: ${(props) => (props.isNegative ? "red" : "#333")};
    margin-top: 5%;
    animation: ${fadeIn} 0.5s ease-in-out;
    font-weight: bold;
`;
export default function Calculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState<number | null>(null);

    const handleAddition = () => {
        setOutput(Number(first) + Number(second));
    };

    const handleSubtraction = () => {
        setOutput(Number(first) - Number(second));
    };

    const handleMultiplication = () => {
        setOutput(Number(first) * Number(second));
    };

    const handleDivision = () => {
        setOutput(Number(first) / Number(second));
    };

    const handlePower = () => {
        setOutput(Math.pow(Number(first), Number(second)));
    };

    const clearAll = () => {
        setFirst("");
        setSecond("");
        setOutput(null);
    };

    return (
        <MainWrapper>
            <ButtonContainer>
                <InputLabel htmlFor="first">1st number:</InputLabel>
                <InputField
                    type="text"
                    id="first"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />

                <InputLabel htmlFor="second">2nd number:</InputLabel>
                <InputField
                    type="text"
                    id="second"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                />

                <ButtonGroup>
                    <CalcButton onClick={handleAddition}>+</CalcButton>
                    <CalcButton onClick={handleSubtraction}>-</CalcButton>
                    <CalcButton onClick={handleMultiplication}>*</CalcButton>
                    <CalcButton onClick={handleDivision}>/</CalcButton>
                    <CalcButton onClick={handlePower}>Power</CalcButton>
                    <CalcButton onClick={clearAll}>Clear</CalcButton>
                </ButtonGroup>

                <OutputDiv id="output" isNegative={output !== null && output < 0}>
                    {output !== null ? `Result: ${output}` : "No result yet"}
                </OutputDiv>
            </ButtonContainer>
        </MainWrapper>
    );
}
