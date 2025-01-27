class Calcolatrice{
    result=0;
    addizione(calc) {this.result += calc; return this; }
   sottrazione(calc) { this.result -= calc; return this; }
   moltiplicazione(calc) { this.result *=calc; return this; }
   divisione(calc) { this.result /= calc; return this; }
       
   get_result(){console.log(this.result)}
   }
   
   function main(){
       let calcolo = new Calcolatrice();
       calcolo.addizione(11).moltiplicazione(3).addizione(5).sottrazione(5).divisione(11).get_result()
   }
   main();