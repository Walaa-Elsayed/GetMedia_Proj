function shopping_basket_init() {


    let total_shopping_items = localStorage.getItem('total_items');

    if (total_shopping_items === 'undifined' || total_shopping_items == null) {

        total_shopping_items = 0;
        // initialze the total voucher item with 0 until the user add voucher item in shopping basket
        localStorage.setItem('total_items', total_shopping_items);
        document.getElementById('total_basket_items').innerHTML = localStorage.getItem('total_items');


        // initialize the voucher items data values
        let voucher_content = [{
                id: 25,
                name: 'Voucher 25',
                itemPrice: 25,
                qty: 0
            },
            {
                id: 50,
                name: 'Voucher 50',
                itemPrice: 50,
                qty: 0
            },
            {
                id: 75,
                name: 'Voucher 75',
                itemPrice: 75,
                qty: 0
            },
            {
                id: 90,
                name: 'Voucher 90',
                itemPrice: 90,
                qty: 0
            },
            {
                id: 100,
                name: 'Voucher 100',
                itemPrice: 100,
                qty: 0
            },
            {
                id: 200,
                name: 'Voucher 200',
                itemPrice: 200,
                qty: 0
            }
        ];

        //I will add the vouchers data in localstorage 
        localStorage.setItem("voucher_data", JSON.stringify(voucher_content));
    }else{
        document.getElementById('total_basket_items').innerHTML = '('+localStorage.getItem('total_items')+')';
    }


}


// this function used to add voucher item to shopping basket by add the quantity by one to selected voucher  
function add_quantity(btn_id) {



    let voucher_values = JSON.parse(localStorage.getItem("voucher_data"));

    

    for (let i = 0; i < voucher_values.length; i++) {

        if (voucher_values[i].id == btn_id) {
             

            let old_quantity = voucher_values[i].qty;
            let new_q = old_quantity + 1;
            voucher_values[i].qty = new_q;
        }


    }

    let total_basket_items = Number(localStorage.getItem('total_items'));
    total_basket_items = total_basket_items + 1;

    // Update total items on shopping basket on localstorage
    localStorage.setItem('total_items', total_basket_items);

    // Update total items on shopping basket on navbar
    document.getElementById('total_basket_items').innerHTML = total_basket_items;

    //Update the voucher items data with quantity
    localStorage.setItem("voucher_data", JSON.stringify(voucher_values));


    alert('Your £'+btn_id+' Gift Card added to shopping basket');
}


// this function used to show the shoppingg items on dropdown list

function show_basket_items_navbar() {

    let show_items_msg1 = " No items ";
    let show_items_msg2 = "";
    let table_format_part1 = '<table class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Voucher Type</th><th scope="col">Quantity</th><th scope="col">Price</th></tr></thead><tbody>';
    let table_format_part2 = '</tbody></table>';
    let count = 0;
    let price = 0;
    let price_msg = '';

    let voucher_values = JSON.parse(localStorage.getItem("voucher_data"));
    for (let i = 0; i < voucher_values.length; i++) {

        if (voucher_values[i].qty != 0) {

            count = count + 1;
            price = price + (Number(voucher_values[i].itemPrice) * Number(voucher_values[i].qty));

            show_items_msg2 = show_items_msg2 + ' <tr> <th scope="row">' + count + '</th> <td> ' + voucher_values[i].name + '</td><td> ' + voucher_values[i].qty + ' </td><td>' + voucher_values[i].itemPrice + '</td></tr>';

        }

    }

    price_msg = '<br> <p class="font-weight-bold"> Total Price:  ' + price+'</p>';
    // alert(price);

    if (show_items_msg2 != '') {
        document.getElementById('get_basket_items').innerHTML = table_format_part1 + show_items_msg2 + table_format_part2 + price_msg;


    } else {
        document.getElementById('get_basket_items').innerHTML = show_items_msg1;
    }

}


// This Function used to get items on edit shopping basket website page
function get_shopping_basketPage() {

    let show_items_msg1 = " <h3 class='py-3'> No available items. </h3> ";
    let show_items_msg2 = "<h3 class='py-4'> Shooping basket items  </h3> ";
    let table_format_part1 = '<table class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Voucher Type</th><th scope="col">Quantity</th><th scope="col">Price</th></tr></thead><tbody>';
    let table_format_part2 = '</tbody></table>';
    let count = 0;
    let price = 0;
    let price_msg = '';

   

    let voucher_values = JSON.parse(localStorage.getItem("voucher_data"));
    for (let i = 0; i < voucher_values.length; i++) {

        if (voucher_values[i].qty != 0) { 

            count = count + 1;
            price = price + (Number(voucher_values[i].itemPrice) * Number(voucher_values[i].qty));

            show_items_msg2 = show_items_msg2 + ' <tr> <th scope="row">' + count + '</th> <td> ' + voucher_values[i].name + '</td><td> <button type="button" class="btn btn-outline-dark px-3 mx-3" id="'+ voucher_values[i].id +'" onclick = "add_more_voucher(this.id)" > + </button> ' + voucher_values[i].qty + '<button type="button" class="btn btn-outline-dark px-3 mx-3"  onclick = "remove_one_voucher('+voucher_values[i].id+')"> - </button> </td><td>' + voucher_values[i].itemPrice + '</td></tr>';

        }

    }

    price_msg = '<br> <p class="font-weight-bold"> Total Price:  ' + price+'</p>';
    // alert(price);

    if (show_items_msg2 != '') {
        document.getElementById('voucher_items').innerHTML = table_format_part1 + show_items_msg2 + table_format_part2 + price_msg;


    } else {
        document.getElementById('voucher_items').innerHTML = show_items_msg1;
    }


}

// this function used to add more voucher to shopping basket
function add_more_voucher(voucher_id){


    let voucher_values = JSON.parse(localStorage.getItem("voucher_data"));

    for (let i = 0; i < voucher_values.length; i++) {

        if (voucher_values[i].id == voucher_id) {
             

            let old_quantity = voucher_values[i].qty;
            let new_q = old_quantity + 1;
            voucher_values[i].qty = new_q;
        }


    }

    let total_basket_items = Number(localStorage.getItem('total_items'));
    total_basket_items = total_basket_items + 1;

    // Update total items on shopping basket on localstorage
    localStorage.setItem('total_items', total_basket_items);

    // Update total items on shopping basket on navbar
    document.getElementById('total_basket_items').innerHTML = total_basket_items;

    //Update the voucher items data with quantity
    localStorage.setItem("voucher_data", JSON.stringify(voucher_values));


    alert('Your £'+voucher_id+' Gift Card added to shopping basket');

    get_shopping_basketPage();

}


// this function used to remove one voucher
function remove_one_voucher(voucher_id){

    let voucher_values = JSON.parse(localStorage.getItem("voucher_data"));

    for (let i = 0; i < voucher_values.length; i++) {

        if (voucher_values[i].id == voucher_id && voucher_values[i].qty> 0) {
             
            let old_quantity = voucher_values[i].qty;
            let new_q = old_quantity - 1;
            voucher_values[i].qty = new_q;
        }


    }

    let total_basket_items = Number(localStorage.getItem('total_items'));
    total_basket_items = total_basket_items - 1;

    // Update total items on shopping basket on localstorage
    localStorage.setItem('total_items', total_basket_items);

    // Update total items on shopping basket on navbar
    document.getElementById('total_basket_items').innerHTML = total_basket_items;

    //Update the voucher items data with quantity
    localStorage.setItem("voucher_data", JSON.stringify(voucher_values));


    alert(' £'+voucher_id+' Gift Card : removed from shopping basket');

    get_shopping_basketPage();


}

// this function used to remove items from shopping basket
function romove_basket_items(){

        total_shopping_items = 0;
        // initialze the total voucher item with 0 until the user add voucher item in shopping basket
        localStorage.setItem('total_items', total_shopping_items);
        document.getElementById('total_basket_items').innerHTML = localStorage.getItem('total_items');


        // initialize the voucher items data values
        let voucher_content = [{
                id: 25,
                name: 'Voucher 25',
                itemPrice: 25,
                qty: 0
            },
            {
                id: 50,
                name: 'Voucher 50',
                itemPrice: 50,
                qty: 0
            },
            {
                id: 75,
                name: 'Voucher 75',
                itemPrice: 75,
                qty: 0
            },
            {
                id: 90,
                name: 'Voucher 90',
                itemPrice: 90,
                qty: 0
            },
            {
                id: 100,
                name: 'Voucher 100',
                itemPrice: 100,
                qty: 0
            },
            {
                id: 200,
                name: 'Voucher 200',
                itemPrice: 200,
                qty: 0
            }
        ];

        //I will add the vouchers data in localstorage 
        localStorage.setItem("voucher_data", JSON.stringify(voucher_content));


        alert('All basket items removed !');
    
}


function get_location(location){

    window.location.assign(location);

}