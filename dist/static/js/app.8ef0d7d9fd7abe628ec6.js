webpackJsonp([1],{"1/oy":function(t,e){},"4INi":function(t,e){},"6gBi":function(t,e){},"8LDJ":function(t,e){},"9M+g":function(t,e){},"E/3z":function(t,e){},FHGj:function(t,e){},GfHa:function(t,e){},Hy70:function(t,e){},IBOS:function(t,e){},Id91:function(t,e){},JGLY:function(t,e){},Jmt5:function(t,e){},MrK1:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("e6fC"),i={methods:{closeNavbar:function(){console.log("closing navbar")}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),s("b-navbar-brand",{attrs:{to:"/"}},[t._v("\n      Light bubble\n    ")]),t._v(" "),s("b-collapse",{staticClass:"radius-12",attrs:{"is-nav":"",id:"nav_collapse"}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/bubbles"}},[t._v("\n          Explora\n        ")]),t._v(" "),s("b-nav-item",{attrs:{to:"/new"}},[t._v("\n          Publica tu causa\n        ")])],1),t._v(" "),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-nav-form",[s("b-form-input",{staticClass:"mr-sm-2",attrs:{type:"text",placeholder:"¿Qué deseas encontrar?"}})],1),t._v(" "),s("b-nav-item-dropdown",{attrs:{right:""}},[s("template",{slot:"button-content"},[s("b-img",{staticClass:"m-0",attrs:{src:"https://www.w3schools.com/howto/img_avatar.png",rounded:"circle",width:"36",height:"36","blank-color":"#777",alt:"img"}})],1),t._v(" "),s("b-dropdown-item",{attrs:{to:"/profile"}},[t._v("Perfil")]),t._v(" "),s("b-dropdown-item",{attrs:{to:"/dashboard"}},[t._v("Panel de control")]),t._v(" "),s("b-dropdown-item",{attrs:{href:"#"}},[t._v("Signout")])],2)],1)],1)],1),t._v(" "),s("div",{attrs:{id:"wrapper"},on:{click:t.closeNavbar}})],1)},staticRenderFns:[]};var o={name:"App",components:{Navigator:s("VU/8")(i,r,!1,function(t){s("8LDJ")},null,null).exports},data:function(){return{notification:{id:null,type:"",message:null,timeout:3e3}}},created:function(){this.$eventHub.$on("notify",this.handleNotification)},beforeDestroy:function(){console.info("destroying App.vue"),this.$eventHub.$off("notify")},methods:{handleNotification:function(t){var e=this;this.notification=t,this.notification.timeout=t.timeout?t.timeout:3e3,setTimeout(function(){e.notification={id:null,type:null,message:null,timeout:e.notification.timeout}},this.notification.timeout)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navigator"),this._v(" "),e("router-view"),this._v(" "),e("b-alert",{staticClass:"box-shadow",attrs:{show:null!=this.notification.message,variant:this.notification.type}},[this._v(this._s(this.notification.message))])],1)},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(t){s("6gBi")},null,null).exports,u=s("/ocq"),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[s("h1",[t._v("Hello world!")])]),t._v(" "),s("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),s("b-carousel-slide",[s("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})]),t._v(" "),s("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[s("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n        ut lacus vel interdum.\n      ")])])],1),t._v(" "),t._e()],1)},staticRenderFns:[]},b=s("VU/8")({data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},m,!1,null,null,null).exports,d={props:{bubble:{type:Object,required:!0}},data:function(){return{max:36}},methods:{maxLength:function(t){return t.length>this.max?t.substring(0,this.max)+"...":t},click:function(){this.$eventHub.$emit("notify",{message:"@todo",type:"warning"})}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-card",{staticClass:"list-item card gradient-top p-0",attrs:{"img-alt":"Card image","img-top":"","footer-tag":"footer"}},[s("img",{attrs:{src:t.bubble.media_url}}),t._v(" "),s("div",{staticClass:"card-body-holder p-0"},[s("router-link",{staticClass:"bubble-item bg-tr-gradient-down p-3",attrs:{to:"/bubble/"+t.bubble.id}},[s("h5",{staticClass:"card-title text-shadow-dark"},[t._v(t._s(t.bubble.title))]),t._v(" "),s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-shadow-dark",domProps:{textContent:t._s(t.maxLength(t.bubble.description))}})])]),t._v(" "),s("div",{staticClass:"card-buttons"},[s("b-button",{staticClass:"box-shadow",attrs:{size:"sm",variant:"success"},on:{click:t.click}},[t._v("\n          Votar\n      ")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{size:"sm",variant:"info"},on:{click:t.click}},[t._v("\n          Donar\n      ")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{size:"sm"},on:{click:t.click}},[t._v("\n          Opinar\n      ")])],1)],1)])},staticRenderFns:[]};var v=s("VU/8")(d,p,!1,function(t){s("FHGj")},null,null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-jumbotron",{attrs:{id:"presentation",fluid:"",header:"Marketing caritativo",lead:"Realiza una donación a cambio de publicidad y ayuda a personas que lo necesitan"}},[s("div",{staticClass:"buttons-holder pt-3 pb-2"},[s("b-btn",{attrs:{to:"/signup",variant:"primary"}},[t._v("\n      Registrar una cuenta\n    ")]),t._v(" "),s("b-btn",{attrs:{to:"/signin",variant:"success"}},[t._v("\n      Iniciar sesión\n    ")]),t._v(" "),s("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.tutorial",modifiers:{tutorial:!0}}],attrs:{variant:"warning"}},[t._v("\n      ¿Como funciona?\n    ")])],1),t._v(" "),s("b-modal",{staticClass:"text-left",attrs:{id:"tutorial",title:"¿Cómo funciona?"}},[s("p",{staticClass:"one"},[t._v("\n      Selecciona una de las causas registradas en nuestra plataforma\n    ")]),t._v(" "),s("p",{staticClass:"two"},[t._v("\n      Realiza una donación a la causa seleccionada para  \n      configurar la duración de tu nueva publicidad\n    ")]),t._v(" "),s("p",{staticClass:"three"},[t._v("\n      Publica y disfruta de tu marca formando parte de algo grande\n    ")]),t._v(" "),s("div",{staticClass:"w-100 p-1",attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-row",{staticClass:"row flow"},[s("b-col",{attrs:{col:"",xs:"12",lg:"6"}},[s("b-btn",{staticClass:"btn-block",attrs:{to:"/signup",variant:"primary"}},[t._v("\n            Registrar mi cuenta\n          ")])],1),t._v(" "),s("b-col",{attrs:{col:"",xs:"12",lg:"6"}},[s("b-btn",{staticClass:"btn-block text-shadow",attrs:{to:"/signin",variant:"success"}},[t._v("\n            Iniciar sesión\n          ")])],1)],1)],1)])],1)},staticRenderFns:[]},h={components:{Carousel:b,BubbleItemList:v,AppPresentation:s("VU/8")(null,f,!1,null,null,null).exports},computed:{lastBubbles:function(){return this.$store.getters.bubbles}},created:function(){this.$store.dispatch("loadBubbles")}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"text-center"},[e("AppPresentation")],1),this._v(" "),e("b-container",{staticClass:"last-bubbles"},[e("b-row",[e("b-col",{attrs:{cols:"12 text-center"}},[e("h5",{staticClass:"mb-3"},[this._v("\n          Últimas causas registradas\n        ")])]),this._v(" "),this._l(this.lastBubbles,function(t){return e("b-col",{key:t.id,attrs:{cols:"12",col:"",lg:"6"}},[e("BubbleItemList",{attrs:{bubble:t}})],1)})],2),this._v(" "),e("b-row",[e("b-col",{staticClass:"text-center pt-1 pb-3"},[e("router-link",{attrs:{to:"/bubbles"}},[e("span",[this._v("Ver más causas")])])],1)],1)],1)],1)},staticRenderFns:[]};var _=s("VU/8")(h,g,!1,function(t){s("hKue")},null,null).exports,C={components:{BubbleItemList:v},props:{bubbles:{type:Array,required:!0}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bubble-list"},[this._l(this.bubbles,function(t){return e("b-row",{key:t.id},[e("b-col",[e("BubbleItemList",{attrs:{bubble:t}})],1)],1)}),this._v(" "),e("b-row",[e("b-col",{staticClass:"text-center mb-2"},[e("router-link",{attrs:{to:"/"}},[e("span",[this._v("Ver más causas")])])],1)],1)],2)},staticRenderFns:[]};var x=s("VU/8")(C,w,!1,function(t){s("E/3z")},null,null).exports,y={name:"google-map",props:{name:{type:String,required:!1},zoom:{type:Number,required:!1},markers:{type:Array,required:!1}},data:function(){return{mapName:this.name+"-map",center:{lat:-27.7834,lng:-64.2642}}},methods:{loadMapMarkers:function(t){this.markers.forEach(function(e){new google.maps.Marker({position:{lat:e.lat,lng:e.lng}}).setMap(t)})}},created:function(){console.log(this.mapName)},mounted:function(){var t=document.getElementById(this.mapName),e={zoom:this.zoom?this.zoom:3,center:new google.maps.LatLng(this.center.lat,this.center.lng),mapTypeId:google.maps.MapTypeId.ROADMAP},s=new google.maps.Map(t,e);this.loadMapMarkers(s)}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"google-map",attrs:{id:this.mapName}})},staticRenderFns:[]};var $=s("VU/8")(y,k,!1,function(t){s("JGLY")},"data-v-7841b179",null).exports,B={components:{BubbleList:x,"google-map":$},data:function(){return{currentPage:1,markers:[{id:1,lat:-27.7834,lng:-64.2642},{id:2,lat:-30.7834,lng:-69.2648}]}},computed:{myBubbles:function(){return this.$store.getters.bubbles},otherBubbles:function(){return this.$store.getters.bubbles}},methods:{settings:function(){this.$eventHub.$emit("notify",{message:"@todo",type:"warning"})}},created:function(){this.$store.dispatch("loadBubbles")}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mt-4 mb-2"},[s("b-row",[s("b-col",{staticClass:"p-10",attrs:{col:"",xs:"12",sm:"12",md:"12",lg:"3"}},[s("b-list-group",[s("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputName2",placeholder:"Buscar en mi panel de control"}}),t._v(" "),s("br"),t._v(" "),s("b-list-group-item",{attrs:{active:"",href:"#some-link"}},[t._v("\n          Mis causas\n        ")]),t._v(" "),s("b-list-group-item",{attrs:{href:"#foobar"},on:{click:t.settings}},[t._v("\n          Configuración\n        ")])],1)],1),t._v(" "),s("b-col",{staticClass:"p-10 light-list",attrs:{col:"",xs:"12",sm:"12",md:"12",lg:"5",id:"light_list"}},[s("div",[s("h4",{staticClass:"pull-left px-3",staticStyle:{display:"inline-block"}},[t._v("\n          Mis causas\n        ")]),t._v(" "),s("small",{staticClass:"pull-right"},[t._v("Causas creadas por mi")]),t._v(" "),s("BubbleList",{attrs:{bubbles:t.myBubbles}})],1)]),t._v(" "),s("b-col",{staticClass:"p-10 text-center map-container-holder",attrs:{col:"",xs:"12",sm:"12",md:"12",lg:"4"}},[s("h4",[t._v("En mi ciudad")]),t._v(" "),s("div",{staticClass:"map-container radius-12"},[s("google-map",{staticClass:"radius-12",attrs:{name:"dashboard",markers:t.markers}})],1)])],1)],1)},staticRenderFns:[]};var S=s("VU/8")(B,E,!1,function(t){s("tOe+")},null,null).exports,F=s("mtWM"),I=s.n(F),U={data:function(){return{bubble:{title:"",description:"",media_url:"",type:null},types:[{text:"Tipo",value:null},"Personas","Animales","","Corn"],show:!0}},methods:{onSubmit:function(t){var e=this;I.a.post("/bubbles.json",this.bubble).then(function(t){var s=t.data.name;e.$router.push("/bubble/"+s)}).catch(function(t){console.info("error",t)})},goBack:function(){this.$router.go(-1)}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",{attrs:{id:"exampleInputGroup2"}},[s("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Nombre de la ONG"},model:{value:t.bubble.title,callback:function(e){t.$set(t.bubble,"title",e)},expression:"bubble.title"}})],1),t._v(" "),s("b-form-group",[s("b-form-textarea",{attrs:{id:"textarea1",placeholder:"Descripción de las actividades principales de la entidad registrada",rows:3,"max-rows":6},model:{value:t.bubble.description,callback:function(e){t.$set(t.bubble,"description",e)},expression:"bubble.description"}})],1),t._v(" "),s("b-form-group",[s("b-form-input",{attrs:{type:"text",placeholder:"URL de una imagen representativa",required:""},model:{value:t.bubble.media_url,callback:function(e){t.$set(t.bubble,"media_url",e)},expression:"bubble.media_url"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"exampleInputGroup3"}},[s("b-form-select",{attrs:{id:"exampleInput3",options:t.types,required:""},model:{value:t.bubble.type,callback:function(e){t.$set(t.bubble,"type",e)},expression:"bubble.type"}})],1),t._v(" "),s("div",{staticClass:"mt-5 actions text-center"},[s("b-button",{attrs:{variant:"danger"},on:{click:t.goBack}},[t._v("\n      Cancelar\n      ")]),t._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("\n      Crear\n    ")])],1)],1):t._e()},staticRenderFns:[]};var M={components:{BubbleForm:s("VU/8")(U,L,!1,function(t){s("4INi")},null,null).exports}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"new-bubble"},[e("h1",{staticClass:"text-center"},[this._v("\n    Ingresa una causa\n  ")]),this._v(" "),e("b-row",[e("b-col",{attrs:{col:"","offset-lg":"4",lg:"4"}},[e("BubbleForm")],1)],1)],1)},staticRenderFns:[]};var N=s("VU/8")(M,R,!1,function(t){s("rE6w")},null,null).exports,j={components:{BubbleList:x,"google-map":$},data:function(){return{markers:[{id:1,lat:-27.7834,lng:-64.2642},{id:2,lat:-30.7834,lng:-69.2648},{id:3,lat:-37.7834,lng:-34.2642}]}},computed:{allBubbles:function(){return this.$store.getters.bubbles}},created:function(){this.$store.dispatch("loadBubbles")},methods:{share:function(){this.$eventHub.$emit("notify",{message:"@todo",type:"warning"})},trends:function(){this.$eventHub.$emit("notify",{message:"@todo",type:"warning"})},categories:function(){this.$eventHub.$emit("notify",{message:"@todo",type:"warning"})}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mt-4 mb-2"},[s("b-row",[s("b-col",{staticClass:"p-10",attrs:{col:"",lg:"3"}},[s("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputName2",placeholder:"Buscar"}}),t._v(" "),s("br"),t._v(" "),s("b-list-group",[s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#",active:""}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v("Últimas causas")])]),t._v(" "),s("p",{staticClass:"mb-1 mt-2"},[s("small",[t._v("Causas publicadas recientemente")])])]),t._v(" "),s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"},on:{click:t.trends}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v("Tendencias")])]),t._v(" "),s("p",{staticClass:"mb-1 mt-2"},[s("small",[t._v("Las causas con mayor cantidad de votos acumulados")])])]),t._v(" "),s("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"},on:{click:t.categories}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h5",{staticClass:"mb-1"},[t._v("Por categoría")])]),t._v(" "),s("p",{staticClass:"mb-1 mt-2"},[s("small",[t._v("Todas las causas categorizadas")])])])],1)],1),t._v(" "),s("b-col",{staticClass:"light-list",attrs:{col:"",lg:"5"}},[s("h4",{staticClass:"text-center px-3",staticStyle:{display:"inline-block"}},[t._v("\n        Todas las causas\n      ")]),t._v(" "),s("BubbleList",{attrs:{bubbles:t.allBubbles}})],1),t._v(" "),s("b-col",{staticClass:"text-center map-container-holder",attrs:{col:"",lg:"4"}},[s("h4",[t._v("\n        Causas en tu ciudad\n      ")]),t._v(" "),s("div",{staticClass:"map-container radius-12"},[s("google-map",{staticClass:"radius-12",attrs:{name:"explorer",markers:t.markers}})],1),t._v(" "),s("div",{staticClass:"sharing-box mt-3"},[s("button",{staticClass:"btn btn-success btn-lg btn-block",attrs:{type:"button"},on:{click:t.share}},[t._v("\n          Compartir estas causas\n        ")]),t._v(" "),s("p",{staticClass:"pt-3 text-shadow"},[t._v("\n          Difunde estas causas en tus redes sociales para \n          que la gente se entere y pueda ayudar.\n        ")])])])],1)],1)},staticRenderFns:[]};var H=s("VU/8")(j,q,!1,function(t){s("beSM")},"data-v-46b1bbee",null).exports,T={props:{items:{type:Array,required:!0}},computed:{hideControls:function(){return this.items.length<2},hideDelimiters:function(){return this.items.length<2}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-no-anim","no-animation":"",indicators:!this.hideControls,controls:!this.hideControls,"img-width":"1024","img-height":"480"}},this._l(this.items,function(t,s){return e("b-carousel-slide",{key:s,staticClass:"radius-12",attrs:{caption:t.title,"img-src":t.media_url}})}))},staticRenderFns:[]},A=s("VU/8")(T,V,!1,null,null,null).exports,P={props:{contact:{type:Object,required:!0},fromUserName:{type:String,required:!1},disabled:{type:Boolean,required:!1},ajaxMessage:{type:String,required:!1}},methods:{onSubmit:function(){this.$emit("submit")},hasText:function(){return""!=this.contact.message}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",[s("b-form-input",{attrs:{type:"text",disabled:t.disabled,placeholder:"Danos un nombre",required:""},model:{value:t.fromUserName,callback:function(e){t.fromUserName=e},expression:"fromUserName"}})],1),t._v(" "),s("b-form-group",[s("b-form-input",{attrs:{id:"contact_email",type:"email",disabled:t.disabled,required:"",placeholder:"Ingresa un correo"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),t._v(" "),s("b-form-group",[s("b-form-textarea",{attrs:{id:"contact_message",placeholder:"Tu mensaje o consulta",disabled:t.disabled,required:"",rows:3,"max-rows":6},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}})],1),t._v(" "),s("b-form-group",{staticClass:"text-center m-0"},[s("b-button",{attrs:{type:"submit",variant:"primary",disabled:!t.hasText()||t.disabled}},[t._v("\n      "+t._s(t.ajaxMessage||"Enviar mensaje")+"\n    ")])],1)],1)},staticRenderFns:[]},G=s("VU/8")(P,D,!1,null,null,null).exports,z={props:{comment:{type:Object,required:!0},disabled:{type:Boolean,required:!1},ajaxMessage:{type:String,required:!1}},methods:{sendComment:function(){this.$emit("onSubmit")},cancelForm:function(){this.$emit("onCancelForm")}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-form",{on:{submit:function(e){return e.preventDefault(),t.sendComment(e)}}},[s("b-form-group",{staticClass:"mb-3"},[s("b-form-input",{attrs:{type:"text",disabled:t.disabled,placeholder:"Ingresa tu nombre"},model:{value:t.comment.username,callback:function(e){t.$set(t.comment,"username",e)},expression:"comment.username"}})],1),t._v(" "),s("b-form-group",[s("b-form-textarea",{attrs:{placeholder:"Por favor ingresa un comentario",rows:"2",disabled:t.disabled,"max-rows":"6"},model:{value:t.comment.comment,callback:function(e){t.$set(t.comment,"comment",e)},expression:"comment.comment"}})],1),t._v(" "),s("b-form-group",{staticClass:"text-right m-0"},[s("b-button",{attrs:{type:"button",disabled:t.disabled},on:{click:t.cancelForm}},[t._v("\n        Cancelar\n      ")]),t._v(" "),s("b-button",{attrs:{type:"submit",disabled:t.disabled,variant:"primary"}},[t._v("\n        "+t._s(t.ajaxMessage||"Comentar")+"\n      ")])],1)],1)},staticRenderFns:[]},J={components:{"app-carousel":A,"google-map":$,"contact-form":G,"comment-form":s("VU/8")(z,O,!1,null,null,null).exports,BubbleList:x},data:function(){return{mapMarkers:[{id:1,lat:-27.7834,lng:-64.2642}],currentUser:{id:1,username:"usuario1",name:"Usuario 1",addresses:[],email:"usuario1@email.com",phones:[],causes:[]},sendingContactForm:!1,sendingCommentForm:!1,showCommentForm:!1,newComment:{id:null,username:null,comment:null},mediaList:[{id:1,title:"Some title in the image",media_url:"https://picsum.photos/1024/480/?image=10"},{id:2,title:"Some other title in the image",media_url:"https://picsum.photos/1024/480/?image=12"},{id:3,title:"Some third in the image",media_url:"https://picsum.photos/1024/480/?image=22"},{id:4,title:"Some other img title",media_url:"https://picsum.photos/1024/480/?image=23"}],comments:[{id:1,username:"Usuario 1",comment:"Comment description here"},{id:2,username:"Usuario 2",comment:"Some other comment description here"},{id:3,username:"Usuario 3",comment:"And some other comment description here"}],newContact:{email:null,name:null,subject:null,message:null}}},computed:{bubble:function(){return this.$store.getters.bubble},relatedBubbles:function(){return[]},bubbleMediaList:function(){if(this.bubble){var t=[];t.push({id:9,title:this.bubble.description,media_url:this.bubble.media_url});for(var e=0;e<this.mediaList.length;e++){var s=this.mediaList[e];t.push(s)}return t}}},methods:{sendComment:function(){var t=this,e=this;return this.sendingCommentForm=!0,setTimeout(function(){e.sendingCommentForm=!1,t.newComment.id=Math.floor(1001*Math.random()),t.comments.push(t.newComment),t.showCommentForm=!1,t.startComment(),e.$eventHub.$emit("notify",{message:"El comentario se ha enviado exitosamente"})},3e3),!1},cancelComment:function(){this.showCommentForm=!1},startComment:function(){this.newComment={id:null,username:this.currentUser.name,comment:null}},sendPrivateMessage:function(){var t=this;this.sendingContactForm=!0,setTimeout(function(){t.sendingContactForm=!1,t.$eventHub.$emit("notify",{message:"El mensaje se ha enviado exitosamente"}),t.newContact={email:null,name:null,subject:null,message:null}},3e3)},click:function(){this.$eventHub.$emit("notify",{message:"@todo",type:"warning"})}},created:function(){var t=this.$route.params.id;this.$store.dispatch("getBubble",t),this.$store.dispatch("loadBubbles"),this.startComment()}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.bubble?s("div",{staticClass:"bubble py-3"},[s("b-row",[s("b-col",{attrs:{col:"","offset-lg":"2",lg:"8"}},[s("div",{staticClass:"body-container p-3"},[s("h4",{staticClass:"body-title mb-3"},[t._v("\n          "+t._s(t.bubble.title)+"\n        ")]),t._v(" "),s("p",{staticClass:"body-description"},[t._v("\n          "+t._s(t.bubble.description)+"\n        ")])])])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{col:"","offset-lg":"2",lg:"8"}},[s("div",{staticClass:"media-container"},[s("app-carousel",{attrs:{items:t.bubbleMediaList}})],1),t._v(" "),s("div",{staticClass:"actions p-1 text-center"},[s("b-button",{staticClass:"box-shadow",attrs:{variant:"success"},on:{click:t.click}},[t._v("Votar")]),t._v(" "),s("b-button",{staticClass:"box-shadow",attrs:{variant:"info"},on:{click:t.click}},[t._v("Donar")]),t._v(" "),s("b-button",{staticClass:"box-shadow",on:{click:t.click}},[t._v("Opinar")])],1)])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{col:"","offset-lg":"2",lg:"8"}},[s("div",{staticClass:"bubble-map-container mt-3 py-2"},[s("google-map",{staticClass:"radius-12",attrs:{name:"dashboard",zoom:6,markers:t.mapMarkers}})],1)])],1),t._v(" "),s("b-row",[s("b-col",{attrs:{col:"",cols:"12","offset-lg":"2",lg:"3"}},[s("h5",{staticClass:"mb-4 mt-3 text-center"},[t._v("\n          Mensaje privado\n        ")]),t._v(" "),s("div",{staticClass:"radius-12 p-3",staticStyle:{border:"solid 1px #c9c9c9","background-color":"#f9f9f9"}},[s("contact-form",{attrs:{disabled:t.sendingContactForm,fromUserName:t.currentUser.name,ajaxMessage:t.sendingContactForm?"Enviando...":null,contact:t.newContact},on:{submit:t.sendPrivateMessage}})],1)]),t._v(" "),s("b-col",{attrs:{col:"",lg:"5"}},[s("div",{staticClass:"comments-container"},[s("h5",{staticClass:"mb-4 mt-3 text-center"},[t._v("\n          Comentarios\n        ")]),t._v(" "),s("div",{staticClass:"comment-list"},t._l(t.comments,function(e){return s("b-card-body",{key:e.id,staticClass:"comment-card radius-12 mb-3"},[s("label",{staticClass:"mb-2"},[t._v(t._s(e.username))]),t._v(" "),s("p",[t._v("\n              "+t._s(e.comment)+"\n            ")])])})),t._v(" "),t.showCommentForm?s("div",{staticClass:"p-3 radius-12",staticStyle:{border:"solid 1px #c9c9c9","background-color":"#f9f9f9"}},[s("comment-form",{attrs:{comment:t.newComment,disabled:t.sendingCommentForm,ajaxMessage:t.sendingCommentForm?"Enviando...":null},on:{onSubmit:t.sendComment,onCancelForm:t.cancelComment}})],1):t._e(),t._v(" "),s("div",{staticClass:"text-center"},[t.showCommentForm?t._e():s("b-button",{attrs:{variant:"primary"},on:{click:function(e){t.showCommentForm=!t.showCommentForm}}},[t._v("\n            Agregar comentario\n          ")])],1)])])],1),t._v(" "),s("b-row",[t.relatedBubbles&&t.relatedBubbles.length>0?s("b-col",{attrs:{col:"","offset-lg":"5",lg:"7"}},[s("div",{staticClass:"bubble-list p-3"},[s("h5",{staticClass:"mb-4 text-center"},[t._v("\n          Causas relacionadas\n        ")]),t._v(" "),s("BubbleList",{attrs:{bubbles:t.relatedBubbles}})],1)]):t._e()],1)],1):t._e()},staticRenderFns:[]};var K=s("VU/8")(J,Y,!1,function(t){s("IBOS")},null,null).exports,Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile p-5"},[s("div",{staticClass:"content text-center"},[s("b-img",{staticClass:"m-1",attrs:{rounded:"circle",src:"https://www.w3schools.com/howto/img_avatar.png",width:"75",height:"75","blank-color":"#777",alt:"img"}}),t._v(" "),s("h3",{staticClass:"user-name"},[t._v("\n      "+t._s(t.user.fullname)+"\n    ")]),t._v(" "),s("p",{staticClass:"m-3"},[t._v("\n      "+t._s(t.user.description)+"\n    ")])],1)])},staticRenderFns:[]};var W=s("VU/8")({data:function(){return{user:{picture_url:"",fullname:"Nombre usuario",description:"Filantropo ocacional"}}}},Q,!1,function(t){s("Hy70")},"data-v-3906e75c",null).exports,X=new I.a.create({baseURL:"https://www.googleapis.com/identitytoolkit/v3/relyingparty"}),Z={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){var t=this;X.post("/verifyPassword?key=AIzaSyAg5v9ERFGf8p7YvLLjYMJ-8bK-T2r7358",{email:this.email,password:this.password,returnSecureToken:!0}).then(function(e){console.log("response",e),t.$eventHub.$emit("notify",{message:"Bienvenido!",type:"success"}),t.$router.push("/dashboard")}).catch(function(t){console.info("error",t)})}}},tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signin-page"},[s("h1",{staticClass:"text-center"},[t._v("\n    Ingresar\n  ")]),t._v(" "),s("b-container",[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{xs:"12",md:"9",lg:"5"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("b-form-group",{attrs:{id:"EmailGroup",label:"Correo electrónico:","label-for":"emailInput"}},[s("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Ingresa tu correo electrónico"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"PasswordGroup",label:"Contraseña:","label-for":"passwordInput"}},[s("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Ingresa tu contraseña"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"pull-right",attrs:{type:"submit",variant:"primary"}},[t._v("\n                Entrar\n            ")])],1)],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("label",[t._v("¿No tienes cuenta?")]),t._v(" "),s("br"),t._v(" "),s("router-link",{attrs:{to:"/signup"}},[t._v("Creala ahora!")])],1)],1)],1)],1)],1)},staticRenderFns:[]},et=s("VU/8")(Z,tt,!1,null,null,null).exports,st={data:function(){return{email:"",name:"",password:"",passwordConfirmation:"",terms:!1}},methods:{onSubmit:function(){var t=this,e={email:this.email,name:this.name,password:this.password,passwordConfirmation:this.passwordConfirmation,terms:this.terms};X.post("/signupNewUser?key=AIzaSyAg5v9ERFGf8p7YvLLjYMJ-8bK-T2r7358",{email:e.email,password:e.password,returnSecureToken:!0}).then(function(e){console.log("response",e),t.$eventHub.$emit("notify",{message:"El usuario se ha registrado exitosamente",type:"success"}),t.$router.push("/dashboard")}).catch(function(e){var s="";s="EMAIL_EXISTS"==e.response.data.error.message?"El correo electrónico ya se encuentra registrado":"Ha ocurrido un inconveniente con el registro",console.info("error",e.response.data.message),t.$eventHub.$emit("notify",{message:s,type:"warning"})})},onReset:function(t){var e=this;t.preventDefault(),this.name="",this.email="",this.password="",this.passwordConfirmation="",this.terms=!1,this.$nextTick(function(){e.terms=!1})}}},at={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signup-page"},[s("h1",{staticClass:"text-center"},[t._v("\n    Registra tu cuenta\n  ")]),t._v(" "),s("b-container",{staticClass:"bv-example-row"},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{attrs:{xs:"12",md:"9",lg:"5"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[s("b-form-group",{attrs:{id:"NameGroup",label:"Nombre:","label-for":"nameInput"}},[s("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Ingresa tu nombre completo"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"EmailGroup",label:"Correo electrónico:","label-for":"emailInput",description:"Es a donde recibirás las notificaciones de nuestro sistema."}},[s("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Ingresa tu correo electrónico personal"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"PasswordGroup",label:"Contraseña:","label-for":"passwordInput"}},[s("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Ingresa una contraseña"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("b-form-group",{attrs:{id:"PasswordConfirmationGroup",label:"Confirma tu contraseña:","label-for":"passwordConfirmationInput"}},[s("b-form-input",{attrs:{id:"passwordConfirmationInput",type:"password",required:"",placeholder:"Repite la contraseña"},model:{value:t.passwordConfirmation,callback:function(e){t.passwordConfirmation=e},expression:"passwordConfirmation"}})],1),t._v(" "),s("br"),t._v(" "),s("b-form-group",{attrs:{id:"exampleGroup4"}},[s("b-form-checkbox-group",{attrs:{id:"exampleChecks"},model:{value:t.terms,callback:function(e){t.terms=e},expression:"terms"}},[s("b-form-checkbox",[t._v("Acepto las condiciones de uso")])],1)],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center"},[s("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reiniciar")]),t._v(" "),s("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Crear cuenta")])],1)],1),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"text-center pb-3"},[s("label",[t._v("¿Ya tienes una cuenta?")]),t._v(" "),s("br"),t._v(" "),s("router-link",{attrs:{to:"/signin"}},[t._v("Ingresa")])],1)],1)],1)],1)],1)},staticRenderFns:[]},nt=s("VU/8")(st,at,!1,null,null,null).exports;a.a.use(u.a);var it=new u.a({routes:[{path:"/",name:"home",component:_},{path:"/signin",name:"signin",component:et},{path:"/signup",name:"signup",component:nt},{path:"/dashboard",name:"dashboard",component:S},{path:"/new",name:"new",component:N},{path:"/profile",name:"profile",component:W},{path:"/bubbles",name:"bubbles",component:H},{path:"/bubble/:id",name:"bubble",component:K}],scrollBehavior:function(t,e,s){return{y:0}}}),rt=s("NYxO"),ot=s("Dd8w"),lt=s.n(ot),ct={bubble:null,bubbles:[]},ut={state:ct,mutations:{SET_BUBBLES:function(t,e){t.bubbles=e},SET_BUBBLE:function(t,e){t.bubble=e}},actions:{loadBubbles:function(t){var e=t.commit;I.a.get("/bubbles.json").then(function(t){var s=[];for(var a in t.data)s.push(lt()({id:a},t.data[a]));e("SET_BUBBLES",s)}).catch(function(t){console.info("error",t)})},getBubble:function(t,e){var s=t.commit;I.a.get("/bubbles/"+e+".json").then(function(t){console.log("response.data",t.data),s("SET_BUBBLE",t.data)}).catch(function(t){console.info("error",t)})}},getters:{bubbles:function(){return ct.bubbles},bubble:function(t){return ct.bubble}}};a.a.use(rt.a);var mt=new rt.a.Store({modules:{bubbles:ut}});s("Jmt5"),s("9M+g"),s("MrK1");a.a.prototype.$eventHub=new a.a,a.a.config.productionTip=!1,a.a.use(n.a),I.a.defaults.baseURL="https://light-bubble.firebaseio.com/",I.a.defaults.headers.get.Accepts="application/json";var bt=I.a.interceptors.request.use(function(t){return console.log("interceptors config",t),t}),dt=I.a.interceptors.response.use(function(t){return console.log("interceptors response",t),t});I.a.interceptors.request.eject(bt),I.a.interceptors.response.eject(dt),new a.a({el:"#app",router:it,store:mt,components:{App:c},template:"<App/>"})},beSM:function(t,e){},hKue:function(t,e){},rE6w:function(t,e){},"tOe+":function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8ef0d7d9fd7abe628ec6.js.map