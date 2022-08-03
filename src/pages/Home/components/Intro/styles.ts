import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6.6875rem 1rem;
  background-image: url('/background.svg');
  background-repeat: no-repeat;
`

export const Content = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 3rem;
  line-height: 1.3;
`

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.3;
`

export const ItemsContainer = styled.div`
  margin-top: 5.28rem;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`

interface IconContainerProps {
  backgroundColor: string
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  background-color: ${(props) => props.backgroundColor};

  svg {
    color: ${({ theme }) => theme.white};
  }
`

export const CoffeeImage = styled.img`
  @media (max-width: ${({ theme }) => theme.mediaScreen}) {
    display: none;
  }
`
