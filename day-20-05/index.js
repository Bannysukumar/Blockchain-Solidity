const walletBtn = document.getElementById("wallet-btn")
const walletAddress = document.getElementById("wallet-address")

const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")

const result = document.getElementById("result")

const contractAddress = "0x66793032e92d4cdd1d0af0e536340c435b07c77f"
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
    if(!userAccount){
        alert("Please Connect the Wallet")
        return;
    }
    try{
        const sumResult = await contract.methods.getNumber().call();
        result.textContent = sumResult;
    }catch(err){
        console.log("ERROR", err);
        alert("Error occurred while getting the sum");
    }
}