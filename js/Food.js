class Food{

    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage('Images/Milk.png');
    }

    getFoodStock(){
        

        var foodStockRef=database.ref('Food');
        foodStockRef.on("value",(data)=>{
        this.foodStock=data.val();  
        });
        
        return this.foodStock;
        
        }

    updateFoodStock(foodStock){
        this.foodStock=foodStock;

    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
           }
           database.ref("/").update({
            Food:this.foodStock
        })

    }
    display(){
        background("green");

        fill(255,255,254);
        textSize(15);
      
        var x=70,y=100; 
        imageMode(CENTER);
        
        if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=70;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}