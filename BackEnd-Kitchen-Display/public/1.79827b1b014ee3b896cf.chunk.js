webpackJsonp([1],{"8Z3D":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("WT6e"),e=function(){},r=u("7DMc"),o=u("Xjw4"),i=u("bfOx"),c=u("ItHS"),a=u("kZql"),d=function(){function l(l){this._htc=l}return l.prototype.addProduct=function(l){return this._htc.post(a.a.baseURL+"inventory/addProduct",l)},l.prototype.getProducts=function(){return this._htc.get(a.a.baseURL+"inventory/getProduct")},l.prototype.setPrediction=function(l){return this._htc.post(a.a.baseURL+"inventory/todaysPrediction",l)},l}(),s=function(){function l(l,n){this.productService=l,this.fb_Group=n}return l.prototype.ngOnInit=function(){this.productFormCreate()},l.prototype.createProduct=function(){var l=this;console.log(this.productForm),this.productService.addProduct(this.productForm.value).subscribe(function(n){n.status?(alert("Product Created Successfully"),l.productForm.reset()):alert(n.message)})},l.prototype.productFormCreate=function(){return this.productForm=this.fb_Group.group({name:["",[r.o.required]],description:[""]})},l}(),_=t._1({encapsulation:0,styles:[[""]],data:{}});function p(l){return t._23(0,[(l()(),t._3(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t._21(-1,null,["*product name required"]))],null,null)}function g(l){return t._23(0,[(l()(),t._3(0,0,null,null,38,"div",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n    "])),(l()(),t._3(2,0,null,null,35,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t._13(l,4).onSubmit(u)&&e),"reset"===n&&(e=!1!==t._13(l,4).onReset()&&e),e},null,null)),t._2(3,16384,null,0,r.r,[],null,null),t._2(4,540672,null,0,r.f,[[8,null],[8,null]],{form:[0,"form"]},null),t._17(2048,null,r.b,null,[r.f]),t._2(6,16384,null,0,r.k,[r.b],null,null),(l()(),t._21(-1,null,["\n        Product name:\n        "])),(l()(),t._3(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n        "])),(l()(),t._3(10,0,null,null,5,"input",[["formControlName","name"],["name","product_Id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t._13(l,11)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t._13(l,11).onTouched()&&e),"compositionstart"===n&&(e=!1!==t._13(l,11)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t._13(l,11)._compositionEnd(u.target.value)&&e),e},null,null)),t._2(11,16384,null,0,r.c,[t.B,t.k,[2,r.a]],null,null),t._17(1024,null,r.h,function(l){return[l]},[r.c]),t._2(13,671744,null,0,r.e,[[3,r.b],[8,null],[8,null],[2,r.h]],{name:[0,"name"]},null),t._17(2048,null,r.i,null,[r.e]),t._2(15,16384,null,0,r.j,[r.i],null,null),(l()(),t._21(-1,null,["\n        "])),(l()(),t.Y(16777216,null,null,1,null,p)),t._2(18,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._21(-1,null,["\n        "])),(l()(),t._3(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,[" Description:\n        "])),(l()(),t._3(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n        "])),(l()(),t._3(24,0,null,null,6,"textarea",[["formControlName","description"],["name","description"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t._13(l,25)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t._13(l,25).onTouched()&&e),"compositionstart"===n&&(e=!1!==t._13(l,25)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t._13(l,25)._compositionEnd(u.target.value)&&e),e},null,null)),t._2(25,16384,null,0,r.c,[t.B,t.k,[2,r.a]],null,null),t._17(1024,null,r.h,function(l){return[l]},[r.c]),t._2(27,671744,null,0,r.e,[[3,r.b],[8,null],[8,null],[2,r.h]],{name:[0,"name"]},null),t._17(2048,null,r.i,null,[r.e]),t._2(29,16384,null,0,r.j,[r.i],null,null),(l()(),t._21(-1,null,["Enter text here..."])),(l()(),t._21(-1,null,["\n        "])),(l()(),t._3(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n        "])),(l()(),t._3(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n        "])),(l()(),t._3(36,0,null,null,0,"input",[["type","button"],["value","Submit"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.createProduct()&&t),t},null,null)),(l()(),t._21(-1,null,["\n    "])),(l()(),t._21(-1,null,["\n"])),(l()(),t._21(-1,null,["\n\n"])),(l()(),t._3(40,0,null,null,2,"a",[["routerLink","/product/prediction"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t._13(l,41).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t._2(41,671744,null,0,i.m,[i.k,i.a,o.g],{routerLink:[0,"routerLink"]},null),(l()(),t._21(-1,null,["Set Product Prediction"]))],function(l,n){var u=n.component;l(n,4,0,u.productForm),l(n,13,0,"name"),l(n,18,0,u.productForm.get("name").dirty&&!u.productForm.get("name").valid),l(n,27,0,"description"),l(n,41,0,"/product/prediction")},function(l,n){var u=n.component;l(n,2,0,t._13(n,6).ngClassUntouched,t._13(n,6).ngClassTouched,t._13(n,6).ngClassPristine,t._13(n,6).ngClassDirty,t._13(n,6).ngClassValid,t._13(n,6).ngClassInvalid,t._13(n,6).ngClassPending),l(n,10,0,t._13(n,15).ngClassUntouched,t._13(n,15).ngClassTouched,t._13(n,15).ngClassPristine,t._13(n,15).ngClassDirty,t._13(n,15).ngClassValid,t._13(n,15).ngClassInvalid,t._13(n,15).ngClassPending),l(n,24,0,t._13(n,29).ngClassUntouched,t._13(n,29).ngClassTouched,t._13(n,29).ngClassPristine,t._13(n,29).ngClassDirty,t._13(n,29).ngClassValid,t._13(n,29).ngClassInvalid,t._13(n,29).ngClassPending),l(n,36,0,!u.productForm.valid),l(n,40,0,t._13(n,41).target,t._13(n,41).href)})}var m=t.Z("app-create-product",s,function(l){return t._23(0,[(l()(),t._3(0,0,null,null,1,"app-create-product",[],null,null,null,g,_)),t._2(1,114688,null,0,s,[d,r.d],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),f=u("DmT9"),h=function(){function l(l,n){this.productService=l,this.fb_Group=n}return l.prototype.ngOnInit=function(){var l=this;this.predictionFormCreate(),this.getProducts(),this.socket=f("https://kdisplay.herokuapp.com"),this.socket.on("product",function(n){n&&l.products.push(n)})},l.prototype.predictionFormCreate=function(){return this.predictionForm=this.fb_Group.group({product_Id:["",[r.o.required]],predictionValue:["",[r.o.required,r.o.pattern("[0-9]*")]]})},l.prototype.getProducts=function(){var l=this;this.productService.getProducts().subscribe(function(n){n.status?l.products=n.message:alert("Unable to fetch data")})},l.prototype.setPredictionValue=function(l,n){var u=this;this.productService.setPrediction({product_Id:l,predictionValue:n}).subscribe(function(l){l.status?(alert("Prediction saved"),u.predictionForm.reset()):alert("Error!")})},l}(),v=t._1({encapsulation:0,styles:[[""]],data:{}});function b(l){return t._23(0,[(l()(),t._3(0,0,null,null,4,"option",[],null,null,null,null,null)),t._2(1,147456,null,0,r.l,[t.k,t.B,[2,r.n]],{value:[0,"value"]},null),t._2(2,147456,null,0,r.t,[t.k,t.B,[8,null]],{value:[0,"value"]},null),(l()(),t._21(3,null,["",""])),t._16(4,1)],function(l,n){l(n,1,0,n.context.$implicit._id),l(n,2,0,n.context.$implicit._id)},function(l,n){l(n,3,0,t._22(n,3,0,l(n,4,0,t._13(n.parent,0),n.context.$implicit.name)))})}function C(l){return t._23(0,[(l()(),t._3(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t._21(-1,null,["No Product to choose ,Please create a product first"]))],null,null)}function y(l){return t._23(0,[(l()(),t._3(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t._21(-1,null,["*product required"]))],null,null)}function P(l){return t._23(0,[(l()(),t._3(0,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t._21(-1,null,["*prediction value required (must be in digits)"]))],null,null)}function k(l){return t._23(0,[t._15(0,o.n,[]),(l()(),t._21(-1,null,["\n"])),(l()(),t._3(2,0,null,null,2,"a",[["routerLink","/product"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t._13(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t._2(3,671744,null,0,i.m,[i.k,i.a,o.g],{routerLink:[0,"routerLink"]},null),(l()(),t._21(-1,null,["<- Back to Add Products"])),(l()(),t._21(-1,null,["\n"])),(l()(),t._3(6,0,null,null,46,"div",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n  "])),(l()(),t._3(8,0,null,null,43,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t._13(l,10).onSubmit(u)&&e),"reset"===n&&(e=!1!==t._13(l,10).onReset()&&e),e},null,null)),t._2(9,16384,null,0,r.r,[],null,null),t._2(10,540672,null,0,r.f,[[8,null],[8,null]],{form:[0,"form"]},null),t._17(2048,null,r.b,null,[r.f]),t._2(12,16384,null,0,r.k,[r.b],null,null),(l()(),t._21(-1,null,["\n  Product name:"])),(l()(),t._3(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n  "])),(l()(),t._3(16,0,null,null,9,"select",[["formControlName","product_Id"],["name","product_Id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t._13(l,17).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t._13(l,17).onTouched()&&e),e},null,null)),t._2(17,16384,null,0,r.n,[t.B,t.k],null,null),t._17(1024,null,r.h,function(l){return[l]},[r.n]),t._2(19,671744,null,0,r.e,[[3,r.b],[8,null],[8,null],[2,r.h]],{name:[0,"name"]},null),t._17(2048,null,r.i,null,[r.e]),t._2(21,16384,null,0,r.j,[r.i],null,null),(l()(),t._21(-1,null,["\n  "])),(l()(),t.Y(16777216,null,null,1,null,b)),t._2(24,802816,null,0,o.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t._21(-1,null,["\n  "])),(l()(),t._21(-1,null,["\n  "])),(l()(),t.Y(16777216,null,null,1,null,C)),t._2(28,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._21(-1,null,["\n  "])),(l()(),t.Y(16777216,null,null,1,null,y)),t._2(31,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._21(-1,null,["\n  "])),(l()(),t._3(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n  Prediction Value:"])),(l()(),t._3(35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n  "])),(l()(),t._3(37,0,null,null,5,"input",[["formControlName","predictionValue"],["name","predictionValue"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t._13(l,38)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t._13(l,38).onTouched()&&e),"compositionstart"===n&&(e=!1!==t._13(l,38)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t._13(l,38)._compositionEnd(u.target.value)&&e),e},null,null)),t._2(38,16384,null,0,r.c,[t.B,t.k,[2,r.a]],null,null),t._17(1024,null,r.h,function(l){return[l]},[r.c]),t._2(40,671744,null,0,r.e,[[3,r.b],[8,null],[8,null],[2,r.h]],{name:[0,"name"]},null),t._17(2048,null,r.i,null,[r.e]),t._2(42,16384,null,0,r.j,[r.i],null,null),(l()(),t._21(-1,null,["\n  "])),(l()(),t.Y(16777216,null,null,1,null,P)),t._2(45,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._21(-1,null,["\n  "])),(l()(),t._3(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._3(48,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t._21(-1,null,["\n  "])),(l()(),t._3(50,0,null,null,0,"input",[["type","button"],["value","Submit"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.setPredictionValue(e.predictionForm.value.product_Id,e.predictionForm.value.predictionValue)&&t),t},null,null)),(l()(),t._21(-1,null,["\n  "])),(l()(),t._21(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,3,0,"/product"),l(n,10,0,u.predictionForm),l(n,19,0,"product_Id"),l(n,24,0,u.products),l(n,28,0,0==(null==u.products?null:u.products.length)),l(n,31,0,u.predictionForm.get("product_Id").dirty&&!u.predictionForm.get("product_Id").valid),l(n,40,0,"predictionValue"),l(n,45,0,u.predictionForm.get("predictionValue").dirty&&!u.predictionForm.get("predictionValue").valid)},function(l,n){var u=n.component;l(n,2,0,t._13(n,3).target,t._13(n,3).href),l(n,8,0,t._13(n,12).ngClassUntouched,t._13(n,12).ngClassTouched,t._13(n,12).ngClassPristine,t._13(n,12).ngClassDirty,t._13(n,12).ngClassValid,t._13(n,12).ngClassInvalid,t._13(n,12).ngClassPending),l(n,16,0,t._13(n,21).ngClassUntouched,t._13(n,21).ngClassTouched,t._13(n,21).ngClassPristine,t._13(n,21).ngClassDirty,t._13(n,21).ngClassValid,t._13(n,21).ngClassInvalid,t._13(n,21).ngClassPending),l(n,37,0,t._13(n,42).ngClassUntouched,t._13(n,42).ngClassTouched,t._13(n,42).ngClassPristine,t._13(n,42).ngClassDirty,t._13(n,42).ngClassValid,t._13(n,42).ngClassInvalid,t._13(n,42).ngClassPending),l(n,50,0,!u.predictionForm.valid)})}var I=t.Z("app-product-prediction",h,function(l){return t._23(0,[(l()(),t._3(0,0,null,null,1,"app-product-prediction",[],null,null,null,k,v)),t._2(1,114688,null,0,h,[d,r.d],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),F=function(){};u.d(n,"ProductModuleNgFactory",function(){return V});var V=t._0(e,[],function(l){return t._10([t._11(512,t.j,t.W,[[8,[m,I]],[3,t.j],t.v]),t._11(4608,o.k,o.j,[t.s,[2,o.p]]),t._11(4608,r.d,r.d,[]),t._11(4608,r.s,r.s,[]),t._11(4608,d,d,[c.c]),t._11(512,o.b,o.b,[]),t._11(512,i.n,i.n,[[2,i.s],[2,i.k]]),t._11(512,F,F,[]),t._11(512,r.p,r.p,[]),t._11(512,r.m,r.m,[]),t._11(512,e,e,[]),t._11(1024,i.i,function(){return[[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:s,pathMatch:"full"},{path:"prediction",component:h,pathMatch:"full"}]]},[])])})}});