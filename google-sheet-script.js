/**
 * INSTRUCCIONES PARA INSTALAR EN GOOGLE SHEETS:
 * 
 * 1. Crea una nueva hoja de cálculo en Google Sheets (https://sheets.new).
 * 2. En el menú superior, ve a: Extensiones -> Apps Script.
 * 3. Borra todo el código que aparezca en el editor y pega este archivo completo.
 * 4. Guarda el proyecto haciendo clic en el icono del disco (Guardar proyecto).
 * 5. Haz clic en el botón azul de arriba a la derecha: "Implementar" -> "Nueva implementación".
 * 6. Selecciona el tipo de implementación haciendo clic en la rueda dentada (Seleccionar tipo) y elige: "Aplicación web".
 * 7. Configura los campos:
 *    - Descripción: Guardar contactos del sitio web
 *    - Ejecutar como: Tú (tu cuenta de correo)
 *    - Quién tiene acceso: "Cualquiera" (esto es MUY importante para que el sitio web pueda enviar datos).
 * 8. Haz clic en "Implementar".
 * 9. Google te pedirá autorizar accesos. Haz clic en "Autorizar acceso", selecciona tu cuenta, ve a "Avanzado" (abajo) e "Ir a proyecto sin título (no seguro)" para confirmar los permisos de escritura en tu hoja de cálculo.
 * 10. Copia la "URL de la aplicación web" que te proporciona (termina en `/exec`).
 * 11. Pega esta URL en el archivo `.env` en la variable `GOOGLE_SHEETS_SCRIPT_URL`.
 * 
 * ¡Listo! Toda persona que complete el formulario en tu web quedará registrada en esta hoja de cálculo.
 */

var SPREADSHEET_ID = "1_tqx_4duKbqfgaS7lxkj5bVYoBddNNsz5vAESG6ktf4";
var SHEET_NAME = "Solicitudes";

function firstValue() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] !== undefined && arguments[i] !== null && String(arguments[i]).trim() !== "") {
      return arguments[i];
    }
  }

  return "";
}

function doPost(e) {
  try {
    // Obtenemos los datos enviados desde la web
    var postData = JSON.parse(e.postData.contents);
    var nombre = firstValue(postData.nombre, postData.fullName, postData.name);
    var dni = firstValue(postData.dni, postData.documento, postData.document);
    var email = firstValue(postData.email, "");
    var direccion = firstValue(postData.direccion, postData.address);
    var telefono = firstValue(postData.telefono, postData.phone);

    if (!direccion && dni && !/^[0-9.\s-]+$/.test(String(dni))) {
      direccion = dni;
      dni = "";
    }
    
    // Obtenemos la hoja "Solicitudes" o la creamos si todavia no existe
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    
    // Si la hoja está completamente vacía, creamos los encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Fecha y Hora", "Nombre Completo", "DNI", "Correo Electrónico", "Dirección", "Teléfono"]);
    }
    
    // Agregamos la nueva fila con la información del formulario
    sheet.appendRow([
      postData.fecha || new Date().toLocaleString("es-AR"),
      nombre,
      dni,
      email,
      direccion,
      telefono
    ]);
    
    // Retornamos respuesta exitosa
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornamos el error si ocurre alguno
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
