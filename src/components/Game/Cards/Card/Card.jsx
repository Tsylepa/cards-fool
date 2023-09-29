import PropTypes from "prop-types";
import { GiSpades, GiHearts, GiClubs, GiDiamonds } from "react-icons/gi";
import css from "./Card.module.css";

export default function Card({ card }) {
  const color =
    card.suit === "spades" || card.suit === "clubs" ? "black" : "red";

  return (
    <div className={css.card} style={{ color: color }}>
      {card.label}
      {card.suit === "spades" && <GiSpades />}
      {card.suit === "hearts" && <GiHearts />}
      {card.suit === "clubs" && <GiClubs />}
      {card.suit === "diamonds" && <GiDiamonds />}
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    label: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired,
  }).isRequired,
};
