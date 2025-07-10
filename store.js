

function handleSearch(){
      loadingAnimationToggle(true);
      const searchInputElement = document.getElementById('search-input-field');
      const searchInputValue = searchInputElement.value;
      console.log(searchInputValue);
      loadPhone(searchInputValue);
}

const loadingAnimationToggle = (isLoading)=>{
      const loaderAnimation = document.getElementById("loader-animation");
      if(isLoading){
            loaderAnimation.classList.remove("hidden");
      }else{
            loaderAnimation.classList.add("hidden");
      }
}

const loadPhone = async(searchText)=>{
 const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
 const serverData = await res.json();
 displayPhone(serverData.data)
}




const displayPhone = (data)=>{
      const cardContainer = document.getElementById("card-section");
      cardContainer.innerHTML = "";
      data.forEach(siglePhone => {
            const productCard = document.createElement("div");
            productCard.classList.add("card");
            productCard.innerHTML = `
            <div class="card-image">
                  <img src="${siglePhone.image}" alt="phone-img">
            </div>
            <h3 class="card-title">${siglePhone.phone_name}</h3>
            <p class="card-description">
                  There are many variations of passages of available, but the majority have suffered
            </p>
            <div class="card-price">
                  <span>$</span>
                  <span class="card-price-price">999</span>
            </div>
            <div class="card-button">
                  <button class="btn">Show Details</button>
            </div>
            `;
            cardContainer.appendChild(productCard);
            loadingAnimationToggle(false);
      });
}