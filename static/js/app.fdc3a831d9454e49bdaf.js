webpackJsonp([1],{"+skl":function(e,t){},"+y4S":function(e,t){},0:function(e,t){},"7REh":function(e,t){},J7qw:function(e,t){},Lns1:function(e,t){e.exports={state:{loadingList:[]},mutations:{PUSH_LOADING:function(e,t){e.loadingList.push({text:t||"玩命加载中..."})},SHIFT_LOADING:function(e){e.loadingList.shift()}},getters:{isLoading:function(e){return e.loadingList.length>0},loadingText:function(e){return e.loadingList.length>0?e.loadingList[0].text:null}},actions:{openLoading:function(e,t){e.commit("PUSH_LOADING",t)},closeLoading:function(e){e.commit("SHIFT_LOADING")}}}},"N+v+":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),o=a("8+8L"),n=a("NYxO"),i=a("mvHQ"),r=a.n(i),l=new s.default,c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"message"},[t("span",{class:this.classObject},[this._v(this._s(this.message))])])},staticRenderFns:[]};var u=a("VU/8")({name:"change",props:["message"],data:function(){return{value1:""}},computed:{classObject:function(){return{active:!this.message.includes("-"),redCol:this.message.includes("-")}}}},c,!1,function(e){a("uw0h")},null,null).exports,d={name:"sector",data:function(){return{value:"",consumerDiscretionary:"",consumerStaples:"",energy:"",financials:"",healthCare:"",industrials:"",informationTechnology:"",materials:"",realEstate:"",telecommunicationServices:"",utilities:""}},components:{changeInfo:u},created:function(){var e=this;this.$http.get("https://www.alphavantage.co/query?function=SECTOR&apikey=D29LHM3HC6349901").then(function(t){console.log(t.body["Rank A: Real-Time Performance"]);var a=t.body["Rank A: Real-Time Performance"];e.consumerDiscretionary=a["Consumer Discretionary"],e.consumerStaples=a["Consumer Staples"],e.energy=a.Energy,e.financials=a.Financials,e.healthCare=a["Health Care"],e.industrials=a.Industrials,e.informationTechnology=a["Information Technology"],e.materials=a.Materials,e.realEstate=a["Real Estate"],e.telecommunicationServices=a["Telecommunication Services"],e.utilities=a.Utilities},function(e){})}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sector"},[e._v("\n    Energy: "),a("changeInfo",{attrs:{message:e.energy}}),e._v("\n    Financials: "),a("changeInfo",{attrs:{message:e.financials}}),e._v("\n    Health Care: "),a("changeInfo",{attrs:{message:e.financials}}),e._v("\n    Industrials:"),a("changeInfo",{attrs:{message:e.industrials}}),e._v("\n    Information Technology: "),a("changeInfo",{attrs:{message:e.informationTechnology}}),e._v("\n    Materials: "),a("changeInfo",{attrs:{message:e.materials}}),e._v("\n    RealEstate: "),a("changeInfo",{attrs:{message:e.realEstate}}),e._v("\n    Telecommunication Services: "),a("changeInfo",{attrs:{message:e.telecommunicationServices}}),e._v("\n    Utilities: "),a("changeInfo",{attrs:{message:e.utilities}})],1)},staticRenderFns:[]};var h={name:"Myheader",data:function(){var e=this;return{massage:"FLCMansters",value1:"",modal1:!1,modal2:!1,username:localStorage.username,loginformValidate:{mail:"",password:"",ruleValidate:{mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],password:[{required:!0,message:"Please enter password",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}},formValidate:{name:"",mail:"",gender:"",password:"",passwdCheck:""},ruleValidate:{name:[{required:!0,message:"The name cannot be empty",trigger:"blur"}],mail:[{required:!0,message:"Mailbox cannot be empty",trigger:"blur"},{type:"email",message:"Incorrect email format",trigger:"blur"}],password:[{required:!0,message:"Please enter password",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"},{validator:function(t,a,s){""===a?s(new Error("Please enter your password")):(""!==e.formValidate.passwdCheck&&e.$refs.formValidate.validateField("passwdCheck"),s())},trigger:"blur"}],passwdCheck:[{required:!0,message:"Please enter password",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"},{validator:function(t,a,s){""===a?s(new Error("Please enter your password again")):a!==e.formValidate.password?s(new Error("The two input passwords do not match!")):s()},trigger:"blur"}],gender:[{required:!0,message:"Please select gender",trigger:"change"}]}}},components:{sector:a("VU/8")(d,m,!1,function(e){a("vYhr")},null,null).exports},mounted:function(){var e=this;l.$on("successChangePwd",function(t){e.username=t})},methods:{signup:function(){var e=this;this.$refs.formValidate.validate(function(t){if(t){var a={username:e.formValidate.name,email:e.formValidate.mail,password:e.formValidate.password,gender:e.formValidate.gender,prof:[{title:"default",element:[],isSeclected:!0}]};e.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/user",r()(a)).then(function(t){200==t.status&&(e.$store.commit("isLogin",t.data),localStorage.username=t.data.username,localStorage.mail=t.data.email,localStorage.token=t.data.token,e.username=localStorage.username,l.$emit("login",e.username))},function(e){console.log("服务器请求失败")}),e.$Message.success("Success!")}else e.$Message.error("Fail!"),e.$refs.formValidate.resetFields()})},login:function(){var e=this;this.$refs.loginformValidate.validate(function(t){t?e.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/login",r()({email:e.loginformValidate.mail,password:e.loginformValidate.password})).then(function(t){200==t.status&&(localStorage.username=t.body.data.Item.username,localStorage.mail=t.body.data.Item.email,localStorage.token=t.body.data.token,e.username=localStorage.username,l.$emit("login",e.username),e.$router.push({path:"/"}))},function(e){console.log("login error")}):(e.$Message.error("Fail!"),e.$refs.loginformValidate.resetFields())})},handleLoginReset:function(){this.$refs.loginformValidate.resetFields()},handleReset:function(){this.$refs.formValidate.resetFields()},changePswd:function(){var e=this;this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/changePswd",r()({email:this.loginformValidate.mail})).then(function(t){e.$Message.success("Success Send Email")},function(t){e.$Message.error("Email sending failed")})},logout:function(){this.$store.dispatch("clearUser"),localStorage.removeItem("mail"),localStorage.removeItem("username"),localStorage.removeItem("token"),this.username="",l.$emit("logout",this.username),this.$router.push({path:"/"})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"header-container"},[a("span",{staticClass:"logo"},[a("b",[a("strong",[e._v("\n"+e._s(e.massage))])])]),e._v(" "),e.username?e._e():a("ButtonGroup",{staticClass:"icon-login",attrs:{size:"large",shape:"circle"}},[a("Button",{attrs:{type:"text"},on:{click:function(t){e.modal2=!0}}},[a("span",{staticStyle:{color:"rgb(89, 126, 206)"}},[e._v("Sign In")])]),e._v(" "),a("Button",{attrs:{type:"text"},on:{click:function(t){e.modal1=!0}}},[a("span",{staticStyle:{color:"rgb(89, 126, 206)"}},[e._v("Sign Up")])])],1),e._v(" "),e.username?a("ButtonGroup",{staticClass:"icon-login",attrs:{size:"small",shape:"circle"}},[a("Button",{attrs:{type:"text",disabled:""}},[a("span",{staticStyle:{color:"rgb(89, 126, 206)"}},[e._v(e._s(e.username))])]),e._v(" "),a("Button",{attrs:{type:"text"},on:{click:e.logout}},[a("span",{staticStyle:{color:"rgb(89, 126, 206)"}},[e._v("Log Out")])])],1):e._e(),e._v(" "),a("Modal",{attrs:{title:"Login",okText:"Summit",cancelText:"Cancel"},on:{"on-ok":e.login,"on-cancel":e.handleLoginReset},model:{value:e.modal2,callback:function(t){e.modal2=t},expression:"modal2"}},[a("Form",{ref:"loginformValidate",attrs:{model:e.loginformValidate,"label-position":"left",rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"E-mail",prop:"mail"}},[a("Input",{attrs:{placeholder:"Enter your e-mail"},model:{value:e.loginformValidate.mail,callback:function(t){e.$set(e.loginformValidate,"mail",t)},expression:"loginformValidate.mail"}})],1),e._v(" "),a("FormItem",{attrs:{label:"Password",prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"Enter your password"},model:{value:e.loginformValidate.password,callback:function(t){e.$set(e.loginformValidate,"password",t)},expression:"loginformValidate.password"}}),e._v(" "),a("a",{staticStyle:{float:"right"},on:{click:function(t){e.changePswd()}}},[e._v("forget password")])],1)],1)],1),e._v(" "),a("Modal",{attrs:{title:"Fill this form to create a new an Account",okText:"Summbit",cancelText:"Cancel"},on:{"on-ok":e.signup,"on-cancel":e.handleReset},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,"label-position":"left",rules:e.ruleValidate,"label-width":80}},[a("FormItem",{attrs:{label:"Name",prop:"name"}},[a("Input",{attrs:{placeholder:"Enter your name"},model:{value:e.formValidate.name,callback:function(t){e.$set(e.formValidate,"name",t)},expression:"formValidate.name"}})],1),e._v(" "),a("FormItem",{attrs:{label:"E-mail",prop:"mail"}},[a("Input",{attrs:{placeholder:"Enter your e-mail"},model:{value:e.formValidate.mail,callback:function(t){e.$set(e.formValidate,"mail",t)},expression:"formValidate.mail"}})],1),e._v(" "),a("FormItem",{attrs:{label:"Password",prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"Enter your password"},model:{value:e.formValidate.password,callback:function(t){e.$set(e.formValidate,"password",t)},expression:"formValidate.password"}})],1),e._v(" "),a("FormItem",{attrs:{label:"Comfirm Password",prop:"passwdCheck"}},[a("Input",{attrs:{type:"password",placeholder:"Enter your password again"},model:{value:e.formValidate.passwdCheck,callback:function(t){e.$set(e.formValidate,"passwdCheck",t)},expression:"formValidate.passwdCheck"}})],1),e._v(" "),a("FormItem",{attrs:{label:"Gender",prop:"gender"}},[a("RadioGroup",{model:{value:e.formValidate.gender,callback:function(t){e.$set(e.formValidate,"gender",t)},expression:"formValidate.gender"}},[a("Radio",{attrs:{label:"male"}},[e._v("Male")]),e._v(" "),a("Radio",{attrs:{label:"female"}},[e._v("Female")])],1)],1)],1)],1)],1),e._v(" "),a("sector",{staticClass:"sector"})],1)},staticRenderFns:[]};var p=a("VU/8")(h,f,!1,function(e){a("wLEG")},null,null).exports,g=a("fZjL"),v=a.n(g),_=a("vO7p"),w=a.n(_),y=a("BTaQ"),b=a.n(y),I=a("4Imv");s.default.use(I.a),s.default.use(w.a),s.default.use(b.a);var k={name:"stockcard",props:{code:""},data:function(){return{newRows:[],data:[],stockInfo:{"1. open":"","2. high":"","3. low":"","4. close":"","5. volume":""}}},components:{changeInfo:u},computed:{change:function(){return Number(this.stockInfo["4. close"]-this.stockInfo["1. open"]).toFixed(2)},changePg:function(){return Number(this.change/this.stockInfo["1. open"]).toFixed(2)+"%"}},created:function(){var e=this;this.$http.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="+this.code+".ax&apikey=D29LHM3HC6349901").then(function(t){if(console.log(t),t.data["Time Series (Daily)"]){var a=v()(t.data["Time Series (Daily)"]);console.log(a);for(var s=a.length-1;s>0;s--)e.data.push(Number(t.data["Time Series (Daily)"][a[s]]["1. open"]))}},function(e){console.log("服务器请求失败")})},mounted:function(){var e=this;this.$http.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+this.code+".ax&apikey=D29LHM3HC6349901").then(function(t){if(t.data){console.log(t.data);var a=v()(t.data["Time Series (Daily)"]);e.stockInfo=t.data["Time Series (Daily)"][a[0]]}})},methods:{deleteStock:function(e){this.$emit("listenToChildeEvent",e)}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("table",[e._m(0),a("tr"),a("tr",[a("td",[e._v(e._s(e.code))]),e._v(" "),a("td",[e._v(e._s(e.stockInfo["1. open"]))]),e._v(" "),a("td",[e._v(e._s(e.stockInfo["4. close"]))]),e._v(" "),a("td",[a("changeInfo",{attrs:{message:e.change}})],1),e._v(" "),a("td",[a("changeInfo",{attrs:{message:e.changePg}}),a("label")],1),e._v(" "),a("td",[e._v(e._s(e.stockInfo["5. volume"]))]),e._v(" "),a("td",[a("trend",{attrs:{data:e.data,gradient:["#6fa8dc","#42b983","#2c3e50"],"auto-draw":"",smooth:""}})],1),e._v(" "),a("td",[a("Button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.deleteStock(e.code)}}},[e._v("Delete")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th"),this._v(" "),t("th"),this._v(" "),t("th"),this._v(" "),t("th"),this._v(" "),t("th"),this._v(" "),t("th"),this._v(" "),t("th"),this._v(" "),t("th")])}]};var C=a("VU/8")(k,S,!1,function(e){a("7REh")},"data-v-a41b54f6",null).exports,L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("p",{staticStyle:{float:"right"}},[this._v(" © 2018 Copyright \n            "),t("a",{staticClass:"grey-text text-lighten-4 right",attrs:{href:"#!"}},[this._v("COMP9900--four little monsters")])])])}]};var x=a("VU/8")({name:"Myfooter",data:function(){return{massage:"FLmansters",value1:""}}},L,!1,function(e){a("N+v+")},null,null).exports;s.default.use(n.a),s.default.use(o.a);var $={name:"App",components:{Myhead:p,stockcard:C,Myfooter:x}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Myhead"),this._v(" "),t("router-view"),this._v(" "),t("Myfooter")],1)},staticRenderFns:[]};var V=a("VU/8")($,T,!1,function(e){a("J7qw")},null,null).exports,P=a("/ocq"),D=a("Xxa5"),E=a.n(D),M=a("exGp"),F=a.n(M);s.default.use(w.a),s.default.use(b.a);var R={name:"stockInProf",props:["title"],data:function(){return{message:"hello",profList:[],stockCode:"MOQ",showAdd:!1,stockList:[],showStock:[],chartSettings:{}}},components:{stockcard:C},computed:{},created:function(){var e=this;this.$http.get("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getCompanyInfo").then(function(t){e.stockList=t.data.company},function(e){console.log("服务器请求失败")}),this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getPf",r()({email:localStorage.mail})).then(function(t){e.profList=t.data.prof,console.log(e.profList),e.stockList=[],e.profList.forEach(function(t){e.title in t&&(e.stockList=t[e.title],console.log(e.title))})},function(e){console.log(e)})},methods:{addStock:function(){console.log(this.profList),console.log(this.title),this.stockList=this.profList[this.title]}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Select",{staticClass:"section",attrs:{filterable:"",size:"small"},on:{input:function(t){e.addStock()}},model:{value:e.stockCode,callback:function(t){e.stockCode=t},expression:"stockCode"}},e._l(e.stockList,function(t){return a("Option",{key:t.name,attrs:{value:t.code}},[e._v(e._s(t.code)+"----------"+e._s(t.name))])})),e._v(" "),e._l(e.showStock,function(e){return a("stockcard",{key:e,attrs:{code:e}})})],2)},staticRenderFns:[]};var N={name:"userProtfile",data:function(){var e=this;return{showAdd:!1,showTable:!0,parentMsg:[],profList:[],stockList:"",stockCode:"MOQ",titleList:[],formInline:{title:""},ruleValidate:{title:[{required:!0,message:"Please fill in the user name",trigger:"blur"},{validator:function(t,a,s){e.profList.forEach(function(e){e.title===a&&s(new Error("Protflio exit"))}),s()},trigger:"blur"}]}}},computed:{},components:{stockInProf:a("VU/8")(R,A,!1,function(e){a("ygoY")},"data-v-0dd92675",null).exports,stockcard:C},created:function(){var e=this;this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getPf",r()({email:localStorage.mail})).then(function(t){e.profList=t.data.prof,e.profList.forEach(function(e){e.isSeclected=!1})},function(e){console.log(e)}),this.$http.get("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getCompanyInfo").then(function(t){e.stockList=t.data.company},function(e){console.log("服务器请求失败")})},mounted:function(){var e=this;l.$on("addToPf",function(t){e.profList.forEach(function(a){"default"===a.title&&(a.element.push(t),e.showTable=!0)});var a={email:localStorage.mail,prof:e.profList};e.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/createPf",r()(a)).then(function(e){console.log(e.data)},function(e){console.log("error")})})},methods:{getProf:function(){var e=this;this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getPf",r()({email:localStorage.mail})).then(function(t){e.profList=t.data.prof,console.log(e.profList)},function(e){console.log(e)})},createPrf:function(){var e=this;this.$refs.formInline.validate(function(t){if(t){e.$Message.success("Success created!");var a={title:e.formInline.title,element:[],isSeclected:!1};e.profList.push(a);var s={email:localStorage.mail,prof:e.profList};e.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/createPf",r()(s)).then(function(e){console.log(e.data)},function(e){console.log("error")})}else e.$Message.error("Try another Title!")})},deleteProf:function(e){if("default"==e.title)this.$Message.error("can not delete the default one");else{var t=this.profList.filter(function(t){return t.title!==e.title});this.profList=t;var a={email:localStorage.mail,prof:this.profList};this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/createPf",r()(a)).then(function(e){},function(e){})}},trasToChild:function(e){this.profList.forEach(function(e){e.isSeclected=!1}),this.$set(e,"isSeclected",!0),console.log(e.element),"[]"!==r()(e.element)?this.showTable=!0:this.showTable=!1},deleteCode:function(e){console.log(e);for(var t=0;t<this.profList.length;t++)this.profList[t].isSeclected&&("default"===this.profList[t].title&&l.$emit("deleteInPf",!0),this.profList[t].element.splice(this.profList[t].element.indexOf(e),1),"[]"===r()(this.profList[t].element)&&(this.showTable=!1));var a={email:localStorage.mail,prof:this.profList};this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/createPf",r()(a)).then(function(e){console.log(e)},function(e){console.log(e)})},addStock:function(e){this.showTable=!0,e.element.push(this.stockCode),this.profList.forEach(function(t){t.title===e.title&&(t=e)});var t={email:localStorage.mail,prof:this.profList};this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/createPf",r()(t)).then(function(e){console.log(e.data)},function(e){console.log("error")})}}},z={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{staticClass:"protfio"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("b",[e._v(" My Portfolios ")])]),e._v(" "),a("Button",{staticClass:"addBtn",attrs:{slot:"title",type:"ghost",shape:"circle",icon:"ios-plus-empty"},on:{click:function(t){e.showAdd=!e.showAdd}},slot:"title"}),e._v(" "),e.showAdd?a("Form",{ref:"formInline",staticClass:"titleClass",attrs:{model:e.formInline,rules:e.ruleValidate}},[a("FormItem",{attrs:{prop:"title"}},[a("Input",{attrs:{type:"text",placeholder:"Title"},model:{value:e.formInline.title,callback:function(t){e.$set(e.formInline,"title",t)},expression:"formInline.title"}},[a("Button",{attrs:{slot:"append",type:"ghost",icon:"checkmark"},on:{click:function(t){e.createPrf()}},slot:"append"})],1)],1)],1):e._e(),e._v(" "),e._l(e.profList,function(t){return a("Tag",{key:t.title,attrs:{type:"dot",closable:""},on:{"on-close":function(a){e.deleteProf(t)}}},[a("a",{class:{act:t.isSeclected},on:{click:function(a){e.trasToChild(t)}}},[e._v(e._s(t.title))])])}),e._v(" "),e._l(e.profList,function(t){return t.isSeclected?a("div",{key:t.index},[a("Select",{staticClass:"section",attrs:{filterable:"",size:"small"},on:{input:function(a){e.addStock(t)}},model:{value:e.stockCode,callback:function(t){e.stockCode=t},expression:"stockCode"}},e._l(e.stockList,function(t){return a("Option",{key:t.name,attrs:{value:t.code}},[e._v(e._s(t.code)+"----------"+e._s(t.name))])})),e._v(" "),e.showTable?a("table",[a("tr",[a("th",[e._v("Symbol")]),e._v(" "),a("th",[e._v("Open")]),e._v(" "),a("th",[e._v("Close")]),e._v(" "),a("th",[e._v("Change")]),e._v(" "),a("th",[e._v("% Chg")]),e._v(" "),a("th",[e._v("Vollume")]),e._v(" "),a("th",[e._v("Day Chart")]),e._v(" "),a("th",[e._v("Delete")])])]):e._e(),e._v(" "),e._l(t.element,function(t){return a("stockcard",{key:t.index,attrs:{code:t},on:{listenToChildeEvent:e.deleteCode}})})],2):e._e()})],2)],1)},staticRenderFns:[]};var O=a("VU/8")(N,z,!1,function(e){a("wV8F")},"data-v-7a42002d",null).exports,H={props:["message"],name:"techInductor",data:function(){return{showCard:!1,ADX:"",OBV:"",EMA:"",RSI:"",SMA:"",CCI:"",AD:"",MACD:""}},computed:{loading:function(){return{show:this.$store.getters.isLoading}}},created:function(){this.getTechIntor()},watch:{message:{handler:function(e){this.getTechIntor()}}},methods:{getTechIntor:function(){var e=this;this.$http.get("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getTechIndicators",{params:{code:this.message}}).then(function(t){"{}"!==r()(t.body)&&(e.ADX=t.body.ADX||"",e.OBV=t.body.OBV||"",e.RSI=t.body.RSI||"",e.SMA=t.body.SMA||"")},function(e){console.log(e)}),this.$store.dispatch("openLoading"),setTimeout(function(){e.$store.dispatch("closeLoading")},1e4)}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("loading",{attrs:{show:e.loading.show}}),e._v(" "),a("p",{attrs:{slot:"title"},slot:"title"},[e._v("Stock Technical Indicators")]),e._v(" "),e.loading.show?e._e():a("ul",[a("li",[e._v(" Simple Moving Average (SMA): "),a("span",{staticClass:"number"},[e._v(e._s(e.SMA?e.SMA:""))])]),e._v(" "),a("li",[e._v(" Exponential Moving Average (EMA):  "),a("span",{staticClass:"number"},[e._v(e._s(e.EMA?e.EMA:""))])]),e._v(" "),a("li",[e._v(" Moving Average Convergence/Divergence (MACD):  "),a("span",{staticClass:"number"},[e._v(e._s(e.MACD))])]),e._v(" "),a("li",[e._v(" Relative Strength Index (RSI):  "),a("span",{staticClass:"number"},[e._v(e._s(e.RSI))])]),e._v(" "),a("li",[e._v(" Average Directional Movement Index (ADX):  "),a("span",{staticClass:"number"},[e._v(e._s(e.ADX))])]),e._v(" "),a("li",[e._v(" Commodity Channel Index (CCI): "),a("span",{staticClass:"number"},[e._v(" "+e._s(e.CCI))])]),e._v(" "),a("li",[e._v(" Chaikin A/D Line:  "),a("span",{staticClass:"number"},[e._v(e._s(e.AD))])]),e._v(" "),a("li",[e._v(" On Balance Volume (OBV):  "),a("span",{staticClass:"number"},[e._v(e._s(e.OBV))])])])],1)],1)},staticRenderFns:[]};var B=a("VU/8")(H,q,!1,function(e){a("rSNa")},null,null).exports;s.default.use(w.a),s.default.use(I.a),s.default.use(b.a);var U={name:"mainPage",data:function(){return{user:localStorage.mail,stockData:[],code:"",cityList:[],model10:"MOQ",companyName:"MOQ LIMITED",group:"Software & Services",newRows:[],peerInfo:[],username:"",news:[],columns1:[{title:"Company",key:"name",fixed:"left",width:100},{title:"Open",key:"1. open",width:200},{title:"High",key:"2. high",width:200},{title:"Low",key:"3. low",width:200},{title:"Close",key:"4. close",width:200},{title:"Volume",key:"5. volume",width:200},{title:"Change",key:"change",width:200},{title:"Change(%)",key:"changePres",width:200}],stockInfo:{"1. open":"","2. high":"","3. low":"","4. close":"","5. volume":""},prortFolio:[],active:!0,value1:"1",peer:[],chartData:{columns:["日期","open","close","lowest","highest","vol"],rows:this.newRows},chartSettings:{}}},computed:{change:function(){return""+Number(this.stockInfo["4. close"]-this.stockInfo["1. open"]).toFixed(2)},changePg:function(){return Number(this.change/this.stockInfo["1. open"]).toFixed(2)+"%"}},components:{userProtfile:O,changeInfo:u,techInductor:B},created:function(){var e=this;this.$http.get("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getCompanyInfo").then(function(t){e.cityList=t.data.company,e.getCityList(),e.getPeer(),e.getPeerInfo()},function(e){console.log("服务器请求失败")}),this.$http.get("https://api.iextrading.com/1.0/stock/market/news/last/5").then(function(t){e.news=[],e.news=t.data,console.log(e.news)},function(e){console.log("服务器请求失败")})},mounted:function(){var e=this;l.$on("deleteInPf",function(t){e.active=t}),l.$on("login",function(t){e.user=!0}),l.$on("logout",function(t){e.user=!1}),this.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/getPf",r()({email:localStorage.mail})).then(function(t){e.prortFolio=t.data.prof,console.log(e.prortFolio),e.prortFolio.filter(function(t){return"default"==t.title&&t.element.indexOf(e.model10)>-1}).length>0&&(e.active=!1)}),this.$http.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+this.model10+".ax&apikey=D29LHM3HC6349901").then(function(t){var a=v()(t.data["Time Series (Daily)"]);e.stockInfo=t.data["Time Series (Daily)"][a[0]];for(var s=a.length-1;s>0;s--)e.stockData.push(Number(t.data["Time Series (Daily)"][a[s]]["1. open"])),e.newRows.push({"日期":a[s],open:Number(t.data["Time Series (Daily)"][a[s]]["1. open"]),close:Number(t.data["Time Series (Daily)"][a[s]]["4. close"]),lowest:Number(t.data["Time Series (Daily)"][a[s]]["3. low"]),highest:Number(t.data["Time Series (Daily)"][a[s]]["2. high"]),vol:Number(t.data["Time Series (Daily)"][a[s]]["5. volume"])});e.chartData={columns:["日期","open","close","lowest","highest","vol"],rows:e.newRows},e.chartSettings={showMA:!0,showVol:!0,labelMap:{MA5:"ma5"},legendName:{"日K":"day k"},showDataZoom:!0}})},methods:{chartQuote:function(){var e=F()(E.a.mark(function e(){var t=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$http.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+this.model10+".ax&apikey=D29LHM3HC6349901").then(function(e){t.newRows=[];var a=v()(e.data["Time Series (Daily)"]);t.stockInfo=e.data["Time Series (Daily)"][a[a.length-1]],t.stockData=[];for(var s=a.length-1;s>0;s--)t.stockData.push(Number(e.data["Time Series (Daily)"][a[s]]["1. open"])),t.newRows.push({"日期":a[s],open:Number(e.data["Time Series (Daily)"][a[s]]["1. open"]),close:Number(e.data["Time Series (Daily)"][a[s]]["4. close"]),lowest:Number(e.data["Time Series (Daily)"][a[s]]["3. low"]),highest:Number(e.data["Time Series (Daily)"][a[s]]["2. high"]),vol:Number(e.data["Time Series (Daily)"][a[s]]["5. volume"])});t.chartData={columns:["日期","open","close","lowest","highest","vol"],rows:t.newRows},t.chartSettings={showMA:!0,showVol:!0,labelMap:{MA5:"ma5"},legendName:{"日K":"day k"},showDataZoom:!0}},function(e){}),this.getCityList(),this.getPeer(),this.getPeerInfo();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getPeer:function(){var e=F()(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(this.peer=[],t=0;t<this.cityList.length;t++)this.cityList[t].group==this.group&&this.peer.length<=7&&this.model10!=this.cityList[t].code&&this.peer.push(this.cityList[t]);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getCityList:function(){for(var e=0;e<this.cityList.length;e++)this.cityList[e].code===this.model10&&(this.companyName=this.cityList[e].name,this.group=this.cityList[e].group)},getPeerInfo:function(){var e=F()(E.a.mark(function e(){var t=this;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.peerInfo=[],this.peer.forEach(function(e){t.$http.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+e.code+".ax&apikey=D29LHM3HC6349901").then(function(a){if(a.data["Time Series (Daily)"]){var s=v()(a.data["Time Series (Daily)"]),o=a.data["Time Series (Daily)"][s[s.length-1]];o.name=e.code,o.change=Number(o["4. close"]-o["1. open"]).toFixed(2),o.changePres=Number(o.change/o["1. open"]).toFixed(2),t.peerInfo.push(o)}},function(e){})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),changePeer:function(e){this.model10=e.code},addToP:function(){l.$emit("addToPf",this.model10),this.prortFolio.push({code:this.model10,name:this.companyName,group:this.group}),this.active=!1}}},G={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",{staticClass:"firstRow"},[a("Col",{staticClass:"col1",attrs:{offset:"4",span:"16"}},[a("p",[e._v(e._s(e.companyName)),a("Tooltip",{attrs:{content:"Add to Myprofolio"}},[e.active?a("Button",{attrs:{type:"ghost",shape:"circle",icon:"ios-star-outline"},on:{click:e.addToP}}):e._e()],1)],1),e._v(" "),a("p",[a("Icon",{attrs:{type:"code"}}),e._v(" "+e._s(e.model10)+" ")],1),e._v(" "),a("p",[a("label",[e._v(" "+e._s(Number(e.stockInfo["4. close"]).toFixed(2)))]),a("span",{staticClass:"change"},[a("changeInfo",{attrs:{message:e.change}}),e._v("("),a("changeInfo",{attrs:{message:e.changePg}}),e._v(")"),a("span",{staticClass:"stockTrend"},[a("trend",{attrs:{data:e.stockData,gradient:["#6fa8dc","#42b983","#2c3e50"],"auto-draw":"",smooth:""}})],1)],1)]),e._v(" "),a("p",[a("Icon",{attrs:{type:"ios-world-outline"}}),e._v(e._s(e.group))],1),e._v(" "),a("p",[e._v("Peer:")]),e._v(" "),a("div",{staticClass:"buttonZoom"},e._l(e.peer,function(t){return a("Button",{key:t.name,attrs:{type:"ghost",shape:"circle",value:t.code},on:{click:function(a){e.changePeer(t)}}},[e._v(e._s(t.code))])})),e._v(" "),a("Select",{staticClass:"section",attrs:{filterable:"",size:"large"},on:{input:e.chartQuote},model:{value:e.model10,callback:function(t){e.model10=t},expression:"model10"}},e._l(e.cityList,function(t){return a("Option",{key:t.name,attrs:{value:t.code}},[e._v(e._s(t.code)+"----------"+e._s(t.name))])}))],1)],1),e._v(" "),a("hr"),e._v(" "),a("Row",[a("Col",{attrs:{offset:"2",span:"20"}},[e.user?a("userProtfile"):e._e()],1)],1),e._v(" "),a("br"),e._v(" "),a("Row",[a("Col",{attrs:{offset:"2",span:"20"}},[a("Card",{staticClass:"card"},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v(" Chart")]),e._v(" "),a("ve-candle",{staticClass:"chart",attrs:{data:e.chartData,settings:e.chartSettings}})],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("Row",[a("Col",{attrs:{offset:"2",span:"10"}},[a("techInductor",{staticClass:"techInductor",attrs:{message:e.model10}})],1),e._v(" "),a("Col",{staticStyle:{"margin-left":"7px"},attrs:{span:"10"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n         Stock Informationo Summary")]),e._v(" "),a("li",[e._v(e._s(e.companyName))]),e._v(" "),a("li",[e._v(" Open"),a("span",{staticClass:"summary-number"},[e._v(e._s(e.stockInfo["1. open"]))])]),e._v(" "),a("li",[e._v(" High"),a("span",{staticClass:"summary-number"},[e._v(e._s(e.stockInfo["2. high"]))])]),e._v(" "),a("li",[e._v(" Low"),a("span",{staticClass:"summary-number"},[e._v(e._s(e.stockInfo["3. low"]))])]),e._v(" "),a("li",[e._v(" Close"),a("span",{staticClass:"summary-number"},[e._v(e._s(e.stockInfo["4. close"]))])]),e._v(" "),a("li",[e._v(" Volume"),a("span",{staticClass:"summary-number"},[e._v(e._s(e.stockInfo["5. volume"]))])]),e._v(" "),a("li",[e._v(" Change"),a("span",{staticClass:"summary-number"},[a("changeInfo",{attrs:{message:e.change}})],1)]),e._v(" "),a("li",[e._v(" Change(%)"),a("span",{staticClass:"summary-number"},[a("changeInfo",{attrs:{message:e.changePg}})],1)])])],1)],1),e._v(" "),a("Row",[a("Col",{attrs:{offset:"2",span:"20"}},[e._v("\n        Peer Info\n         "),a("Table",{attrs:{columns:e.columns1,data:e.peerInfo}})],1)],1),e._v(" "),a("br"),e._v(" "),a("Row",[a("Col",{attrs:{offset:"2",span:"20"}},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("News")]),e._v(" "),a("ul",[e._l(e.news,function(t){return a("li",[a("a",{attrs:{href:t.url,target:"_blank"}},[a("p",{staticClass:"news-title"},[e._v(e._s(t.headline))]),a("br"),e._v(e._s(t.summary))]),e._v(" "),a("br"),e._v(" "),a("label",{staticStyle:{float:"right"}},[e._v(e._s(t.datetime))]),e._v(" "),a("br"),e._v(" "),a("br")])}),e._v(" "),a("br")],2)])],1)],1),e._v(" "),a("BackTop")],1)},staticRenderFns:[]};var Y=a("VU/8")(U,G,!1,function(e){a("+y4S")},"data-v-c36a184a",null).exports,Q={name:"changePwd",data:function(){return{value:"",id:this.$route.params.id,formInline:{password:""},ruleInline:{password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$http.post("https://fazet6wlh9.execute-api.us-east-1.amazonaws.com/dev/changePwd",r()({token:t.$route.params.id,password:t.formInline.password})).then(function(e){localStorage.username=e.body.username,localStorage.mail=e.body.email,t.$Message.success("Success!"),t.$router.push({path:"/"}),l.$emit("successChangePwd",localStorage.username)},function(e){}):t.$Message.error("Fail!")})}}},X={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"changePwd-form"},[a("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[a("FormItem",{attrs:{prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),e._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formInline")}}},[e._v("Update")])],1)],1)],1)},staticRenderFns:[]};var j=a("VU/8")(Q,X,!1,function(e){a("nrMs")},null,null).exports;s.default.use(P.a);var J=new P.a({routes:[{path:"/",name:"HelloWorld",component:Y,children:[{path:"protflie",component:O,meta:{requireAuth:!0}}]},{path:"/changePwd/:id",name:"changePwd",component:j}]}),Z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],attrs:{id:"loadingToast"}},[t("Spin")],1)},staticRenderFns:[]};var K=a("VU/8")({props:["show"]},Z,!1,function(e){a("dVo6")},null,null).exports,W=(a("+skl"),a("Lns1")),ee=a.n(W);s.default.use(n.a);var te=new n.a.Store({state:{checked:!1,user:{}},mutations:{isLogin:function(e,t){e.checked=!0,e.user=t},isLogout:function(e){e.user=null}},actions:{clearUser:function(e){(0,e.commit)("isLogout")}},modules:{loading:ee.a}});s.default.config.productionTip=!1,s.default.use(b.a),s.default.component("Loading",K),new s.default({el:"#app",router:J,store:te,components:{App:V},template:"<App/>"}),J.beforeEach(function(e,t,a){e.meta.requireAuth?te.getters.isLogin?a():a({path:"/",query:{redirect:e.fullPath}}):a()})},dVo6:function(e,t){},nrMs:function(e,t){},rSNa:function(e,t){},uw0h:function(e,t){},vYhr:function(e,t){},wLEG:function(e,t){},wV8F:function(e,t){},ygoY:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fdc3a831d9454e49bdaf.js.map