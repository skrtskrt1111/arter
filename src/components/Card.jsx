
import styled, {keyframes} from 'styled-components';

const fade = keyframes`
  from {
    transform: 0;
  }

  to {
    transform: 1;
  }
`;

const Wrapper = styled.article`
border-radius: var(--radii);
bacground-color: var(--colors-ui-base);
box-shadow: var(--shadow);
cursor: pointer;
overflow: hidden;
width: 360px;
height: 275px;
left: 123px;
top: 224px;
`;

const CardImage = styled.img`
image-size: cover;
position: relative;
width: 100%;
height: 240px;
object-fit: cover;
box-shadow: var(--shadow);
transition: 2s;


`;

const CardBody = styled.div`
  padding: 0.3rem 1.3rem 1rem;
  

  &:hover {
    transform: translateY(-100px);
      cursor: pointer;
      background-color: var(--colors-bg);
      transition: 2s;
} 
transition: ${fade};
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
  
`;


export const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
                </CardList>
            </CardBody>

        </Wrapper>
    );
};