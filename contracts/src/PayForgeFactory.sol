// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ConfidentialPayroll.sol";

contract ZamaPayFactory {
    event PayrollCreated(address indexed employer, address payrollAddress);

    function createPayroll() external returns (address) {
        ConfidentialPayroll newPayroll = new ConfidentialPayroll(msg.sender);
        emit PayrollCreated(msg.sender, address(newPayroll));
        return address(newPayroll);
    }
}
