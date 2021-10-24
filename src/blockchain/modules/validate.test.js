import Blockchain from '../blockchain';
import blockchain from '../blockchain';
import validate from './validate';

describe('test validate blocks', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('validate a valid chain', () => {
        blockchain.addBlock('bsbs1');
        blockchain.addBlock('bsbs2');

        expect( validate(blockchain.blocks) ).toBe(true);
    });

    it('invalidate a chain with a corrupt genesis block', () => {
        blockchain.blocks[0].data = 'h4ck3r';

        expect( () => validate(blockchain.blocks) ).toThrowError('Invalid Genesis block.');
    });

    it('invalidate a chain with a corrupt previousHash', () => {
        blockchain.addBlock('block-4');
        blockchain.blocks[1].previousHash = 'h4ck3r22';

        expect( () => validate(blockchain.blocks) ).toThrowError('Invalid previous hash.');
    });

    it('invalidate a chain with a corrupt hash', () => {
        blockchain.addBlock('block-4');
        blockchain.addBlock('block-2');
        blockchain.blocks[1].hash = 'h4ck3r2233';

        expect( () => validate(blockchain.blocks) ).toThrowError('Invalid Hash.');
    });
})