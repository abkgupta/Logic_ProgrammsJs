// var ax =0;
const obj = {
    a:10,
    b:30,
    // ax:0,
    c: function(){
        // ax = this.a + this.b
        console.log(this.a+this.b)
        // return this.a+ this.b
    }
}

const result = obj.c();
// result()