// contracts/Joker.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Joker is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor(string memory _name, string memory _symbol) 
    ERC721(_name, _symbol) {}

    function mint(string memory tokenURI)
        public
        returns (uint256)
    {

        uint256 newItemId = _nextTokenId;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _nextTokenId +=1;

        return newItemId;
    }
}