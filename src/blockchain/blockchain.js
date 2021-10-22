import Block from './block';

class Blockchain {
    constructor() {
        this.blocks = [Block.genesis];
    }

    getLastBlock() {
        return this.blocks[this.blocks.length -1];
    }

    addBlock(data) {
        const previousBlock = this.getLastBlock();

        const block = Block.mine(previousBlock, data);

        this.blocks.push(block);

        return block;
    }
}

export default Blockchain;