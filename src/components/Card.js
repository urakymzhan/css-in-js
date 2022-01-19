// Styled Components example

import {
  CardContainer,
  MainDiv,
  Stats,
  Comment,
  ProgresBar,
  IconWrapper,
} from "./styled";

function Card({ card }) {
  return (
    <CardContainer>
      <MainDiv>
        <IconWrapper>{card.icon}</IconWrapper>
        <div>
          <Stats>{card.stats}</Stats>
          <Comment>{card.comment}</Comment>
        </div>
      </MainDiv>
      <ProgresBar value={card.value} max={100} progressbar={card.progressbar} />
    </CardContainer>
  );
}

export default Card;
