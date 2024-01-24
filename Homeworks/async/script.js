const itemsPerPage = 3;
let currentPage = 1;

const SearchContent = async (event) => {
   if (event) {
      event.preventDefault();
   }
   const resultSeciton = document.querySelector("#Result");
   const apiKey = '427673aa';
   const contentTitle = document.querySelector("#Title").value;
   const contentType = document.querySelector("#ContentType").value;
   
   resultSeciton.scrollIntoView({behavior: "smooth"});

   if (!contentTitle) {
      alert("Please enter a movie title!");
      return;
   }


   let apiUrl = '';

   if (contentType === 'Movie') {
      apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(contentTitle)}&type=movie&page=${currentPage}`;
   } else if (contentType === 'Series') {''
      apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(contentTitle)}&type=series&page=${currentPage}`;
   } else if (contentType === 'Episodes') {
      apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(contentTitle)}&type=episode&page=${currentPage}`;
   }

   try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      clearResult();

      if (response.ok) {
         if (data.Response === 'True') {
            
            if (data.Search && data.Search.length > 0) {
               SearchedContent(data.Search);
               addingPages(data.totalResults);
               console.log(data.totalResults);
            
            } else {
               alert("No results found!");
            }
         } else {
            alert(`Error ${data.Error}`);
            console.log(data.Response);
         }
      } else {
         alert(`Error ${response.status} - ${response.statusText}`);
      }
      
   } catch (error) {
      console.error("Error fetching data: ", error);
      alert('Error searching OMDb. Check the console for details');
   }
}

const clearResult = () => {
   const resultUl = document.querySelector("#Result");
   while(resultUl.firstChild) {
      resultUl.removeChild(resultUl.firstChild);
   }
}

const SearchedContent = (content, start, end) => {
   const resultUl = document.querySelector("#Result");
   resultUl.innerHTML += '';

   if (start === undefined && end === undefined) {
      start = 0;
      end = 3;
   } 
   for (let i = start; i < end; i++) {
      const item = content[i];

      resultUl.innerHTML += `
            <li class='Card'>
               <img src ='${item.Poster}' alt ='${item.Title} Poster'>
               <div>
                  <span>${item.Type}</span>
                  <span>${item.Title}</span>
                  <span>${item.Year}</span>
                  <button onclick='GetContentDetails("${item.imdbID}") '>Details</button>
               </div>
            </li>`
   }
}

const addingPages = (totalResult) => {
   const totalPages = Math.floor(totalResult / itemsPerPage);
   const paginationDiv = document.querySelector("#pagination");
   paginationDiv.innerHTML = '';

   for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.addEventListener('click', () => {
         currentPage = i;
         SearchContent();
      });
      paginationDiv.appendChild(button);
   }
}

const fetchMovies = async () => {
   const apiKey = '427673aa';
   const title = document.querySelector('#Title').value;
   const contentType = document.querySelector("#ContentType").value;
   
   if (!title) {
      alert("Please enter a movie title!");
      return;
   }

   let apiUrl = '';

   if (contentType === 'Movie') {
      apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&type=movie&page=${currentPage}`;
   } else if (contentType === 'Series') {
      apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&type=series&page=${currentPage}`;
   } else if (contentType === 'Episodes') {
      apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&type=episode&page=${currentPage}`;
   }
   fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
      if (data.Response === 'True') {
         addingPages(data.totalResults);
      } else {
         alert("Erorr ");
      }
   })
   .catch(error => {
      console.log("Error fetching", error);
      alert("Error fetching data");
   })
}

const pageAmount = (content) => {
   let pgCounter = 0;
   for (let i = 0; i < content.length; i++) {
      if (i % 3 === 0) {
         pgCounter += 1;
      }
   }
   return pgCounter;
}


const GetContentDetails = async (imdbId) => {
   const apiKey = '427673aa';
   const detailsSection = document.querySelector("#details");
   detailsSection.scrollIntoView({behavior: 'smooth'});

   let apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`;

   try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(apiUrl);

      if (response.ok && data.Response === 'True') {
         dispayContentDetails(data);
      } else {
         alert(`Erorr ${data.Error}`);
      }
       
   } catch (error) {
      console.error("Error fetching data: ", error);
      alert('Error searching OMDb. Check the console for details');
   }
}

const dispayContentDetails = (content) => {
   const resultDiv = document.querySelector("#details");
   resultDiv.innerHTML = `
      <div class="title">
         <h2>Film info: </h2>
      </div>
      <div class='info'>
         <img src='${content.Poster}' alt ='${content.Title} Poster'>
         <div class='info__text'>
            <div>
               <span>Title:</span><span>${content.Title}</span>
            </div>
            <div>
               <span>Released:</span><span>${content.Released}</span>
            </div>
            <div>
               <span>Genere:</span><span>${content.Genere}</span>
            </div>
            <div>
               <span>Country:</span><span>${content.Country}</span>
            </div>
            <div>
               <span>Director:</span><span>${content.Director}</span>
            </div>
            <div>
               <span>Title:</span><span>${content.Title}</span>
            </div>
            <div>
               <span>Writer:</span><span>${content.Writer}</span>
            </div>
            <div>
               <span>Actors:</span><span>${content.Actors}</span>
            </div>
            <div>
               <span>Awards:</span><span>${content.Awards}</span>
            </div>
         </div>
      </div>

   `
}

fetchMovies();