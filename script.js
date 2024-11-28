document.addEventListener('DOMContentLoaded', function() {
    
    if(chrome.storage.local.get(["fake_robux_ext_state"])){
        chrome.storage.local.get(["fake_robux_ext_state"]).then((result) => {
            if(result.fake_robux_ext_state == undefined){
                chrome.storage.local.set({ "fake_robux_ext_state": false });
                document.getElementById("btnactivate").innerHTML = "Inactive";
                document.getElementById("btnactivate").classList.remove("green");
            }
            else{
                if(result.fake_robux_ext_state == true){
                    document.getElementById("btnactivate").innerHTML = "Active ✓";
                    document.getElementById("btnactivate").classList.add("green");
                }
                else{
                    document.getElementById("btnactivate").innerHTML = "Inactive";
                    document.getElementById("btnactivate").classList.remove("green");
                }
            }
        });
    }
    else{
        //SI le localstorage n'existe pas on le crée
        chrome.storage.local.set({ "fake_robux_ext_state": false });
    }


    if(chrome.storage.local.get(["fake_robux_ext_amount"])){
        chrome.storage.local.get(["fake_robux_ext_amount"]).then((result) => {
          if(result.fake_robux_ext_amount == undefined){
            chrome.storage.local.set({ "fake_robux_ext_amount": 0 });
            document.getElementById("inputamount").value = 0;
          }
          else{
            document.getElementById("inputamount").value = Number(result.fake_robux_ext_amount);
          }
        });
    }



    //Quand on clique sur le bouton
    document.getElementById("btnactivate").addEventListener("click", function(){
        chrome.storage.local.get(["fake_robux_ext_state"]).then((result) => {
            if(result.fake_robux_ext_state == true){
                document.getElementById("btnactivate").innerHTML = "Inactive";
                document.getElementById("btnactivate").classList.remove("green");
                chrome.storage.local.set({ "fake_robux_ext_state": false });
            }
            else{
                document.getElementById("btnactivate").innerHTML = "Active ✓";
                document.getElementById("btnactivate").classList.add("green");
                chrome.storage.local.set({ "fake_robux_ext_state": true });
            }
        });
    });


    //Quand on entre une nouveau montant
    document.getElementById("inputamount").addEventListener("input", function(){
        chrome.storage.local.set({ "fake_robux_ext_amount": document.getElementById("inputamount").value });
    });


})