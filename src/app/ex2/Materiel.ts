export class Materiel
{
    private _nom: string;
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    private _image: string;
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    private _reference: string;
    public get reference(): string {
        return this._reference;
    }
    public set reference(value: string) {
        this._reference = value;
    }
    private _prix: number;    
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    private _repare: string;
    public get repare(): string {
        return this._repare;
    }
    public set repare(value: string) {
        this._repare = value;
    }

    constructor(nom:string, refe:string, img:string,prix:number, rep:string)
   {
    this._nom = nom;
    this._reference =refe;
    this._image =img;
    this._prix=prix;
    this._repare = rep;
   }
}