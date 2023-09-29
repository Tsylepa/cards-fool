import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDeck,
  updatePlayers,
  updateTrump,
} from "src/redux/game/gameSlice";
import { getPlayers } from "src/redux/game/gameSelectors";
import Deck from "./Deck";
import Card from "./Card";
import css from "./Cards.module.css";

export default function Cards() {
  const players = useSelector(getPlayers);

  const dispatch = useDispatch();
  const suits = ["spades", "hearts", "clubs", "diamonds"];
  const values = [
    { power: 6, label: "6" },
    { power: 7, label: "7" },
    { power: 8, label: "8" },
    { power: 9, label: "9" },
    { power: 10, label: "10" },
    { power: 11, label: "J" },
    { power: 12, label: "Q" },
    { power: 13, label: "K" },
    { power: 14, label: "A" },
  ];

  useEffect(() => {
    const cards = [];

    for (const suit of suits) {
      for (const value of values) {
        cards.push({ suit, ...value });
      }
    }
    const deck = _.shuffle(cards);

    const updatedPlayers = players.map((p) => {
      const playerCards = deck.splice(0, 6);
      return { ...p, cards: playerCards };
    });

    dispatch(updatePlayers(updatedPlayers));

    dispatch(updateDeck(deck));
    dispatch(updateTrump());
  }, []);

  return (
    <>
      {players.map((p) => {
        return (
          <div key={p.id}>
            <p>{p.name}</p>
            <ul className={css.cards}>
              {p.cards.map((c) => (
                <li key={c.label + c.suit}>
                  <Card card={c} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <Deck />
    </>
  );
}
