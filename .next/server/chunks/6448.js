"use strict";exports.id=6448,exports.ids=[6448],exports.modules={56448:(e,t,s)=>{s.d(t,{GetRoleCredentialsCommand:()=>U,SSOClient:()=>eN});var r=s(75893),o=s(48787),n=s(39539);let i=e=>({...e,useDualstackEndpoint:e.useDualstackEndpoint??!1,useFipsEndpoint:e.useFipsEndpoint??!1,defaultSigningName:"awsssoportal"}),a={UseFIPS:{type:"builtInParams",name:"useFipsEndpoint"},Endpoint:{type:"builtInParams",name:"endpoint"},Region:{type:"builtInParams",name:"region"},UseDualStack:{type:"builtInParams",name:"useDualstackEndpoint"}};class d extends n.sI{constructor(e){super(e),Object.setPrototypeOf(this,d.prototype)}}class c extends d{constructor(e){super({name:"InvalidRequestException",$fault:"client",...e}),this.name="InvalidRequestException",this.$fault="client",Object.setPrototypeOf(this,c.prototype)}}class u extends d{constructor(e){super({name:"ResourceNotFoundException",$fault:"client",...e}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,u.prototype)}}class p extends d{constructor(e){super({name:"TooManyRequestsException",$fault:"client",...e}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,p.prototype)}}class l extends d{constructor(e){super({name:"UnauthorizedException",$fault:"client",...e}),this.name="UnauthorizedException",this.$fault="client",Object.setPrototypeOf(this,l.prototype)}}let h=e=>({...e,...e.accessToken&&{accessToken:n.oc}}),m=e=>({...e,...e.secretAccessKey&&{secretAccessKey:n.oc},...e.sessionToken&&{sessionToken:n.oc}}),y=e=>({...e,...e.roleCredentials&&{roleCredentials:m(e.roleCredentials)}});var f=s(87828),g=s(71424);let S=async(e,t)=>{let s;let r=(0,g.cu)(e,t),o=(0,n.UI)({},C,{[z]:e[R]});r.bp("/federation/credentials");let i=(0,n.UI)({[D]:[,(0,n.CE)(e[q],"roleName")],[O]:[,(0,n.CE)(e[A],"accountId")]});return r.m("GET").h(o).q(i).b(s),r.build()},P=async(e,t)=>{if(200!==e.statusCode&&e.statusCode>=300)return v(e,t);let s=(0,n.UI)({$metadata:k(e)}),r=(0,n.CE)((0,n.Wh)(await (0,f.e1)(e.body,t)),"body");return Object.assign(s,(0,n.qn)(r,{roleCredentials:n.F3})),s},v=async(e,t)=>{let s={...e,body:await (0,f.fk)(e.body,t)},r=(0,f.mJ)(e,s.body);switch(r){case"InvalidRequestException":case"com.amazonaws.sso#InvalidRequestException":throw await x(s,t);case"ResourceNotFoundException":case"com.amazonaws.sso#ResourceNotFoundException":throw await w(s,t);case"TooManyRequestsException":case"com.amazonaws.sso#TooManyRequestsException":throw await I(s,t);case"UnauthorizedException":case"com.amazonaws.sso#UnauthorizedException":throw await E(s,t);default:return b({output:e,parsedBody:s.body,errorCode:r})}},b=(0,n.PC)(d),x=async(e,t)=>{let s=(0,n.UI)({}),r=e.body;Object.assign(s,(0,n.qn)(r,{message:n.pY}));let o=new c({$metadata:k(e),...s});return(0,n.to)(o,e.body)},w=async(e,t)=>{let s=(0,n.UI)({}),r=e.body;Object.assign(s,(0,n.qn)(r,{message:n.pY}));let o=new u({$metadata:k(e),...s});return(0,n.to)(o,e.body)},I=async(e,t)=>{let s=(0,n.UI)({}),r=e.body;Object.assign(s,(0,n.qn)(r,{message:n.pY}));let o=new p({$metadata:k(e),...s});return(0,n.to)(o,e.body)},E=async(e,t)=>{let s=(0,n.UI)({}),r=e.body;Object.assign(s,(0,n.qn)(r,{message:n.pY}));let o=new l({$metadata:k(e),...s});return(0,n.to)(o,e.body)},k=e=>({httpStatusCode:e.statusCode,requestId:e.headers["x-amzn-requestid"]??e.headers["x-amzn-request-id"]??e.headers["x-amz-request-id"],extendedRequestId:e.headers["x-amz-id-2"],cfId:e.headers["x-amz-cf-id"]}),C=e=>null!=e&&""!==e&&(!Object.getOwnPropertyNames(e).includes("length")||0!=e.length)&&(!Object.getOwnPropertyNames(e).includes("size")||0!=e.size),A="accountId",R="accessToken",O="account_id",q="roleName",D="role_name",z="x-amz-sso_bearer_token";class U extends n.mY.classBuilder().ep({...a}).m(function(e,t,s,n){return[(0,o.p2)(s,this.serialize,this.deserialize),(0,r.a3)(s,e.getEndpointParameterInstructions())]}).s("SWBPortalService","GetRoleCredentials",{}).n("SSOClient","GetRoleCredentialsCommand").f(h,y).ser(S).de(P).build(){}var F=s(24046),j=s(58158),$=s(84119),M=s(16596),N=s(27337),H=s(64339),G=s(51812),T=s(94185),_=s(39701);let L=async(e,t,s)=>({operation:(0,_.J)(t).operation,region:await (0,_.$)(e.region)()||(()=>{throw Error("expected `region` to be configured for `aws.auth#sigv4`")})()}),B=e=>{let t=[];switch(e.operation){case"GetRoleCredentials":case"ListAccountRoles":case"ListAccounts":case"Logout":t.push({schemeId:"smithy.api#noAuth"});break;default:t.push({schemeId:"aws.auth#sigv4",signingProperties:{name:"awsssoportal",region:e.region},propertiesExtractor:(e,t)=>({signingProperties:{config:e,context:t}})})}return t},V=e=>({...(0,T.K)(e)}),J={i8:"3.590.0"};var K=s(77742),Y=s(80442),W=s(40804),Z=s(47302),Q=s(41056),X=s(72282),ee=s(96602),et=s(74376),es=s(96636),er=s(55898),eo=s(13571),en=s(95592),ei=s(46293);let ea="required",ed="argv",ec="isSet",eu="booleanEquals",ep="error",el="endpoint",eh="tree",em="PartitionResult",ey="getAttr",ef={[ea]:!1,type:"String"},eg={[ea]:!0,default:!1,type:"Boolean"},eS={ref:"Endpoint"},eP={fn:eu,[ed]:[{ref:"UseFIPS"},!0]},ev={fn:eu,[ed]:[{ref:"UseDualStack"},!0]},eb={},ex={fn:ey,[ed]:[{ref:em},"supportsFIPS"]},ew={ref:em},eI={fn:eu,[ed]:[!0,{fn:ey,[ed]:[ew,"supportsDualStack"]}]},eE=[eP],ek=[ev],eC=[{ref:"Region"}],eA={version:"1.0",parameters:{Region:ef,UseDualStack:eg,UseFIPS:eg,Endpoint:ef},rules:[{conditions:[{fn:ec,[ed]:[eS]}],rules:[{conditions:eE,error:"Invalid Configuration: FIPS and custom endpoint are not supported",type:ep},{conditions:ek,error:"Invalid Configuration: Dualstack and custom endpoint are not supported",type:ep},{endpoint:{url:eS,properties:eb,headers:eb},type:el}],type:eh},{conditions:[{fn:ec,[ed]:eC}],rules:[{conditions:[{fn:"aws.partition",[ed]:eC,assign:em}],rules:[{conditions:[eP,ev],rules:[{conditions:[{fn:eu,[ed]:[!0,ex]},eI],rules:[{endpoint:{url:"https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:eb,headers:eb},type:el}],type:eh},{error:"FIPS and DualStack are enabled, but this partition does not support one or both",type:ep}],type:eh},{conditions:eE,rules:[{conditions:[{fn:eu,[ed]:[ex,!0]}],rules:[{conditions:[{fn:"stringEquals",[ed]:[{fn:ey,[ed]:[ew,"name"]},"aws-us-gov"]}],endpoint:{url:"https://portal.sso.{Region}.amazonaws.com",properties:eb,headers:eb},type:el},{endpoint:{url:"https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",properties:eb,headers:eb},type:el}],type:eh},{error:"FIPS is enabled but this partition does not support FIPS",type:ep}],type:eh},{conditions:ek,rules:[{conditions:[eI],rules:[{endpoint:{url:"https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",properties:eb,headers:eb},type:el}],type:eh},{error:"DualStack is enabled but this partition does not support DualStack",type:ep}],type:eh},{endpoint:{url:"https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",properties:eb,headers:eb},type:el}],type:eh}],type:eh},{error:"Invalid Configuration: Missing Region",type:ep}]},eR=(e,t={})=>(0,ei.B1)(eA,{endpointParams:e,logger:t.logger});ei.DY.aws=en.Iu;let eO=e=>({apiVersion:"2019-06-10",base64Decoder:e?.base64Decoder??er.G,base64Encoder:e?.base64Encoder??er.s,disableHostPrefix:e?.disableHostPrefix??!1,endpointProvider:e?.endpointProvider??eR,extensions:e?.extensions??[],httpAuthSchemeProvider:e?.httpAuthSchemeProvider??B,httpAuthSchemes:e?.httpAuthSchemes??[{schemeId:"aws.auth#sigv4",identityProvider:e=>e.getIdentityProvider("aws.auth#sigv4"),signer:new et.V},{schemeId:"smithy.api#noAuth",identityProvider:e=>e.getIdentityProvider("smithy.api#noAuth")||(async()=>({})),signer:new g.oH}],logger:e?.logger??new n.vk,serviceId:e?.serviceId??"SSO",urlParser:e?.urlParser??es.e,utf8Decoder:e?.utf8Decoder??eo.$x,utf8Encoder:e?.utf8Encoder??eo.GZ});var eq=s(46608);let eD=e=>{(0,n.H_)(process.version);let t=(0,eq.j)(e),s=()=>t().then(n.jv),r=eO(e);return(0,K.H)(process.version),{...r,...e,runtime:"node",defaultsMode:t,bodyLengthChecker:e?.bodyLengthChecker??X.W,defaultUserAgentProvider:e?.defaultUserAgentProvider??(0,Y.fV)({serviceId:r.serviceId,clientVersion:J.i8}),maxAttempts:e?.maxAttempts??(0,Z.M)(G.Hs),region:e?.region??(0,Z.M)(N._c,N.zb),requestHandler:Q.NA.create(e?.requestHandler??s),retryMode:e?.retryMode??(0,Z.M)({...G.aK,default:async()=>(await s()).retryMode||ee.CA}),sha256:e?.sha256??W.k.bind(null,"sha256"),streamCollector:e?.streamCollector??Q.CF,useDualstackEndpoint:e?.useDualstackEndpoint??(0,Z.M)(N.G7),useFipsEndpoint:e?.useFipsEndpoint??(0,Z.M)(N.NL)}};var ez=s(35903),eU=s(41966);let eF=e=>{let t=e.httpAuthSchemes,s=e.httpAuthSchemeProvider,r=e.credentials;return{setHttpAuthScheme(e){let s=t.findIndex(t=>t.schemeId===e.schemeId);-1===s?t.push(e):t.splice(s,1,e)},httpAuthSchemes:()=>t,setHttpAuthSchemeProvider(e){s=e},httpAuthSchemeProvider:()=>s,setCredentials(e){r=e},credentials:()=>r}},ej=e=>({httpAuthSchemes:e.httpAuthSchemes(),httpAuthSchemeProvider:e.httpAuthSchemeProvider(),credentials:e.credentials()}),e$=e=>e,eM=(e,t)=>{let s={...e$((0,ez.GW)(e)),...e$((0,n.kE)(e)),...e$((0,eU.cA)(e)),...e$(eF(e))};return t.forEach(e=>e.configure(s)),{...e,...(0,ez.A1)(s),...(0,n.SQ)(s),...(0,eU.AO)(s),...ej(s)}};class eN extends n.KU{constructor(...[e]){let t=i(eD(e||{})),s=(0,N.Xb)(t),o=(0,r.uW)(s),n=(0,G.BC)(o),a=(0,F.S8)(n),d=eM(V((0,M.er)(a)),e?.extensions||[]);super(d),this.config=d,this.middlewareStack.use((0,G.NQ)(this.config)),this.middlewareStack.use((0,H.VG)(this.config)),this.middlewareStack.use((0,F.G2)(this.config)),this.middlewareStack.use((0,j.cV)(this.config)),this.middlewareStack.use((0,$.eV)(this.config)),this.middlewareStack.use((0,M.XJ)(this.config)),this.middlewareStack.use((0,g.tZ)(this.config,{httpAuthSchemeParametersProvider:this.getDefaultHttpAuthSchemeParametersProvider(),identityProviderConfigProvider:this.getIdentityProviderConfigProvider()})),this.middlewareStack.use((0,g.aZ)(this.config))}destroy(){super.destroy()}getDefaultHttpAuthSchemeParametersProvider(){return L}getIdentityProviderConfigProvider(){return async e=>new g.K5({"aws.auth#sigv4":e.credentials})}}},87828:(e,t,s)=>{s.d(t,{e1:()=>o,fk:()=>n,mJ:()=>i});var r=s(98957);let o=(e,t)=>(0,r.J)(e,t).then(e=>{if(e.length)try{return JSON.parse(e)}catch(t){throw t?.name==="SyntaxError"&&Object.defineProperty(t,"$responseBodyText",{value:e}),t}return{}}),n=async(e,t)=>{let s=await o(e,t);return s.message=s.message??s.Message,s},i=(e,t)=>{let s,r;let o=e=>{let t=e;return"number"==typeof t&&(t=t.toString()),t.indexOf(",")>=0&&(t=t.split(",")[0]),t.indexOf(":")>=0&&(t=t.split(":")[0]),t.indexOf("#")>=0&&(t=t.split("#")[1]),t},n=(s=e.headers,r="x-amzn-errortype",Object.keys(s).find(e=>e.toLowerCase()===r.toLowerCase()));return void 0!==n?o(e.headers[n]):void 0!==t.code?o(t.code):void 0!==t.__type?o(t.__type):void 0}}};