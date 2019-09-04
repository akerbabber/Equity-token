// Fetch the Storage contract data from the Storage.json file
const token = artifacts.require("./SecurityToken.sol");
const rules = artifacts.require("./TokenRules.sol");
const registry = artifacts.require("./Registry.sol");


module.exports = function(deployer) {

    return deployer
        .then(() => {
            return deployer.deploy(rules);
        })
        .then(() => rules.deployed())
        .then(() => {
            return deployer.deploy(
                registry,
                rules.address
            );
        })
        .then(() => registry.deployed())
        .then(() => {
            return deployer.deploy(
                token,
                registry.address,
                "TFGT",
                "tfg token"
            );
        })
        ;
};