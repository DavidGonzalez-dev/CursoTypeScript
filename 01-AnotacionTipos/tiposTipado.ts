// --------------------------
// Tipos de Tipado en TS
// --------------------------

// Tipos de union - una varibale puede tomar varios tipos
let idPersona: string | number;
idPersona = "ABC123"
idPersona = 12345

// Tipos literales
let codigo: 200 | 404 | 500
codigo = 200 // ✅ válido
// codigo = 201 // ❌ error


// Inferecia de Tipos en variables
let ciudad = "Bogotá"; // TypeScript sabe que es string
let poblacion = 8000000; // TypeScript sabe que es number
let internacional = true; // TypeScript sabe que es boolean

// Inferencia de tipos con arrays
let colores = ["rojo", "verde", "azul"]; // string[]
let edades = [25, 30, 35]; // number[]

// Inferencia de tipo con objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    activo: true
}; // TypeScript infiere la estructura completa


// Cuando usar anotaciones de tipo explicitas?

// Usa inferencia cuando el tipo es obvio
let mensaje = "Hola mundo"; // Claro que es string
let contador = 0; // Claro que es number

// Usa anotaciones explícitas cuando:
// 1. Declaras sin inicializar
let email: string;
email = "usuario@email.com";

// 2. El tipo no es obvio
let datos: string | null = obtenerDatos();

// 3. Quieres ser más específico
let estado: "idle" | "loading" | "done" = "idle";

// 4. Para documentar intención
let porcentaje: number = 0.85; // Más claro que sea number