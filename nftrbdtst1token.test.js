// Right click on the script name and hit "Run" to execute
//const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Nftrbdtst1Token", function () {
   it("test updating value", async function () {
    const Nftrbdtst1Token = await ethers.getContractFactory("Nftrbdtst1Token");
    const nftrbdtst1Token = await Nftrbdtst1Token.deploy();
    await nftrbdtst1Token.deployed();
    const nftrbdtst1Token2 = await ethers.getContractAt("Nftrbdtst1Token", nftrbdtst1Token.address);
    const setValue = await nftrbdtst1Token2.awardItem("0x3BB55ff9eFb99Aa1BDa5E7559B52541dc03A9D91","https://skygallery.net/Nftasset/item-id-8u5h2m.json");
    await setValue.wait();
    console.log('Nftrbdtst1Token id:'+ setValue)
  });
});

