webpackJsonp([1],{"1/oy":function(t,e){},"1Ugr":function(t,e){},"24e/":function(t,e){},"70la":function(t,e){},"7hxj":function(t,e){},"8uSr":function(t,e){},"9M+g":function(t,e){},CXS1:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},MrK1:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("e6fC"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),s("b-navbar-brand",{attrs:{to:"/"}},[t._v("\n    Light bubble\n  ")]),t._v(" "),s("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/bubbles"}},[t._v("\n        Explora\n      ")]),t._v(" "),s("b-nav-item",{attrs:{to:"/new"}},[t._v("\n        Publica tu causa\n      ")])],1),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2",attrs:{type:"text",placeholder:"¿Qué deseas encontrar?"}}),t._v(" "),s("b-button",{staticClass:"my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Buscar")])],1),t._v(" "),s("b-nav-item-dropdown",{attrs:{right:""}},[s("template",{slot:"button-content"},[s("b-img",{staticClass:"m-0",attrs:{rounded:"circle",blank:"",width:"36",height:"36","blank-color":"#777",alt:"img"}})],1),t._v(" "),s("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Perfil")]),t._v(" "),s("b-dropdown-item",{attrs:{to:"/dashboard"}},[t._v("Panel de control")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Signout")])],2)],1)],1)],1)},staticRenderFns:[]},i={name:"App",components:{Navigator:s("VU/8")({},r,!1,null,null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navigator"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},l=s("VU/8")(i,o,!1,null,null,null).exports,c=s("/ocq"),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[s("h1",[t._v("Hello world!")])]),t._v(" "),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),s("b-carousel-slide",[s("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})]),t._v(" "),s("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[s("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n        ut lacus vel interdum.\n      ")])])],1),t._v(" "),t._e()],1)},staticRenderFns:[]},m=s("VU/8")({data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},u,!1,null,null,null).exports,b={props:{bubble:{type:Object,required:!0}},data:function(){return{max:36}},methods:{maxLength:function(t){return t.length>this.max?t.substring(0,this.max)+"...":t}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-card",{staticClass:"card gradient-top p-0",attrs:{"img-alt":"Card image","img-top":"","footer-tag":"footer"}},[s("img",{attrs:{src:t.bubble.media_url}}),t._v(" "),s("div",{staticClass:"card-body p-0"},[s("router-link",{staticClass:"bubble-item bg-tr-gradient-down p-3",attrs:{to:"/bubble/"+t.bubble.id}},[s("h5",{staticClass:"card-title text-shadow-dark"},[t._v(t._s(t.bubble.title))]),t._v(" "),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-shadow-dark",domProps:{textContent:t._s(t.maxLength(t.bubble.description))}})])]),t._v(" "),s("div",{staticClass:"card-buttons"},[s("b-button",{staticClass:"box-shadow",attrs:{size:"sm",variant:"success"}},[t._v("\n          Votar\n      ")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{size:"sm",variant:"info"}},[t._v("\n          Donar\n      ")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{size:"sm",variant:"danger"}},[t._v("\n          Denunciar\n      ")])],1)],1)])},staticRenderFns:[]};var p=s("VU/8")(b,d,!1,function(t){s("gAWI")},null,null).exports,v={components:{Carousel:m,BubbleItemList:p},computed:{lastBubbles:function(){return this.$store.getters.bubbles}},created:function(){this.$store.dispatch("loadBubbles")}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("div",{staticClass:"text-center"},[s("b-jumbotron",{attrs:{id:"presentation",fluid:"",header:"Marketing caritativo",lead:"Canjea una donación a una una causa de bien común y \n        te damos por tiempo de publicidad"}},[s("div",{staticClass:"text-holder"},[s("b-btn",{attrs:{to:"/signup",variant:"primary"}},[t._v("\n          Registrar mi cuenta\n        ")]),t._v(" "),s("b-btn",{attrs:{to:"/signin",variant:"success"}},[t._v("\n          Ingresar\n        ")]),t._v(" "),s("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.tutorial",modifiers:{tutorial:!0}}],attrs:{variant:"warning"}},[t._v("\n          ¿Como funciona?\n        ")]),t._v(" "),s("b-modal",{staticClass:"text-left",attrs:{id:"tutorial",title:"¿Cómo funciona?","ok-only":""}},[s("p",{staticClass:"p one"},[t._v("\n            Selecciona una de las causas registradas en nuestra plataforma\n          ")]),t._v(" "),s("p",{staticClass:"p two"},[t._v("\n            Realiza una donación a la causa seleccionada eligiendo \n            la duración en meses\n          ")]),t._v(" "),s("p",{staticClass:"p three"},[t._v("\n            Crea tu publicación y envíala a difundir durante el tiempo \n            que corresponda dependiendo del tipo donación.\n          ")])])],1)])],1),t._v(" "),s("b-container",{staticClass:"carousel-container"},[s("b-row",[s("b-col",{attrs:{col:"",lg:"12"}},[s("h4",{staticClass:"mb-4"},[t._v("\n          Publica ideas para mejorar el mundo\n        ")]),t._v(" "),s("Carousel",{staticClass:"carousel",attrs:{name:"home"}})],1)],1)],1),t._v(" "),s("b-container",{staticClass:"last-bubbles"},[s("b-row",t._l(t.lastBubbles,function(t){return s("b-col",{key:t.id,attrs:{cols:"12",col:"",lg:"6"}},[s("BubbleItemList",{attrs:{bubble:t}})],1)}))],1)],1)},staticRenderFns:[]};var h=s("VU/8")(v,f,!1,function(t){s("1Ugr")},null,null).exports,g={components:{BubbleItemList:p},props:{bubbles:{type:Array,required:!0}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bubble-list"},[this._l(this.bubbles,function(t){return e("b-row",{key:t.id},[e("b-col",[e("BubbleItemList",{attrs:{bubble:t}})],1)],1)}),this._v(" "),e("b-row",[e("b-col",{staticClass:"text-center"},[e("router-link",{attrs:{to:"/"}},[e("span",[this._v("Ver más causas")])])],1)],1)],2)},staticRenderFns:[]};var C=s("VU/8")(g,_,!1,function(t){s("keP8")},null,null).exports,w={name:"google-map",props:{name:{type:String,required:!1},zoom:{type:Number,required:!1},markers:{type:Array,required:!1}},data:function(){return{mapName:this.name+"-map",center:{lat:-27.7834,lng:-64.2642}}},methods:{loadMapMarkers:function(t){this.markers.forEach(function(e){console.log("marker",e),new google.maps.Marker({position:{lat:e.lat,lng:e.lng}}).setMap(t)})}},created:function(){console.log(this.mapName)},mounted:function(){var t=document.getElementById(this.mapName),e={zoom:this.zoom?this.zoom:3,center:new google.maps.LatLng(this.center.lat,this.center.lng),mapTypeId:google.maps.MapTypeId.ROADMAP},s=new google.maps.Map(t,e);this.loadMapMarkers(s)}},x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"google-map",attrs:{id:this.mapName}})},staticRenderFns:[]};var y=s("VU/8")(w,x,!1,function(t){s("70la")},"data-v-75c59866",null).exports,k={components:{BubbleList:C,"google-map":y},data:function(){return{currentPage:1,markers:[{id:1,lat:-27.7834,lng:-64.2642},{id:2,lat:-30.7834,lng:-69.2648}]}},computed:{myBubbles:function(){return this.$store.getters.bubbles},otherBubbles:function(){return this.$store.getters.bubbles}},created:function(){this.$store.dispatch("loadBubbles")}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mt-4 mb-2"},[s("b-row",[s("b-col",{staticClass:"p-10",attrs:{col:"",xs:"12",sm:"12",md:"12",lg:"3"}},[s("b-list-group",[s("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputName2",placeholder:"Buscar en mi panel de control"}}),t._v(" "),s("br"),t._v(" "),s("b-list-group-item",{attrs:{active:"",href:"#some-link"}},[t._v("\n          Mis luces\n        ")]),t._v(" "),s("b-list-group-item",{attrs:{href:"#"}},[t._v("\n          Seguidores\n        ")]),t._v(" "),s("b-list-group-item",{attrs:{href:"#"}},[t._v("\n          Siguiendo a\n        ")]),t._v(" "),s("b-list-group-item",{attrs:{href:"#foobar"}},[t._v("\n          Configuración\n        ")])],1)],1),t._v(" "),s("b-col",{staticClass:"p-10 light-list",attrs:{col:"",xs:"12",sm:"12",md:"12",lg:"5",id:"light_list"}},[s("div",[s("h4",{staticClass:"pull-left px-3",staticStyle:{display:"inline-block"}},[t._v("\n          Mis luces\n        ")]),t._v(" "),s("small",{staticClass:"pull-right"},[t._v("Causas creadas por mi")]),t._v(" "),s("BubbleList",{attrs:{bubbles:t.myBubbles}})],1)]),t._v(" "),s("b-col",{staticClass:"p-10 text-center map-container-holder",attrs:{col:"",xs:"12",sm:"12",md:"12",lg:"4"}},[s("h4",[t._v("En mi ciudad")]),t._v(" "),s("div",{staticClass:"map-container radius-12"},[s("google-map",{staticClass:"radius-12",attrs:{name:"dashboard",markers:t.markers}})],1)])],1)],1)},staticRenderFns:[]};var S=s("VU/8")(k,B,!1,function(t){s("24e/")},null,null).exports,E=s("mtWM"),I=s.n(E),$={data:function(){return{bubble:{title:"",description:"",media_url:"",type:null},types:[{text:"Tipo",value:null},"Personas","Animales","","Corn"],show:!0}},methods:{onSubmit:function(t){var e=this;I.a.post("/bubbles.json",this.bubble).then(function(t){var s=t.data.name;e.$router.push("/bubble/"+s)}).catch(function(t){console.info("error",t)})},goBack:function(){this.$router.go(-1)}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",{attrs:{id:"exampleInputGroup2"}},[s("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Idea title"},model:{value:t.bubble.title,callback:function(e){t.$set(t.bubble,"title",e)},expression:"bubble.title"}})],1),t._v(" "),s("b-form-group",[s("b-form-textarea",{attrs:{id:"textarea1",placeholder:"Buble description",rows:3,"max-rows":6},model:{value:t.bubble.description,callback:function(e){t.$set(t.bubble,"description",e)},expression:"bubble.description"}})],1),t._v(" "),s("b-form-group",[s("b-form-input",{attrs:{type:"text",placeholder:"Image url",required:""},model:{value:t.bubble.media_url,callback:function(e){t.$set(t.bubble,"media_url",e)},expression:"bubble.media_url"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"exampleInputGroup3"}},[s("b-form-select",{attrs:{id:"exampleInput3",options:t.types,required:""},model:{value:t.bubble.type,callback:function(e){t.$set(t.bubble,"type",e)},expression:"bubble.type"}})],1),t._v(" "),s("div",{staticClass:"mt-5 actions text-center"},[s("b-button",{attrs:{variant:"danger"},on:{click:t.goBack}},[t._v("\n      Cancelar\n      ")]),t._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("\n      Crear\n    ")])],1)],1):t._e()},staticRenderFns:[]};var F={components:{BubbleForm:s("VU/8")($,U,!1,function(t){s("8uSr")},null,null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new-bubble"},[e("h1",{staticClass:"text-center"},[this._v("\n    Crea tu idea\n  ")]),this._v(" "),e("b-row",[e("b-col",{attrs:{col:"","offset-lg":"4",lg:"4"}},[e("BubbleForm")],1)],1)],1)},staticRenderFns:[]};var M=s("VU/8")(F,L,!1,function(t){s("7hxj")},null,null).exports,R={components:{BubbleList:C,"google-map":y},data:function(){return{markers:[{id:1,lat:-27.7834,lng:-64.2642},{id:2,lat:-30.7834,lng:-69.2648},{id:3,lat:-37.7834,lng:-34.2642}]}},computed:{allBubbles:function(){return this.$store.getters.bubbles}},created:function(){this.$store.dispatch("loadBubbles")}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mt-4 mb-2"},[s("b-row",[s("b-col",{staticClass:"p-10",attrs:{col:"",lg:"3"}},[s("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputName2",placeholder:"Buscar"}}),t._v(" "),s("br"),t._v(" "),s("b-list-group",[s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#",active:""}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v("Últimas causas registradas")])]),t._v(" "),s("p",{staticClass:"mb-1 mt-2"},[s("small",[t._v("Causas publicadas recientemente")])])]),t._v(" "),s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v("Tendencias")])]),t._v(" "),s("p",{staticClass:"mb-1 mt-2"},[s("small",[t._v("Las causas con mayor cantidad de votos acumulados")])])]),t._v(" "),s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#",disabled:""}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v("Por categoría")])]),t._v(" "),s("p",{staticClass:"mb-1 mt-2"},[s("small",[t._v("Todas las causas categorizadas")])])])],1)],1),t._v(" "),s("b-col",{staticClass:"p-10 light-list",attrs:{col:"",lg:"5"}},[s("h4",{staticClass:"text-center px-3",staticStyle:{display:"inline-block"}},[t._v("\n        Todas las causas\n      ")]),t._v(" "),s("BubbleList",{attrs:{bubbles:t.allBubbles}})],1),t._v(" "),s("b-col",{staticClass:"p-10 text-center map-container-holder",attrs:{col:"",lg:"4"}},[s("h4",[t._v("\n        Causas en tu ciudad\n      ")]),t._v(" "),s("div",{staticClass:"map-container radius-12"},[s("google-map",{staticClass:"radius-12",attrs:{name:"explorer",markers:t.markers}})],1),t._v(" "),s("div",{staticClass:"sharing-box mt-3"},[s("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{type:"button"}},[t._v("\n          Compartir\n        ")])])])],1)],1)},staticRenderFns:[]};var D=s("VU/8")(R,q,!1,function(t){s("XXvM")},"data-v-edf3e07c",null).exports,j={props:{items:{type:Array,required:!0}},computed:{hideControls:function(){return this.items.length<2},hideDelimiters:function(){return this.items.length<2}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-no-anim","no-animation":"",indicators:!this.hideControls,controls:!this.hideControls,"img-width":"1024","img-height":"480"}},this._l(this.items,function(t,s){return e("b-carousel-slide",{key:s,staticClass:"radius-12",attrs:{caption:t.title,"img-src":t.media_url}})}))},staticRenderFns:[]},T=s("VU/8")(j,N,!1,null,null,null).exports,V={props:{contact:{type:Object,required:!0},fromUserName:{type:String,required:!1}},methods:{onSubmit:function(){console.log("submitting...")},hasText:function(){return console.log(this.contact.message),""!=this.contact.message}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",[s("b-form-input",{attrs:{type:"text",placeholder:"Danos un nombre",required:""},model:{value:t.fromUserName,callback:function(e){t.fromUserName=e},expression:"fromUserName"}})],1),t._v(" "),s("b-form-group",[s("b-form-input",{attrs:{id:"contact_email",type:"email",required:"",placeholder:"Ingresa un correo"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),t._v(" "),s("b-form-group",[s("b-form-textarea",{attrs:{id:"contact_message",placeholder:"Tu mensaje o consulta",rows:3,"max-rows":6},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}})],1),t._v(" "),s("b-form-group",{staticClass:"text-center m-0"},[s("b-button",{attrs:{type:"submit",variant:"primary",disabled:!t.hasText()}},[t._v("\n      Enviar\n    ")])],1)],1)},staticRenderFns:[]},P={components:{"app-carousel":T,"google-map":y,"contact-form":s("VU/8")(V,A,!1,null,null,null).exports,BubbleList:C},data:function(){return{mapMarkers:[{id:1,lat:-27.7834,lng:-64.2642}],currentUser:{id:1,username:"migueldiganchi",name:"Miguel Diganchi",addresses:[],email:"migueldiganchi@gmail.com",phones:[],causes:[]},showCommentForm:!1,newComment:{id:null,username:null,comment:null},mediaList:[{id:1,title:"Some title in the image",media_url:"https://picsum.photos/1024/480/?image=10"},{id:2,title:"Some other title in the image",media_url:"https://picsum.photos/1024/480/?image=12"},{id:3,title:"Some third in the image",media_url:"https://picsum.photos/1024/480/?image=22"},{id:4,title:"Some other img title",media_url:"https://picsum.photos/1024/480/?image=23"}],comments:[{id:1,username:"Miguel Diganchi",comment:"Some text with some description"},{id:2,username:"Diego Diganchi",comment:"Some text with some description of Diego Diganchi"},{id:3,username:"Muya Diganchi",comment:"Some text with some description of muya diganchi"}],newContact:{email:null,name:null,subject:null,message:null}}},computed:{bubble:function(){return this.$store.getters.bubble},relatedBubbles:function(){return[]},bubbleMediaList:function(){if(this.bubble){var t=[];t.push({id:9,title:this.bubble.description,media_url:this.bubble.media_url});for(var e=0;e<this.mediaList.length;e++){var s=this.mediaList[e];t.push(s)}return t}}},methods:{addComment:function(){return this.newComment.id=99,this.comments.push(this.newComment),this.showCommentForm=!1,this.startComment(),!1},startComment:function(){this.newComment={id:null,username:this.currentUser.name,comment:null}}},created:function(){var t=this.$route.params.id;this.$store.dispatch("getBubble",t),this.$store.dispatch("loadBubbles"),this.startComment()}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.bubble?s("div",{staticClass:"bubble py-3"},[s("b-row",[s("b-col",{attrs:{col:"","offset-lg":"2",lg:"8"}},[s("div",{staticClass:"body-container p-3"},[s("h4",{staticClass:"body-title mb-3"},[t._v("\n          "+t._s(t.bubble.title)+"\n        ")]),t._v(" "),s("p",{staticClass:"body-description"},[t._v("\n          "+t._s(t.bubble.description)+"\n        ")])])])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{col:"","offset-lg":"2",lg:"8"}},[s("div",{staticClass:"media-container"},[s("app-carousel",{attrs:{items:t.bubbleMediaList}})],1),t._v(" "),s("div",{staticClass:"actions p-1 text-center"},[s("b-button",{staticClass:"box-shadow",attrs:{variant:"success"}},[t._v("Votar")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{variant:"info"}},[t._v("Donar")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{variant:"danger"}},[t._v("Denunciar")])],1)])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{col:"","offset-lg":"2",lg:"8"}},[s("div",{staticClass:"bubble-map-container mt-3 py-2"},[s("google-map",{staticClass:"radius-12",attrs:{name:"dashboard",zoom:6,markers:t.mapMarkers}})],1)])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{col:"",cols:"12","offset-lg":"2",lg:"3"}},[s("h5",{staticClass:"mb-4 mt-3 text-center"},[t._v("\n          Mensaje privado\n        ")]),t._v(" "),s("div",{staticClass:"radius-12 p-3",staticStyle:{border:"solid 1px #c9c9c9","background-color":"#f9f9f9"}},[s("contact-form",{attrs:{fromUserName:t.currentUser.name,contact:t.newContact}})],1)]),t._v(" "),s("b-col",{attrs:{col:"",lg:"5"}},[s("div",{staticClass:"comments-container"},[s("h5",{staticClass:"mb-4 mt-3 text-center"},[t._v("\n          Comentarios\n        ")]),t._v(" "),s("div",{staticClass:"comment-list"},t._l(t.comments,function(e){return s("b-card-body",{key:e.id,staticClass:"comment-card radius-12 mb-3"},[s("label",{staticClass:"mb-2"},[t._v(t._s(e.username))]),t._v(" "),s("p",[t._v("\n              "+t._s(e.comment)+"\n            ")])])})),t._v(" "),t.showCommentForm?s("div",{staticClass:"p-3 radius-12",staticStyle:{border:"solid 1px #c9c9c9","background-color":"#f9f9f9"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("b-form-group",{staticClass:"mb-3"},[s("b-form-input",{attrs:{type:"text",placeholder:"Ingresa tu nombre"},model:{value:t.newComment.username,callback:function(e){t.$set(t.newComment,"username",e)},expression:"newComment.username"}})],1),t._v(" "),s("b-form-group",[s("b-form-textarea",{attrs:{placeholder:"Por favor ingresa un comentario",rows:"2","max-rows":"6"},model:{value:t.newComment.comment,callback:function(e){t.$set(t.newComment,"comment",e)},expression:"newComment.comment"}})],1),t._v(" "),s("b-form-group",{staticClass:"text-right m-0"},[s("b-button",{attrs:{type:"button"},on:{click:function(e){t.showCommentForm=!t.showCommentForm}}},[t._v("\n                Cancelar\n              ")]),t._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("\n                Agregar comentario\n              ")])],1)],1)],1):t._e(),t._v(" "),s("div",{staticClass:"text-center"},[t.showCommentForm?t._e():s("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){t.showCommentForm=!t.showCommentForm}}},[t._v("\n            Comentar\n          ")])],1)])])],1),t._v(" "),s("b-row",[t.relatedBubbles&&t.relatedBubbles.length>0?s("b-col",{attrs:{col:"","offset-lg":"5",lg:"7"}},[s("div",{staticClass:"bubble-list p-3"},[s("h5",{staticClass:"mb-4 text-center"},[t._v("\n          Causas relacionadas\n        ")]),t._v(" "),s("BubbleList",{attrs:{bubbles:t.relatedBubbles}})],1)]):t._e()],1)],1):t._e()},staticRenderFns:[]};var G=s("VU/8")(P,z,!1,function(t){s("CXS1")},null,null).exports,Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile p-5"},[s("div",{staticClass:"content text-center"},[s("b-img",{staticClass:"m-1",attrs:{rounded:"circle",blank:"",width:"75",height:"75","blank-color":"#777",alt:"img"}}),t._v(" "),s("h3",{staticClass:"user-name"},[t._v("\n      "+t._s(t.user.fullname)+"\n    ")]),t._v(" "),s("p",{staticClass:"m-3"},[t._v("\n      "+t._s(t.user.description)+"\n    ")])],1)])},staticRenderFns:[]};var W=s("VU/8")({data:function(){return{user:{picture_url:"",fullname:"Miguel Diganchi",description:"Filantropo ocacional"}}}},Y,!1,function(t){s("rIps")},"data-v-ce92b80e",null).exports,X=new I.a.create({baseURL:"https://www.googleapis.com/identitytoolkit/v3/relyingparty"}),J={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){X.post("/verifyPassword?key=AIzaSyAg5v9ERFGf8p7YvLLjYMJ-8bK-T2r7358",{email:this.email,password:this.password,returnSecureToken:!0}).then(function(t){console.log("response",t),alert("are we signin up? This is great :D")}).catch(function(t){console.info("error",t)})}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signin-page"},[s("h1",{staticClass:"text-center"},[t._v("\n    Ingresar\n  ")]),t._v(" "),s("b-container",[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{cols:"5"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",{attrs:{id:"EmailGroup",label:"Email address:","label-for":"emailInput",description:"We'll never share your email with anyone else."}},[s("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"PasswordGroup",label:"Your password:","label-for":"passwordInput"}},[s("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Enter your password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"pull-right",attrs:{type:"submit",variant:"primary"}},[t._v("Enter")])],1)],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("label",[t._v("¿No tienes cuenta?")]),t._v(" "),s("br"),t._v(" "),s("router-link",{attrs:{to:"/signup"}},[t._v("Creala ahora!")])],1)],1)],1)],1)],1)},staticRenderFns:[]},H=s("VU/8")(J,O,!1,null,null,null).exports,K={data:function(){return{email:"",name:"",password:"",passwordConfirmation:"",terms:!1}},methods:{onSubmit:function(){var t={email:this.email,name:this.name,password:this.password,passwordConfirmation:this.passwordConfirmation,terms:this.terms};X.post("/signupNewUser?key=AIzaSyAg5v9ERFGf8p7YvLLjYMJ-8bK-T2r7358",{email:t.email,password:t.password,returnSecureToken:!0}).then(function(t){console.log("response",t),alert("are we signin up? This is great :D")}).catch(function(t){console.info("error",t)})},onReset:function(t){var e=this;t.preventDefault(),this.name="",this.email="",this.password="",this.passwordConfirmation="",this.terms=!1,this.$nextTick(function(){e.terms=!1})}}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup-page"},[s("h1",{staticClass:"text-center"},[t._v("\n    Registra tu cuenta\n  ")]),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{cols:"5"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[s("b-form-group",{attrs:{id:"NameGroup",label:"Name:","label-for":"nameInput",description:"We'll never share your email with anyone else."}},[s("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter your name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"EmailGroup",label:"Email address:","label-for":"emailInput",description:"We'll never share your email with anyone else."}},[s("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter your email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"PasswordGroup",label:"Your password:","label-for":"passwordInput"}},[s("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Enter your password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"PasswordConfirmationGroup",label:"Confirm your password:","label-for":"passwordConfirmationInput"}},[s("b-form-input",{attrs:{id:"passwordConfirmationInput",type:"password",required:"",placeholder:"Confirm your password"},model:{value:t.passwordConfirmation,callback:function(e){t.passwordConfirmation=e},expression:"passwordConfirmation"}})],1),t._v(" "),s("br"),t._v(" "),s("b-form-group",{attrs:{id:"exampleGroup4"}},[s("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[s("b-form-checkbox",[t._v("Acepto las condiciones de uso")])],1)],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Create account")]),t._v(" "),s("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1)],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("label",[t._v("¿Ya tienes una cuenta?")]),t._v(" "),s("br"),t._v(" "),s("router-link",{attrs:{to:"/signin"}},[t._v("Ingresa")])],1)],1)],1)],1)],1)},staticRenderFns:[]},Z=s("VU/8")(K,Q,!1,null,null,null).exports;a.a.use(c.a);var tt=new c.a({routes:[{path:"/",name:"home",component:h},{path:"/signin",name:"signin",component:H},{path:"/signup",name:"signup",component:Z},{path:"/dashboard",name:"dashboard",component:S},{path:"/new",name:"new",component:M},{path:"/profile",name:"profile",component:W},{path:"/bubbles",name:"bubbles",component:D},{path:"/bubble/:id",name:"bubble",component:G}],scrollBehavior:function(t,e,s){return{y:0}}}),et=s("NYxO"),st=s("Dd8w"),at=s.n(st),nt={bubble:null,bubbles:[]},rt={state:nt,mutations:{SET_BUBBLES:function(t,e){t.bubbles=e},SET_BUBBLE:function(t,e){t.bubble=e}},actions:{loadBubbles:function(t){var e=t.commit;I.a.get("/bubbles.json").then(function(t){var s=[];for(var a in t.data)s.push(at()({id:a},t.data[a]));e("SET_BUBBLES",s)}).catch(function(t){console.info("error",t)})},getBubble:function(t,e){var s=t.commit;I.a.get("/bubbles/"+e+".json").then(function(t){console.log("response.data",t.data),s("SET_BUBBLE",t.data)}).catch(function(t){console.info("error",t)})}},getters:{bubbles:function(){return nt.bubbles},bubble:function(t){return nt.bubble}}};a.a.use(et.a);var it=new et.a.Store({modules:{bubbles:rt}});s("Jmt5"),s("9M+g"),s("MrK1");a.a.config.productionTip=!1,a.a.use(n.a),I.a.defaults.baseURL="https://light-bubble.firebaseio.com/",I.a.defaults.headers.get.Accepts="application/json";var ot=I.a.interceptors.request.use(function(t){return console.log("interceptors config",t),t}),lt=I.a.interceptors.response.use(function(t){return console.log("interceptors response",t),t});I.a.interceptors.request.eject(ot),I.a.interceptors.response.eject(lt),new a.a({el:"#app",router:tt,store:it,components:{App:l},template:"<App/>"})},XXvM:function(t,e){},gAWI:function(t,e){},keP8:function(t,e){},rIps:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6dbe4041d8b73d5210b1.js.map