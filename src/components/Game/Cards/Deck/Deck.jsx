import { useSelector } from "react-redux";
import { getDeck } from "src/redux/game/gameSelectors";
import Card from "../Card";
import css from "./Deck.module.css";

export default function Deck() {
  const deck = useSelector(getDeck);
  const deckCards = [...deck];
  const trumpCard = deckCards.splice(-1)[0];
  console.log(trumpCard);

  return (
    <div className={css.deck}>
      {deck.map((c) => (
        <div className={css.card} key={c.label + c.suit}></div>
      ))}
      <div className={css.trump}>
        <Card card={trumpCard} />
      </div>
    </div>
  );
}
