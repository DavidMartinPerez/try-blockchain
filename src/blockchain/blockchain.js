import Block from './block';
import validate from './modules/validate';

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

    replace( newBlocks = [] ) {
        if( newBlocks.length < this.blocks.length ) throw Error('Received chain is not equal lenght');
        try {
            validate(newBlocks);
        } catch(err) {
            throw Error('Received chain is invalid');
        }

        this.blocks = newBlocks;

        return this.blocks;
    }
}

export default Blockchain;