/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var wire_sel=0;
var wr_pt1,wr_pt2;

function initialise_wire(col)
{
    elems.push({id:no_of_elements+1,type:'wire'});
    no_of_elements=no_of_elements+1;    
    wire_sel=1;
}
function display_wire(pt1x,pt1y,pt2x,pt2y)
{
    
   var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(pt1x,pt1y);
    ctx.lineTo(pt2x,pt2y);
    ctx.stroke();
    
}
function resistor_fit_to_slot()
{
    var point,point1;
    point = {x: current_display_xr,y: current_display_yr+resistor_height/2 };
    
    //check if the drag goes out of bound
    
    
    point2 = closestPoint(canvas,point);
    point3 = closestPoint(canvas,point1);
    
    
    //display_ic(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1,ic_no1);
    //ic_display_pin_info(point1.x-pin_width_left,bread_board_y+bread_board_height/2-offset1,ic_no1);
    if (cli!==-1)
    {
    
    
       elems[cli].start=point2.x;
        elems[cli].end=point2.y;
          elems[cli].width=point3.x;
        elems[cli].height=point3.y;
     
    }
    draw_pins();
//    elems.push({id:no_of_elements+1,type:'ic',start:current_display_x,end:current_display_y,height:resistor_height,width:resistor_width,ic_no:ic_no1});
  //  no_of_elements=no_of_elements+1;
    
}