require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide grace father flock shine'; 
let testAccounts = [
"0x7499ca107f97a59de5a15b6822dbf2da64e13cba0d2d60379534ee4d830f45af",
"0x7918ee7215b715c487138f45a8d6fb96001a4382e66986288c14e1d3000b4c90",
"0x8b46f4a45b1d1a8d594e4a060fca7a3f3a38e5866e99714dc642913c59ac2e03",
"0x7a2930c99e0cfe35e0db16a16421c5eee0500f1322986c658c27e9f28540c496",
"0x9a192fc1c662f8c7330a2858fb2e124eaaa29e156fd6fde1e7ffb74cd55e7cb4",
"0x7d3e59e333f604d8b6926b5a1e0a6184b3dc230466c306a62ddb8a4dbad316b3",
"0xb07f9e96b3457e88323155e6c717f2857018b6eb44ac83a4101c9ca128fe2064",
"0x50a9f23469946e76eec34f5dfa9bf8e13322c47c1e911b1fdebc69b25dd77f2b",
"0x3a20670b49a026a91441f6de2814d1ba6fbb89aff301a894fc41d6ad819e4c1d",
"0xf741230056716936e987f41d8f9716fa891c1c56bd63affcd65051963bdb5927"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

