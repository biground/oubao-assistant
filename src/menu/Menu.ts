
export class Menu {
    private static _ins;
    constructor() {}
    public static get ins(): Menu {
      if (!Menu._ins) {
        Menu._ins = new Menu();
      }
      return Menu._ins;
    }
    showMenu() {
        
    }
}