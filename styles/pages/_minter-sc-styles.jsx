import styled from 'styled-components';



////////// + ///////////// +  //////////
////////// + MINTER STYLES +  //////////
////////// + ///////////// +  //////////

export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-family: var(--font-accent);
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  } */
`

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column; 
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 1024px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`
