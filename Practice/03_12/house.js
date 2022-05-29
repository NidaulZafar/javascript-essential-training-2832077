class House {
  //define parameters using constructors
  constructor(
    name,
    address,
    city,
    color,
    type,
    size,
    age,
    price,
    vacant,
    bedroom,
    livingroom
  ) {
    // define properties
    this.name = name;
    this.address = address;
    this.city = city;
    this.color = color;
    this.type = type;
    this.size = size;
    this.age = age;
    this.price = price;
    this.vacant = vacant;
    this.rooms = {
      room1: bedroom,
      room2: livingroom,
    };
  }
  //add methods
  reName(newName) {
    this.name = newName;
  }
  diffAddress(newAdd) {
    this.address = newAdd;
  }
  diffCity(newCity) {
    this.city = newCity;
  }
  repaint(diffColor) {
    this.color = diffColor;
  }
  toggleVacant(vacStatus) {
    this.vacant = vacStatus;
  }
}
export default House;
