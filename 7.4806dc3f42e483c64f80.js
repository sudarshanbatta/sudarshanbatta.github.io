(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Pgpq:function(t,n,e){"use strict";e.r(n),e.d(n,"MoviesListModule",(function(){return l}));var i=e("ofXK"),o=e("3Pt+"),a=e("tk/3"),s=e("tyNb");const c=[{title:"Bahubali 2",published:"12th June 2022",totalMins:"2000",revenue:"8999",type:"Rent",status:"Active",views:"7",image:"../assets/movie_images/baahubali-2-prabhas.jpg"},{title:"KGF 2",published:"12th July 2021",totalMins:"209",revenue:"59",type:"Rent",status:"InActive",views:"50",image:"../assets/movie_images/kgf2.jpg"},{title:"Ironman",published:"23 April 2008",totalMins:"220",revenue:"5999",type:"Rent",status:"Active",views:"1888",image:"../assets/movie_images/download.jpeg"},{title:"Avengers Endgame",published:"26 April 2019",totalMins:"3000",revenue:"6899",type:"Rent",status:"Active",views:"10000",image:"../assets/movie_images/endgame.jpeg"}];var r=e("fXoL");const b=function(t,n){return{"bg-active":t,"bg-inActive":n}};function d(t,n){if(1&t&&(r.Kb(0,"div"),r.Kb(1,"div",7),r.Kb(2,"div",11),r.Ib(3,"img",12),r.Jb(),r.Kb(4,"div",13),r.Kb(5,"p",14),r.ac(6),r.Jb(),r.Kb(7,"p",15),r.ac(8),r.Jb(),r.Kb(9,"div",16),r.Kb(10,"div",7),r.Kb(11,"div",17),r.Kb(12,"div",18),r.ac(13," TOTAL MINS "),r.Jb(),r.Kb(14,"div",19),r.ac(15),r.Jb(),r.Jb(),r.Kb(16,"div",17),r.Kb(17,"div",18),r.ac(18," REVENUE "),r.Jb(),r.Kb(19,"div",19),r.ac(20),r.Jb(),r.Jb(),r.Kb(21,"div",17),r.Kb(22,"div",18),r.ac(23," VIEWS "),r.Jb(),r.Kb(24,"div",19),r.ac(25),r.Jb(),r.Jb(),r.Kb(26,"div",17),r.Kb(27,"div",18),r.ac(28," TYPE "),r.Jb(),r.Kb(29,"div",19),r.ac(30),r.Jb(),r.Jb(),r.Kb(31,"div",17),r.Kb(32,"div",18),r.ac(33," STATUS "),r.Jb(),r.Kb(34,"div",19),r.Kb(35,"span",20),r.ac(36),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Ib(37,"hr"),r.Jb()),2&t){const t=n.$implicit;r.xb(3),r.Tb("src",t.image,r.Xb),r.xb(3),r.bc(t.title),r.xb(2),r.cc("Published : ",t.published,""),r.xb(7),r.cc(" ",t.totalMins," "),r.xb(5),r.cc(" ",t.revenue," "),r.xb(5),r.cc(" ",t.views," "),r.xb(5),r.cc(" ",t.type," "),r.xb(5),r.Sb("ngClass",r.Ub(9,b,"Active"===t.status,"InActive"===t.status)),r.xb(1),r.bc(t.status)}}const p=[{path:"",component:(()=>{class t{constructor(){this.moviesList=[]}ngOnInit(){this.moviesList=c}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-movies-list"]],decls:12,vars:1,consts:[[1,"container-fluid","bg-black","h-100"],[1,"filter-section","d-flex","justify-content-between"],[1,"text-light","mt-4"],[1,"search","mt-4"],["type","search","placeholder","Search with keyword...",1,"form-control"],["src","../../assets/search.svg"],[1,"dashboard-section"],[1,"row"],[1,"col-md-12"],[1,"card","p-3"],[4,"ngFor","ngForOf"],[1,"col-md-12","col-sm-1","col-lg-1","col-xl-1","col-1","text-center","image-section"],["height","147px","width","90px",1,"movie-poster",3,"src"],[1,"col-md-12","col-11","col-sm-11","col-xl-11","col-lg-11","right-content"],[1,"movie-title","mb-0"],[1,"publisg-date"],[1,"movie-status"],[1,"col-md-2","side-content"],[1,"label"],[1,"content"],[3,"ngClass"]],template:function(t,n){1&t&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Kb(2,"p",2),r.ac(3,"STATS"),r.Jb(),r.Kb(4,"div",3),r.Ib(5,"input",4),r.Ib(6,"img",5),r.Jb(),r.Jb(),r.Kb(7,"div",6),r.Kb(8,"div",7),r.Kb(9,"div",8),r.Kb(10,"div",9),r.Zb(11,d,38,12,"div",10),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&(r.xb(11),r.Sb("ngForOf",n.moviesList))},directives:[i.i,i.h],styles:[".search[_ngcontent-%COMP%]{color:#555;display:flex;padding:2px;border:1px solid;border-radius:5px;margin:0 0 30px;width:35%}input[type=search][_ngcontent-%COMP%]{background:transparent;margin:0;padding:7px 8px;font-size:14px;color:inherit;border:1px solid transparent;border-radius:inherit}input[type=search][_ngcontent-%COMP%]::placeholder{color:#bbb}button[type=submit][_ngcontent-%COMP%]{text-indent:-999px;overflow:hidden;width:40px;padding:0;margin:0;border:1px solid transparent;border-radius:inherit;background:transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat 50%;cursor:pointer;opacity:.7}button[type=submit][_ngcontent-%COMP%]:hover{opacity:1}button[type=submit][_ngcontent-%COMP%]:focus, input[type=search][_ngcontent-%COMP%]:focus{box-shadow:none;outline:none}form.nosubmit[_ngcontent-%COMP%]{border:none;padding:0}input.nosubmit[_ngcontent-%COMP%]{border:1px solid #555;width:100%;padding:9px 4px 9px 40px;background:transparent url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat 13px}.card[_ngcontent-%COMP%]{background-color:#afbbbb}.card[_ngcontent-%COMP%]   .publisg-date[_ngcontent-%COMP%]{font-size:12px}.card[_ngcontent-%COMP%]   .movie-poster[_ngcontent-%COMP%]{border-radius:3px}.card[_ngcontent-%COMP%]   .movie-status[_ngcontent-%COMP%]{background-color:#fff;padding:18px 10px;border-radius:5px}.card[_ngcontent-%COMP%]   .movie-status[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-bottom:10px;font-size:14px}.card[_ngcontent-%COMP%]   .movie-status[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-weight:600;font-size:14px}.card[_ngcontent-%COMP%]   .movie-status[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bg-active[_ngcontent-%COMP%]{background-color:rgba(40,167,69,.23921568627450981);border-radius:3px;padding:5px 10px;font-size:12px}.card[_ngcontent-%COMP%]   .movie-status[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bg-inActive[_ngcontent-%COMP%]{background-color:#dc3545;border-radius:3px;padding:5px 10px;font-size:12px}@media (min-width:992px) and (max-width:1200px){.right-content[_ngcontent-%COMP%]{padding:0 45px!important}}@media screen and (max-width:767px){.image-section[_ngcontent-%COMP%]{padding:0!important}.right-content[_ngcontent-%COMP%]{padding:0 10px 0 85px!important}}@media screen and (max-width:767px) and (orientation:landscape){.movie-status[_ngcontent-%COMP%]   .side-content[_ngcontent-%COMP%]{max-width:20%!important}.movie-status[_ngcontent-%COMP%]   .side-content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-bottom:10px;font-size:12px}.movie-status[_ngcontent-%COMP%]   .side-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-weight:600;font-size:12px}}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(n){return new(n||t)},imports:[[s.b.forChild(p)],s.b]}),t})(),l=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(n){return new(n||t)},imports:[[i.b,g,o.e,o.i,a.a]]}),t})()}}]);