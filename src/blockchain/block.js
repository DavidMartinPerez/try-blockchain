import { SHA256 } from 'crypto-js';

class Block {
  constructor(
    timestamp,
    previousHash,
    hash,
    data,
  ) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  static get genesis() {
      const timestamp = (new Date(1997,30,4).getTime());
      const data = 'first genesis';
      return new this(timestamp, undefined, Block.hash(timestamp, 0, data), data);
  }

  static mine(previousBlock, data) {
      const { hash: previousHash } = previousBlock;
      const timestamp = Date.now();

      const hash = Block.hash(timestamp, previousHash, data);

      return new this(timestamp, previousHash, hash, data);
  }

  static hash(timestamp, previousHash, data) {
      return SHA256(`${timestamp}${previousHash}${data}`).toString();
  }

  toString() {
    const {
      timestamp,
      previousHash,
      hash,
      data,
    } = this;

    return `
            ######## BLOCK ###############
            TimeStamp    : ${Date.now()}
            previousHash : ${previousHash}
            hash         : ${hash}
            data         : ${data}
        `;
  }
}

export default Block;
