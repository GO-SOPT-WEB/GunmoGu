import { selector } from "recoil";
import { difficultyState } from "../atoms/Difficulty";

const EASY_COUNT = 5;
const NORMAL_COUNT = 7;
const HARD_COUNT = 9;

export const countState = selector({
    key: "countState/get",
    get: ({ get }) => {
        switch (get(difficultyState)) {
            case "EASY":
                return EASY_COUNT;
            case "NORMAL":
                return NORMAL_COUNT;
            case "HARD":
                return HARD_COUNT;
            default:
                return EASY_COUNT;
        }
    }
});