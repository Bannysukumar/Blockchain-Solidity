const walletBtn = document.getElementById("wallet-btn")
const walletAddress = document.getElementById("wallet-address")

const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")

const result = document.getElementById("result")

const contractAddress = "0x393f51DFBc66239DF7AFDE54316A6CbFC5d3f7f2"
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_value2",
				"type": "uint256"
			}
		],
		"name": "sumNumber",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let userAccount;

async function connectWallet(){

    if(window.ethereum){
        try{
            const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
            userAccount = accounts[0]
			web3 = new Web3(window.ethereum);
      		contract = new web3.eth.Contract(contractABI, contractAddress);
            walletAddress.textContent = userAccount
        }catch(err){
            console.log(err)
        }
    }
}

async function simpleSum() {
	if(!userAccount){
		alert("Please Connect the Wallet")
	}
	try{
		await contract.methods.sumNumber(value1.value,value2.value).send({from:userAccount})
		alert("Numbers stored successfully")
	}catch(err){
		console.log(err)
		alert("Error occured",err)
	}
}

async function getValue() {

	if(value1.value === "" || value2.value === ""){
		alert("enter the values")
	}
	try{
		const result = await contract.methods.getNumber().call();
		result.textContent = result

	}catch(err){
		console.log("ERROR")
	}
}