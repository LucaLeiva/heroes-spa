import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    if (publisher === "Marvel Comics" || publisher === "DC Comics") {
        return heroes.filter(hero => hero.publisher === publisher);
    }
}