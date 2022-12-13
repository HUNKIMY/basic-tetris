function Item (title, price){
    //this = ();
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log("가격은" ${price}"원 입니다.");
    }


}
const item1 = new Item("doll", "6");

console.log(item1);
console.log(item1.showPrice());