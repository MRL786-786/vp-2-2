class Food{
    constructor(foodS){
        this.image = loadImage("images/Milk.png");
        this.foodStock = foodStock;        
        this.lastFed = lastFed; 
          
    }
    
    getFoodStock(){      
        return foodS;
    }
    updateFoodStock(x){
        
        if(x <= 0){
            x=0;
        }else{
            x=x-1;
        }
        foodS = x;
          
    }
    deductFood(){
        if(foodS > 0){
            foodS = foodS -1;
        } 
    }


        display(){
            var x=20,y=20; 
       
        if(foodS!=0){ 
            for(var i=0;i<foodS;i++){
                 if(i%10==0){ 
                    x=20; 
                    y=y+50; 
                } 
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
        }
    }

