import styled from "styled-components";


export const Header = styled.header`
background: #013459;
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
height: 100px;

`

export const Box = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    height: 100%;
    &.Nav-Responsive{
        display: none;
        align-center: center;
        justify-content:center
        width: 100%;
        @media (max-width: 768px){
            display: flex;
        }
        
    }
    &.Logo{
        color: #5BC0BE;
        font-size: 3em;
        padding-left:20px;
        flex: 2;

    .span{
        padding-left: 20px;
        text-transform: uppercase;
    }
    @media (max-width: 768px){
        font-size: 2em;
        height:50px;
        display: flex;
        align-items: end;
    }
    }
    &.Nav{
        display: flex; 
        align-items: center;
        justify-content: space-evenly;
        width:100%;
        flex: 3;
        @media (max-width: 768px){
            display: none
        }
        nav{ 
            width:50%;
            ul{
            display: flex;
            width:100%;
            height:50px;
            justify-content: space-evenly;
            align-items: center;
            list-style:  none;
            font-size: 20px;
            li{ 
          
                height:30px;
                ;
                a{
                text-decoration: none;
                color: #5BC0BE;
                text-transform: capitalize;
                cursor: pointer;
                height: 100%;   
                display: flex;
                align-items:center;
                padding-bottom: 0px;
            }
            
        
         
           
        }
         .active{
            a{
                border-bottom: 1px solid #5BC0BE
            }
         }

        }}
        button{
            border: none;
            width: 100px;
            height: 40px;
            border-radius: 10px;
            background: #DB93B0;
            border: none;
            color: #013459;
            font-size: 1em;
            cursor: pointer;
        }
    }
    &.User-Responsive{
        display:none;
        align-center: center;
        justify-content:center
        width: 100%;
        position: relative;
        @media (max-width: 768px){
            display: flex;
        }
        span{
            width:20px;
            height:20px;
            background: #5BC0BE;
        position: absolute;
        top:36px;
        right:44%;
            border-radius: 100%;
            
        }
    }
    `

 export const WidgetUse = styled.div`
    padding-top: 20px;
    width: 100%;
    max-width: 330px;
    height: 657px;
    max-height: 657px;
    border-radius: 0px 0px 30px 0px;
    background: #5BC0BE;
    position: fixed;
    left:0;
    top: 90px;

    .user{
        border-bottom: 1px solid #013459;
        display: flex;
        align-items:center;
        font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
        color: #013459;
        p{
        text-transform: capitalize;
        padding-left: 10px;
        }
    }

`
export const List = styled.ul`
    list-style: none;
    width: 100%;
    li{
    padding: 20px 0px 20px 10px; 
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: start
      
    }
    .LinkStyled{
        text-decoration: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #013459;
      }
    .LinkStyled::first-letter{
        text-transform: Uppercase;
    }
    `


export const Circle = styled.i`
background: #013459;
border-radius: 50px;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items:center;
margin-right: 20px;
`