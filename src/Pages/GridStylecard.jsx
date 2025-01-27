//import React from "react";
import ClubInfo from "../Component/Clubinfo";
import back from "../Assets/gallery-8.jpg";
import Gridcard from "../Component/Gridcard";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import json from "../RidingReport.json";

const GridStylecard = () => {
  const { id } = useParams(); // Get the card ID from the URL
  const card = json.RidingReport.find((item) => item.id === id); // Find the card based on the ID

  console.log(id, "Selected Rider ID");
  console.log(card, "Selected Rider Data");

  if (!card) return <p>Card not found</p>;

  return (
    <div className="overflow-hidden">
      <ClubInfo name={card.title} background={back} />
      <Gridcard
        title={card.title}
        date={card.date}
        author={card.author}
        introduction={card.introduction}
        sections={card.sections}
        Legendary={card.Legendary}
        powered={card.powered.contents}
        galleryImages={card.images}
      />
    </div>
  );
};

GridStylecard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default GridStylecard;
