import { Cliente } from '../classes/cliente';

export class Lista {
    public lstInfo(){
        let lst: Cliente[] = [];
        lst.push(new Cliente("123456789", "Duvan", "", "Mejia", "", new Date(2000, 12, 15), 0, true));
        lst.push(new Cliente("123456789", "Sebas", "", "Perez", "", new Date(2000, 12, 15), 0, true));
        return lst;
    }

    public lstInfoDynamic() {
        let lst: Cliente[] = [];

        for (let i = 0; i < 10; i++) {
            lst.push(new Cliente("123456789" + i.toString(), "Cliente " + (i + 1).toString(), "", "Mejia", "", new Date(2000, 12, 15), 800000 * (i + 1), true));
        }
        return lst;
    }
}