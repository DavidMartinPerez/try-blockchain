import Block from './src/blockchain/block';

const { genesis } = Block;
console.log(genesis)

const block1 = Block.mine(genesis, 'd4t4-1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'd4t4-2');
console.log(block2.toString());
