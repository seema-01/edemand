/*Default Api calling
Default location Bhuj  */

var formdata = new FormData();
formdata.append("latitude", "23.2507356");
formdata.append("longitude", "69.6689201");

/* Home Service  */
var HomeCleaning = new FormData();
HomeCleaning.append("latitude", "23.2507356");
HomeCleaning.append("longitude", "69.6689201");
HomeCleaning.append("category_id", "213");

/*Laundry Service */
var LaundryService = new FormData();
LaundryService.append("latitude", "23.2507356");
LaundryService.append("longitude", "69.6689201");
LaundryService.append("category_id", "222");

/*Car Service */
var CarService = new FormData();
CarService.append("latitude", "23.2507356");
CarService.append("longitude", "69.6689201");
CarService.append("category_id", "259");

/*Plumbing Service */
var PlumbingService = new FormData()
PlumbingService.append("latitude", "23.2507356");
PlumbingService.append("longitude", "69.6689201");
PlumbingService.append("category_id", "240");


/* function for fetching Category  */
async function get_Api_Category() {

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

/*  function for fetching Home Services */
async function get_categories_home() {

    var requestOptions = {
        method: 'POST',
        body: HomeCleaning,
        redirect: 'follow'
    };

    fetch("https://edemand.wrteam.me/api/v1/get_sub_categories", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


/*  function for fetching laundry Services */
async function get_categories_laundry() {

    var requestOptions = {
        method: 'POST',
        body: LaundryService,
        redirect: 'follow'
    };

    fetch("https://edemand.wrteam.me/api/v1/get_sub_categories", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


/*  function for fetching plumbing Services */
async function get_categories_plumbing() {

    var requestOptions = {
        method: 'POST',
        body: PlumbingService,
        redirect: 'follow'
    };

    fetch("https://edemand.wrteam.me/api/v1/get_sub_categories", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


/*  function for fetching car Services */
async function get_categories_car() {

    var requestOptions = {
        method: 'POST',
        body: CarService,
        redirect: 'follow'
    };

    fetch("https://edemand.wrteam.me/api/v1/get_sub_categories", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

/*Exporting all Functions for reuseing in differnt components*/
export default { get_Api_Category, 
            get_categories_home,
            get_categories_laundry,
            get_categories_plumbing, 
            get_categories_car
        }

/** This code is for fetchig datas from api
 * api: https://edemand.wrteam.me/api/v1/
 * Code created br Dhruv
 */