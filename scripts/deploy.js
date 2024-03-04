const { ethers } = require("hardhat");

async function main() {
  const Joker = await ethers.getContractFactory("Joker");

  const joker = await Joker.deploy("Joker", "J")
  await joker.waitForDeployment();
  console.log('Success! Contract was deployed to: ', joker.address)
  await joker.mint("https://ipfs.io/ipfs/QmWTgYYZzGv917JRhs9NKwBJAuY3qzoFZk3GM19NVacokS")

  console.log("NFT minted");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});