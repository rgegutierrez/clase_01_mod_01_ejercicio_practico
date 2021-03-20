class SerVivo {
    caminar (nombre) {
        console.log('Ahora esta caminando: ' + nombre);
    }
}
  
class Persona extends SerVivo {
    constructor(nombre) {
        super();
        this.nombre = nombre;
    }

    moverse() {
        return this.caminar(this.nombre);
    }
}

const juanito = new Persona("Juanito");
juanito.moverse();