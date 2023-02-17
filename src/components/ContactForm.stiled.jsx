import styled from "styled-components";

export const BoxContactForm = styled.form `
        display: flex;
        flex-direction: column;
        justify-content: flex-start; border: 1px solid black; width: 300px; padding:10px; `
export const InputContactForm = styled.input `
        display: block;  width: 150px; margin-bottom: 10px; `
export const LabelContactForm = styled.label `
        display: block;  width: 150px; margin-bottom: 10px;      `        
export const ButtonContactForm = styled.button `
        display: block;  width: 100px; margin-bottom: 10px;   
         background-color: ${({ value }) => {
                switch (value) {
                case true: return '#00eeff';
                default: return 'white'
                }
            } }   ` 
