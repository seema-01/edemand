 async function get_Api_Category() {
    var formdata = new FormData();
    formdata.append("latitude", "23.2507356");
    formdata.append("longitude", "69.6689201");

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://edemand.wrteam.me/api/v1/get_categories", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

 async function get_categories(){
    console.log("hi")
}

export default {get_Api_Category , get_categories }