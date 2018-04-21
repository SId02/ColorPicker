   function copyToClipboard(copyEle) {
       var $temp = $("<input>");
       $("body").append($temp);
       $temp.val($(copyEle).text()).select();
       document.execCommand("copy");
       $temp.remove();

       document.querySelector("#clr").innerHTML = " HTML COLOR Copied";
       setInterval(change, 1000);
       document.querySelector("#mdclr").innerHTML = " MATERIAL COLOR Copied";
       setInterval(changemd, 1000);
       document.querySelector("#smclr").innerHTML = " SOCIAL MEDIA COLOR Copied";
       setInterval(changesocial, 1000);
   }

   function change() {
       document.querySelector("#clr").innerHTML = "";
   }

   function changemd() {
       document.querySelector("#mdclr").innerHTML = "";
   }

   function changesocial() {
       document.querySelector("#smclr").innerHTML = "";
   }