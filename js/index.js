fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    const categoryList = document.getElementById("categoryList");
    data.categories.forEach((category) => {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-3", "mb-3");

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "p-4");
      cardDiv.style.zIndex = "1";

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-img-top");
      cardImage.src = category.strCategoryThumb;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      colDiv.addEventListener("mouseover", function () {
        cardBody.classList.add("layer");
        cardBody.style.zIndex = "99";
        categoryName.style.display = "block";
        categoryDetails.style.display = "block";
        categoryDetails.style.overflow = "hidden";
        categoryDetails.style.textOverflow = "ellipsis";
        categoryDetails.style.display = "-webkit-box";
        categoryDetails.style.webkitLineClamp = "3"; 
        categoryDetails.style.webkitBoxOrient = "vertical";
      });

      colDiv.addEventListener("mouseout", function () {
        cardBody.classList.remove("layer");
        cardBody.style.zIndex = "0";
        categoryName.style.display = "none";
        categoryDetails.style.display = "none";

      });

      const details = document.createElement("div");
      const categoryName = document.createElement("h3");
      categoryName.classList.add("card-title", "text-center", "pt-4");
      categoryName.textContent = category.strCategory;
      categoryName.style.display = "none";

      const categoryDetails = document.createElement("p");
      categoryDetails.classList.add("text-center");
      categoryDetails.textContent = category.strCategoryDescription;
      categoryDetails.style.display = "none";

      cardBody.appendChild(categoryName);
      cardBody.appendChild(categoryDetails);
      cardDiv.appendChild(cardImage);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);
      categoryList.appendChild(colDiv);
    });
  })
  .catch((error) => {
    console.error("error:", error);
  });
