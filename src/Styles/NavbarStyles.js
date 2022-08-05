import styled from 'styled-components'

export const Nav = styled.nav`
padding: 0px 101px 0px 117px;
`
export const NavBarContainer = styled.nav`
padding: 28px 0px 32px 0px;
display:flex;
justify-content:space-between;
align-items:center;
`
export const Category = styled.ul` 
display:flex;
justify-content:space-between;
`
export const List = styled.li`
list-style:none;
font-weight: 600;
cursor: pointer;
font-size: 16px;
text-transform:uppercase;
line-height: 120%;
color: ${(props) => props.active ? 'var(--c-primary)' : 'var(--c-text)'};
margin-right:32px;
transition: border-bottom 0.5s ease-in-out;
position:relative;
:hover {
color:var(--c-primary);
}
::after {
content: "";
width: 100%;
top:60px;
position:absolute;
height: 1px;
background: ${(props) => props.active ? 'var(--c-primary)' : 'none'};
display: block;
margin: auto;
-webkit - transition: 0.5s;
transition: 0.5s ease-in-out;
}`
export const ListTwo = styled.li`
list-style:none;
font-weight: 600;
cursor: pointer;
font-size: 16px;
text-transform:uppercase;
line-height: 120%;
color: ${(props) => props.active ? 'var(--c-primary)' : 'var(--c-text)'};
margin-right:32px;
transition: border-bottom 0.5s ease-in-out;
position:relative;
:hover {
color:var(--c-primary);
}
::after {
content: "";
width: 100%;
top:60px;
position:absolute;
height: 1px;
background: ${(props) => props.active ? 'var(--c-primary)' : 'none'};
display: block;
margin: auto;
-webkit - transition: 0.5s;
transition: 0.5s ease-in-out;
}
`
export const Img = styled.img`
margin-left: ${(props) => props.marginLeft};
margin-right: ${(props) => props.marginRight};
width: ${(props) => props.width};
height: ${(props) => props.height};
transform: rotate(${(props) => props.active ? '180deg' : '0deg'});
`
export const SelectContainer = styled.div`
position:relative;
justify-content:space-between;
align-items:center;
margin-right:22px;
cursor:pointer;
`
export const Select = styled.ul`
z-index:1;
position:absolute;
width:114px;
margin-top:12px;
top:${(props) => props.active ? '32px' : '-332px'};
left:-20px;
background: var(--c-white);
filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
`
export const Option = styled.li`
list-style:none;
padding:20px;
:hover{
    background: var(--c-bg)
}
`
export const Currenc = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const Currency = styled.h1`
font-weight: 500;
font-size: 18px;
line-height: 160%;
color: var(--c-text);
margin-right:10px;
`
export const Div = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const CartItems = styled.h1`
position:absolute;
top:15px;
right:90px;
background: var(--c-text);
padding:5px 7px;
border-radius: 50%;
text-align: center;
font-weight: 700;
font-size: 14px;
color: var(--c-white);
`
export const CartContainer = styled.div`
positon:relative;`

export const CartIcon = styled.div`
cursor: pointer;
`