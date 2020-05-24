// Get data
const InputData = async () => {
    const apiUrl = "https://wincacademydatabase.firebaseio.com/Boudewijn/Tasks.json"
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const datas = await res.json();
        return datas;
    } catch (error) {
        console.log(error);
    }
}


//post data
function postData() {
    let task = document.getElementById('vul').value;

    fetch("https://wincacademydatabase.firebaseio.com/Boudewijn/Tasks.json", {
        method: 'POST',
        body: JSON.stringify({ description: task, "done": true })
    }).then((res) => res.json())
        .then((data) => console.log(data))
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

    doSomethingWithData();



}


//Delete data
const DeleteData = async () => {


    const apiUrl = `https://wincacademydatabase.firebaseio.com/Boudewijn/Tasks/${hashid}.json`
    try {
        const res = await fetch(apiUrl, { method: "DELETE" });
        const datas = await res.json();
        return datas;
    } catch (error) {
        console.log(error);
    }
}




