const TextList = ["BCG", "เศรษฐกิจชีวภาพ", "เศรษฐกิจหมุนเวียน", "เศรษฐกิจสีเขียว"]
let textindex = 0;
let text = ``;

async function start() {
    let thistext = TextList[textindex].split("");
    for (const cha of thistext) {
        text += cha
        await sleep(100)
        document.getElementById("texttitle").innerHTML = `${text} คืออะไร ?`
        document.title = `${text} คืออะไร ?`
    }
    await sleep(1000)

    for (const cha of thistext) {
        text = text.slice(0, text.length - 1)
        await sleep(50)
        document.getElementById("texttitle").innerHTML = `${text} คืออะไร ?`
        document.title = `${text} คืออะไร ?`
    }

    if (textindex >= TextList.length - 1) textindex = 0;
    else textindex++

    start()

}

start()


async function sleep(ms) {
    return new Promise(r => {
        setTimeout(() => {
            return r();
        }, ms);
    })
}