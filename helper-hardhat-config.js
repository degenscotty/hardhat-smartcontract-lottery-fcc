const { ethers } = require("hardhat")

const networkConfig = {
    11155111: {
        name: "sepolia",
    },
    4002: {
        name: "fantom_testnet",
        vrfCoordinator: "0xbd13f08b8352A3635218ab9418E340c60d6Eb418",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x121a143066e0f2f08b620784af77cccb35c6242460b4a8ee251b4b416abaebd4",
        subscriptionId: "490",
        callbackGasLimit: "500000",
        keepersUpdateInterval: "30",
    },
    80002: {
        name: "amoy",
        vrfCoordinator: "0x7E10652Cb79Ba97bC1D0F38a1e8FaD8464a8a908",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x3f631d5ec60a0ce16203bcd6aff7ffbc423e22e452786288e172d467354304c8",
        subscriptionId:
            "82552481492719641598106587877252959688609853062389465704760740256481593202832",
        callbackGasLimit: "500000",
        keepersUpdateInterval: "30",
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0x121a143066e0f2f08b620784af77cccb35c6242460b4a8ee251b4b416abaebd4",
        callbackGasLimit: "500000",
        keepersUpdateInterval: "30",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
