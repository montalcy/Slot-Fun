
const fruits: string[] = [
    "🍒",
    "🍋",
    "🍌",
    "🍇",
    "🍓",
    "🍉",
    "🥝",
    "🍑",
    "🍎",
    "🫐",
    "🍊"
];

export function getRandomFruit(fruits: string[]): string {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}