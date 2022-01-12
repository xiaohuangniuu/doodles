import { task } from "hardhat/config";

task("testContract", "Prints the list of accounts", async (_taskArgs, hre) => {
  // const accounts: Signer[] = await hre.ethers.getSigners();
  //
  // for (const account of accounts) {
  //   console.log(await account.getAddress());
  // }
  const contractAddress = "0x9a3f5cc95582622C3d2739212b838d71Fb61F5Fe";
  const myContract = await hre.ethers.getContractAt("Doodles", contractAddress);
  console.log(myContract);
});
