import styled from 'styled-components'

export const CartOverlayWrapper = styled.div`
position: absolute;
overflow:scroll;
background: rgba(57, 55, 72, 0.22);
width:100%;
height:100vh;
z-index: 2;
&::-webkit-scrollbar {
  width: 0;
`
export const CartOverlayContainer = styled.div`
position: relative;
float:right;
margin-right:88px;
width:325px;
height: max-content;
padding:32px 16px;
z-index: 3;
background: var(--c-white);
`
export const ProductCardImage = styled.img`
width: ${props => props.width};
height: ${props => props.height}; 
object-fit: contain;
`
export const TotalWrapper = styled.div`
display:flex;
justify-content:space-between;
padding:0 0 32px 0;
`
export const Span = styled.div`
background: ${props => props.bg};
width: ${props => props.width};
height: ${props => props.height};
border:${props => props.noborder ? '0' : '2px solid var(--c-text)'};
margin-right: 8px;
text-align:center;
font-weight: 400;
font-size: 14px;
line-height: 160%;
padding: ${props => props.padding};
`
export const Divr = styled.div`
display:flex;
justify-content: right;
`
export const Divs = styled.div`
width:300px;
height:max-content;
display:flex;
justify-content:space-between;
margin:40px 0;
`
export const Divc = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
`
export const Text = styled.p`
font-size: ${props => props.fontSize};
line-height: ${props => props.lineHeight};
font-weight: ${props => props.fontWeight};
padding: ${props => props.padding};
text-transform: ${props => props.textTransform};
color: var(-c--text);
`
export const Dive = styled.div`
display: flex;
padding:5px 0 0 0;
`
export const Container = styled.label`
  display: block;
  position: relative;
  margin-right: 4px;
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
   ${Input}:checked + && {
    border: ${props => props.bg ? '2px solid var(--c-primary)' : 'none'};
    padding: ${props => props.bg ? '2px 1.5px 4px 1px' : 'none'};
  }

}`
export const Checkmark = styled.span`
  position: relative;
  padding: ${props => props.border ? '5px 8px' : '2px 10px'};;
  top: 0;
  left: 0;
font-weight: 400;
font-size: 14px;
line-height: 160%;
  border: ${props => props.border ? '1px solid var(--c-text)' : '0.1px solid rgb(17, 17, 17)'};
  background: ${props => props.bg};


    ${Input}:checked + && {
    background-color: ${props => props.border ? 'black' : 'none'};
    color: ${props => props.border ? 'white' : 'none'};
  }
}`
export const Button = styled.button`
font-weight: 600;
font-size: 14px;
line-height: 120%;
padding: 16px 32px;
text-transform:uppercase;
cursor:pointer;
background: ${(props) => props.plain ? 'var(--c-white)' : 'var(--c-primary)'};
border:  ${(props) => props.plain ? '1px solid var(--c-text)' : 'none'};
color:  ${(props) => props.plain ? 'var(--c-text)' : 'var(--c-white)'};
`
export const ButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
padding-bottom: 0px;
`