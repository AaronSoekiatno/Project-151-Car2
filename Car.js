AFRAME.registerComponent('car-component', {
    schema:{
        position: {type:"number", default:0},
        radius:{type:"number", default: 10},
        counter:{type:"number",default:0}
    },

    tick: function(){

        window.addEventListener("click", e => {
            this.data.position = this.data.position + 0.05;

            if(this.data.counter>10){
                this.data.counter = 0;
                this.data.position = 0;
                this.el.setAttribute("position", this.data.position);
            }
        });

        var pos = this.el.getAttribute("position");
        this.el.setAttribute("position",{x:this.data.position, y:pos.y, z:pos.z});
        console.log(this.data.counter);
        
       
    },

    update: function(){
        window.addEventListener("click", e => {
            this.data.counter+=1;
        });
    }
})