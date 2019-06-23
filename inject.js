/* 
  for this to work you need to inject jquery and then this script in mangarock.
  i do this using the chrome extension javascript injector: https://chrome.google.com/webstore/detail/javascript-injector/djnjegpffahmfpjdlkciiecmeaebghlk
  
  
  
  //inteval remove cause the banners dont come as soon as the page is loaded and every computer/browser is different in speed, 
  a simple remove every 2 seconds wont make any visable changes on the computer speed
*/
$(function() {
    setInterval(function(){
      $(".NDm_P").remove(); 
    }, 2000);

    
});
