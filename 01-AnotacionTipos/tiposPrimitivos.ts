// ------------------------------
// Tipos de datos primitivos
// ------------------------------

// Strings
let nombre: string = "Juan"
let apellido: string = "Pérez"
let saludo: string = `Hola ${nombre} ${apellido}`

// Numbers
let edad: number = 25;
let precio: number = 99.99;
let binario: number = 0b1010;
let octal: number = 0o777;
let hexadecimal: number = 0xFF;

// Booleans
let activo: boolean = true
let completado: boolean = false

// Null y undefined
let vacio: null = null
let indefinido: undefined = undefined

// ------------------------------
// Tipos de datos especiales
// ------------------------------

// any - Desactiva completamente el sistema de tipos de TypeScript
let anyValue: any = "hola"
let a: number

// unknown - Representa un tipo desconocido de forma segura. TypeScript te obliga a validar el valor antes de usarlo
let desconocido: unknown = "algo"
// Es necesario verificar el tipo antes de usar
if (typeof desconocido === "string") {
    console.log(desconocido.length)
}

// void - representa ausencia de valor (principalemente se usa para funciones)
let sinValor: void = undefined

// never - nunca retorna un valor
function error(): never {
    throw new Error("Hola mundo")
}





