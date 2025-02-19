document.addEventListener("DOMContentLoaded", () => {
    const movieInput = document.querySelector(".text-box"); 
    const addMovieBtn = document.querySelector(".submit-but"); 
    const movieList = document.getElementById("movieList"); 
    const clearListBtn = document.createElement("clear");

    let movies = [];

    clearListBtn.textContent = "Clear List";
    clearListBtn.classList.add("clear-but");
    clearListBtn.style.marginTop = "10px";
    clearListBtn.style.padding = "8px 15px";
    clearListBtn.style.backgroundColor = "black";
    clearListBtn.style.color = "white";
    clearListBtn.style.border = "none";
    clearListBtn.style.cursor = "pointer";
    clearListBtn.style.fontWeight = "bold";
    clearListBtn.style.display = "none"; 

    document.querySelector(".box").appendChild(clearListBtn);

    function updateList() {
        movieList.innerHTML = "";

        movies.forEach((movie) => {
            const li = document.createElement("li"); 
            li.textContent = movie;
            li.classList.add("text");
            movieList.appendChild(li);
        });

        clearListBtn.style.display = movies.length > 0 ? "block" : "none";
    }

    function addMovie() {
        const movieName = movieInput.value.trim();
        if (movieName !== "") {
            movies.push(movieName);
            movieInput.value = "";
            updateList();
        } else {
            alert("Please enter a movie name!");
        }
    }

    function clearList() {
        movies = []; 
        updateList(); 
    }

    addMovieBtn.addEventListener("click", addMovie);
    clearListBtn.addEventListener("click", clearList); 
});
 