// ----------------------------
// Arrays Tipados
// ----------------------------

// Sintaxis con corchetes
let numeros: number[] = [1, 2, 3, 4, 5,]
let nombres: string[] = ["Ana", "Luis", "Pedro"]
let booleanso: boolean[] = [true, false, true]

// Sintaxis con inferencia
let miArray = ["hola", 2, true] // Tipo = (string | number | boolean)[]

// Sintaxis con Array<tipo>
let productos: Array<string> = ["laptop", "mouse", "teclado"]
let precios: Array<number> = [100, 50, 80]

// Arrays mixtos con tipos de union
let mixto: (string | number)[] = ["texto", 42, "otro texto", 100];

// Tipos de union
let id: string | number;
id = "ABC123"
id = 12345

//