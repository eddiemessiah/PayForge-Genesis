// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title ConfidentialPayroll
/// @notice Mocks Fully Homomorphic Encryption (FHE) logic for the demo.
/// In a real Zama fhEVM environment, `uint256` would be replaced with `euint32`/`euint64` 
/// and arithmetic would use `TFHE.add`, `TFHE.sub`, etc.
contract ConfidentialPayroll {
    address public owner;
    
    // Encrypted treasury balance mock
    uint256 private treasuryBalance;
    
    struct Employee {
        address wallet;
        uint256 encryptedSalary; // Mocks FHE encrypted value
        bool isActive;
    }
    
    mapping(address => Employee) public employees;
    address[] public employeeList;

    event TreasuryFunded(uint256 amount);
    event EmployeeAdded(address indexed wallet);
    event SalaryClaimed(address indexed wallet);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function fundTreasury() external payable onlyOwner {
        treasuryBalance += msg.value;
        emit TreasuryFunded(msg.value);
    }

    function addEmployee(address _wallet, uint256 _encryptedSalaryMock) external onlyOwner {
        require(!employees[_wallet].isActive, "Already active");
        
        employees[_wallet] = Employee({
            wallet: _wallet,
            encryptedSalary: _encryptedSalaryMock,
            isActive: true
        });
        employeeList.push(_wallet);
        
        emit EmployeeAdded(_wallet);
    }

    function claimSalary() external {
        Employee storage emp = employees[msg.sender];
        require(emp.isActive, "Not an active employee");
        require(treasuryBalance >= emp.encryptedSalary, "Insufficient treasury");
        
        // FHE logic mock:
        // treasuryBalance = TFHE.sub(treasuryBalance, emp.encryptedSalary);
        treasuryBalance -= emp.encryptedSalary;
        
        (bool success, ) = msg.sender.call{value: emp.encryptedSalary}("");
        require(success, "Transfer failed");
        
        emit SalaryClaimed(msg.sender);
    }

    function getTreasuryBalance() external view onlyOwner returns (uint256) {
        // In fhEVM, returning an encrypted value requires a re-encryption step or access control
        return treasuryBalance;
    }
}
