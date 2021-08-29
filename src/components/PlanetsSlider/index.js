import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import {
  PlanetsAppContainer,
  PlanetsSliderContainer,
  Heading,
} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <PlanetsSliderContainer>
        <Slider>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetDetails={each} />
          ))}
        </Slider>
      </PlanetsSliderContainer>
    </PlanetsAppContainer>
  )
}
export default PlanetsSlider
