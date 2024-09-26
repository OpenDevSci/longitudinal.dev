import{bh as x,l as f,c as o,e as a,f as t,t as n,k as s,p as v,j as b,r as h,h as l,w as d,F as p,ah as m,aZ as R,aL as y,ai as A}from"./BFOc3Iih.js";const S=x("/images/r-logo.png"),w=e=>(v("data-v-ede2a85d"),e=e(),b(),e),P={class:"book"},D=["href"],I=["src","alt"],T=w(()=>t("strong",null,"Author:",-1)),L=w(()=>t("strong",null,"Description:",-1)),j={__name:"BookCard",props:{title:String,author:String,description:String,image:String,link:String},setup(e){return(u,_)=>(o(),a("div",P,[t("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},[t("img",{src:e.image,alt:e.title,class:"book-cover"},null,8,I),t("h3",null,n(e.title),1),t("p",null,[T,s(" "+n(e.author),1)]),t("p",null,[L,s(" "+n(e.description),1)])],8,D)]))}},N=f(j,[["__scopeId","data-v-ede2a85d"]]),g=e=>(v("data-v-2e61ab35"),e=e(),b(),e),B={class:"wrapper"},q=g(()=>t("header",{class:"r-header flex justify-center items-center text-white h-64"},[t("div",{class:"r-logo-animation flex items-end"},[t("img",{src:S,alt:"Learn R",class:"w-32 h-32"}),t("span",{class:"text-4xl font-bold ml-2"},"esources")])],-1)),C={class:"header bg-white p-4 text-black h-20"},G={class:"navigation flex justify-center gap-4 h-full items-center"},V={class:"neve-main"},$={id:"books"},H={class:"container mx-auto"},E=g(()=>t("h2",{class:"text-2xl font-bold text-center mb-4"},"Open Source R",-1)),M={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},U={id:"videos",class:"py-8 bg-gray-200 dark:bg-white"},W={class:"container mx-auto"},z=g(()=>t("h2",{class:"text-2xl font-bold text-center text-black mb-4"}," Instructional Videos ",-1)),F={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"},O=["src"],J={class:"text-lg font-semibold mt-2"},K={id:"interactive"},X={class:"container mx-auto"},Z=g(()=>t("h2",{class:"text-2xl font-bold text-center mb-4"}," Interactive Tutorials ",-1)),Y={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"},Q=["href"],tt={class:"text-lg font-semibold"},et=R('<section id="cheatsheets" class="py-8 bg-blue-100 dark:bg-white" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center mb-4 text-black" data-v-2e61ab35> Cheatsheets </h2></div></section><section id="additional-tutorials" data-v-2e61ab35><div class="container mx-auto" data-v-2e61ab35><h2 class="text-2xl font-bold text-center mb-4" data-v-2e61ab35> Add additional tutorials </h2></div></section>',2),it={__name:"resources_seenote",setup(e){const u=h([{title:"R for Data Science",author:"Hadley Wickham & Garrett Grolemund",description:"This book will teach you how to do data science with R, covering the entire data analysis workflow.",image:"/images/r-for-data-science-cover.jpg",link:"https://r4ds.hadley.nz/"},{title:"Advanced R",author:"Hadley Wickham",description:"A deep dive into the R language, helping you understand R's data structures and programming paradigms.",image:"/images/advanced-r.png",link:"https://adv-r.hadley.nz/"},{title:"Efficient R Programming",author:"Colin Gillespie & Robin Lovelace",description:"This book provides tools and techniques to make your R code more efficient.",image:"/images/efficient-r-programming.png",link:"https://csgillespie.github.io/efficientR/"},{title:"R Programming for Data Science",author:"Roger D. Peng",description:"A comprehensive introduction to R programming for data science, covering fundamental concepts and techniques.",image:"/images/r-programming-for-data-science.png",link:"https://bookdown.org/rdpeng/RProgDA/"},{title:"Hands-On Programming with R",author:"Garrett Grolemund",description:"This book provides a practical introduction to programming with R, focusing on hands-on experience and real-world examples.",image:"/images/hands-on-programming-with-r.jpg",link:"https://rstudio-education.github.io/hopr/"},{title:"R Inferno",author:"Patrick Burns",description:"A guide to the pitfalls of R, providing insights into common errors and how to avoid them.",image:"/images/r-inferno.jpg",link:"http://www.burns-stat.com/pages/Tutor/R_inferno.pdf"},{title:"Software for Data Analysis with R",author:"John M. Chambers",description:"This book covers software development for data analysis, with a focus on R and its applications.",image:"/images/software-for-data-analysis-with-r.jpg",link:"https://bookdown.org/rdpeng/RProgDA/"},{title:"The Pirate's Guide to R",author:"Nathaniel D. Phillips",description:"A fun and accessible introduction to R, presented in a pirate-themed format to engage readers.",image:"/images/yarrr-the-pirates-guide-to-r.jpeg",link:"https://bookdown.org/ndphillips/YaRrr/"},{title:"The Art of R Programming",author:"Norman Matloff",description:"This book provides a comprehensive guide to R programming, covering everything from basic concepts to advanced techniques.",image:"/images/the-art-of-r-programming.jpg",link:"https://web.cs.ucdavis.edu/~matloff/matloff/public_html/145/PLN/RMaterials/NSPpart.pdf"},{title:"Deep R Programming",author:"Roger D. Peng",description:"An in-depth exploration of R programming, focusing on advanced topics and techniques.",image:"/images/deep-r-programming.png",link:"https://deepr.gagolewski.com/"}]),_=h([{title:"Introduction to Data Science",link:"https://www.youtube.com/embed/example1",description:"An introductory video on data science concepts and techniques."},{title:"Advanced R Programming",link:"https://www.youtube.com/embed/videoseries?list=PLm-R300a1uRfH-cy2-KuOD7gHzSRFnX-h",description:"A deep dive into advanced R programming topics."},{title:"Data Wrangling with R",link:"https://www.youtube.com/embed/videoseries?si=dNM2v87Ri3byUhe-&amp;list=PLEiEAq2VkUUKAw0aAJ1W4jpZ1q9LpX4yG",description:"Learn the essentials of data wrangling with R."}]),k=h([{title:"Interactive R Tutorial",link:"https://www.example.com/interactive-tutorial",description:"An interactive tutorial to learn R programming."},{title:"Another Interactive Tutorial",link:"https://www.example.com/another-interactive-tutorial",description:"Another great interactive tutorial for learning advanced R programming techniques."}]);return(ot,at)=>{const r=y;return o(),a("div",B,[q,t("header",C,[t("nav",G,[l(r,{to:"#books",class:"nav-button"},{default:d(()=>[s(" Books ")]),_:1}),l(r,{to:"#interactive",class:"nav-button"},{default:d(()=>[s(" Interactive tutorials ")]),_:1}),l(r,{to:"#videos",class:"nav-button"},{default:d(()=>[s(" Videos ")]),_:1}),l(r,{to:"#cheatsheets",class:"nav-button"},{default:d(()=>[s(" Cheatsheets ")]),_:1}),l(r,{to:"#text-tutorials",class:"nav-button"},{default:d(()=>[s(" Blogs ")]),_:1})])]),t("main",V,[t("section",$,[t("div",H,[E,t("div",M,[(o(!0),a(p,null,m(u.value,(i,c)=>(o(),A(N,{key:c,title:i.title,author:i.author,description:i.description,image:i.image,link:i.link},null,8,["title","author","description","image","link"]))),128))])])]),t("section",U,[t("div",W,[z,t("div",F,[(o(!0),a(p,null,m(_.value,(i,c)=>(o(),a("div",{key:c,class:"video"},[t("iframe",{src:i.link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",class:"w-full h-64"},null,8,O),t("h3",J,n(i.title),1),t("p",null,n(i.description),1)]))),128))])])]),t("section",K,[t("div",X,[Z,t("div",Y,[(o(!0),a(p,null,m(k.value,(i,c)=>(o(),a("div",{key:c,class:"tutorial"},[t("a",{href:i.link,target:"_blank",rel:"noopener noreferrer",class:"block bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg"},[t("h3",tt,n(i.title),1),t("p",null,n(i.description),1)],8,Q)]))),128))])])]),et])])}}},nt=f(it,[["__scopeId","data-v-2e61ab35"]]);export{nt as default};
