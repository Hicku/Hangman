let hangWord = '';

let renderWord = () => {
    let html = '';
    for (let i = 0; i < hangWord.length; i++) {
        html += `
        <div id="word-div">${hangWord[i]}</div>
        `;
    }
    document.getElementById('box-div').innerHTML = html;
};

let generateWord = () => {
    fetch('https://random-word-api.vercel.app/api?words=1')
        .then(res => res.json())
        .then(data => {
            hangWord = data[0];
            renderWord();
        });
};

generateWord();
