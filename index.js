const metaButton = document.getElementById("connect-btn")
const address= document.getElementById("address")

metaButton.style.color="red"

window.addEventListener("load",async()=>{
    if(typeof window.ethereum!==undefined){
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]
        address.textContent = account
        console.log(account)

    }else{
        alert("Install Metamask")
    }

})
