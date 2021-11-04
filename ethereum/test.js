const ethers = require('ethers');

const mnemonic =
  "tray ripple elevator ramp insect butter top mouse old cinnamon panther chief";

let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(mnemonicWallet);
