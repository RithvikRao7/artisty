const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 //e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})


/*dropdown*/
const dropdown=document.querySelector('.dropdown');
dropdown.addEventListener('click' , () => {
  dropdown.classList.toggle('active');
})




let changeLikeIcon = function(like) {
  like.classList.toggle('fa-solid')
}

let changeSaveIcon = function(save) {
  save.classList.toggle('fa-solid')
}






let searchContainer = document.querySelector('.search-container');

let feed=document.querySelector('.feed');
let myClubs = document.querySelector('.myclub');
let trending = document.querySelector('.trending-space');
let events = document.querySelector('.events');
let latestActivity = document.querySelector('.latest-activity');


let icon = document.querySelector('.nav2-trending-icon');
let search=document.querySelector('.nav2-search-icon');
let notificationIcon = document.querySelector('.notifications');

search.addEventListener('click' , () => {
  search.classList.toggle('.nav2-active');
  searchContainer.classList.toggle('active-search-container');

  trending.classList.remove('active-trending');
  events.classList.remove('active-notifications');
  latestActivity.classList.remove('active-notifications');
  feed.classList.toggle('active1');

  if(feed.className === "active1"){
    
  }
  else{
    feed.classList.remove('active2');
    feed.classList.remove('active3');
  }
  
})


icon.addEventListener('click' , () => {
  icon.classList.toggle('.nav2-active');
  trending.classList.toggle('active-trending');

  searchContainer.classList.remove('active-search-container');
  events.classList.remove('active-notifications');
  latestActivity.classList.remove('active-notifications');
  feed.classList.toggle('active2');

  if(feed.className === "active2"){
    
  }
  else{
    feed.classList.remove('active1');
    feed.classList.remove('active3');
  }

})

notificationIcon.addEventListener('click' , () => {
  notificationIcon.classList.toggle('.nav2-active')
  events.classList.toggle('active-notifications');
  latestActivity.classList.toggle('active-notifications');

  trending.classList.remove('active-trending');
  searchContainer.classList.remove('active-search-container');
  feed.classList.toggle('active3');
  if(feed.className === "active3"){
    
  }
  else{
    feed.classList.remove('active1');
    feed.classList.remove('active2');
  }

})

if(search.className==='nav2-active'||icon.className==='nav2-active'||notificationIcon.className==='nav2-icon'){
  feed.classList.toggle('active1');
}