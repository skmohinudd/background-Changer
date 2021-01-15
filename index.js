const quotes = [
    {
        quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author:'-Nelson Mandela'
    },
    {
        quote:'The way to get started is to quit talking and begin doing',
        author:' -Walt Disney'
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
         author:'-Steve Jobs'
    },
    {
       quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
       author:'-Oprah Winfrey'
    },
   {
       quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
       author:'-James Cameron'
   },
];


const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click',quoteFunction);

function quoteFunction(){
    
    let random = Math.floor(Math.random() * quotes.length)
    for(i=0;i<2;i++){
     quote.innerHTML= quotes[random].quote;
     quoteAuthor.innerHTML= quotes[random].author;
    }

    
}