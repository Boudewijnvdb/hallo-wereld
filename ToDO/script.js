const subknop = document.getElementById('postData')
const buttons = document.querySelectorAll("button");



subknop.addEventListener('submit', postData);

//transform data
const doSomethingWithData = async function () {
    const result = await InputData();
    let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done
    }));

    console.log(tasks);

    //put task in DOM
    tasks.forEach(element => {
        const item = document.createElement('li');
        const takenLijst = document.getElementById('lijst');
        item.innerHTML = element.description
        takenLijst.appendChild(item);
        const but = document.createElement('button');
        but.innerHTML = "delete";
        item.appendChild(but);
        but.value = element.id;
        but.addEventListener('click', DeleteData);
    })
}

doSomethingWithData();




