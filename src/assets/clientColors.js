export const colors = [
    { key: 0, name: "#7ac70c" },
    { key: 1, name: "#83f02a" },
    { key: 2, name: "#faa918" },
    { key: 3, name: "#ffc715" },
    { key: 4, name: "#facf5a" },
    { key: 5, name: "#d38231" },
    { key: 6, name: "#d33131" },
    { key: 7, name: "#ff5959" },
    { key: 8, name: "#e860a4" },
    { key: 9, name: "#1cb0f6" },
    { key: 10, name: "#14d4f4" },
    { key: 11, name: "#00e0a4" },
    { key: 12, name: "#8549ba" },
    { key: 13, name: "#6462cc" },
    { key: 14, name: "#4c4c4c" },
    { key: 15, name: "#233142" },
    { key: 16, name: "#242526" },
]
export const getColorByKey = (key) => {
    let color = colors.find((x) => x.key === key)

    if (!color) { return colors[0] }
    return color
}
