import './App.css';

function App() {

  let news = "NASA Shares Update On Sunita Williams And Butch Wilmore Return To Earth From ISS." ;


  return (
    <div className="App"> 
     
     <h1>STRING METHODS</h1>

     <button type="button" onClick={()=>{
      
        console.log(news.toUpperCase());
        console.log(news.toLowerCase());

     }}>toUpperCase/toLowerCase</button>

     <button type="button" onClick={()=>{

      let firstName = "Prudhvi";
      let lastName = " Reddy";

      let fullName = firstName.concat(lastName);
      let fullName2 = `${firstName}${lastName}`;

      console.log(fullName);
      console.log(fullName2);

     }}>concat</button>

     <button type="button" onClick={()=>{

      let name = "   Prudhvi Reddy   ";

      console.log(name.trim());
      console.log(name.trimStart());
      console.log(name.trimEnd());

      console.log(`---->${name.trim()}<----`);
      console.log(`---->${name.trimStart()}<----`);
      console.log(`---->${name.trimEnd()}<----`); 

     }}>trim/trimStart/trimEnd</button> 

     <button type="button" onClick={()=>{

      let msg = "Oh my God!";

      console.log(msg.padStart(50,"O"));
      console.log(msg.padEnd(50,"!"));

     }}>padStart/padEnd</button>

     <button type="button" onClick={()=>{

      let jsr = " Jai Shri Ram ";
      console.log(jsr.repeat(1008));

      let ons = " OM NAMAH SHIVAYA ";
      console.log(ons.repeat(108));

     }}>Repeat</button>

     <button type="button" onClick={()=>{

      let prayer = "India is my country, All Indians are my brothers and sisters";

      console.log(prayer.replace("India", "Bharat"));
      console.log(prayer.replaceAll("India", "Bharat"));

     }}>Replace/ReplaceAll</button>

     <button type="button" onClick={()=>{

      let prayer = "India is my Country";

      console.log(prayer);
      console.log(prayer.split("n"));
      console.log(prayer.split("i"));

     }}>Split</button>

     <button type="button" onClick={()=>{

      let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      console.log(alphabets.length);
      console.log(alphabets.at(0));
      console.log(alphabets.at(6));
      console.log(alphabets.charAt(4));
      console.log(alphabets.charAt(10));
      console.log(alphabets[25]);
      console.log(alphabets[26]);

     }}>Length</button>

     <button type="button" onClick={()=>{

      let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

      console.log(alphabets.slice(4,9));
      console.log(alphabets.substring(11,19));
      console.log(alphabets.substr(5,2));

     }}>Slice</button>

     <button type="button" onClick={()=>{

      for(let i=3077;i<3300;i++){
        console.log(String.fromCharCode(i));

      }
     }}>FromCharCode</button> 

     <button type="button" onClick={()=>{

        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for(let i=0;i<alphabets.length;i++){
              console.log(alphabets.charCodeAt(i));
            }
        
     }}>CharCodeAt</button>

     <button type="button" onClick={()=>{

      let warrior = "Shri Chatrapathi Shivaji Maharaj Ji";

      console.log(warrior.startsWith("Shri"));
      console.log(warrior.endsWith("Ji"));
      console.log(warrior.includes("Raj"));

     }}>StartsWith/EndsWith</button>

     <button type="button" onClick={()=>{
      let jsr = "Jai Shri Ram Jai Shri Ram";

      console.log(jsr.indexOf("Ram"));
      console.log(jsr.lastIndexOf("Ram"));

     }}>IndexOf/ LastIndexOf</button>

     <button type="button" onClick={()=>{

      let jsr = "Jai Shri Ram Jai Shri Ram";
      console.log(jsr.search(/ram/i));

      let prayer = "India is my country, All Indians are my brothers and sisters";
      console.log(prayer.search(/india/i)); 
      
     }}>Search</button>

    </div>
  );
}

export default App;

