const hre = require("hardhat");

async function main() {
  const CertRegistry = await hre.ethers.getContractFactory("CertRegistry");
  const contract = await CertRegistry.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("✅ CertRegistry deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
