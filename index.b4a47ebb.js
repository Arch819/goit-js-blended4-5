var e={save:(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}};const t="user@mail.com",r="secret";let o={};const n=document.querySelector(".login-form"),a=document.querySelector(".login-btn"),s=document.querySelectorAll(".login-input");n.addEventListener("input",(function(e){const{name:t,value:r}=e.target;o[t]=r})),n.addEventListener("submit",(function(c){c.preventDefault();const{email:l,password:i}=o;if(!l||!i)return void alert("Заповніть усі поля");if(l!==t||i!==r)return void alert("Не співпадають дані");e.save("login-data",o),a.textContent="Logout",s.forEach((e=>e.setAttribute("readonly",!0))),n.reset()}));
//# sourceMappingURL=index.b4a47ebb.js.map
