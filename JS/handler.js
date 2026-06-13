document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        //console.log('btn clicked')
        const pageTitleElement = document.getElementById('page-title')
        //console.log('pageTitleElement');
        pageTitleElement.innerText = "Updated page title"
    });
  document.getElementById('btn-login')
        .addEventListener('click', function(){
            const userInfoElement = document.getElementById('user-info');
            userInfoElement.innerText='hello' 
        })
       