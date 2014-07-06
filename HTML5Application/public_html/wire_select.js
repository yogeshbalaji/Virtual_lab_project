/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initialise_wire(id,id1)
{
    writeMessage(canvas,id1);
    var el=document.getElementById(id);
    var el1=document.getElementById(id);
    el.style.visibility="visible";
    
    
    el.style.left=el1.style.left-102;
    el.style.top=el1.style.top+100;
    
    
}
