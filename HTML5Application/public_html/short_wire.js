/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Pin arrangement -- relative display heights


var wire_pt1_x;
var wire_pt1_y;
var wire_pt2_x;
var wire_pt2_y;


function initialise_short(col)
{   
    // here width and height are used as second point 
    
    short_flag = 1;
    elems.push({id:no_of_elements+1,type:'short',wire_col:col,row:0,col:0,rowtemp:0,coltemp:0});
    no_of_elements=no_of_elements+1;    
        
}

function display_short(ind)
{
    
    wire_pt1_x = elems[ind].start;
    wire_pt1_y = elems[ind].end;
    wire_pt2_x = elems[ind].width;
    wire_pt2_y = elems[ind].height;
    
    context.beginPath();
    
    context.moveTo(wire_pt1_x,wire_pt1_y);
    context.lineTo(wire_pt2_x,wire_pt2_y);
    context.lineWidth = 4;
    context.strokeStyle = elems[ind].wire_col;
    context.stroke();
    context.closePath();
        
          
    
}


