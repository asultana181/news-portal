const loaddata = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
       
        .then(response => response.json())
        .then(json => menushow(json.data.news_category))


    menushow = manu_data => {
        const man = document.getElementById("manuber")
        for (const lod1 of manu_data) {
            const div = document.createElement("div")
            div.classList.add('btnnn')
            div.innerHTML = `
        <button  href="" onclick="loadid('${lod1.category_id}')"  style=" border:none; " class="bg-light btnnn " >${lod1.category_name}</button>
    
        `;

            man.appendChild(div)

        }

    }

}
loaddata()



// --------report show-------


function loadid(category_id) {
    toggle(true)
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(response => response.json())
        .then(json => reportshow(json.data))
    
}
// report show
reportshow = report_data => {

    const reportman = document.getElementById("report")
    reportman.innerHTML = " "
    let count = 0
    const count1 = document.getElementById('countboxid')
    count1.innerHTML = '0 items found for category'
    for (const lodreport of report_data) {
        count = count + 1
        // const count1 = document.getElementById('countboxid')
        count1.innerText = count + ' items found for category'


        const div = document.createElement("div")
        div.classList.add('view')


        div.innerHTML = `
       <div class="card mb-3 mt-5 h-100" style="max-width: 1000px;">
       <div class="row g-0">
           <div class="col-md-4">
               <img style="height:250px" src="${lodreport.image_url}" class="img-fluid rounded-start"
                   alt="...">
           </div>
           <div class="col-md-8">
               <div class="card-body">
                   <h4 class="card-title" style="font-weight: bold;  font-weight: 900;">${lodreport.title}</h4>
                   <p style="overflow: hidden; text-overflow: ellipsis;display: -webkit-box; -webkit-line-clamp: 3; /* number of lines to show */ line-clamp: 3;  -webkit-box-orient: vertical;" class="card-text">${lodreport.details}</p>
                  
               </div>

               
               <div class="view ">
               <div class="d-flex justify-content-center">
               <div class="pd-5">
               <img class="rounded-circle " style="  width: 40px;height:40px; " src="${lodreport.author.img}" alt="">
               </div>
              <div class=" mx-2">
              <p>${lodreport.author.name ? lodreport.author.name : 'No Repoter Name'}<br> 
              ${lodreport.author.published_date ? lodreport.author.published_date : 'No published_date'} </p>
              </div>
              
    
               </div>
               
               <p class="mt-4"> <i class="fa-regular fa-eye"></i> ${lodreport.total_view ? lodreport.total_view : 0} </p>
               <button  onclick="modalrepo('${lodreport._id}')" class='border border-0 bg-white' data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="fa-sharp fa-solid fa-arrow-right "></i></button>

               
               </div>
           
              
               
           </div>

           
       </div>


   </div>
   
    `;

        reportman.appendChild(div)


    }
    toggle(false)
}

function modalrepo(news_id) {
    fetch(` https://openapi.programming-hero.com/api/news/${news_id}`)
        .then(response => response.json())
        .then(json => receive(json.data))
}


receive = datadmodal => {
    for (const newstake of datadmodal) {
        console.log(newstake)
        const modaltitle = document.getElementById("exampleModalLabel")
        modaltitle.innerText = newstake.author.name

        const modaldetails = document.getElementById("details_news")
        modaldetails.innerHTML =
            `
      <p>Author Name : ${newstake.author.name}</p>
      
      <p>published_date : ${newstake.author.published_date}</p>
      <p>rating : ${newstake.rating.number}</p>
      <p>published_date : ${newstake.author.published_date}</p>
      
      `

    }



}





//spinner added
const toggle = isLoading => {
    const loadding = document.getElementById('lodder')
    if (isLoading) {
        loadding.classList.remove('d-none')
    }

    else {
        loadding.classList.add('d-none')
    }

}