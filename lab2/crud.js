import  readline from 'readline/promises'
import { stdin , stdout} from 'process'


const main = async ()=>{
    let choice ;
    const cin = readline.createInterface({input: stdin , output : stdout}) ;
    do{
        console.log("Welcome to Flipkart 🤗");
        switch (Number(choice)) {
          case 1:
            console.log("1..... Show cart ");
            break ;
          case 2:
            console.log("2..... Add product");
            break ;
          case 3:
            console.log("3.... Remove product");
            break;
          case 4: 
            console.log("4...... Update qty ");
            break;
          case 5 :
            console.log("5..... checkout");
            break ;

          default :
            console.log("invalid choice ! try again");
          
        }
        choice = await cin.question("enter your choice :")
    }
    while(choice != 5) ;
    cin.close() ;
} ;

main() ;