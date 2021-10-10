import dishonored from "@/assets/images/games/dishonored.jpg"
import farcry6 from "@/assets/images/games/farcry6.jpg"
import acValhalla from "@/assets/images/games/ac-valhalla.jpg"
import littleNightmare from "@/assets/images/games/little-nightmare.jpg"
import battlefield from "@/assets/images/games/battlefield.jpg"
import kena from "@/assets/images/games/kena.jpg"

const gameList = [
  {
    title: 'Dishonored',
    image: dishonored,
    status: 'Out Now',
    description: 'Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge.',
    price: "200,500.00",
    studio: 'Ubisoft',
    discount: '-35%',
    discountPrice: '161,850.00'
  },
  {
    title: 'Far Cry 6',
    image: farcry6,
    status: 'Coming October 7',
    description: 'Less than 3 weeks until launch! Pre-purchase to get a deadly Discos Locos weapon and an outfit for Chorizo, your canine companion.',
    price: "619,190.00",
    studio: 'Ubisoft',
    discount: '-35%',
    discountPrice: '161,850.00'
  },
  {
    title: 'Assassins Creeds Valhalla',
    image: acValhalla,
    status: 'Now Out',
    description: "Assassin's Creed Valhalla, Prepare for War Amid Sigrblot Season! Sharpen your axe and grab your one-handed sword to prepare for The Siege of Paris",
    price: "309,190.00",
    studio: 'Ubisoft',
    discount: '-35%',
    discountPrice: '161,850.00'
  },
  {
    title: 'Little Nightmare',
    image: littleNightmare,
    status: 'Now Out',
    description: 'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw',
    price: "119,190.00",
    studio: 'Ubisoft',
    discount: '-35%',
    discountPrice: '161,850.00'
  },
  {
    title: 'Battlefield 2042',
    image: battlefield,
    status: 'PRE-LOAD NOW AVAILABLE',
    description: "Don't miss a moment of the Battlefield 2042 Open Beta, start your pre-load now!",
    price: "659,000.00",
    studio: 'Ubisoft',
    discount: '-35%',
    discountPrice: '161,850.00'
  },
  {
    title: 'Kena bridge of spirits',
    image: kena,
    status: 'OUT NOW',
    description: "Kena, a young Spirit Guide, travels to an abandoned village in search of the sacred mountain shrine.",
    price: "659,000.00",
    studio: 'Ubisoft',
    discount: '-35%',
    discountPrice: '161,850.00'
  },
]

export const highlightGames = gameList.slice(0, 6)

export const dummyGameList = [...gameList, ...gameList, ...gameList]