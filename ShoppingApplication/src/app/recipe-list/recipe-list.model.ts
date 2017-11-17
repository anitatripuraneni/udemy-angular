export class Recipe {
  public name: String;
  public desc: String;
  public imagePath: String;

  constructor(name: String, desc: String, imagePath: String) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}
