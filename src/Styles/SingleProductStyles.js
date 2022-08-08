import styled from "styled-components";


export const SingleProductContainer = styled.nav`
padding: 72px 101px 0px 117px;
font-size: 26px;
display: flex;
justify-content:space-between;
`
export const ProductCardImage = styled.img`
width: ${props => props.width};
height: ${props => props.height};
opacity: ${props => props.opacity};
margin-bottom: 32px;
cursor: pointer;

object-fit: contain
`
export const Div = styled.div`
display: flex;
flex-direction: column;
margin-right:39px;
`
export const DivTwo = styled.div`
position: relative;
display: flex;
flex-direction: column;
height:max-content;
`
export const DivThree = styled.div`
width: 292px;
margin-left:102px;
margin-right:102px;
`
export const Dive = styled.div`
display: flex;
padding:5px 0 0 0;
`
export const Text = styled.p`
font-size: ${props => props.fontSize};
line-height: ${props => props.lineHeight};
font-weight: ${props => props.fontWeight};
padding: ${props => props.padding};
text-transform: ${props => props.textTransform};
`
export const AddToCartBtn = styled.button`
background: var(--c-primary);
padding:16px 32px;
font-weight: 600;
font-size: 16px;
line-height: 120%;
border:none;
width:292px;
color: var(--c-white);
text-transform: uppercase;
opacity: ${props => props.opacity};
cursor: ${props => props.cursor ? "pointer" : ""};
`
export const Container = styled.label`
  display: block;
  position: relative;
  margin-bottom: 12px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const Input = styled.input.attrs({ type: "radio", })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`
export const CheckmarkWrapper = styled.span`
cursor: pointer;
   ${Input}:checked + && {
    border: ${props => props.bg ? '2px solid var(--c-primary)' : 'none'};
    padding: ${props => props.bg ? '6px 1.5px 6px 1px' : 'none'};
  }

}`
export const Checkmark = styled.span`
  position: relative;
  padding: ${props => props.border ? '10px 16px' : '4px 16px'};;
  top: 0;
  left: 0;
  font-weight: 400;
font-size: 16px;
line-height: 18px;
  border: ${props => props.border ? '1px solid var(--c-text)' : '0.1px solid rgb(17, 17, 17)'};
  background: ${props => props.bg};


    ${Input}:checked + && {
    background-color: ${props => props.border ? 'black' : 'none'};
    color: ${props => props.border ? 'white' : 'none'};
  }
  

}`
export const ProductCardOverlauy = styled.div`
position: absolute;
left:50%;
top:50%;
transform: translate(-50%, -50%);
`
export const ProductInStock = styled.h1`
position: relative;
color: var(--c-text-two);
font-size: 24px;
font-weight: 400;
line-height: 160%;
`