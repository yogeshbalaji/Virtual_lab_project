/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      
      //var context2 = canvas.getContext('2d');
      
      //<!-- Breadboard parameters -->
      var bread_board_x = 100;
      var bread_board_y =100;
      var bread_board_width = 700;
      var bread_board_height = 300;
      
      //<!-- Breadboard layout -->
      context.beginPath();
      context.rect(bread_board_x, bread_board_y, bread_board_width, bread_board_height);
      context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'black';
      context.stroke();
      
      //<!-- Breadboard boundary -->
            
      context.rect(bread_board_x-50,bread_board_y-50,bread_board_width+100,bread_board_height+100);
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
      context.closePath();
      //<!-- Breadboard lines and slots -->
      
      context.beginPath();
      context.moveTo(bread_board_x,bread_board_y+bread_board_height/6);
      context.lineTo(bread_board_x+bread_board_width,bread_board_y+bread_board_height/6);
            
      context.moveTo(bread_board_x,bread_board_y+bread_board_height/2);
      context.lineTo(bread_board_x+bread_board_width,bread_board_y+bread_board_height/2);
            
      context.moveTo(bread_board_x,bread_board_y+(5*bread_board_height)/6);
      context.lineTo(bread_board_x+bread_board_width,bread_board_y+(5*bread_board_height)/6);
      context.strokeStyle = '#E0E0E0 ';
      
      context.stroke();
      context.closePath();
      var number_of_rows = 64;
      var number_blocks = 10;
      var number_per_block = 5;
      var dist_between_slots = 10;
      var height_between_slots = 13;
      var block_dist = 23;
      var offset1 = (bread_board_width-63*dist_between_slots)/2;     //offset for inner layer
      var offset2 = (bread_board_width-((number_blocks-1)*block_dist + number_blocks*(number_per_block-1)*dist_between_slots))/2;
      var height_offset_1 = (bread_board_height/6-height_between_slots)/2;
      var height_offset_2 = ((2*bread_board_height)/6-4*height_between_slots)/2;
    //Outer layer 1
      context.beginPath();
      
      for(var i=0;i<number_blocks;i++)
      {
          for(var j=0;j<number_per_block;j++)
          {
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+height_offset_1,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+height_offset_1+height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+(5*bread_board_height)/6+height_offset_1,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset2+dist_between_slots*(j+4*i)+i*block_dist,bread_board_y+(5*bread_board_height)/6+height_offset_1+height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
          }
      }
      
      
      for(var i=0;i<64;i++)
      {
          for (var j=1;j<=5;j++)
          {
              
            
              context.beginPath();
              context.arc(bread_board_x+offset1+dist_between_slots*i,bread_board_y+bread_board_height/6+height_offset_2 + (j-1)*height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
              
              context.beginPath();
              context.arc(bread_board_x+offset1+dist_between_slots*i,bread_board_y+bread_board_height/2+height_offset_2 + (j-1)*height_between_slots,2, 0, 2 * Math.PI, false);
              context.fillStyle = 'black';
              context.fill();
          }
         
      }
      //context.beginPath();
      //context.arc(10, 10, 2, 0, 2 * Math.PI, false);
      context.fillStyle = 'black';
      context.fill();
      

