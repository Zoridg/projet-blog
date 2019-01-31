export class Post {

  loveIts: number;
  created_at: Date;

  constructor(public title: string, public contenu: string){
    this.created_at = new Date();
    this.loveIts = 0;
  }

}
