import styled from 'styled-components'



////////// ^ ///////////// ^  //////////
////////// ^ GLOBAL STYLES ^  //////////
////////// ^ ///////////// ^  //////////

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--black-fade-40);
  border: 1px solid var(--primary);
  border-radius: var(--radius-lg);
  padding: var(--vp-md);
  width: 100%;
  width: var(--content-width);
  
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    
  }
`

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : 'column')};
  justify-content: ${({ jc }) => (jc ? jc : 'flex-start')};
  align-items: ${({ ai }) => (ai ? ai : 'flex-start')};
  @media (max-width: 1024px) {
    padding: var(--space-sm) !important;
  }
`

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`

export const TextDescription = styled.p`
  font-size: 16px;
  font-family: var(--font-body);
  line-height: 1.6;
  color: var(--text-color);
`

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`
