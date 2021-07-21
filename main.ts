//Import clase Professional
import { Professional } from "./professional";

//Declaración objetos de la clase Professional
let persona1:Professional = new Professional ("Juan Mendoza", 45,
"Masculino", 90, 1.88, "Marrón", "Verdes", "Hispano", false,
"Venezolano", 1, "Actor");
let persona2:Professional = new Professional ("Ed Churchill", 15,
"Masculino", 60, 1.68, "Negro", "Marrones", "Caucasico", false,
"Inglés", 0, "Actor secundario");
let persona3:Professional = new Professional ("Stephanie Candés", 31,
"Femenino", 67, 1.73, "Rubio", "Azules", "Hispana", false,
"Colombiana", 0, "Editora");
let persona4:Professional = new Professional ("Beatriz Buendía", 68,
"Femenino", 60, 1.58, "Blanco", "Marrones", "Negra", true,
"Canadiense", 4, "Guinista");
let persona5:Professional = new Professional ("Richard Lafeunet", 77,
"Masculino", 100, 1.99, "Negro", "Negros", "Negro", false,
"Francés", 2, "Director de cine");
persona1.printAll();
persona2.printAll();
persona3.printAll();
persona4.printAll();
persona5.printAll();