import dishonored from "@/assets/images/games/dishonored.webp";
import farcry6 from "@/assets/images/games/farcry6.webp";
import acValhalla from "@/assets/images/games/ac-valhalla.webp";
import littleNightmare from "@/assets/images/games/little-nightmare.webp";
import battlefield from "@/assets/images/games/battlefield.webp";
import kena from "@/assets/images/games/kena.webp";

export interface IGame {
  title: string;
  image: string;
  status: string;
  description: string;
  price: string;
  studio: string;
  discount?: string;
  discountPrice?: string;
}

const gameList: IGame[] = [
  {
    title: "Dishonored",
    image: dishonored,
    status: "Out Now",
    description:
      "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge.",
    price: "200.500",
    studio: "Bethesda",
    discount: "-35%",
    discountPrice: "161.850",
  },
  {
    title: "Far Cry 6",
    image: farcry6,
    status: "Coming October 7",
    description:
      "Welcome to Yara. Antón Castillo is intent on restoring his nation back to its former glory by any means, a revolution.",
    price: "619.190",
    studio: "Ubisoft",
  },
  {
    title: "Assassins Creeds Valhalla",
    image: acValhalla,
    status: "Now Out",
    description:
      "Assassin's Creed Valhalla, Prepare for War Amid Sigrblot Season! Sharpen your axe and grab your one-handed sword to prepare for The Siege of Paris",
    price: "309.190",
    studio: "Ubisoft",
    discount: "-35%",
    discountPrice: "161.850",
  },
  {
    title: "Little Nightmare",
    image: littleNightmare,
    status: "Now Out",
    description:
      "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw",
    price: "119.190",
    studio: "Tarsier Studios",
  },
  {
    title: "Battlefield 2042",
    image: battlefield,
    status: "PRE-LOAD NOW AVAILABLE",
    description:
      "Don't miss a moment of the Battlefield 2042 Open Beta, start your pre-load now!",
    price: "659.000",
    studio: "Electronic Arts",
  },
  {
    title: "Kena bridge of spirits",
    image: kena,
    status: "OUT NOW",
    description:
      "Kena, a young Spirit Guide, travels to an abandoned village in search of the sacred mountain shrine.",
    price: "659.000",
    studio: "Ember Lab",
    discount: "-35%",
    discountPrice: "161.850",
  },
];

export const highlightGames = gameList.slice(0, 6);

export const dummyGameList = [...gameList, ...gameList, ...gameList, ...gameList];

export const freeGames = [
  {
    title: "Dishonored",
    image: dishonored,
    freeNow: true,
    rangeDate: "Now - Oct 14 at 10:00 PM",
  },
  {
    title: "Far Cry 6",
    image: farcry6,
    freeNow: false,
    rangeDate: "Oct 14 - Oct 21",
  },
  {
    title: "Assassins Creeds Valhalla",
    image: acValhalla,
    freeNow: false,
    rangeDate: "Oct 14 - Oct 21",
  },
];

export default gameList;
