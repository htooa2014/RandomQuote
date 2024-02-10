async function getRandomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const quoteValue = await response.json();
    console.log(quoteValue);

    const content = document.getElementById("quote");
    const author = document.getElementById("author");
   
    quote.innerHTML=quoteValue.content;

    author.innerHTML=" - "+quoteValue.author+" ";

    const length = quoteValue.length;
    

   
   if(length>200)
   {
    document.getElementById("quotebox").style.height = "250px";
   }
   else
   {
    document.getElementById("quotebox").style.height = "150px";
   } 
   
   //console.log(length);
 //  console.log(document.getElementById("quotebox").style.height);
   
  }


  getRandomQuote();

//   const buttonElement = document.getElementById("shareItButton");
//   $(buttonElement).on('click', function() {
//     // add new buttons with share behaviour
//     $('#shareIt').append('<button class="button" data-sharer="twitter" data-title="Checkout Sharer.js!" data-hashtags="awesome, sharer.js" data-url="https://ellisonleao.github.io/sharer.js/">Share on Twitter</button>');
//     $('#shareIt').append('<button class="button" data-sharer="facebook" data-hashtag="hashtag" data-url="https://ellisonleao.github.io/sharer.js/">Share on Facebook</button>');
//     $('#shareIt').append('<button class="button" data-sharer="linkedin" data-url="https://ellisonleao.github.io/sharer.js/">Share on Linkedin</button>');
//     $('#shareIt').append('<button class="button" data-sharer="viber" data-title="Checkout Sharer.js!" data-url="https://ellisonleao.github.io/sharer.js/">Share on Viber</button>');
//     $('#shareIt').append('<button class="button" data-sharer="twitter" data-title="Checkout Sharer.js!" data-hashtags="awesome, sharer.js" data-url="https://ellisonleao.github.io/sharer.js/">Share on Twitter</button>');
//     window.Sharer.init();
// })
                




// Get the share button element
const shareBtn = document.getElementById("share-btn");

// Add a click event listener to the button
shareBtn.addEventListener("click", async () => {
  // Check if the Web Share API is supported
  if (navigator.share) {
    // Try to share the data

    const content = document.getElementById("quote");
    const author = document.getElementById("author");

    const shareData = {
      title: "Random Quote",
      text: "\""+content.innerHTML+"\"\n"+author.innerHTML,
      
    };



    try {
      await navigator.share(shareData);
      console.log("Data shared successfully");
    } catch (err) {
      // Handle any errors
      console.error("Error while sharing:", err);
    }
  } else {
    // Fallback to some other sharing method
    console.log("Web Share API not supported");
  }
});