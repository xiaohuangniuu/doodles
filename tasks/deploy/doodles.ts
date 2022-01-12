import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Doodles } from "../../src/types/Doodles";
import { Doodles__factory } from "../../src/types/factories/Doodles__factory";

task("deploy:Doodles").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const doodlesFactory: Doodles__factory = <Doodles__factory>await ethers.getContractFactory("Doodles");
  const doodles: Doodles = <Doodles>await doodlesFactory.deploy();
  await doodles.deployed();
  console.log("Doodles deployed to: ", doodles.address);
});
