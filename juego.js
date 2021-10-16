let sketchProc = function(processingInstance) {
    with (processingInstance) {

       size(1000, 600); 
       frameRate(300);
      
    let puntos =0;
     let colorfondo = color(204, 255, 187);
        
     let x=500;
     direccion=0;

     let y = 0;
     let xAleatorio=500;
     
     let dhr=1;
     let dvr=1;
     let f = createFont("fantasy");
     let a = createFont("Arial Narrow Bold");

     draw=function(){
         background(colorfondo);
         textSize(50)
         fill(0,0,0);
         textFont(a,55);
         text("Puntos: "+ puntos,300,100);

         
        
         fill(0,0,222)
        ellipse(xAleatorio,y,10,10);
        y=y+dvr;
        xAleatorio = xAleatorio+ dhr;

        if(xAleatorio >= 1000){
            dhr=-1;
        }
        if( y >=600){
            dvr=0;
            textSize(100);
            fill(0,0,0);
            textFont(f,130);
            text("GAME OVER",200,300); 
        }
        if(y==0){
            dvr=1;
            
        }
        if(xAleatorio==0){
            dhr=1;
        }
      
        if(xAleatorio <= x+50 && xAleatorio >= x-50 && y >= 450 && y<=550){
            textSize(60);
            fill(0,0,0)
            text("CHOQUE" ,200,200);
            
            dvr=-1;
            puntos=puntos +1;
        }

        fill(0, 85, 2)
        triangle(x-75,550,x-100,600,x-50,600)

        x = x + direccion;

        keyPressed=function(){
            
            if(key.code==97){
                direccion=-2;
        }
            if(key.code==100){
                direccion=+2;
        }
        }

        mousePressed=function(){
            if(mouseX<500){
                direccion=-2;
            }
            if(mouseX>500){
                direccion=+2;
            }

        }
           if(x>=975){
            direccion=-2;
        }
          if(x<=25){
            direccion=2;
        }

    }
 }};
   let canvas = document.getElementById("mycanvas"); 
   let processingInstance = new Processing(canvas, sketchProc); 



     
