import useSlider from './useSlider';
import { FacilityInfo } from './type';
import CarrouselDirection from './carrouselDirection';
import Card from './card';
import {
  CardListContainer,
  CardListWrapper,
  CarrouselDot,
  CarrouselDotList,
  Container,
  Wrapper,
} from './styles/carrouselStyle';

interface CarrouselParams {
  array: FacilityInfo[];
}

const Carrousel = (props: CarrouselParams) => {
  const { goPrev, goNext, width, addDataAtBothEnds, handleDot, sliderRef } =
    useSlider({
      array: props.array,
    });

  return (
    <Wrapper>
      <Container>
        <CarrouselDirection onClick={goPrev} />
        <CardListWrapper>
          <CardListContainer
            ref={sliderRef}
            size={width * addDataAtBothEnds.length}
          >
            {addDataAtBothEnds.map((card) => (
              <Card key={`$cardList_${card.id}`} card={card} />
            ))}
          </CardListContainer>
        </CardListWrapper>
        <CarrouselDirection right onClick={goNext} />
      </Container>
      <CarrouselDotList>
        {props.array.map((el, idx) => (
          <CarrouselDot
            key={el.id}
            id={`dot_${idx + 1}`}
            onClick={() => handleDot(idx + 1)}
          />
        ))}
      </CarrouselDotList>
    </Wrapper>
  );
};

export default Carrousel;
