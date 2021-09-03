require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan return sad huge hockey civil army giggle'; 
let testAccounts = [
"0x681b4700fb4aecfa8c5072357e4fe07ce527dda6254516046682e7f05aa8020e",
"0x462f163c7e908e62b959ac2958ccd698a211c813f28900f60c1eace41df72804",
"0x0dc43b1786467113ee658c02645c326f3c3157063ca9bfbc468e88e3e77661ec",
"0x6a598430da5070fbef2d6a43d0fae1afbd14acd8ba0432ad60125977dff10f49",
"0x8d9f30e90fb7748f0af3fa396e817d299d5b5b7471fe2035d9863f9b33b2bb5e",
"0xdcaca2f15e62cfd6d634dbad171c01827c6a592e9117822e18dff3cf7c368dab",
"0x0114b653ba01e53cccaa45e59a0213a6cd38c53c2113f95306c92d41a9edde13",
"0x02e9ebcb859d8d87302589a76d2111a5616345184d18b3390e077a5f0cafa18a",
"0xcfbf8c8a6972ee3d147dfb4fb8768e166a9bd7c4eb7fe0d7a28008e55a9fb199",
"0x9f7ce3989afaf45e166eef290be3e7789124074bad2f277534ece7a48cfdffbc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


