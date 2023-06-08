import { atom } from "recoil";
import cardImageList from "../assets/cardImageList";
import { generateCards, shuffleCard } from "../utils/generateCardUtils";

export const cardListState = atom({
    key: "cardListState",
    default: shuffleCard(generateCards(cardImageList, 5))
});