import React from "react";

import { Container, SearchButton } from "./styles";
import descriptionSVG from "../../assets/images/description.svg";
import locationSVG from "../../assets/images/location.svg";

const Menu: React.FC = () => {
  return (
    <Container>
      <label htmlFor="description">
        <img src={descriptionSVG} alt="description" />
        <input type="text" id="description" />
      </label>
      <label htmlFor="location">
        <img src={locationSVG} alt="location" />
        <input type="text" id="location" />
      </label>

      <SearchButton>search</SearchButton>
    </Container>
  );
};
export default Menu;
