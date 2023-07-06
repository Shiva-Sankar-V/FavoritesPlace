class place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //location is map location with latitute and longitude
    this.id = new Date().toString() + Math.random().toString();
  }
}
