export class Livre
{

    constructor(private _titre: string,
        private _auteur,
        private _prix: number,
        private _note: number)
        {    }

    public get titre(): string {
            return this._titre;
    }
    public set titre(value: string) {
            this._titre = value;
     }

     public get auteur()     {
         return this._auteur;
     }
     public set auteur(value:string){
         this._auteur = value;
     }
     public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get note(): number {
        return this._note;
    }
    public set note(value: number) {
        this._note = value;
    }
    
}