import Block from './src/blockchain/block';

const block = new Block('a', 'b', 'c', 'd');
const { genesis } = Block;

console.log(block.toString());
console.log(genesis)
