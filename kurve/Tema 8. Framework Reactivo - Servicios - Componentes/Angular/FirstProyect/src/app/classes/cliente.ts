export class Cliente {
    public nit: string;
    public primerNombre: string;
    public segundoNombre: string;
    public primerApellido: string;
    public segundoApellido: string;
    public fechaNacimiento: Date;
    public salario: number;
    public activo: boolean;

    constructor(nit: string, primerNombre: string, 
        segundoNombre: string, primerApellido: string, 
        segundoApellido: string, fechaNacimiento: Date, 
        salario: number, activo: boolean) {
        this.nit = nit;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;  
        this.segundoApellido = segundoApellido;
        this.fechaNacimiento = fechaNacimiento;
        this.salario = salario;
        this.activo = activo;
    }

}