// let promise = fetch("https://github.com/deannakazawa?tab=followers")
// let response = await fetch()
// if (response.ok) {
//     let json = await response.json();
// } else {
//     alert("HTTP-Error: " + response.status);
// }


function getUserFollower() {
    let div =
        document.getElementById("list");
    fetch("https://api.github.com/users/deannakazawa/followers")
        .then(res => res.json()) //untuk mem"parse" datanya, bawaan dari "fetch"
        .then(follower => {
            //disini "follower" adalah hasil dari res.json()diatas
            //karena bentuk dari follower adalah "array" maka bisa di pakaikan method
            //"map()" / "forEach"

            // console.log(follower)

            follower.map(data => {
                const img = document.createElement("img");
                const div = document.createElement("div")
                div.style.width = "25%"
                div.style.height = "500px"
                div.innerText = data.login
                img.setAttribute("src", data.avatar_url);
                div.appendChild(img)
                list.appendChild(div);
            });
        });


    //user api github
    //reference : https://appdividend.com/2018/08/20/javascript-fetch-api-example-tutorial/#:~:targetText=Javascript%20Fetch%20API%20provides%20a,the%20response%20of%20the%20request.
    //https://attacomsian.com/blog/using-javascript-fetch-api-to-get-and-post-data
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}