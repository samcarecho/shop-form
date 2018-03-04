/******************************************************************************
 * This tutorial is based on the work of Martin Hawksey twitter.com/mhawksey  *
 ******************************************************************************/

//Modifiy the 2 lines bellow to reflect your reality.
var TO_ADDRESS = 'store@email.com';
var SITE_DOMAIN = 'example.com'  //the domain of the site/app where the shop-form element is being used.

var SHEET_URL;

// spit out all the keys/values from the form in HTML for email
function formatMailBody(url) {
  var result = '';
  result += '<h4>' + SITE_DOMAIN + ' has received a new order.</h4>';
  result += '<div>See the submission here: <br /> <a href="' + url + '" target="_blank">' + url + '</a></div>';

  return result;
}

function doPost(e) {
  try {
    Logger.log(e);

    SHEET_URL = record_data(e);

    //var mailData = e.parameters;
    var sendEmailTo = TO_ADDRESS;

    MailApp.sendEmail({
      to: String(sendEmailTo),
      subject: "Contact form submitted on " + SITE_DOMAIN,
      htmlBody: formatMailBody(SHEET_URL)
    });


    return ContentService
          .createTextOutput(
            JSON.stringify({"result":"success",
                            "data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": error}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}

function record_data(e) {
  Logger.log(JSON.stringify(e));

  try {
    var doc     = SpreadsheetApp.getActiveSpreadsheet();
    var docUrl  = doc.getUrl();
    var sheet   = doc.getSheetByName('Sheet1');
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1;
    var row     = [ new Date() ];

    for (var i = 1; i < headers.length; i++) {
      if(headers[i].length > 0) {
        row.push(e.parameter[headers[i]]);
      }
    }

    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  }
  catch(error) {
    Logger.log(e);
  }
  finally {
    return docUrl;
  }

}