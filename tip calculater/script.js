let btn=document.querySelector("#btn")
let tipamount=document.querySelector("#tipamount");
let bill=document.querySelector("#bill");
function tipCal(){
    let Amount=parseInt(document.querySelector("#amound").value);
    let Tip=parseInt(document.querySelector("#tip").value);
    let msg=document.querySelector("#message");

    if (isNaN(Amount) || isNaN(Tip) || Amount <= 0 || Tip < 0) {
        msg.innerHTML = "Please enter valid positive numbers for both fields.";
        tipamount.innerHTML = "";
        bill.innerHTML = "";
        return;
    }

    // let tipamount2=Amount*(Tip/100);
    let tipamount2=Tip;
    let billamount=(Amount)+(tipamount2);
    tipamount.innerHTML="Tip Amount:"+tipamount2+"/-";
    bill.innerHTML="Bill Amount:"+ billamount+"/-";

}
btn.addEventListener("click",tipCal);