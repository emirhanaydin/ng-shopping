export class Recipe {
  public name: string;
  public description: string;
  public imageUri: string;

  constructor(name: string, description: string, imageUri: string) {
    this.name = name;
    this.description = description;
    this.imageUri = imageUri;
  }
}
