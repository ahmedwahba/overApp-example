
function testOverApps() {
   var options = {
     path: "test.html", // file path to display as view content
     hasHead: true, // display over app head image which open the view up on click , by default true
     dragToSide: true, // enable auto move of head to screen side after dragging stop , by default true
     enableBackBtn: false, // enable hardware back button to close view , by default true
     //enableCloseBtn: false, // whether to show native close btn or to hide it , by default true
     verticalPosition: "center", // set vertical alignment of view , values are top - center - bottom , by default center
     horizontalPosition: "left" // set horizontal alignment of view , values are right - center - left , by default center
   }
   window.overApps.checkPermission(function(res){
      console.log(res);
   });
   window.overApps.startOverApp(options,function (res){
     console.log(res);
   },function (err){
     console.log(err);
   });
}

function closeOverApp()
{
   OverApps.closeWebView();
   OverApps.openApp();
}
