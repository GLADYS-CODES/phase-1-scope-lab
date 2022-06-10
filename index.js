var customerName = 'bob'
const leastFavoriteCustomer = 'some intial value'
var bestCustomer; 



function setBestCustomer() {
    bestCustomer = 'not bob'
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()

}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'billy'
}
