class Machines {
  constructor(brand, color, size, isWorking, place, isWifi, isRemote, isNew) {
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.isWorking = isWorking;
    this.place = place;
    this.features = {
      isRemote: isRemote,
      isWifi: isWifi,
    };
    this.isNew = isNew;
  }
  reBrand(another) {
    this.brand = another;
  }
  rePaint(newColor) {
    this.color = newColor;
  }
  reSize(newSize) {
    this.size = newSize;
  }
  workingCond(state) {
    this.isWorking = state;
  }
  changePlace(location) {
    this.place = location;
  }
  newFeat(a, b) {
    this.features.isRemote = a;
    this.features.isWifi = b;
  }
  bought(condition) {
    this.isNew = condition;
  }
}
export default Machines;
