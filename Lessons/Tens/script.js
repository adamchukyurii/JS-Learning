const GetRequestData = async () => {
   try {
      const request = await fetch(
         "https://jsonplaceholder.typicode.com/todos/1",
         ).then((data) => {
         return data.json();
      });
      console.log(request);
   } catch (error) {
      console.log(error);
   } finally {
      console.log("Done");
   }
}

// GetRequestData();

const GetApiHouses = async () => {
   try {
      await fetch('https://www.anapioficeandfire.com/api/houses')
      .then((response) => {
         return response.json()
      }).then(async (houses) => {
         return await fetch(houses[1].overlord);
      }).then((response) => {
         return response.json();
      }).then((overlord) => {
         console.log(overlord.name);
      })
   } catch (error) {
      console.log(error);
   }
}

// GetApiHouses();

const ul = document.createElement("ul");
const p = document.createElement("p");


const GeneratedCard = (title, albumId, id, thumbnailUrl) => {
   return `<li><figure>
      <img src = "${thumbnailUrl}" alt = "${id}">
      <figure>
         ${albumId} - ${title}
      </figure>
   </figure></li>`;
}

const GetPhotos = async () => {
   try {
      const request = await fetch(
         "https://jsonplaceholder.typicode.com/photos",
      );
      console.log(request);
      const data = await request.json();
      data.map(async ({title, albumId, id, thumbnailUrl}) => {
         if (id <= 100)
            ul.innerHTML += GeneratedCard(title, albumId, id, thumbnailUrl);
         });   
      document.body.appendChild(ul);
      console.log(data);
   } catch (error) {
      p.textContent = error;
      console.log(error);
   }
}

GetPhotos();

const API_URL = "https://jsonplaceholder.typicode.com/posts";

