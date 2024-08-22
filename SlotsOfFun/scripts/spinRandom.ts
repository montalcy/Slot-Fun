export const fruits: string[] = [
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

export function getRandomFruit() {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}

export function checkRandomFruit(fruit1:string, fruit2:string, fruit3:string)
{
    if(fruit1 == fruit2 && fruit2 == fruit3){
        return true;
    }
    return false;
}