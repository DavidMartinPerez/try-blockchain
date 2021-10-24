import Block from './block';
import Blockchain from './blockchain';

describe('Blockchain', () => {

    let blockchain;
    let newBlockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
        newBlockchain = new Blockchain();
    });

    it('every blockchain has a genesis blockchain', () =>{
        const [ genesisBlock ] = blockchain.blocks;
        expect(genesisBlock).toEqual(Block.genesis);
    });

    it('test addBlock method', () => {
        blockchain.addBlock('testing');

        expect(blockchain.getLastBlock().data).toEqual('testing');
    })

    it('test replace method replaces the chain with a valid chain', () => {
        newBlockchain.addBlock('bb1');

        blockchain.replace(newBlockchain.blocks);

        expect(blockchain.blocks).toEqual(newBlockchain.blocks);
    })

    it('test replace method does not replaces the chain for invalid length', () => {
        blockchain.addBlock('bb1');

        expect(() => blockchain.replace(newBlockchain.blocks)).toThrowError('Received chain is not equal lenght');
    })

    it('test replace method does not replaces the chain for invalid chain', () => {
        newBlockchain.addBlock('bb1');
        newBlockchain.addBlock('bb1');
        newBlockchain.blocks[1].hash = 'h4ck3rr'

        expect(() => blockchain.replace(newBlockchain.blocks)).toThrowError('Received chain is invalid');
    })
})