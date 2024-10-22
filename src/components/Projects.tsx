import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20%;
    width: 100%;
    
    
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const InputLabel = styled.label`
    font-size: calc(0.8rem + 0.5vw);
    margin-bottom: 2%;
    color: #333;
`;

const InputField = styled.input`
    margin-bottom: 5%;
    padding: 3%;
    font-size: calc(1rem + 0.5vw);
    width: 70%;
    text-align: center;
    
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2%;
    margin-bottom: 5%;
    width: 100%;
    
`;

const CalcButton = styled.button`
    padding: 3%;
    font-size: calc(0.5rem + 0.5vw);
    background-color: #0073e6;
    color: white;
    cursor: pointer;
    width: 40%;
  

    &:hover {
        background-color: #005bb5;
        transform: scale(1.05);
    }
`;

const OutputDiv = styled.div<{ isNegative: boolean }>`
    font-size: calc(1.5rem + 0.5vw);
    color: ${(props) => (props.isNegative ? "red" : "#333")};
    margin-top: 5%;
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
