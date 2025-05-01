// * DEFINICIÓN DE CLASES

class Point {
    // ^ Campos - Fields
    x: number = 10;
    y: number = 10;

    // ^ Metodos
    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}