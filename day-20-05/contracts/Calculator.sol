// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    uint256 private number;

    // Function to sum two numbers and store the result
    function sumNumber(uint256 _value1, uint256 _value2) public {
        number = _value1 + _value2;
    }

    // Function to get the stored number
    function getNumber() public view returns (uint256) {
        return number;
    }
}