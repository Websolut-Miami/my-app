// a MODEL should be a blueprint for objects we create

export class Recipe {
  // assign 'public' before object (name) to make available all throughout app
  public name: string; 
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name        = name;
    this.description = desc;
    this.imagePath   = imagePath;
  }

}