'use strict';

function getUser() {
    fetch(`https://api.github.com/users/${namer}/repos`)
        .then(response => response.json())
        .then(responseJson =>
            consoleResponse(responseJson))

        .catch(error => alert('not working'));

}


function consoleResponse(responseJson) {
    let data = responseJson;
    data.push(responseJson);
    console.log(responseJson);

    console.log(data);
    console.log(data.length);
    

    

    for (let i = 0; i < (responseJson.length-1); i++) {

       $(".results").append(
       `<li><p>${responseJson[i].name}</p>
        <h3><a href="${responseJson[i].url}">${responseJson[i].url}</a></h3>
        </li>`
        )
    };


}




let namer = [];






function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
        namer.shift();
        namer.push(document.getElementById('myForm').value);
        getUser();

    });
}








$(function () {
    console.log('Go ahead User Submit');
    submitForm();


});