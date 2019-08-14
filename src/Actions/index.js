export const addNewFeature = (item) => {
    return {type: "ADDED_FEATURE", payload: item}
}

export const addAdditionalPrice = (item) => {
    return {type: "ADDED_ADDITIONALPRICE", payload: item}
}