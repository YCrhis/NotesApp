export const DateNote = () => {

    const tiempoTranscurrido = Date.now();
    const date = new Date(tiempoTranscurrido);

    let today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    return { today }

}

