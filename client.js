console.log('sourced');

class Monster {
    constructor(height, weight, fur) {
        this.height = height;
        this.weight = weight;
        this.fur = fur;
    }
};

class Yeti extends Monster {

}

let yeti = new Monster(7, 540, 'white');
console.log(yeti);

howScary(scariness) {
    if (this.height > 8 && this.weight > 350) {
        scariness = 'Scary as fuck!';
    } else {
        scariness = 'Not that scary...';
    }
}// end of howScary method

let locness = new Monster()



