(this["webpackJsonpquorum-reporting-ui"]=this["webpackJsonpquorum-reporting-ui"]||[]).push([[0],{151:function(e,t,a){e.exports=a(187)},186:function(e,t,a){e.exports=a.p+"static/media/quorum-logo.e2dac645.png"},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(20),s=a(42),i=a(116),u=(a(160),a(10)),d={page:"Home",selectedContract:"",contracts:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":return Object(u.a)(Object(u.a)({},e),{},{page:t.page});case"SELECT_CONTRACT":return Object(u.a)(Object(u.a)({},e),{},{selectedContract:t.selectedContract});case"GET_CONTRACTS":return Object(u.a)(Object(u.a)({},e),{},{contracts:t.contracts});default:return e}},p={rpcEndpoint:"http://localhost:4000",isConnected:!1,lastPersistedBlockNumber:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT":return Object(u.a)(Object(u.a)({},e),{},{isConnected:!0});case"DISCONNECT":return Object(u.a)(Object(u.a)({},e),{},{isConnected:!1});case"UPDATE_ENDPOINT":return Object(u.a)(Object(u.a)({},e),{},{rpcEndpoint:t.rpcEndpoint});case"UPDATE_BLOCK_NUMBER":return Object(u.a)(Object(u.a)({},e),{},{lastPersistedBlockNumber:t.lastPersistedBlockNumber});default:return e}},E=Object(s.c)({user:m,system:h}),g=[i.a];var f=Object(s.d)(E,s.a.apply(void 0,g)),C=a(18),b=a(19),v=a(22),S=a(21),y=a(128),k=a(236),N=a(4),O=a(238),w=a(208),T=a(131),j=a(132),P=a(211),B=a(73),x=a.n(B),R=Object(w.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:1e3},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function D(e){var t=R();return r.a.createElement(T.a,{className:t.root},r.a.createElement(j.a,{className:t.input,placeholder:"Search by Tx Hash or Block Number",onChange:e.handleSearchTextChange,onKeyPress:function(t){"Enter"===t.key&&e.handleSearch()},value:e.searchText}),r.a.createElement(P.a,{type:"submit",className:t.iconButton,"aria-label":"search",onClick:e.handleSearch},r.a.createElement(x.a,null)))}var M=a(228),A=a(229),I=a(88),z=a(121),L=a.n(z),_=a(120),H=a.n(_),W=a(214),G=a(217),U=a(213),F=a(215),J=a(216),K=a(237),V=a(218),q=a(117),$=a.n(q),Q=a(118),X=a.n(Q),Y=a(119),Z=a.n(Y),ee=a(212),te=a(246),ae=a(80),ne=a.n(ae);function re(e){return r.a.createElement(ne.a,{variant:"popover",popupId:"demo-popup-popover"},(function(t){return r.a.createElement("div",{style:{display:"inline-flex"}},r.a.createElement(ee.a,Object.assign({variant:"contained",size:"small",color:"primary"},Object(ae.bindTrigger)(t)),e.name),r.a.createElement(te.a,Object.assign({},Object(ae.bindPopover)(t),{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}}),r.a.createElement(K.a,{p:2},r.a.createElement(I.a,null,e.content))))}))}var le=Object(N.a)((function(e){return{head:{backgroundColor:e.palette.primary.light,color:e.palette.common.white},body:{fontSize:14}}}))(U.a);var ce=function(e){return r.a.createElement(W.a,{stickyHeader:!0},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(le,{width:"5%"},"#"),r.a.createElement(le,{width:"60%"},"Contract Address"),r.a.createElement(le,{width:"20%"},"Contract Details"),r.a.createElement(le,{width:"15%"},"Contract Operations"))),r.a.createElement(G.a,null,e.contracts.map((function(t,a){return r.a.createElement(J.a,{key:t.address},r.a.createElement(U.a,null,a+1),r.a.createElement(U.a,null,r.a.createElement(V.a,{component:"button",variant:"body2",onClick:e.handleNavigateContract,value:t.address},t.address)),r.a.createElement(U.a,null,r.a.createElement(K.a,{component:"span",m:1},r.a.createElement(re,{name:"Show ABI",content:t.abi})),r.a.createElement(K.a,{component:"span",m:1},r.a.createElement(re,{name:"Show Template",content:t.template}))),r.a.createElement(U.a,null,r.a.createElement(P.a,{onClick:function(){e.handleContractUpdate(t.address)}},r.a.createElement($.a,{color:"primary"})),r.a.createElement(P.a,{onClick:function(){e.handleContractDelete(t.address)}},r.a.createElement(X.a,{color:"primary"})),r.a.createElement(P.a,{onClick:function(){e.handleNavigateReport(t.address)}},r.a.createElement(Z.a,{color:"primary"}))))}))))},oe=a(244),se=a(243),ie=a(227),ue=a(221),de=a(222),me=a(220);var pe=function(e){var t=function(t){"Enter"===t.key&&e.handleSetRPCEndpoint()};return r.a.createElement(se.a,{open:e.isOpen,onClose:e.handleCloseSetting,"aria-labelledby":"form-dialog-title",maximumwidth:"400",fullWidth:!0},r.a.createElement(me.a,{id:"form-dialog-title"},"Register new contract"),r.a.createElement(ue.a,null,r.a.createElement(de.a,null,"Register a new contract for reporting."),r.a.createElement("br",null),r.a.createElement(oe.a,{label:"Contract Address",value:e.newContract.address,onChange:e.handleNewContractAddressChange,onKeyPress:t,margin:"dense",fullWidth:!0,autoFocus:!0}),r.a.createElement(oe.a,{label:"Contract ABI",value:e.newContract.abi,onChange:e.handleNewContractABIChange,onKeyPress:t,margin:"dense",fullWidth:!0,multiline:!0}),r.a.createElement(oe.a,{label:"Contract Storage Template",value:e.newContract.template,onChange:e.handleNewContractTemplateChange,onKeyPress:t,margin:"dense",fullWidth:!0,multiline:!0})),e.errorMessage&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(O.a,{severity:"error"},e.errorMessage)),r.a.createElement(ie.a,null,r.a.createElement(ee.a,{onClick:e.handleCloseSetting,color:"primary"},"Cancel"),r.a.createElement(ee.a,{onClick:e.handleRegisterNewContract,color:"primary"},"Register")))},he=function(e){return{type:"SELECT_CONTRACT",selectedContract:e}},Ee=function(e){return{type:"CHANGE_PAGE",page:e}},ge=a(15),fe=a.n(ge),Ce=0,be=function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getABI",params:[t],id:Ce++})},ve=function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getStorageABI",params:[t],id:Ce++})},Se=function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getTransaction",params:[t],id:Ce++})},ye=function(e){return function(e){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getLastPersistedBlockNumber",params:[],id:Ce++})}(e).then((function(e){return e.data.result}))},ke=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_addAddress",params:[t],id:Ce++})}(e,t.address).then((function(a){if(a.data.error)throw a.data.error.message;return function(e,t,a){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_addABI",params:[t,a],id:Ce++})}(e,t.address,t.abi).then((function(a){if(a.data.error)throw a.data.error.message;return function(e,t,a){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_addStorageABI",params:[t,a],id:Ce++})}(e,t.address,t.template)}))}))},Ne=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_deleteAddress",params:[t],id:Ce++})}(e,t)},Oe=function(e){return function(e){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getAddresses",params:[],id:Ce++})}(e).then((function(t){return Re(e,t.data.result)}))},we=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getContractCreationTransaction",params:[t],id:Ce++})}(e,t).then((function(t){return Me(e,t.data.result)}))},Te=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getAllTransactionsToAddress",params:[t,{pageSize:1e3}],id:Ce++})}(e,t).then((function(t){return De(e,t.data.result)}))},je=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getAllTransactionsInternalToAddress",params:[t,{pageSize:1e3}],id:Ce++})}(e,t).then((function(t){return De(e,t.data.result)}))},Pe=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getAllEventsFromAddress",params:[t,{pageSize:1e3}],id:Ce++})}(e,t).then((function(e){return e.data.result.map((function(e){return{topic:e.rawEvent.topics[0],txHash:e.rawEvent.transactionHash,address:e.rawEvent.address,blockNumber:e.rawEvent.blockNumber,parsedEvent:{eventSig:e.eventSig,parsedData:e.parsedData}}}))}))},Be=function(e,t,a,n){return function(e,t,a,n){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getStorageHistory",params:[t,parseInt(a),parseInt(n)],id:Ce++})}(e,t,a,n).then((function(e){return Ae(e.data.result.historicState)}))},xe=function(e,t){return function(e,t){return fe.a.post(e,{jsonrpc:"2.0",method:"reporting_getBlock",params:[t],id:Ce++})}(e,t).then((function(e){if(e.data.error)throw e.data.error.message;return e.data.result}))},Re=function(e,t){return new Promise((function(a,n){0===t.length&&a([]);for(var r=[],l=t.length,c=t.length,o=0;o<t.length;o++)r.push({address:t[o]}),function(o){be(e,t[o]).then((function(e){r[o].abi=e.data.result,0===--l&&0===c&&a(r)})).catch(n)}(o),function(o){ve(e,t[o]).then((function(e){r[o].template=e.data.result,c--,0===l&&0===c&&a(r)})).catch(n)}(o)}))},De=function(e,t){return t.length>0?new Promise((function(a,n){for(var r=[],l=t.length,c=0;c<t.length;c++)r.push({hash:t[c]}),function(c){Me(e,t[c]).then((function(e){r[c]=e,0===--l&&a(r)})).catch(n)}(c)})):[]},Me=function(e,t){return Se(e,t).then((function(e){return{hash:e.data.result.rawTransaction.hash,from:e.data.result.rawTransaction.from,to:e.data.result.rawTransaction.to,blockNumber:e.data.result.rawTransaction.blockNumber,parsedTransaction:{txSig:e.data.result.txSig,func4Bytes:e.data.result.func4Bytes,parsedData:e.data.result.parsedData},parsedEvents:e.data.result.parsedEvents,internalCalls:e.data.result.rawTransaction.internalCalls}}))},Ae=function(e){if(0===e.length)return[];for(var t=[e[0]],a=e[0],n=1;n<e.length;n++){var r=Ie(a,e[n]);r&&(t.unshift(r),a=r)}return t},Ie=function(e,t){for(var a=t,n=!0,r=0;r<e.historicStorage.length;r++)e.historicStorage[r].value!==t.historicStorage[r].value&&(a.historicStorage[r].changed=!0,n=!1);return!n&&a},ze=function(e){Object(v.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).getAllRegisteredContract=function(){Oe(n.props.rpcEndpoint).then((function(e){n.props.dispatch(function(e){return{type:"GET_CONTRACTS",contracts:e}}(e))}))},n.handleOpenSetting=function(){n.setState({formIsOpen:!0})},n.handleCloseSetting=function(){n.setState({formIsOpen:!1})},n.handleNewContractAddressChange=function(e){n.setState({newContract:Object(u.a)(Object(u.a)({},n.state.newContract),{},{address:e.target.value}),errorMessage:""})},n.handleNewContractABIChange=function(e){n.setState({newContract:Object(u.a)(Object(u.a)({},n.state.newContract),{},{abi:e.target.value}),errorMessage:""})},n.handleNewContractTemplateChange=function(e){n.setState({newContract:Object(u.a)(Object(u.a)({},n.state.newContract),{},{template:e.target.value}),errorMessage:""})},n.handleNavigateContract=function(e){n.props.dispatch(he(e.target.value)),n.props.dispatch(Ee("Contract"))},n.handleNavigateReport=function(e){n.props.dispatch(he(e)),n.props.dispatch(Ee("Report"))},n.handleRegisterNewContract=function(){""!==n.state.newContract.address?""!==n.state.newContract.abi?""!==n.state.newContract.template?ke(n.props.rpcEndpoint,n.state.newContract,n.state.newContract.template).then((function(e){if(e.data.error)throw e.data.error.message;n.setState({formIsOpen:!1}),setTimeout((function(){n.getAllRegisteredContract()}),500)})).catch((function(e){n.setState({errorMessage:e.toString()})})):n.setState({errorMessage:"template must not be empty"}):n.setState({errorMessage:"abi must not be empty"}):n.setState({errorMessage:"address must not be empty"})},n.handleContractUpdate=function(){},n.handleContractDelete=function(e){Ne(n.props.rpcEndpoint,e).then((function(){setTimeout((function(){n.getAllRegisteredContract()}),500)}))},n.state={formIsOpen:!1,newContract:{address:"",abi:"",template:"",errorMessage:""}},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getAllRegisteredContract()}},{key:"render",value:function(){return r.a.createElement(M.a,{className:this.props.classes.card},r.a.createElement(A.a,null,r.a.createElement("br",null),r.a.createElement(I.a,{variant:"h6",align:"center"},"Registered Contract List\xa0",r.a.createElement(P.a,{onClick:this.getAllRegisteredContract},r.a.createElement(H.a,null))),r.a.createElement("br",null),0===this.props.contracts.length&&r.a.createElement("h1",{align:"center"},"< No Records Found >"),0!==this.props.contracts.length&&r.a.createElement(ce,{contracts:this.props.contracts,handleContractUpdate:this.handleContractUpdate,handleContractDelete:this.handleContractDelete,handleNavigateContract:this.handleNavigateContract,handleNavigateReport:this.handleNavigateReport}),r.a.createElement("br",null),r.a.createElement(P.a,{color:"primary",variant:"h4",onClick:this.handleOpenSetting},r.a.createElement(L.a,null)),r.a.createElement(pe,{isOpen:this.state.formIsOpen,handleCloseSetting:this.handleCloseSetting,handleNewContractAddressChange:this.handleNewContractAddressChange,handleNewContractABIChange:this.handleNewContractABIChange,handleNewContractTemplateChange:this.handleNewContractTemplateChange,handleRegisterNewContract:this.handleRegisterNewContract,newContract:this.state.newContract,errorMessage:this.state.errorMessage})))}}]),a}(r.a.Component),Le=Object(o.b)((function(e){return{rpcEndpoint:e.system.rpcEndpoint,contracts:e.user.contracts}}))(Object(N.a)({card:{minWidth:275,marginTop:5,marginBottom:5}})(ze)),_e=a(226),He=a(190),We=a(189),Ge=a(122),Ue=a.n(Ge),Fe=Object(w.a)((function(e){return{root:{padding:"2px 4px",marginTop:10,marginBottom:10,alignItems:"center",width:1200}}}));function Je(e){var t=Fe();return r.a.createElement(T.a,{className:t.root,align:"center"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:e.handleReturn},r.a.createElement(Ue.a,null),"\xa0 Return")),r.a.createElement("br",null),r.a.createElement(_e.a,null,Object.keys(e.displayData).map((function(t,a){return r.a.createElement(He.a,{key:a},r.a.createElement(I.a,{variant:"caption"},t+":","\xa0"),JSON.stringify(e.displayData[t]).length>100?r.a.createElement(We.a,{readOnly:!0,rowsMax:4,"aria-label":"maximum height",style:{fontSize:"16px",width:"1000px"},defaultValue:JSON.stringify(e.displayData[t])}):r.a.createElement(I.a,null,JSON.stringify(e.displayData[t])))}))))}var Ke=function(e){Object(v.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleSearchTextChange=function(e){n.setState({searchText:e.target.value,errorMessage:""})},n.handleSearch=function(){if(/^[1-9][0-9]*$/g.test(n.state.searchText)){var e=parseInt(n.state.searchText);return n.props.lastPersistedBlockNumber<e?void n.setState({errorMessage:"block number exceed the last persisted"}):void xe(n.props.rpcEndpoint,e).then((function(e){n.setState({displayData:e,errorMessage:""})})).catch((function(e){n.setState({errorMessage:e.toString()})}))}var t,a;/^0x[0-9a-fA-F]{64}$/g.test(n.state.searchText)?(t=n.props.rpcEndpoint,a=n.state.searchText,Se(t,a).then((function(e){if(e.data.error)throw e.data.error.message;return Object(u.a)({txSig:e.data.result.txSig,func4Bytes:e.data.result.func4Bytes,parsedData:e.data.result.parsedData,parsedEvents:e.data.result.parsedEvents},e.data.result.rawTransaction)}))).then((function(e){n.setState({displayData:e,errorMessage:""})})).catch((function(e){n.setState({errorMessage:e.toString()})})):n.setState({errorMessage:"invalid search text"})},n.handleReturn=function(){n.setState({displayData:""})},n.state={searchText:"",displayData:"",errorMessage:""},n}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root,align:"center"},r.a.createElement("br",null),r.a.createElement(D,{searchText:this.state.searchText,handleSearchTextChange:this.handleSearchTextChange,handleSearch:this.handleSearch}),this.state.errorMessage&&r.a.createElement(O.a,{severity:"error",className:this.props.classes.alert},this.state.errorMessage),""===this.state.displayData&&r.a.createElement(Le,null),""!==this.state.displayData&&r.a.createElement(Je,{displayData:this.state.displayData,handleReturn:this.handleReturn}))}}]),a}(r.a.Component),Ve=Object(o.b)((function(e){return{rpcEndpoint:e.system.rpcEndpoint,lastPersistedBlockNumber:e.system.lastPersistedBlockNumber}}))(Object(N.a)({root:{marginTop:10,marginBottom:10},alert:{marginTop:5,width:1e3}})(Ke)),qe=a(231),$e=a(232),Qe=a(126),Xe=a.n(Qe),Ye=a(124),Ze=a.n(Ye),et=a(125),tt=a.n(et),at=a(219),nt=a(89);var rt=function(e){return r.a.createElement(se.a,{open:e.isOpen,onClose:e.handleCloseSetting,"aria-labelledby":"form-dialog-title",maximumwidth:"400",fullWidth:!0},r.a.createElement(me.a,{id:"form-dialog-title"},"Connection (",e.rpcEndpoint,")"),r.a.createElement(ue.a,null,r.a.createElement(de.a,null,"Set the RPCEndpoint for Reporting Engine."),r.a.createElement("br",null),r.a.createElement(oe.a,{label:"RPC Endpoint",value:e.newRPCEndpoint,onChange:e.handleRPCEndpointChange,onKeyPress:function(t){"Enter"===t.key&&e.handleSetRPCEndpoint()},margin:"dense",fullWidth:!0,autoFocus:!0})),r.a.createElement(ie.a,null,r.a.createElement(ee.a,{onClick:e.handleCloseSetting,color:"primary"},"Cancel"),r.a.createElement(ee.a,{onClick:e.handleSetRPCEndpoint,color:"primary"},"Update")))},lt=a(50),ct=a(129),ot=a(230),st=a(123),it=a.n(st);var ut=function(e){var t=r.a.useState(null),a=Object(lt.a)(t,2),n=a[0],l=a[1],c=function(e){l(null)};return r.a.createElement("div",null,r.a.createElement(P.a,{variant:"h4",onClick:function(e){l(e.currentTarget)}},r.a.createElement(it.a,{color:"action"})),r.a.createElement(ct.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:c},r.a.createElement(ot.a,{value:"Home",onClick:function(t){e.handleMenuClick("Home"),c()}},"Home"),r.a.createElement(ot.a,{value:"Contract",onClick:function(t){e.handleMenuClick("Contract"),c()}},"Contract"),r.a.createElement(ot.a,{value:"Report",onClick:function(t){e.handleMenuClick("Report"),c()}},"Report")))},dt=function(e){return{type:"UPDATE_BLOCK_NUMBER",lastPersistedBlockNumber:e}},mt=function(e){Object(v.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).blockNumberBlinkEffect=function(){a.setState({blockNumberAppear:!1}),setTimeout((function(){a.setState({blockNumberAppear:!0})}),500)},a.connectReporting=function(){ye(a.props.rpcEndpoint).then((function(e){a.props.lastPersistedBlockNumber!==e&&(a.blockNumberBlinkEffect(),a.props.isConnected||a.props.dispatch({type:"CONNECT"}),a.props.dispatch(dt(e)))})).catch((function(e){a.props.isConnected&&(a.blockNumberBlinkEffect(),a.props.dispatch({type:"DISCONNECT"}),a.props.dispatch(dt("")))}))},a.toHomePage=function(){a.handleMenuClick("Home")},a.handleMenuClick=function(e){a.props.dispatch(Ee(e))},a.handleOpenSetting=function(){a.setState({formIsOpen:!0})},a.handleCloseSetting=function(){a.setState({formIsOpen:!1})},a.handleRPCEndpointChange=function(e){a.setState({newRPCEndpoint:e.target.value})},a.handleSetRPCEndpoint=function(){a.props.dispatch({type:"UPDATE_ENDPOINT",rpcEndpoint:a.state.newRPCEndpoint}),a.connectReporting(),a.setState({formIsOpen:!1})},a.state={formIsOpen:!1,newRPCEndpoint:"",blockNumberAppear:!0},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.connectReporting()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement(qe.a,{position:"static"},r.a.createElement($e.a,null,r.a.createElement(nt.a,{onClick:this.toHomePage},r.a.createElement(I.a,{variant:"h6",color:"inherit"},r.a.createElement("img",{src:a(186),width:"40",height:"20",alt:""}),"\xa0 Quorum Reporting \xa0")),r.a.createElement("span",{className:this.props.classes.grow}),r.a.createElement(I.a,{variant:"h4"},this.props.isConnected?r.a.createElement(Ze.a,{color:"inherit"}):r.a.createElement(tt.a,{color:"error"})),r.a.createElement(at.a,{in:this.state.blockNumberAppear,timeout:1e3},r.a.createElement(I.a,{variant:"h5",color:"inherit"},"\xa0",this.props.isConnected?"# "+this.props.lastPersistedBlockNumber:"# N/A","\xa0")),r.a.createElement(ut,{handleMenuClick:this.handleMenuClick}),r.a.createElement(P.a,{variant:"h4",onClick:this.handleOpenSetting},r.a.createElement(Xe.a,{color:"action"})),r.a.createElement(rt,{rpcEndpoint:this.props.rpcEndpoint,isOpen:this.state.formIsOpen,handleCloseSetting:this.handleCloseSetting,handleRPCEndpointChange:this.handleRPCEndpointChange,handleSetRPCEndpoint:this.handleSetRPCEndpoint,newRPCEndpoint:this.state.newRPCEndpoint})))}}]),n}(r.a.Component),pt=Object(o.b)((function(e){return{rpcEndpoint:e.system.rpcEndpoint,isConnected:e.system.isConnected,lastPersistedBlockNumber:e.system.lastPersistedBlockNumber}}))(Object(N.a)({grow:{flexGrow:1}})(mt)),ht=a(245),Et=a(225),gt=a(239),ft=Object(w.a)((function(e){return{formControl:{margin:e.spacing(1)}}}));var Ct=function(e){var t=ft();return r.a.createElement("div",null,r.a.createElement(Et.a,{variant:"filled",size:"small",className:t.formControl,style:{minWidth:400}},r.a.createElement(ht.a,null,"Contract"),r.a.createElement(gt.a,{value:e.selectedContract,onChange:e.handleSelectedContractChange},e.contracts.map((function(e){return r.a.createElement(ot.a,{key:e.address,value:e.address},e.address)})))),r.a.createElement(Et.a,{variant:"filled",size:"small",className:t.formControl,style:{minWidth:400}},r.a.createElement(ht.a,null,"Actions"),r.a.createElement(gt.a,{value:e.selectedAction,onChange:e.handleSelectedActionChange},e.actions.map((function(e){return r.a.createElement(ot.a,{key:e,value:e},e)})))))},bt=a(234),vt=a(241),St=a(235),yt=a(78),kt=a.n(yt),Nt=a(79),Ot=a.n(Nt),wt=a(233),Tt=Object(w.a)({root:{"& > *":{borderBottom:"unset"}}});var jt=function(e){var t=r.a.useState(!1),a=Object(lt.a)(t,2),n=a[0],l=a[1],c=Tt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:c.root},r.a.createElement(U.a,null,r.a.createElement(P.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!n)}},n?r.a.createElement(kt.a,null):r.a.createElement(Ot.a,null))),r.a.createElement(U.a,{component:"th",scope:"row"},e.txHash),r.a.createElement(U.a,{component:"th",scope:"row"},e.from),r.a.createElement(U.a,{component:"th",scope:"row"},e.to),r.a.createElement(U.a,{component:"th",scope:"row"},e.blockNumber)),r.a.createElement(J.a,null,r.a.createElement(U.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},r.a.createElement(wt.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(K.a,{margin:1,maxWidth:"800px"},r.a.createElement(I.a,null,"Parsed Transaction"),r.a.createElement(W.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,null,r.a.createElement("strong",null,"Transaction Signature")),r.a.createElement(U.a,null,r.a.createElement("strong",null,"Function 4 Bytes")),r.a.createElement(U.a,null,r.a.createElement("strong",null,"Parsed Data")))),r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,{component:"th",scope:"row"},e.parsedTransaction.txSig),r.a.createElement(U.a,null,e.parsedTransaction.func4Bytes),r.a.createElement(U.a,null,JSON.stringify(e.parsedTransaction.parsedData))))),r.a.createElement("br",null),e.parsedEvents&&e.parsedEvents.length>0&&r.a.createElement("div",null,r.a.createElement(I.a,null,"Parsed Events"),r.a.createElement(W.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,null,r.a.createElement("strong",null,"Event Signature")),r.a.createElement(U.a,null,r.a.createElement("strong",null,"Parsed Data")))),r.a.createElement(G.a,null,e.parsedEvents.map((function(e,t){return r.a.createElement(J.a,{key:t},r.a.createElement(U.a,null,e.eventSig),r.a.createElement(U.a,null,JSON.stringify(e.parsedData)))}))))),r.a.createElement("br",null),e.internalCalls&&e.internalCalls.length>0&&r.a.createElement("div",null,r.a.createElement(I.a,null,"Internal Calls"),r.a.createElement(W.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,null,r.a.createElement("strong",null,"From")),r.a.createElement(U.a,null,r.a.createElement("strong",null,"To")))),r.a.createElement(G.a,null,e.internalCalls.map((function(e,t){return r.a.createElement(J.a,{key:t},r.a.createElement(U.a,null,e.from),r.a.createElement(U.a,null,e.to))}))))))))))};var Pt=function(e){return r.a.createElement("div",null,!e.isLoading&&r.a.createElement("div",null,r.a.createElement(bt.a,{component:T.a},r.a.createElement(W.a,{size:"small","aria-label":"collapsible table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,{width:"20%"}),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Transaction Hash")),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"From")),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"To")),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Block Number")))),r.a.createElement(G.a,null,e.displayData.slice(e.currentPage*e.pageSize,e.currentPage*e.pageSize+e.pageSize).map((function(e,t){return r.a.createElement(jt,{key:t,txHash:e.hash,from:e.from,to:e.to,blockNumber:e.blockNumber,parsedTransaction:e.parsedTransaction,parsedEvents:e.parsedEvents,internalCalls:e.internalCalls})}))))),r.a.createElement(vt.a,{component:"div",rowsPerPageOptions:[],count:e.totalTxs,rowsPerPage:e.pageSize,page:e.currentPage,onChangePage:e.handleChangePage})),e.isLoading&&r.a.createElement("div",{align:"center"},r.a.createElement("br",null),r.a.createElement(St.a,null)))},Bt=Object(w.a)({root:{"& > *":{borderBottom:"unset"}}});var xt=function(e){var t=r.a.useState(!1),a=Object(lt.a)(t,2),n=a[0],l=a[1],c=Bt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:c.root},r.a.createElement(U.a,null,r.a.createElement(P.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!n)}},n?r.a.createElement(kt.a,null):r.a.createElement(Ot.a,null))),r.a.createElement(U.a,{component:"th",scope:"row"},e.topic),r.a.createElement(U.a,{component:"th",scope:"row"},e.txHash),r.a.createElement(U.a,{component:"th",scope:"row"},e.address),r.a.createElement(U.a,{component:"th",scope:"row"},e.blockNumber)),r.a.createElement(J.a,null,r.a.createElement(U.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6},r.a.createElement(wt.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(K.a,{margin:1,maxWidth:"800px"},r.a.createElement(I.a,null,"Parsed Event"),r.a.createElement(W.a,{size:"small","aria-label":"a dense table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,null,r.a.createElement("strong",null,"Event Signature")),r.a.createElement(U.a,null,r.a.createElement("strong",null,"Parsed Data")))),r.a.createElement(G.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,{component:"th",scope:"row"},e.parsedEvent.eventSig),r.a.createElement(U.a,null,JSON.stringify(e.parsedEvent.parsedData))))))))))};var Rt=function(e){return r.a.createElement("div",null,!e.isLoading&&r.a.createElement("div",null,r.a.createElement(bt.a,{component:T.a},r.a.createElement(W.a,{size:"small","aria-label":"collapsible table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,{width:"20%"}),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Event Topic")),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Transaction Hash")),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Address")),r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Block Number")))),r.a.createElement(G.a,null,e.displayData.slice(e.currentPage*e.pageSize,e.currentPage*e.pageSize+e.pageSize).map((function(e,t){return r.a.createElement(xt,{key:t,topic:e.topic,txHash:e.txHash,address:e.address,blockNumber:e.blockNumber,parsedEvent:e.parsedEvent})}))))),r.a.createElement(vt.a,{component:"div",rowsPerPageOptions:[],count:e.totalEvents,rowsPerPage:e.pageSize,page:e.currentPage,onChangePage:e.handleChangePage})),e.isLoading&&r.a.createElement("div",{align:"center"},r.a.createElement("br",null),r.a.createElement(St.a,null)))},Dt=["Get Contract Creation Tx","Get To Txs","Get Internal To Txs","Get Events"],Mt=function(e){Object(v.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleSelectedContractChange=function(e){n.setState({errorMessage:""}),n.props.dispatch(he(e.target.value))},n.handleSelectedActionChange=function(e){n.setState({errorMessage:"",selectedAction:e.target.value})},n.handleChangePage=function(e,t){n.setState({currentPage:t})},n.handleSearch=function(){if(n.setState({displayTxResult:!1,displayEventResult:!1}),""!==n.state.selectedAction)if(""!==n.props.selectedContract)if(n.setState({isLoading:!0,errorMessage:""}),"Get Events"===n.state.selectedAction)Pe(n.props.rpcEndpoint,n.props.selectedContract).then((function(e){n.setState({displayData:e,isLoading:!1})})).catch((function(e){n.setState({displayData:[],isLoading:!1,errorMessage:e.toString()})})),n.setState({displayEventResult:!0});else{switch(n.state.selectedAction){case"Get Contract Creation Tx":we(n.props.rpcEndpoint,n.props.selectedContract).then((function(e){n.setState({displayData:[e],isLoading:!1})})).catch((function(e){console.log(e),n.setState({displayData:[],isLoading:!1,errorMessage:e.toString()})}));break;case"Get To Txs":Te(n.props.rpcEndpoint,n.props.selectedContract).then((function(e){n.setState({displayData:e,isLoading:!1})})).catch((function(e){n.setState({displayData:[],isLoading:!1,errorMessage:e.toString()})}));break;case"Get Internal To Txs":je(n.props.rpcEndpoint,n.props.selectedContract).then((function(e){n.setState({displayData:e,isLoading:!1})})).catch((function(e){n.setState({displayData:[],isLoading:!1,errorMessage:e.toString()})}));break;default:n.setState({displayData:[],isLoading:!1,errorMessage:"unknown action"})}n.setState({displayTxResult:!0})}else n.setState({errorMessage:"no contract selected"});else n.setState({errorMessage:"no action selected"})},n.state={selectedAction:"",displayTxResult:!1,displayEventResult:!1,isLoading:!0,displayData:[],currentPage:0,errorMessage:""},n}return Object(b.a)(a,[{key:"componentWillUnmount",value:function(){this.props.dispatch(he(""))}},{key:"render",value:function(){return r.a.createElement(M.a,{className:this.props.classes.card},r.a.createElement(A.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(I.a,{variant:"h6"},"Select Contract"),r.a.createElement("br",null),r.a.createElement(Ct,{selectedContract:this.props.selectedContract,contracts:this.props.contracts,handleSelectedContractChange:this.handleSelectedContractChange,actions:Dt,selectedAction:this.state.selectedAction,handleSelectedActionChange:this.handleSelectedActionChange}),r.a.createElement("br",null),r.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:this.handleSearch},r.a.createElement(x.a,null),"\xa0 Search")),r.a.createElement("br",null),this.state.errorMessage&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(O.a,{severity:"error"},this.state.errorMessage)),this.state.displayTxResult&&r.a.createElement(Pt,{displayData:this.state.displayData,isLoading:this.state.isLoading,currentPage:this.state.currentPage,pageSize:10,totalTxs:this.state.displayData.length,handleChangePage:this.handleChangePage}),this.state.displayEventResult&&r.a.createElement(Rt,{displayData:this.state.displayData,isLoading:this.state.isLoading,currentPage:this.state.currentPage,pageSize:10,totalEvents:this.state.displayData.length,handleChangePage:this.handleChangePage})))}}]),a}(r.a.Component),At=Object(o.b)((function(e){return{rpcEndpoint:e.system.rpcEndpoint,contracts:e.user.contracts,selectedContract:e.user.selectedContract}}))(Object(N.a)({card:{minWidth:275,marginTop:5,marginBottom:5}})(Mt)),It=a(127),zt=a.n(It),Lt=Object(w.a)((function(e){return{formControl:{margin:e.spacing(1)}}}));var _t=function(e){var t=Lt();return r.a.createElement("div",{align:"center"},r.a.createElement(Et.a,{variant:"filled",size:"small",className:t.formControl,style:{minWidth:400}},r.a.createElement(ht.a,null,"Contract"),r.a.createElement(gt.a,{value:e.selectedContract,onChange:e.handleSelectedContractChange},e.contracts.map((function(e){return r.a.createElement(ot.a,{key:e.address,value:e.address},e.address)})))),r.a.createElement(Et.a,{className:t.formControl},r.a.createElement(oe.a,{label:"Start Block Number",value:e.startBlockNumber,onChange:e.handleStartBlockChange,variant:"filled",size:"small"})),r.a.createElement(Et.a,{className:t.formControl},r.a.createElement(oe.a,{label:"End Block Number",value:e.endBlockNumber,onChange:e.handleEndBlockChange,variant:"filled",size:"small"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:e.handleReport},r.a.createElement(zt.a,null),"\xa0 Generate Report"))};var Ht=function(e){return r.a.createElement("div",null,r.a.createElement(bt.a,{component:T.a},r.a.createElement(W.a,{size:"small","aria-label":"collapsible table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,{width:"10%"},r.a.createElement("strong",null,"Block Number")),r.a.createElement(U.a,{width:"90%"},r.a.createElement("strong",null,"State")))),!e.isLoading&&r.a.createElement(G.a,null,e.parsedStorage.map((function(e,t){return r.a.createElement(J.a,{key:t},r.a.createElement(U.a,null,e.blockNumber),r.a.createElement(U.a,null,r.a.createElement(W.a,{size:"small","aria-label":"collapsible table"},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(U.a,{width:"20%"},r.a.createElement("strong",null,"Name")),r.a.createElement(U.a,{width:"30%"},r.a.createElement("strong",null,"Type")),r.a.createElement(U.a,{width:"50%"},r.a.createElement("strong",null,"Value")))),r.a.createElement(G.a,null,e.historicStorage.map((function(e,t){return e.changed?r.a.createElement(J.a,{key:t,style:{backgroundColor:"#88aaff"}},r.a.createElement(U.a,null,r.a.createElement("div",null,e.name)),r.a.createElement(U.a,null,r.a.createElement("div",null,e.type)),r.a.createElement(U.a,null,r.a.createElement("div",{style:{maxWidth:"500px"}},"string"===e.type?r.a.createElement(We.a,{readOnly:!0,rowsMax:4,rowsMin:2,"aria-label":"maximum height",style:{fontSize:"15px",width:"500px"},defaultValue:'"'+e.value+'"'}):e.value.toString()))):r.a.createElement(J.a,{key:t},r.a.createElement(U.a,null,r.a.createElement("div",null,e.name)),r.a.createElement(U.a,null,r.a.createElement("div",null,e.type)),r.a.createElement(U.a,null,r.a.createElement("div",{style:{maxWidth:"400px"}},"string"===e.type?r.a.createElement(We.a,{readOnly:!0,rowsMax:4,rowsMin:2,"aria-label":"maximum height",style:{fontSize:"15px",width:"500px"},defaultValue:'"'+e.value+'"'}):e.value.toString())))}))))))}))))),e.isLoading&&r.a.createElement("div",{align:"center"},r.a.createElement("br",null),r.a.createElement(St.a,null)))},Wt=function(e){Object(v.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleSelectedContractChange=function(e){n.setState({errorMessage:""}),n.props.dispatch(he(e.target.value))},n.handleStartBlockChange=function(e){n.setState({startBlockNumber:e.target.value,errorMessage:""})},n.handleEndBlockChange=function(e){n.setState({endBlockNumber:e.target.value,errorMessage:""})},n.handleReport=function(){""!==n.props.selectedContract?""===n.state.startBlockNumber||isNaN(n.state.startBlockNumber)?n.setState({startBlockNumber:"",errorMessage:"invalid start block number"}):""===n.state.endBlockNumber||isNaN(n.state.endBlockNumber)?n.setState({endBlockNumber:"",errorMessage:"invalid end block number"}):(n.setState({reportData:[],displayReport:!0,isLoading:!0,errorMessage:""}),Be(n.props.rpcEndpoint,n.props.selectedContract,n.state.startBlockNumber,n.state.endBlockNumber).then((function(e){n.setState({reportData:e,isLoading:!1})})).catch((function(e){n.setState({isLoading:!1,errorMessage:e.toString()})}))):n.setState({errorMessage:"no contract selected"})},n.state={startBlockNumber:"",endBlockNumber:"",reportData:[],isLoading:!1,displayReport:!1,errorMessage:""},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.setState({startBlockNumber:1,endBlockNumber:this.props.lastPersistedBlockNumber})}},{key:"componentWillUnmount",value:function(){this.props.dispatch(he(""))}},{key:"render",value:function(){return r.a.createElement(M.a,{className:this.props.classes.card},r.a.createElement(A.a,null,r.a.createElement(I.a,{variant:"h6",align:"center"},"Report"),r.a.createElement("br",null),0===this.props.contracts.length&&r.a.createElement("h1",{align:"center"},"< No Records Found >"),0!==this.props.contracts.length&&r.a.createElement(_t,{selectedContract:this.props.selectedContract,startBlockNumber:this.state.startBlockNumber,endBlockNumber:this.state.endBlockNumber,contracts:this.props.contracts,handleSelectedContractChange:this.handleSelectedContractChange,handleStartBlockChange:this.handleStartBlockChange,handleEndBlockChange:this.handleEndBlockChange,handleReport:this.handleReport}),r.a.createElement("br",null),this.state.errorMessage&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(O.a,{severity:"error"},this.state.errorMessage)),this.state.displayReport&&r.a.createElement(Ht,{parsedStorage:this.state.reportData,isLoading:this.state.isLoading})))}}]),a}(r.a.Component),Gt=Object(o.b)((function(e){return{rpcEndpoint:e.system.rpcEndpoint,contracts:e.user.contracts,selectedContract:e.user.selectedContract,lastPersistedBlockNumber:e.system.lastPersistedBlockNumber}}))(Object(N.a)({card:{minWidth:275,marginTop:5,marginBottom:5}})(Wt)),Ut=function(e){Object(v.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).renderPageContent=function(){switch(e.props.page){case"Home":return r.a.createElement(Ve,null);case"Contract":return r.a.createElement(At,null);case"Report":return r.a.createElement(Gt,null);default:return r.a.createElement(Ve,null)}},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(pt,null),this.renderPageContent())}}]),a}(r.a.Component),Ft=Object(o.b)((function(e){return{page:e.user.page}}))(Ut),Jt=Object(y.a)({}),Kt=function(e){Object(v.a)(a,e);var t=Object(S.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{theme:Jt},r.a.createElement(Ft,null))}}]),a}(r.a.Component);c.a.render(r.a.createElement(o.a,{store:f},r.a.createElement(Kt,null)),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.084913c0.chunk.js.map