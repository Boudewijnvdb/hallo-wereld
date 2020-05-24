document.getElementById('postData').addEventListener('submit', postData);



// Get data
const InputData = async () => {
    const apiUrl = "https://wincacademydatabase.firebaseio.com/Boudewijn/Tasks.json"
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const datas = await res.json();
        console.log(datas);
        return datas;
    } catch (error) {
        console.log(error);
    }
}


//transform data
const doSomethingWithData = async function () {
    const result = await InputData();
    let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done
    }));

    //put task in DOM
    tasks.forEach(element => {
        const item = document.createElement('li');
        const takenLijst = document.getElementById('lijst');
        item.innerHTML = element.description
        takenLijst.appendChild(item);
    })
}

doSomethingWithData();


//post data
function postData(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;

    console.log(title);


    fetch("https://wincacademydatabase.firebaseio.com/Boudewijn/Tasks.json", {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify({ description: title, "done": true })
    }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}


