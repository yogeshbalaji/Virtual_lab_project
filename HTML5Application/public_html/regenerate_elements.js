/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var elems=[];

function elements(id,type,start,end) 
{
    this.id = id;
    this.type=type;
    this.start=start;
    this.end=end;
}

function regen()
{

   for (var i=0;i<no_of_elements;i++)
      {

          if (elems[i].type=='7seg')
          {
              
              display_7segment(elems[i].start,elems[i].end);
              sev_display_pin_info(elems[i].start,elems[i].end);
          }
                    if (elems[i].type=='ic')
          {
                    display_ic(elems[i].start,elems[i].end,elems[i].ic_no);
                    ic_display_pin_info(elems[i].start,elems[i].end);
	/*	    
		    var display_x=elems[i].start;
		    var display_y=elems[i].end;
		    var ic_current_display_height=elems[i].height;
		    var ic_current_display_width=elems[i].width;
                        context.beginPath();
    context.rect(display_x, display_y, ic_current_display_width, ic_current_display_height);
    context.fillStyle = '#111111';
    context.fill();
    
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    context.closePath();
    context.beginPath()
    context.arc(display_x+ic_indic_offset_x,display_y+ic_indic_offset_y,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
        context.font = '9pt Calibri';
        context.fillStyle = 'white';
        context.fillText(elems[i].no, display_x+ic_current_display_width/2-10, display_y+ic_current_display_height/2);	    
    for(var i=0;i<no_of_pins;i++)
    {
        context.beginPath();
        context.arc(display_x+pin_width_left+dist_between_slots*i,display_y,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'gray';
        context.fill();
        
        context.beginPath();
        context.arc(display_x+pin_width_left+dist_between_slots*i,display_y+2*offset1,2, 0, 2 * Math.PI, false);
        context.fillStyle = 'gray';
        context.fill();
    }
		
		  

*/


          }
          }
      }   
