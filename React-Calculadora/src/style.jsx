import styled from 'styled-components'


export const ColorSlider = styled.input`
    -webkit-appearance: none; 
    appearance: none;
    width:50px;
    height:15px;
    border-radius:10px;
    background-color:#252D44;
    cursor: pointer;

    &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    appearance: none;
    height: 12px;
    width: 12px;
    background: #ff0000;
    border-radius: 100%;
    }

    &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    max-width: 46px;
    margin:0 auto;
    outline: none;
    height: 10px;
    border-radius: 10px;
    background-image: transparent;
    }
`
