const CaravanBoard = artifacts.require("CaravanBoard.sol")

module.exports = function(deployer) {
  deployer.deploy(CaravanBoard);
};
