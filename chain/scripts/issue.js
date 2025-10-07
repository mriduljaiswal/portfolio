require("dotenv").config();
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const hre = require("hardhat");

async function main() {
  // Load your deployed contract
  const contractAddr = "0x1C5D39042102C0754E8e259F3Fa20E597E5B1873"; // your deployed address
  const CertRegistry = await hre.ethers.getContractAt("CertRegistry", contractAddr);

  // Path to your PDF (adjust if needed)
  const pdfPath = path.resolve(__dirname, "../public/img/Mridul_Jaiswal.pdf");

  // Compute SHA-256 hash
  const fileBuffer = fs.readFileSync(pdfPath);
  const hashHex = crypto.createHash("sha256").update(fileBuffer).digest("hex");
  const docHash = "0x" + hashHex;

  console.log("📄 Document:", path.basename(pdfPath));
  console.log("🔢 Hash:", docHash);

  // Optional IPFS link (empty string if not uploaded)
  const ipfsCid = "";

  // Send transaction
  const tx = await CertRegistry.issue(docHash, ipfsCid);
  console.log("⛓️  Sending transaction:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ Issued on-chain in block:", receipt.blockNumber);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
