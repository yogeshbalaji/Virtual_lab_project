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
            context.beginPath();
            context.rect(elems[i].start,elems[i].end,sev_current_display_width, sev_current_display_height);
            context.fillStyle = 'white';
            context.fill();
            context.lineWidth = 2;
            context.strokeStyle = 'black';
            context.stroke();

    var led_long_h = sev_current_display_width*(6/8);
var led_short = sev_current_display_height/15;
var led_long;
    var trigger = [1,1,1,1,1,1,1];
var led_a_x,led_a_y,led_b_x,led_b_y,led_c_x,led_c_y,led_d_x,led_d_y,led_e_x,led_e_y,led_f_x,led_f_y,led_g_x,led_g_y,led_h_x,led_h_y;

var current_display_x=elems[i].start;
var current_display_y=elems[i].end;
var sev_current_display_height=elems[i].height;
var sev_current_display_width=elems[i].width;
    led_long = (sev_current_display_height-2*sev_current_display_height/8+led_short)/2;
    
    led_a_x = current_display_x+sev_current_display_width/8;
    led_a_y = current_display_y+sev_current_display_height/8;
    
    led_b_x = current_display_x+sev_current_display_width/8+led_long_h-led_short;
    led_b_y = current_display_y+sev_current_display_height/8;
    
    led_c_x = current_display_x+sev_current_display_width/8+led_long_h-led_short;
    led_c_y = current_display_y+sev_current_display_height/8+led_long-led_short;
        
    led_d_x = current_display_x+sev_current_display_width/8;
    led_d_y = current_display_y+sev_current_display_height/8+2*led_long-2*led_short;
    
    led_e_x = current_display_x+sev_current_display_width/8;
    led_e_y = current_display_y+sev_current_display_height/8+led_long-led_short;
    
    led_f_x = current_display_x+sev_current_display_width/8;
    led_f_y = current_display_y+sev_current_display_height/8;
    
    led_g_x = current_display_x+sev_current_display_width/8;
    led_g_y = current_display_y+sev_current_display_height/8+led_long-led_short;
    context.closePath();    
context.beginPath();
     if(trigger[0]===1)
        context.rect(led_a_x, led_a_y,led_long_h, led_short);
     if(trigger[1]===1)
        context.rect(led_b_x, led_b_y,led_short, led_long);
     if(trigger[2]===1)
        context.rect(led_c_x, led_c_y,led_short, led_long);
     if(trigger[3]===1)
        context.rect(led_d_x, led_d_y,led_long_h, led_short);
     if(trigger[4]===1)
        context.rect(led_e_x, led_e_y,led_short, led_long);
     if(trigger[5]===1)
        context.rect(led_f_x, led_f_y,led_short, led_long);
     if(trigger[6]===1)
        context.rect(led_g_x, led_g_y,led_long_h, led_short);
     //if(trigger[7]===1)
       //  context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+height_offset_1,2, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();


          }
                    if (elems[i].type=='ic')
          {
		    
		    
		    var current_display_x=elems[i].start;
		    var current_display_y=elems[i].end;
		    var ic_current_display_height=elems[i].height;
		    var ic_current_display_width=elems[i].width;

		
		    context.beginPath();
		    context.rect(current_display_x, current_display_y, ic_current_display_width, ic_current_display_height);
		    context.fillStyle = 'black';
		    context.fill();
		    context.lineWidth = 2;
		    context.strokeStyle = 'black';
		    context.stroke();
		    context.closePath();
			context.font = '9pt Calibri';
			context.fillStyle = 'white';
			context.fillText(elems[i].no, current_display_x+ic_current_display_width/2-10, current_display_y+ic_current_display_height/2);	    




          }
          }
      }   
