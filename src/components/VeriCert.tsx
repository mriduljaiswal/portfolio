import { useState } from "react";
import { ethers } from "ethers";
import abi from "../abi/CertRegistry.json";

const RPC = "https://rpc-amoy.polygon.technology";
const CONTRACT = "0x1C5D39042102C0754E8e259F3Fa20E597E5B1873"; // replace later

export default function VeriCert() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [issuer, setIssuer] = useState("");

  async function verifyFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setStatus("");
    setIssuer("");

    // compute SHA-256
    const buffer = await file.arrayBuffer();
    const hash = await crypto.subtle.digest("SHA-256", buffer);
    const hex = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, "0")).join("");

    // read from blockchain
    const provider = new ethers.JsonRpcProvider(RPC);
    const contract = new ethers.Contract(CONTRACT, abi, provider);
    const record = await contract.records("0x" + hex);

    if (record.issuer === ethers.ZeroAddress) {
      setStatus("❌ Not verified on blockchain");
    } else {
      setStatus("✅ Verified on blockchain");
      setIssuer(record.issuer);
    }
    setLoading(false);
  }

  return (
    <section id="vericert" className="py-20 flex flex-col items-center text-center bg-dark-bg">
      <h2 className="text-3xl font-bold mb-6">VeriCert — Blockchain Document Verifier</h2>
      <p className="max-w-xl text-gray-400 mb-8">
        Upload my resume letter to verify its authenticity.
        Your file never leaves your device — we only compute its hash locally
        and check the blockchain for a match.
      </p>

      <input
        type="file"
        onChange={verifyFile}
        className="text-sm cursor-pointer mb-6"
      />

      {loading && <p>⏳ Checking blockchain...</p>}
      {status && (
        <div className="bg-gray-800 rounded-xl p-4 mt-2">
          <p>{status}</p>
          {issuer && (
            <a
              href={`https://amoy.polygonscan.com/address/${issuer}`}
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 text-sm"
            >
              View Issuer on PolygonScan
            </a>
          )}
        </div>
      )}
    </section>
  );
}
