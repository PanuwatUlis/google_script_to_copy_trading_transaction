function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Data/Support')

      .addSubMenu(ui.createMenu("Copy & Paste")
               .addItem("1. tab 01 to 158","moveValuesOnly")
               .addItem("2. tab 159 to 278", "moveValuesOnly2")
               .addItem("3. tab 279 to 358", "moveValuesOnly3"))
      .addSeparator()
      .addSubMenu(ui.createMenu("Clear Data")  
               .addItem("Delete", "clearData"))
  
       .addToUi();
}      