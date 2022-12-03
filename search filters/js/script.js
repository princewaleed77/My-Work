var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var ProductCategoryInput = document.getElementById('ProductCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var mainBtn = document.getElementById('mainBtn');


var products;
if (localStorage.getItem('products') == null) {
    products = [];
}
else {
    products = JSON.parse(localStorage.getItem('products'));
    displayProducts();
};

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: ProductCategoryInput.value,
        desc: productDescInput.value
    };
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    clearForm();
    displayProducts();
    // console.log(products);
};

function clearForm() {
    productNameInput.value = '';
    productPriceInput.value = '';
    ProductCategoryInput.value = '';
    productDescInput.value = '';
};

// to display the product in the table under search input
function displayProducts() {
    var cartona = [];
    for (var i = 0; i < products.length; i++) {
        cartona += `<tr>
    <td>`+ i + `</td>
    <td>`+ products[i].name + `</td>
    <td>`+ products[i].price + `</td>
    <td>`+ products[i].category + `</td>
    <td>`+ products[i].desc + `</td>
    <td> <button class="btn btn-outline-warning" onclick='update(`+ i + `)'>update</button> </td>
    <td> <button class="btn btn-outline-danger" onclick='deleteProduct(`+ i + `)'>delete</button> </td>
    </tr>`;
    };
    document.getElementById("tableBody").innerHTML = cartona;
};

// to delete product
function deleteProduct(productIndex) {
    products.splice(productIndex, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
};

// to search products by category
function searchProductByCategory(searchTerm) {
    var box = ``;
    for (var i = 0; i < products.length; i++) {
        if (products[i].category.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            box += `<tr>
            <td>`+ i + `</td>
            <td>`+ products[i].name + `</td>
            <td>`+ products[i].price + `</td>
            <td>`+ products[i].category + `</td>
            <td>`+ products[i].desc + `</td>
            <td> <button class="btn btn-outline-warning" onclick='update(`+ i + `)'>update</button> </td>
            <td> <button class="btn btn-outline-danger" onclick='deleteProduct(`+ i + `)'>delete</button> </td>
            </tr>`;
            // displayProducts()
        };
    };
    document.getElementById("tableBody").innerHTML = box;
};
// to search products by price
function searchProductByPrice(searchTerm) {
    var box = ``;
    for (var i = 0; i < products.length; i++) {
        if (products[i].price.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            box += `<tr>
            <td>`+ i + `</td>
            <td>`+ products[i].name + `</td>
            <td>`+ products[i].price + `</td>
            <td>`+ products[i].category + `</td>
            <td>`+ products[i].desc + `</td>
            <td> <button class="btn btn-outline-warning" onclick='update(`+ i + `)'>update</button> </td>
            <td> <button class="btn btn-outline-danger" onclick='deleteProduct(`+ i + `)'>delete</button> </td>
            </tr>`;
            // displayProducts()
        };
    };
    document.getElementById("tableBody").innerHTML = box;
};

// to search products by name
function searchProductByName(searchTerm) {
    var box = ``;
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            box += `<tr>
            <td>`+ i + `</td>
            <td>`+ products[i].name + `</td>
            <td>`+ products[i].price + `</td>
            <td>`+ products[i].category + `</td>
            <td>`+ products[i].desc + `</td>
            <td> <button class="btn btn-outline-warning" onclick='update(`+ i + `)'>update</button> </td>
            <td> <button class="btn btn-outline-danger" onclick='deleteProduct(`+ i + `)'>delete</button> </td>
            </tr>`;
            // displayProducts()
        };
    };
    document.getElementById("tableBody").innerHTML = box;
};
// search by id
function searchProductByIndex(searchTerm) {
    var box = ``;
    for (var i = 0; i < products.length; i++) {

        if (searchTerm == i) {
            box += `<tr>
            <td>`+ i + `</td>
            <td>`+ products[i].name + `</td>
            <td>`+ products[i].price + `</td>
            <td>`+ products[i].category + `</td>
            <td>`+ products[i].desc + `</td>
            <td> <button class="btn btn-outline-warning" onclick='update(`+ i + `)'>update</button> </td>
            <td> <button class="btn btn-outline-danger" onclick='deleteProduct(`+ i + `)'>delete</button> </td>
            </tr>`;

        };
        // displayProducts()

    };
    document.getElementById("tableBody").innerHTML = box;
};
// to update a product
function update(productIndex) {
    productNameInput.value = products[productIndex].name;
    productPriceInput.value = products[productIndex].price;
    ProductCategoryInput.value = products[productIndex].category;
    productDescInput.value = products[productIndex].desc;
    mainBtn.innerHTML = "update";
    deleteProduct(productIndex);
    mainBtn.addEventListener("click", function () {
        if (mainBtn.innerHTML == "update") {
            mainBtn.innerHTML = "addProduct";
        }
    });
};

/* we can compine all search criteria in one search input
 by adding all search terms condition inside if and separate them using the (|| or OR) */
