export const addItem = (itemName, item) => {
    const oldItems = JSON.parse(localStorage.getItem(itemName)) || []
    const newItems = [item, ...oldItems]
    localStorage.setItem(itemName, JSON.stringify(newItems))
    return "added to LS"
}

export const getItem = (itemName) => {
    return JSON.parse(localStorage.getItem(itemName))
}