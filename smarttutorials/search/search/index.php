<!DOCTYPE HTML>
<html>
<head>
<title>jQGrid PHP inline Editing With Search</title>
<link rel='stylesheet' href='css/jquery-ui-custom.css'/>
<link rel='stylesheet' href='css/ui.jqgrid.css'/>


<script src='js/jquery-1.9.0.min.js'></script>
<script src='js/grid.locale-en.js'></script>
<script src='js/jquery.jqGrid.min.js'></script>


<style>
@font-face{font-family: Lobster;src: url('css/Lobster.otf');}
body{width:100%;padding:0px;margin:0px;}
.wrapper{ margin: 20px 0 0 250px;}
.cvteste{color:#000;font-size:12px;font-family:verdana}
h1{text-align:center;font-family: Lobster;}

.ui-widget{font-family:Arial; color:#fff;}
.ui-jqgrid .ui-jqgrid-hdiv {height:25px;}
.ui-jqgrid tr.jqgrow td{height:40px;}
.ui-jqgrid .ui-jqgrid-pager {height:40px;}
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
  background: #fff;font-weight: bold;color:#000;font-size:13px;border:1px solid #00BB64;}
.ui-widget-content{border: 1px solid #00BB64;}
.txt{width:250px;height:30px;border-radius:5px;border:1px solid #00BB64;}
</style>

</head>
<body>
  <h1>jQGrid PHP inline Editing Example with Search</h1>
  
  <div style='padding:20px 0 0 370px;'> Search : 
  <input type="text" id="item" onkeydown="doSearch(arguments[0]||event)" placeholder='Country' class='txt'/>
  <input type="text" id="empid" onkeydown="doSearch(arguments[0]||event)" placeholder='Last Name' class='txt'/>

  </div>
  
  
  <div class='wrapper'>
	<table id="rowed2"></table> 
	<div id="prowed2"></div>
	
  </div>
	
	<script>
	jQuery("#rowed2").jqGrid({
   	url:'server.php',
	datatype: "json",
   	 colNames:['EMPLOYEE ID','LAST NAME', 'FIRST NAME', 'BIRTH DATE','ADDRESS','CITY','REGION','COUNTRY','ACTIONS'], 
	   colModel:[ 
	   {name:'EmployeeID',index:'EmployeeID', width:30,classes: 'cvteste'}, 
	   {name:'LastName',index:'LastName', width:90,classes: 'cvteste',editable:true}, 
	   {name:'FirstName',index:'FirstName', width:80,classes: 'cvteste',editable:true},
	   {name:'BirthDate',index:'BirthDate', width:150,align:"center",classes: 'cvteste',editable:true},
       {name:'Address',index:'Address', width:140, sortable:false,classes: 'cvteste',editable:true},
	   {name:'City',index:'City', width:80, sortable:false,classes: 'cvteste',editable:true},
	   {name:'Region',index:'Region', width:70, sortable:false,classes: 'cvteste',editable:true},
	   {name:'Country',index:'Country', width:70, sortable:false,classes: 'cvteste',editable:true},
       {name:'act',index:'act', width:130,sortable:false}	   
	   ],
   	rowNum:10,
   	rowList:[10,20,30],
   	pager: '#prowed2',
   	sortname: 'EmployeeID',
    viewrecords: true,
	height:'100%',
    sortorder: "asc",
	gridComplete: function(){
		var ids = jQuery("#rowed2").jqGrid('getDataIDs');
		for(var i=0;i<ids.length;i++){
			var cl = ids[i];
			be = "<input style='height:22px;width:40px;' type='button' value='Edit' onclick=\"jQuery('#rowed2').jqGrid('editRow','"+cl+"');\"  />"; 
			se = "<input style='height:22px;width:40px;' type='button' value='Save' onclick=\"jQuery('#rowed2').jqGrid('saveRow','"+cl+"');\"  />"; 
			ce = "<input style='height:22px;width:50px;' type='button' value='Cancel' onclick=\"jQuery('#rowed2').jqGrid('restoreRow','"+cl+"');\" />"; 
			jQuery("#rowed2").jqGrid('setRowData',ids[i],{act:be+se+ce});
		}	
	},
	editurl: "update.php"
});

var timeoutHnd; 
var flAuto = true;
 function doSearch(ev){ 
 if(!flAuto)return; 
 if(timeoutHnd) clearTimeout(timeoutHnd);
  timeoutHnd = setTimeout(gridReload,500);
 }
function gridReload(){
 var nm_mask = jQuery("#item").val();
 var cd_mask = jQuery("#empid").val();
jQuery("#rowed2").jqGrid('setGridParam',{url:"server.php?nm_mask="+nm_mask+"&cd_mask="+cd_mask,page:1}).trigger("reloadGrid");   
}	   	   
	</script>
</body>
</html>



