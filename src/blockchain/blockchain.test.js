import Block from './block';
import Blockchain from './blockchain';

describe('Blockchain', () => {

    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('every blockchain has a genesis blockchain', () =>{
        const [ genesisBlock ] = blockchain.blocks;
        expect(genesisBlock).toEqual(Block.genesis);
    });

    it('test addBlock method', () => {
        blockchain.addBlock('testing');

        expect(blockchain.getLastBlock().data).toEqual('testing');
    })
})