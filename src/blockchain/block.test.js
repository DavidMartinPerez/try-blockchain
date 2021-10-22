import Block from './block';

describe('Block', () => {

    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2000, 0, 1);
        previousBlock = Block.genesis;
        data = 'testing-block';
        hash = '0';
    });

    it('Create an instance with parameters', () =>{
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it('test main method', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
    })

    it('test hash method', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        expect(hash).toEqual('8f4b54e2f4871c0473c3092e431ac0431ad62ae3895e789074eb7ce31a0b17aa');
    })
})