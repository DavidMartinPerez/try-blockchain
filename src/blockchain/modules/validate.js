import Block from "../block";

export default (blockchain) => {

    const [ genesisBlock, ...blocks] = blockchain;

    if( JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis) ) throw Error('Invalid Genesis block.')

    for( let i = 0; i < blocks.length; i +=1 ) {
        const { previousHash, timestamp, hash, data} = blocks[i];
        const previousBlock = blockchain[i];

        //Comprobamos que el previous hash sea el mismo que el del bloque anterior
        if(previousBlock.hash !== previousHash) throw Error('Invalid previous hash.');
        //Copmprobamos que el hash sea generado correctamente
        if(hash !== Block.hash( timestamp, previousHash, data ) ) throw Error('Invalid Hash.')

    }

    return true;
}