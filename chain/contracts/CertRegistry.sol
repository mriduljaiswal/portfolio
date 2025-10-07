// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CertRegistry {
    struct Record {
        address issuer;
        uint64 issuedAt;
        string ipfsCid;
    }

    mapping(bytes32 => Record) public records;

    event Issued(bytes32 indexed docHash, address indexed issuer, uint64 issuedAt, string ipfsCid);

    function issue(bytes32 docHash, string calldata ipfsCid) external {
        require(records[docHash].issuer == address(0), "already issued");
        records[docHash] = Record({
            issuer: msg.sender,
            issuedAt: uint64(block.timestamp),
            ipfsCid: ipfsCid
        });
        emit Issued(docHash, msg.sender, uint64(block.timestamp), ipfsCid);
    }
}
