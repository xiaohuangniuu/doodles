import { Signer } from "@ethersproject/abstract-signer";
import { task } from "hardhat/config";

task("accounts", "Prints the list of accounts", async (_taskArgs, hre) => {
  const accounts: Signer[] = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }

  // const Token = await (await hre.ethers.getContractFactory("Doodles")).attach("0x9a3f5cc95582622C3d2739212b838d71Fb61F5Fe")
  // console.log(Token);

  // const contractAddress = "0x9a3f5cc95582622C3d2739212b838d71Fb61F5Fe"
  // const myContract = await hre.ethers.getContractAt("Doodles",contractAddress)
  // console.log(myContract)
  // const symbol = await Token.symbol();
  // console.log(symbol)

  const Token = await hre.ethers.getContractFactory("Doodles");

  const hardhatToken = await Token.deploy();
  console.log(hardhatToken.address);
  const ownerBalance = await hardhatToken.symbol();
  console.log(ownerBalance);
});
