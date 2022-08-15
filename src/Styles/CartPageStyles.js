import styled from 'styled-components'

export const CartOverlayWrapper = styled.div`
padding: 80px 101px 0px 117px;
`
export const CartOverlayContainer = styled.div`
position: relative;
width:100%;
z-index: 5;
`
export const ProductCardImage = styled.img`
width: ${props => props.width};
height: ${props => props.height}; 
object-fit: contain;
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
cursor: pointer;
`
export const Divr = styled.div`
display:flex;
flex-direction: row;
`
export const Divs = styled.div`
width:100%;
height:max-content;
display:flex;
justify-content: space-between;
padding:24px 0;
border-bottom: 1px solid var(--c-text-three);
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
border-bottom:${props => props.border};
`
export const Dive = styled.div`
display: flex;
`
export const Container = styled.label`
  display: block;
  position: relative;
  margin-right: 10px;
  margin-bottom:10px;
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
    padding: ${props => props.bg ? '4.5px 2px 6px 2px' : 'none'};
  }

}`
export const Checkmark = styled.span`
  position: relative;
  padding: ${props => props.border ? '7px 15px' : '4px 12px'};;
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
width: 279px;
height: 43px;
padding: 16px 32px;
text-transform:uppercase;
background: var(--c-primary);
border: none;
color: var(--c-white)
`
export const ButtonWrapper = styled.div`
display:flex;
justify-content:space-between;
`
export const TotalContainer = styled.div`
padding:32px 0 20px 0;
`
export const TotalWrapper = styled.div`
display:flex;
width:250px;
justify-content:space-between;
padding:0 0 10px;
text-align: left;
`
export const ImgContainer = styled.div`
position:absolute;
background: rgba(0, 0, 0, 0.73);
padding:3px;
display:flex;
justify-content: space-between;
bottom:30px;
right:30px;
&:nth-child(2) {
  bottom:30px;
right:52px;
}
`
export const ImgWrapper = styled.div`
position:relative;
`