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

async function get_sub_categories_home() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=6mnmahtt4h48idvd0et8iji2ehl112e4; csrf_cookie_name=00efa4096090fa5a82619f221434628f");

    var formdata = new FormData();
    formdata.append("latitude", "23.2507356");
    formdata.append("longitude", "69.6689201");
    formdata.append("category_id", "213");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://edemand.wrteam.me/api/v1/get_sub_categories", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export default { get_Api_Category, get_sub_categories_home }