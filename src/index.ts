//import * Crypto from 'crypto-js';

class Block {
    public index :number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timestamp : number;
    constructor (
        index : number,
        hash : string,
        previousHash : string,
        data : string,
        timestamp : number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

static calculateBlockHash = (index:number, previousHash : string, timestamp : number, data : string) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

Block.calculateBlockHash()

const genesisBlock: Block = new Block (0,"2020202020","","Hello",123456)

let blockchain : [Block]  = [genesisBlock.sayHello]

const getBlockchain = () : Block [] => blockchain//?

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];//블록체인 전체 길이 구하기 ?

const getNewTimeStamp = () : number => Math.round(new Date().getTime()/ 1000)

//블록 체인 : 블록의 연결

export {};