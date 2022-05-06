const body = document.querySelector("body"),
      nav = document.querySelector("body"),
      modeToggle = document.querySelector(".dar-light"),
      searchToggle = document.querySelector(".searchToggle");



    // js Code dark light mode
      modeToggle.addEventListener("click" ,() =>{
          modeToggle.classList.toggle("active")
          body.classList.toggle("dark")
      })
      
    // js Code to toggle search
    searchToggle.addEventListener("click" ,() =>{
        searchToggle.classList.toggle("active")
       
    })