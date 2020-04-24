import React, { useRef } from "react";

import { Container, SearchButton } from "./styles";
import descriptionSVG from "../../assets/images/description.svg";
import locationSVG from "../../assets/images/location.svg";
import { useDispatch } from "react-redux";

const Menu: React.FC = () => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  return (
    <Container>
      <label htmlFor="description">
        <img src={descriptionSVG} alt="description" />
        <input type="text" id="description" ref={descriptionRef} />
      </label>
      <label htmlFor="location">
        <img src={locationSVG} alt="location" />
        <input type="text" id="location" ref={locationRef} />
      </label>

      <SearchButton
        onClick={() => {
          dispatch({
            type: "JOBS_FETCH_REQUESTED",
            description: descriptionRef.current!.value,
            location: locationRef.current!.value,
          });
          descriptionRef.current!.value = "";
          locationRef.current!.value = "";
        }}
      >
        search
      </SearchButton>
    </Container>
  );
};
export default Menu;
