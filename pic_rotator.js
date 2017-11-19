function pic_rotator()
{//FUNCTION BEGIN
  var d1 = localStorage.getItem("SELECT1");
  var d2 = localStorage.getItem("SELECT2");
  var sd1 = localStorage.getItem("SUBSELECT1");
  var sd2 = localStorage.getItem("SUBSELECT2");
//DIAMOND BEGINS HERE DIAMOND BEGINS HERE DIAMOND BEGINS HERE DIAMOND BEGINS HERE
if(d2==0){document.getElementById("finalimage").src="img/master_1.png";}
if(d1==0){
   if(sd1==4){document.getElementById("startimage").src="img/diamond_5.png";}
 }

 if(d1==0){
    if(sd1==3){document.getElementById("startimage").src="img/diamond_4.png";}
  }

  if(d1==0){
     if(sd1==2){document.getElementById("startimage").src="img/diamond_3.png";}
   }

  if(d1==0){
     if(sd1==1){document.getElementById("startimage").src="img/diamond_2.png";}
    }
  if(d1==0){
       if(sd1==0){document.getElementById("startimage").src="img/diamond_1.png";}
      }


      if(d2==1){
         if(sd2==4){document.getElementById("finalimage").src="img/diamond_5.png";}
       }

       if(d2==1){
          if(sd2==3){document.getElementById("finalimage").src="img/diamond_4.png";}
        }

        if(d2==1){
           if(sd2==2){document.getElementById("finalimage").src="img/diamond_3.png";}
         }

        if(d2==1){
           if(sd2==1){document.getElementById("finalimage").src="img/diamond_2.png";}
          }
        if(d2==1){
             if(sd2==0){document.getElementById("finalimage").src="img/diamond_1.png";}
            }
//DIAMOND ENDS HERE HERE //DIAMOND ENDS HERE HERE //DIAMOND ENDS HERE HERE //DIAMOND ENDS HERE HERE
if(d1==0){
   if(sd1==4){document.getElementById("startimage").src="img/diamond_5.png";}
 }

 if(d1==0){
    if(sd1==3){document.getElementById("startimage").src="img/diamond_4.png";}
  }

  if(d1==0){
     if(sd1==2){document.getElementById("startimage").src="img/diamond_3.png";}
   }

  if(d1==0){
     if(sd1==1){document.getElementById("startimage").src="img/diamond_2.png";}
    }
  if(d1==0){
       if(sd1==0){document.getElementById("startimage").src="img/diamond_1.png";}
      }


      if(d2==1){
         if(sd2==4){document.getElementById("finalimage").src="img/diamond_5.png";}
       }

       if(d2==1){
          if(sd2==3){document.getElementById("finalimage").src="img/diamond_4.png";}
        }

        if(d2==1){
           if(sd2==2){document.getElementById("finalimage").src="img/diamond_3.png";}
         }

        if(d2==1){
           if(sd2==1){document.getElementById("finalimage").src="img/diamond_2.png";}
          }
        if(d2==1){
             if(sd2==0){document.getElementById("finalimage").src="img/diamond_1.png";}
            }




}
