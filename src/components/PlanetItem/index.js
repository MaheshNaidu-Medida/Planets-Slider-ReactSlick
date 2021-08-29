import {
  PlanetItemContainer,
  PlanetImage,
  PlanetTitle,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, description, imageUrl} = planetDetails

  return (
    <PlanetItemContainer>
      <PlanetImage url={imageUrl} alt={`planet ${name}`} />
      <PlanetTitle>{name}</PlanetTitle>
      <PlanetDescription>{description}</PlanetDescription>
    </PlanetItemContainer>
  )
}
export default PlanetItem
