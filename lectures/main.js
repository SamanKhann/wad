
var cu=0;
var acc=
{
    atitle: "Saman",
    availableBal: 4000,
    accCurrency: "PKRS",
    iBAN: "PKN12345678",
   deposit:  function(e,v) {
       var t = parseInt(v);
       if (isNan(t) == true) {
           document.getElementById("deposit-msg").innerHTML="Error , enter a num";
       }


       deposit = document.getElementbyid("deposit");
       if (event.keyCode == 13 || value.key == "Enter") {
           deposit = acc.availableBal + deposit;
           acc.availableBal += deposit
       }
   }
};
function displayd() {
    document.getElementById("title").innerHTML = acc.atitle;
    document.getElementById("balance").innerHTML = acc.availableBal;
    document.getElementById("currency").innerHTML = acc.accCurrency;
    document.getElementById("IBAN").innerHTML = acc.iBAN;
}
displayd();

