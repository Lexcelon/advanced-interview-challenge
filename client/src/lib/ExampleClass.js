export default class ExampleClass {
  static thaw(exampleClassObj) {
    if (exampleClassObj == null) return null;
    const exampleClass = new ExampleClass();
    if (exampleClassObj.id != null) exampleClass.setID(exampleClassObj.id);
    return exampleClass;
  }

  static thawList(exampleClassObjList) {
    if (exampleClassObjList == null) return [];
    var exampleClasses = [];
    for (var i = 0; i < exampleClassObjList.length; i++) {
      exampleClasses.push(ExampleClass.thaw(exampleClassObjList[i]));
    }
    return exampleClasses;
  }

  static freeze(exampleClass) {
    var exampleClassObj = {};
    if (exampleClass.getID() != null) exampleClassObj.id = exampleClass.getID();
    return exampleClassObj;
  }

  static freezeList(exampleClasses) {
    if (exampleClasses == null) return [];
    var exampleClassObjList = [];
    for (var i = 0; i < exampleClasses.length; i++) {
      exampleClassObjList.push(ExampleClass.freeze(exampleClasses[i]));
    }
    return exampleClassObjList;
  }

  constructor() {
    this.setID(null);
  }

  /* -------------------------
     -------------------------
     -------- SETTERS --------
     -------------------------
     ------------------------- */

  setID(id) {
    this.id = id;
  }

  /* -------------------------
     -------------------------
     -------- GETTERS --------
     -------------------------
     ------------------------- */

  getID() {
    return this.id;
  }

  /* -------------------------
     -------------------------
     -------- HELPERS --------
     -------------------------
     ------------------------- */

  helper() {
    return 'I am a helper function!';
  }
}
