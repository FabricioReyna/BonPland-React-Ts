import styled from "styled-components";


export const Contacto = styled.main`
    width: 100%;
    height: 40vh;
    background: #013459;
    color: #5BC0BE;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    .form_contact{
        display:flex;
        width:100%;
        height:100%;
        flex-direction: row;
        align-items: center;
    }
    @media (max-width: 768px){
        display: none
    }
`
export const Box = styled.div`
    border: 1px solid black;
    width: 100%;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-transform: capitalize;
    font-weight: normal;
    padding-top: 20px;
    .div{
        border: 1px solid black;
        width: 98%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction:column;
        span{
            background:red;
            width: 82%;
            margin: 0;
            heigth: 40px;
            border: 10px solid black;
        }
    }
`
export const Inputdiv = styled.div`
    display: flex;
`

export const Input = styled.input.attrs(props =>( {
    type: "text",
    size: props.size || "1em",
}))`
margin: 0px 10px 10px 10px;
padding: ${props => props.size};
width: 80%;
`;

export const TextareaStyled = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`
