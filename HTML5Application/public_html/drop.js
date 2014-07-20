var DDSPEED = 10;
var DDTIMER = 15;
var clicked_submenu=0;
function sub_menu_open(id)
{
    var el=document.getElementById(id);
    el.style.display="block"; 
}
function sub_menu_hold(id)
{
    writeMessage(canvas,clicked_submenu);
    var el=document.getElementById(id);
    if (clicked_submenu===0)
    {
    el.style.display="block"; 
    clicked_submenu=1;
    }
    else if (clicked_submenu===1)
    {
    el.style.display="none"; 
    clicked_submenu=0;
    }
    
}
function sub_menu_close(id)
{
    
    var el=document.getElementById(id);
    if (clicked_submenu===0)
    el.style.display="none"; 
    
}

// main function to handle the mouse events //
function ddMenu(id,d,id1)
{
    writeMessage(canvas,id1);
    var g=document.getElementById(id1);
    
    var ht=g.style.top;
    
  var h = document.getElementById(id + '-header');
  var c = document.getElementById(id + '-content');
  clearInterval(c.timer);
  if(d === 1)
  {
    writeMessage(canvas,ht);
    clearTimeout(h.timer);
    if(c.maxh && c.maxh <= c.offsetHeight){return}
    else if(!c.maxh)
    {
      c.style.display = 'block';
      c.style.height = ht;
      c.maxh = c.offsetHeight;
      c.style.height = ht+'px';
    }
    c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
  }
  else
  {
    h.timer = setTimeout(function(){ddCollapse(c)},50);
  }
}

// collapse the menu //
function ddCollapse(c){
  c.timer = setInterval(function(){ddSlide(c,-1)},DDTIMER);
}

// cancel the collapse if a user rolls over the dropdown //
function cancelHide(id){
  var h = document.getElementById(id + '-header');
  var c = document.getElementById(id + '-content');
  clearTimeout(h.timer);
  clearInterval(c.timer);
  if(c.offsetHeight < c.maxh){
    c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
  }
}

// incrementally expand/contract the dropdown and change the opacity //
function ddSlide(c,d){
  var currh = c.offsetHeight;
  var dist;
  if(d === 1){
    dist = (Math.round((c.maxh - currh) / DDSPEED));
  }else{
    dist = (Math.round(currh / DDSPEED));
  }
  if(dist <= 1 && d === 1){
    dist = 1;
  }
  c.style.height = currh + (dist * d) + 'px';
  c.style.opacity = currh / c.maxh;
  c.style.filter = 'alpha(opacity=' + (currh * 100 / c.maxh) + ')';
  if((currh < 2 && d !== 1) || (currh > (c.maxh - 2) && d == 1)){
    clearInterval(c.timer);
  }
}