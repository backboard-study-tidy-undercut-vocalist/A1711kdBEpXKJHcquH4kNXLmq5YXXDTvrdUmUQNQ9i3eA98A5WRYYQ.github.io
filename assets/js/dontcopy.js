// PREVENT CONTEXT MENU FROM OPENING
      document.addEventListener("contextmenu", function(evt){
        evt.preventDefault();
      }, false);

      // PREVENT CLIPBOARD COPYING
      document.addEventListener("copy", function(evt){
        // Change the copied text if you want
        evt.clipboardData.setData("text/plain", "SUJOY");

        // Prevent the default copy action
        evt.preventDefault();
      }, false);
