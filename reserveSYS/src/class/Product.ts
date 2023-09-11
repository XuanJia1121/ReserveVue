export default class Protal {

    private name: string;
    private price: BigInt;
    private desc: string;

    constructor(name: string, price: BigInt, desc: string) {
        this.name = name;
        this.price = price;
        this.desc = desc;
    }

    getName(): string{
        return this.name;
    }

    getDesc(): string{
        return this.desc;
    }

    getPrice(): BigInt{
        return this.price;
    }

}