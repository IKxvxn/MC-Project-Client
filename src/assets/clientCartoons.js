import cartoon1 from '../images/cartoon1.png'
import cartoon2 from '../images/cartoon2.png'
import cartoon3 from '../images/cartoon3.png'


export const cartoons = [
    { key: 0, cartoon: cartoon1, style: { maxWidth: "13vw", minWidth: "11rem"}},
    { key: 1, cartoon: cartoon2, style: { maxWidth: "18vw", minWidth: "10rem"}},
    { key: 2, cartoon: cartoon3, style: { maxWidth: "8vw", minWidth: "5rem"}},
]

export const getcartoonByKey = (key) => {
    let cartoon = cartoons.find((x) => x.key === key)

    if (!cartoon) { return cartoons[0] }
    return cartoon
}
