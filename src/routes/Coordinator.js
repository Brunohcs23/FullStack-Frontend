export const goToHomeScreen = (history) => {
    history.push("/")
}

export const goToImageDetails = (history, id) => {
    history.push(`/image/${id}`)
}