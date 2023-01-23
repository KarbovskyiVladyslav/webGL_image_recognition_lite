(function(){var e={4129:function(e){const t=512;async function n(e){let t=document.createElement("video");if(t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.setAttribute("ref","video"),t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.zIndex="-2",navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)return await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:e}}).then((e=>(t.addEventListener("loadedmetadata",(()=>{t.setAttribute("width",t.videoWidth+"px"),t.setAttribute("height",t.videoHeight+"px"),r(t),window.addEventListener("resize",(()=>{r(t)}))})),t.srcObject=e,t))).catch((e=>{throw e}))}function i(e){let n=document.createElement("canvas");n.style.display="none",n.width=t,n.height=e.videoHeight/e.videoWidth*n.width,n.getContext("2d").drawImage(e,0,0,n.width,n.height);let i=n.toDataURL("image/jpeg");return i}function r(e){let t,n,i=e?.parentElement;if(!e||!i)return;const r=e.videoWidth/e.videoHeight,a=i.clientWidth/i.clientHeight;r>a?(n=i.clientHeight,t=n*r):(t=i.clientWidth,n=t/r),e.style.top=-(n-i.clientHeight)/2+"px",e.style.left=-(t-i.clientWidth)/2+"px",e.style.width=t+"px",e.style.height=n+"px"}function a(e){if(e&&null!=e){const t=e.srcObject.getTracks();t.forEach((function(e){e.stop()})),e.remove()}}e.exports={CreateCameraVideo:n,TakePhoto:i,StopVideo:a}},3861:function(e){const t="#scanningOverlay",n="#loadingOverlay",i=2,r=2,a=.001,o=1e3,s=30;function c(e,c){return new window.MINDAR.IMAGE.MindARThree({container:c,imageTargetSrc:e,uiScanning:t,uiLoading:n,warmupTolerance:i,missTolerance:r,filterMinCF:a,filterBeta:o,maxTrack:s})}function u(e){return new window.MINDAR.FACE.MindARThree({container:e,uiScanning:t,uiLoading:n})}e.exports={MindArTarget:c,MindArFace:u}},2457:function(e,t,n){"use strict";var i=n(9242),r=n(3396);const a={id:"app"};function o(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(n)])}var s=n(89);const c={},u=(0,s.Z)(c,[["render",o]]);var d=u,h=n(2483);const l={id:"app",ref:"app"},w=(0,r._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-fullscreen",viewBox:"0 0 16 16"},[(0,r._)("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"})],-1),f=[w],m={id:"container",class:"fixed",ref:"arContainer"},p={style:{display:"block"},id:"unity-canvas",class:"fixed",ref:"uc"},S=["innerHTML"],g=["innerHTML"],v=["innerHTML"],y=["innerHTML"];function b(e,t,n,i,a,o){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>o.SetFullscreen(!a.isFullscreen)),ref:"fullscreenBtn",id:"fullscreenBtn"},f,512),(0,r._)("div",m,[(0,r._)("canvas",p,null,512),((0,r.wg)(),(0,r.j4)((0,r.LL)(o.GetSceneComponent()),{sceneData:a.currentScene,key:a.currentScene.sceneIndex},null,8,["sceneData"]))],512),a.ShowLoading?((0,r.wg)(),(0,r.iD)("div",{key:0,id:"uiScreeen",class:"fixed",innerHTML:a.loadingScreens["loading"]},null,8,S)):(0,r.kq)("",!0),a.ShowScanning?((0,r.wg)(),(0,r.iD)("div",{key:1,id:"uiScreeen",class:"fixed",innerHTML:a.loadingScreens["scanning"]},null,8,g)):(0,r.kq)("",!0),a.ShowSplash?((0,r.wg)(),(0,r.iD)("div",{key:2,id:"uiScreeen",class:"fixed",innerHTML:a.loadingScreens["splash"]},null,8,v)):(0,r.kq)("",!0),a.ShowOrientation?((0,r.wg)(),(0,r.iD)("div",{key:3,id:"uiScreeen",class:"fixed",innerHTML:a.loadingScreens["orientation"]?a.loadingScreens["orientation"]:a.loadingScreens["loading"]},null,8,y)):(0,r.kq)("",!0)],512)}class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}}class E{constructor(e=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]){this.elements=e}clone(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}decompose(e,t,n){const i=this.elements;let r=new A(i[0],i[1],i[2]).magnitude();const a=new A(i[4],i[5],i[6]).magnitude(),o=new A(i[8],i[9],i[10]).magnitude(),s=this.determinant();s<0&&(r=-r);const c=1/r,u=1/a,d=1/o,h=new E;return h.clone(this),h.elements[0]*=c,h.elements[1]*=c,h.elements[2]*=c,h.elements[4]*=u,h.elements[5]*=u,h.elements[6]*=u,h.elements[8]*=d,h.elements[9]*=d,h.elements[10]*=d,e.set(i[12],i[14],i[13]),n.set(r,a,o),t.setFromRotationMatrix(h),this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],s=e[9],c=e[13],u=e[2],d=e[6],h=e[10],l=e[14],w=e[3],f=e[7],m=e[11],p=e[15];return w*(+r*s*d-i*c*d-r*o*h+n*c*h+i*o*l-n*s*l)+f*(+t*s*l-t*c*h+r*a*h-i*a*l+i*c*u-r*s*u)+m*(+t*c*d-t*o*l-r*a*d+n*a*l+r*o*u-n*c*u)+p*(-i*o*u-t*s*d+t*o*h+i*a*d-n*a*h+n*s*u)}}class x{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],s=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const e=.5/Math.sqrt(h+1);this.x=(u-s)*e,this.y=(a-i)*e,this.z=(r-c)*e,this.w=.25/e}else if(n>o&&n>d){const e=2*Math.sqrt(1+n-o-d);this.x=.25*e,this.y=(r+c)/e,this.z=(i+a)/e,this.w=(u-s)/e}else if(o>d){const e=2*Math.sqrt(1+o-n-d);this.x=(i+a)/e,this.y=(s+u)/e,this.z=.25*e,this.w=(r-c)/e}else{const e=2*Math.sqrt(1+d-n-o);this.x=(r+c)/e,this.y=.25*e,this.z=(s+u)/e,this.w=(a-i)/e}return this.x*=-1,this}}class T{constructor(){}isValid(){}}class O extends T{constructor(e,t,n,i=60,r=[]){super(),e||(e=new A),t||(t=new x),n||(n=new A),this.position=e,this.rotation=t,this.scale=n,this.cameraFOV=i,this.faceMeshData=r.join()}isValid(){return!!(this.position&&this.rotation&&this.scale&&this.faceMeshData)}}class M extends T{constructor(e,t,n,i=60,r=0){super(),e||(e=new A),t||(t=new x),n||(n=new A),this.position=e,this.rotation=t,this.scale=n,this.cameraFOV=i,this.targetIndex=r}isValid(){return!!(this.position&&this.rotation&&this.scale)}}let F,L,_,C,H,P,D;function I(e){P=e.Module,F=e.Module.cwrap("call_cb_TargetTransform",null,["number","number","number","number","number"]),L=e.Module.cwrap("call_cb_FaceTransform",null,["number","number","number","number","string","number"]),_=e.Module.cwrap("call_cb_MarkerTransform",null,["number","number","number"]),C=e.Module.cwrap("call_cb_ScanningFinished",null,[]),H=e.Module.cwrap("call_cb_SceneLoaded",null,["number"])}function k(e,t,n,i,r,a,o){let s=new O(t,n,i,r,a);if(s.isValid()){if(e){var c=P._malloc(40),u=c>>2;P.HEAPF32[u]=s.position.x,P.HEAPF32[u+1]=s.position.y,P.HEAPF32[u+2]=s.position.z,P.HEAPF32[u+3]=s.rotation.x,P.HEAPF32[u+4]=s.rotation.y,P.HEAPF32[u+5]=s.rotation.z,P.HEAPF32[u+6]=s.rotation.w,P.HEAPF32[u+7]=s.scale.x,P.HEAPF32[u+8]=s.scale.y,P.HEAPF32[u+9]=s.scale.z,L(c,c+12,c+28,s.cameraFOV,s.faceMeshData,o),P._free(c)}}else console.error("Face transform is invalid!")}function R(e,t,n,i,r,a){let o=new M(t,n,i,r,a);if(o.isValid()){if(e){var s=P._malloc(40),c=s>>2;P.HEAPF32[c]=o.position.x,P.HEAPF32[c+1]=o.position.y,P.HEAPF32[c+2]=o.position.z,P.HEAPF32[c+3]=o.rotation.x,P.HEAPF32[c+4]=o.rotation.y,P.HEAPF32[c+5]=o.rotation.z,P.HEAPF32[c+6]=o.rotation.w,P.HEAPF32[c+7]=o.scale.x,P.HEAPF32[c+8]=o.scale.y,P.HEAPF32[c+9]=o.scale.z,F(s,s+12,s+28,o.cameraFOV,a),P._free(s)}}else console.error("Target transform is invalid!")}function j(e,t,n,i){if(e){var r=P._malloc(28),a=r>>2;P.HEAPF32[a]=t.x,P.HEAPF32[a+1]=t.y,P.HEAPF32[a+2]=t.z,P.HEAPF32[a+3]=n.x,P.HEAPF32[a+4]=n.y,P.HEAPF32[a+5]=n.z,P.HEAPF32[a+6]=n.w,_(r,r+12,i),P._free(r)}}function z(e){e&&C()}function N(e,t){e&&H(t)}function q(e,t){var n="./Build";const i=!1;var r,a;i?(r=n+"/Build/Build.loader.js",a={dataUrl:n+"/Build/Build.data",frameworkUrl:n+"/Build/Build.framework.js",codeUrl:n+"/Build/Build.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"surface_recognition_demo",productVersion:"0.1"}):(r=n+"/webGL_image_recognition_lite.loader.js",a={dataUrl:n+"/webGL_image_recognition_lite.data",frameworkUrl:n+"/webGL_image_recognition_lite.framework.js",codeUrl:n+"/webGL_image_recognition_lite.wasm",streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"surface_recognition_demo",productVersion:"0.1"}),e.width=window.innerWidth,e.height=window.innerHeight;var o=document.createElement("script");o.src=r,o.onload=()=>{createUnityInstance(e,a).then((e=>{window.ShowSplashScreen(!1),D=e,I(e),t(e)})).catch((e=>{}))},e.appendChild(o)}function U(e,t){const n=new E(e),i=new A,r=new x,a=new A;return n.decompose(i,r,a),t(i,r,a)}function V(e,t,n,i){U(e,((e,r,a)=>{k(D,e,r,a,t,n,i)}))}function $(e,t,n){U(e,((e,i,r)=>{R(D,e,i,r,t,n)}))}function B(e,t){U(e,((e,n,i)=>{j(D,e,n,t)}))}function W(){z(D)}function Z(e){N(D,e)}class G{constructor(e){this.vue=e,window.SCENE_LOADER=this}async LoadScene(e,t,n){let i={sceneType:e,sceneIndex:Number(t),amountOfTargets:Number(n)};this.vue.currentScene=i}async ScanSurface(e){void 0!=window.currentScene&&null!=window.currentScene&&window.currentScene.ScanSurface&&window.currentScene.ScanSurface()}}const Y={class:"debug",ref:"mc"};function K(e,t,n,i,a,o){return(0,r.wg)(),(0,r.iD)("div",Y,null,512)}var X=n(3861),J={name:"FaceScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry(0)},methods:{async Entry(e){1==e?window.ShowOrientationScreen(!0):window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch(e)},async Launch(e){await this.Setup(),await this.Start(),1==e?window.ShowOrientationScreen(!1):window.ShowLoadingIndicator(!1)},async Setup(){return await n.e(816).then(n.t.bind(n,9816,23)).then((async()=>{let e=(0,X.MindArFace)(this.$refs.mc);this.mindAr=e;let t=e.addFaceMesh();e.addAnchor(0);let n=e.renderer,i=e.scene,r=e.camera;this.Start=async()=>{await e.start(),Z(this.sceneData.sceneIndex),n.setAnimationLoop((()=>{n.render(i,r),this.CheckTarget(e,t.geometry.positions)}))},this.Stop=async()=>{await e.stop(),n.setAnimationLoop(null)}}))},CheckTarget(e,t){let n=e.container.offsetWidth/e.container.offsetHeight,i=n<4/3?e.camera.fov:e.camera.fov*(4/3)/n,r=e.anchors[0],a=0;r.group.visible&&(a=1);let o=r.group.matrix.elements;V(o,i,t,a)}}};const Q=(0,s.Z)(J,[["render",K],["__scopeId","data-v-0fdfe8b7"]]);var ee=Q;const te={class:"debug",ref:"mc"};function ne(e,t,n,i,a,o){return(0,r.wg)(),(0,r.iD)("div",te,null,512)}var ie={name:"TargetScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(e){1==e?window.ShowOrientationScreen(!0):window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch(e)},async Launch(e){await this.Setup(),await this.Start(),1==e?window.ShowOrientationScreen(!1):window.ShowLoadingIndicator(!1)},async Setup(){return await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let e=(0,X.MindArTarget)(`./Targets/targets_${this.sceneData.sceneIndex}.mind`,this.$refs.mc);this.mindAr=e;for(var t=0;t<this.sceneData.amountOfTargets;t++)e.addAnchor(t);let n=e.renderer;e.scene,e.camera;this.Start=async()=>{await e.start(),Z(this.sceneData.sceneIndex);for(var t=0;t<this.sceneData.amountOfTarget;t++)e.anchors[t].group.visible=!1;n.setAnimationLoop((()=>{this.CheckTarget(e)}))},this.Stop=async()=>{await e.stop(),n.setAnimationLoop(null)}}))},CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t;for(var i=0;i<this.sceneData.amountOfTargets;i++){let t=e.anchors[i];if(t.group.visible)return $(t.group.matrix.elements,n,i)}return $(e.camera.matrix.elements,n,-1)}}};const re=(0,s.Z)(ie,[["render",ne],["__scopeId","data-v-0fb7230b"]]);var ae=re;const oe={class:"debug",ref:"mc"},se={key:0,id:"startScreen"};function ce(e,t,n,i,a,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",oe,null,512),a.isUserActionRequired?((0,r.wg)(),(0,r.iD)("div",se,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>o.Entry())},"START AR")])):(0,r.kq)("",!0)],64)}var ue=n(1114),de={name:"MarkerScene",props:{sceneData:Object},data(){return{isUserActionRequired:!1}},mounted(){this.Entry()},methods:{async Entry(e){1==e?window.ShowOrientationScreen(!0):window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch(e)},async Launch(e){await this.Setup(),await this.Start(),1==e?window.ShowOrientationScreen(!1):window.ShowLoadingIndicator(!1)},async Setup(){this.scene=new ue.xsS,this.camera=new ue.cPb(70,window.innerWidth/window.innerHeight,.01,20),this.renderer=new ue.CP7({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.xr.enabled=!0,this.$refs.mc.appendChild(this.renderer.domElement),this.controller=this.renderer.xr.getController(0),this.scene.add(this.controller),this.Start=async()=>{navigator.xr.requestSession("immersive-ar",{optionalFeatures:["dom-overlay"],requiredFeatures:["hit-test"],domOverlay:{root:this.sceneData.unity}}).then((async e=>{this.isUserActionRequired=!1,this.session=e,this.renderer.xr.setReferenceSpaceType("local"),await this.renderer.xr.setSession(e),Z(this.sceneData.sceneIndex),this.animate()})).catch((()=>{this.isUserActionRequired=!0}))},this.Stop=async()=>{this.session&&await this.session.end()}},animate(){this.renderer.setAnimationLoop((()=>{this.renderer.render(this.scene,this.camera),this.SendCameraTransformTounity()}))},SendCameraTransformTounity(){let e=this.camera.matrixWorld.elements,t=this.camera.fov;B(e,t)}}};const he=(0,s.Z)(de,[["render",ce],["__scopeId","data-v-3ba4fd40"]]);var le=he;const we={class:"debug",ref:"mc"};function fe(e,t,n,i,a,o){return(0,r.wg)(),(0,r.iD)("div",we,null,512)}var me=n(4129);n(7658),n(4200);const pe=new window.MINDAR.IMAGE.Compiler;async function Se(e){const t=[];for(let r=0;r<e.length;r++){let n=await ge(e[r]);t.push(n)}await pe.compileImageTargets(t,(e=>{console.log(e)}));const n=await pe.exportData();let i=ve(n);return i}async function ge(e){return new Promise(((t,n)=>{let i=new Image;i.onload=()=>t(i),i.onerror=n,i.src=e}))}function ve(e){var t=new Blob([e]),n=window.document.createElement("a");return n.download="targets.mind",n.href=window.URL.createObjectURL(t),n.href}var ye={name:"SurfaceScene",props:{sceneData:Object},data(){return{}},mounted(){this.Entry()},methods:{async Entry(){window.ShowLoadingIndicator(!0),await window.SetCurrentScene(this),this.Launch()},async Launch(){await this.StartVideo(),window.ShowLoadingIndicator(!1),Z(this.sceneData.sceneIndex)},async ScanSurface(){window.ShowScanningIndicator(!0);let e=(0,me.TakePhoto)(this.video),t=await Se([e]);await this.Setup(t),await this.Start(),window.ShowScanningIndicator(!1),W()},async StartVideo(){this.video=await(0,me.CreateCameraVideo)("environment"),this.$refs.mc.appendChild(this.video)},async Setup(e){this.amountOfTargets;return await n.e(528).then(n.t.bind(n,5528,23)).then((async()=>{let t=(0,X.MindArTarget)(e,this.$refs.mc);this.mindAr=t;for(var n=0;n<this.sceneData.amountOfTargets;n++)t.addAnchor(n);let i=t.renderer;t.scene,t.camera;this.Start=async()=>{await t.start(),Z(this.sceneData.sceneIndex);for(var e=0;e<this.sceneData.amountOfTarget;e++)t.anchors[e].group.visible=!1;i.setAnimationLoop((()=>{this.CheckTarget(t)}))},this.Stop=async()=>{await t.stop(),(0,me.StopVideo)(this.video),i.setAnimationLoop(null)}}))},CheckTarget(e){let t=e.container.offsetWidth/e.container.offsetHeight,n=t<4/3?e.camera.fov:e.camera.fov*(4/3)/t;for(var i=0;i<this.sceneData.amountOfTargets;i++){let t=e.anchors[i];if(t.group.visible)return $(t.group.matrix.elements,n,i)}return $(e.camera.matrix.elements,n,-1)}}};const be=(0,s.Z)(ye,[["render",fe],["__scopeId","data-v-43715880"]]);var Ae=be,Ee={name:"App",components:{FaceScene:ee,TargetScene:ae,MarkerScene:le,SurfaceScene:Ae},data(){return{isFullscreen:!1,sceneLoader:null,ShowLoading:!1,ShowScanning:!1,ShowSplash:!0,ShowOrientation:!1,loadingScreens:{},currentScene:{}}},mounted(){this.LoadHTMLs(),this.Initialization(),window.StopCurrentScene=this.StopCurrentScene,window.SetCurrentScene=this.SetCurrentScene,window.timeout=this.timeout,window.ShowLoadingIndicator=this.ShowLoadingIndicator,window.ShowScanningIndicator=this.ShowScanningIndicator,window.ShowSplashScreen=this.ShowSplashScreen,window.ShowOrientationScreen=this.ShowOrientationScreen},methods:{async timeout(e){return new Promise((t=>setTimeout(t,e)))},async SetCurrentScene(e){this.StopCurrentScene(),window.currentScene=e},async StopCurrentScene(){window.currentScene&&null!=window.currentScene&&window.currentScene.Stop&&await window.currentScene.Stop()},GetSceneComponent(){switch(this.currentScene.unity=this.$refs.uc,this.currentScene.sceneType){case"face":return ee;case"image":return ae;case"marker":return le;case"surface":return Ae;default:return this.StopCurrentScene(),null}},LoadHTMLs(){const e=["loading","scanning","splash","orientation"],t=this;for(var n=0;n<e.length;n++){const r=n;var i=new XMLHttpRequest;i.open("GET",`${e[r]}.html`,!1),i.onreadystatechange=function(){if(4===i.readyState&&(200===i.status||0==i.status)){var n=i.responseText;t.loadingScreens[e[r]]=n}},i.send(null)}console.warn(this.loadingScreens)},async ReloadScene(){window.currentScene&&null!=window.currentScene&&window.currentScene.Entry&&window.currentScene.Entry(1)},async Initialization(){let e=this.$refs.uc;this.$refs.arContainer;this.sceneLoader=new G(this);let t=this;window.addEventListener("orientationchange",(function(){t.ReloadScene()}),!1),q(e,(()=>{this.ShowLoadingIndicator(!1)}))},SetFullscreen(e){if(e){const e=()=>{this.isFullscreen=!0,window.matchMedia("(orientation: portrait)").matches&&screen.orientation.lock("portrait-primary"),window.matchMedia("(orientation: landscape)").matches&&screen.orientation.lock("landscape-primary")};this.$refs.app.requestFullscreen&&this.$refs.app.requestFullscreen().then(e).catch((e=>{console.error(e)})),this.$refs.app.webkitRequestFullScreen&&this.$refs.app.webkitRequestFullScreen().then(e).catch((e=>{console.error(e)})),this.$refs.app.mozRequestFullScreen&&this.$refs.app.mozRequestFullScreen().then(e).catch((e=>{console.error(e)}))}else document.exitFullscreen().then((()=>{this.isFullscreen=!1})).catch((e=>{console.error(e)}))},ShowLoadingIndicator(e){this.ShowLoading=e},ShowScanningIndicator(e){this.ShowScanning=e},ShowSplashScreen(e){this.ShowSplash=e},ShowOrientationScreen(e){this.ShowOrientation=e}}};const xe=(0,s.Z)(Ee,[["render",b]]);var Te=xe;const Oe=h.p7({history:h.r5(),routes:[{path:"/:id?",component:Te}]});(0,i.ri)(d).use(Oe).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"===typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return i[e]}}));return o["default"]=function(){return i},n.d(a,o),a}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".qs.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ar-unity-renderer:";n.l=function(i,r,a,o){if(e[i])e[i].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var h=u[d];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+a){s=h;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=i),e[i]=[r];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(w);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},w=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=a);var o=n.p+n.u(t),s=new Error,c=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],c=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(t&&t(i);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},i=self["webpackChunkar_unity_renderer"]=self["webpackChunkar_unity_renderer"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2457)}));i=n.O(i)})();
//# sourceMappingURL=app.qs.js.map
