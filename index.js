
let renderWord = () => {
    for(let i = 0; i < workerData.length; i++) {
        document.createElement('div')
    }
}

let generateWord = () => {
    fetch('https://random-word-api.vercel.app/api?words=1')
        .then(res => res.json())
        .then(data => console.log(data))
}


generateWord();