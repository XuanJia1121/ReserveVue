export default class Product {

    private name: string;
    private price: BigInt;
    private description: string;
    private cnt: BigInt;

    constructor(name: string, price: BigInt, desc: string, cnt: BigInt) {
        this.name = name;
        this.price = price;
        this.description = desc;
        this.cnt = cnt;
    }

    getName(): string{
        return this.name;
    }

    getDesc(): string{
        return this.description;
    }

    getPrice(): BigInt{
        return this.price;
    }

    getCnt(): BigInt {
        return this.cnt;
    }

}