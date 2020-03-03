//Copy Data from tab 01-05 to 158
function moveValuesOnly () {
  var tabs =["01-05","06-10","11-15","16-18","19-21","22-23","24-25","26","27","28",
            "29","30","31","32","33","34","35","51-52","53-54","55-56","57-59","60-62",
            "63-65","66-68","69-71","72","73","74","75","76","77","78","79","80","81","82"
            ,"83","85-86","87-88","89-90","91-92","93-95","96-98","99-101","102-104","105-107"
            ,"108-110","111-113","114","115","116","117","118","119","120","121","122","123",
            "130-131","132-133","134-136","137-139","140-142","143-145","146-148","149","150"
            ,"151","152","153","154","155","156","157","158"]
  var ss = SpreadsheetApp.getActiveSheet()
  var sss = SpreadsheetApp.getActiveSpreadsheet ();
  var range = ss.getLastRow();
  var i;
  for (i=0; i<tabs.length; i++){
    var source = ss.getRange (tabs[i]+"!A25:"+range);
    var destSheet = sss.getSheetByName("Data_Base");
    var destRange = destSheet.getRange(destSheet.getLastRow()+1,1);
    source.copyTo (destRange, {contentsOnly: true})+"<br>";
  }
}

//Copy Data from tab 159 to 278
function moveValuesOnly2 () {
  var tabs =["159","160","161","162","163","164",
            "165","166","167","168","169","170","180-181","182-183","184-186","187-189","190-192"
            ,"193-195","196-198","199","200","201","202","203","204","205","206","207","208",
            "212-213","214-215","216-218","219-221","222-224","225-227","228-230","231","232","233","234",
            "235","236","237","238","239","240","272-273","274-275","276-278"]
  var ss = SpreadsheetApp.getActiveSheet()
  var sss = SpreadsheetApp.getActiveSpreadsheet ();
  var range = ss.getLastRow();
  var i;
  for (i=0; i<tabs.length; i++){
    var source = ss.getRange (tabs[i]+"!A25:"+range);
    var destSheet = sss.getSheetByName("Data_Base");
    var destRange = destSheet.getRange(destSheet.getLastRow()+1,1);
    source.copyTo (destRange, {contentsOnly: true})+"<br>";
  }
}

//Copy Data from tab 159 to 278
function moveValuesOnly3 () {
  var tabs =["279-281","282-284","285-287",
             "288-290","291","292","293","294","295","296","297","298","299","300","301-302","303-304","305-307"
            ,"308-310","311-313","314-316","317-319","320","321","322","323","324","325","326","327","328",
             ,"329","330-331","332-333","334-336","337-339","340-342","343-345","346-348","349","350","351"
            ,"352","353","354","355","356","357","358"]
  var ss = SpreadsheetApp.getActiveSheet()
  var sss = SpreadsheetApp.getActiveSpreadsheet ();
  var range = ss.getLastRow();
  var i;
  for (i=0; i<tabs.length; i++){
    var source = ss.getRange (tabs[i]+"!A25:"+range);
    var destSheet = sss.getSheetByName("Data_Base");
    var destRange = destSheet.getRange(destSheet.getLastRow()+1,1);
    source.copyTo (destRange, {contentsOnly: true})+"<br>";
  }
}

//Clear Data in Data_Base Tab
function clearData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Data_Base");
  
  // clear out the matches and output sheets
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn()
  if (lastRow > 1) {
    sheet.getRange(1, 1, lastRow, lastCol).clearContent()
  }
}