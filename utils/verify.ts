import { run } from "hardhat";
import { Address } from "hardhat-deploy/dist/types";

export const verify = async (contractAddress: Address, args: any) => {
  console.log("Verifying contract...");
  try {
    console.log("start");
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
};
