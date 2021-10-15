export interface FilterValue {
  name: string;
  checked: boolean;
}

export interface Filter {
  name: string;
  lists: FilterValue[];
}

const events: Filter = {
  name: "Event",
  lists: [
    { name: "THQ Publisher Sale", checked: false },
    { name: "Focus Publisher Sale", checked: false },
  ],
};

const genre: Filter = {
  name: "Genre",
  lists: [
    { name: "Action", checked: false },
    { name: "Adventure", checked: false },
    { name: "Indie", checked: false },
    { name: "RPG", checked: false },
    { name: "Strategy", checked: false },
    { name: "Open World", checked: false },
    { name: "Shooter", checked: false },
    { name: "Puzzle", checked: false },
    { name: "First Person", checked: false },
    { name: "Narration", checked: false },
    { name: "Simulation", checked: false },
    { name: "Casual", checked: false },
    { name: "Turn-Base", checked: false },
    { name: "Exploration", checked: false },
    { name: "Horror", checked: false },
    { name: "Platformer", checked: false },
    { name: "Party", checked: false },
    { name: "Survival", checked: false },
    { name: "Trivia", checked: false },
    { name: "City Builder", checked: false },
    { name: "Stealth", checked: false },
    { name: "Fighting", checked: false },
    { name: "Comedy", checked: false },
    { name: "Action-Adventure", checked: false },
    { name: "Racing", checked: false },
    { name: "Rogue-Lite", checked: false },
    { name: "Card Game", checked: false },
    { name: "Sport", checked: false },
    { name: "Dungeon Crawler", checked: false },
  ],
};

const features: Filter = {
  name: "Features",
  lists: [
    { name: "Single Player", checked: false },
    { name: "Controller Support", checked: false },
    { name: "Multiplayer", checked: false },
    { name: "Co-op", checked: false },
    { name: "Competitive", checked: false },
    { name: "VR", checked: false },
  ],
};

const types: Filter = {
  name: "Types",
  lists: [
    { name: "Game", checked: false },
    { name: "Game Bundle", checked: false },
    { name: "Editor", checked: false },
    { name: "Game Add-on", checked: false },
    { name: "Game Demo", checked: false },
    { name: "Apps", checked: false },
  ],
};

const platform: Filter = {
  name: "Platform",
  lists: [
    { name: "Windows", checked: false },
    { name: "Mac OS", checked: false },
  ],
};

const filter: Filter[] = [events, genre, features, types, platform];

export default filter;
