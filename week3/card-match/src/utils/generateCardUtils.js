const generateCards = (cardList, count) => {
    const cards = [];
    let id = 1;
    const newCardList = cardList.slice(0, count);
    newCardList.forEach((card) => {
        for (let i = 0; i < 2; i++) {
            cards.push({ id: id, cardId: card.id, src: card.src, clicked: false });
            id++;
        }
    });
    return cards;
};

const shuffleCard = (cardList) => {
    const shuffledCardList = [...cardList];
    for (let i = shuffledCardList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCardList[i], shuffledCardList[j]] = [
            shuffledCardList[j],
            shuffledCardList[i],
        ];
    }
    return shuffledCardList;
};

export { generateCards, shuffleCard };