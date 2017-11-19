function checkdata()
{

document.getElementById("selectdiv1").onchange = function()
{//START OF LOCAL FUNCTION
sel1=document.getElementById("selectdiv1").value;
sel2=document.getElementById("selectdiv2").value;
index1=selectdiv1.selectedIndex;
index2=selectdiv2.selectedIndex;
localStorage.setItem("SELECT1",index1);
localStorage.setItem("SELECT2",index2);
pic_rotator();


//Startovata diviziya e index1, koeto otgovarya na index1+1 za jelanata. Index1+2 otgovarya na edna pod startovata. Kolkoto po-goltam e index-a, tolkova po-niska e diviziyata.
//ALGORITHM FOR DISABLING WRONG OPTIONS START
if(index2>index1+1)
{//IF BEGIN
  document.getElementById('selectdiv2').selectedIndex=(index1+1);
  index2=index1+1;
  localStorage.setItem("SELECT2",index2);
}//IF END
if(index1==index2-1){
  if(subindex2>=subindex1)
         {
  if(subindex1==0){document.getElementById('selectdiv2').selectedIndex=(index1);
  index2=index1;localStorage.setItem("SELECT2",index2);
  document.getElementById('selectsubdiv2').selectedIndex=(4); }
  else { document.getElementById('selectsubdiv2').selectedIndex=(subindex1-1);}
         }
}

//ALGORITHM FOR DISABLING WRONG OPTIONS END
mastercheck();
pic_rotator();

}//END OF LOCAL FUNCTION






 document.getElementById("selectsubdiv1").onchange = function() {
    index1=selectdiv1.selectedIndex;
    index2=selectdiv2.selectedIndex;
    subsel1=document.getElementById("selectsubdiv1").value;
    subsel2=document.getElementById("selectsubdiv2").value;
    subindex1=selectsubdiv1.selectedIndex;
    subindex2=selectsubdiv2.selectedIndex;
    localStorage.setItem("SUBSELECT1",subindex1);
    localStorage.setItem("SUBSELECT2",subindex2);
    pic_rotator();

if(index1==index2-1){
  if(subindex2>=subindex1)
         {
  if(subindex1==0){document.getElementById('selectdiv2').selectedIndex=(index1);
  index2=index1;localStorage.setItem("SELECT2",index2);
  document.getElementById('selectsubdiv2').selectedIndex=(4);
  subindex2=4;
  localStorage.setItem("SUBSELECT2",subindex2);
   }
  else { document.getElementById('selectsubdiv2').selectedIndex=(subindex1-1);
  subindex2=subindex1-1;
  localStorage.setItem("SUBSELECT2",subindex2);
}
         }
}

mastercheck();
pic_rotator();
  }

document.getElementById("selectpoints").onchange = function() {
   pointsel=document.getElementById("selectpoints").value;
   //alert(pointsel);
 }

 document.getElementById("selectdiv2").onchange = function() {
    sel1=document.getElementById("selectdiv1").value;
    sel2=document.getElementById("selectdiv2").value;
  index1=selectdiv1.selectedIndex;
  index2=selectdiv2.selectedIndex;
  localStorage.setItem("SELECT1",index1);
  localStorage.setItem("SELECT2",index2);
  pic_rotator();
  //Startovata diviziya e index1, koeto otgovarya na index1+1 za jelanata. Index1+2 otgovarya na edna pod startovata. Kolkoto po-goltam e index-a, tolkova po-niska e diviziyata.
  //ALGORITHM FOR DISABLING WRONG OPTIONS START
  if(index2>index1+1)
  {//IF BEGIN
    document.getElementById('selectdiv2').selectedIndex=(index1+1);
  }//IF END
  if(index1==index2-1){
    if(subindex2>=subindex1)
           {
    if(subindex1==0){document.getElementById('selectdiv2').selectedIndex=(index1);
    document.getElementById('selectsubdiv2').selectedIndex=(4);
    subindex2=4;
    localStorage.setItem("SUBSELECT2",subindex2);
  } else { document.getElementById('selectsubdiv2').selectedIndex=(subindex1-1);
        subindex2=subindex1-1;
        localStorage.setItem("SUBSELECT2",subindex2);
}
           }
  }

mastercheck();
pic_rotator();
  }

  document.getElementById("selectsubdiv2").onchange = function() {
    index1=selectdiv1.selectedIndex;
    index2=selectdiv2.selectedIndex;
    subsel1=document.getElementById("selectsubdiv1").value;
    subsel2=document.getElementById("selectsubdiv2").value;
    subindex1=selectsubdiv1.selectedIndex;
    subindex2=selectsubdiv2.selectedIndex;
    localStorage.setItem("SUBSELECT1",subindex1);
    localStorage.setItem("SUBSELECT2",subindex2);
    pic_rotator();

    if(index1==index2-1){
      if(subindex2>=subindex1)
             {
      if(subindex1==0){document.getElementById('selectdiv2').selectedIndex=(index1);
      document.getElementById('selectsubdiv2').selectedIndex=(4);
      subindex2=4;
      localStorage.setItem("SUBSELECT2",subindex2);
     } else { document.getElementById('selectsubdiv2').selectedIndex=(subindex1-1);
     subindex2=subindex1-1;
      localStorage.setItem("SUBSELECT2",subindex2);

   }
             }
    }



mastercheck();
pic_rotator();
   }
//x=document.getElementById("selectdiv1").value;
//localStorage.setItem("SELECT1",x);



}//END OF GLOBAL FUNCTION


function showit(){
var SELECT1 = localStorage.getItem("SELECT1");
var SELECT2 = localStorage.getItem("SELECT2");
alert(SELECT1+" "+SELECT2);
}
function showit2(){
var SUBSELECT1 = localStorage.getItem("SUBSELECT1");
var SUBSELECT2 = localStorage.getItem("SUBSELECT2");
alert(SUBSELECT1+" "+SUBSELECT2);
}
function mastercheck()
{
  var isitmaster = localStorage.getItem("SELECT2");
  if(isitmaster==0){
  document.getElementById("selectsubdiv2").disabled=true;}
  else{document.getElementById("selectsubdiv2").disabled=false;}
}
