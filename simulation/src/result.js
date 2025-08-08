function updateDateTime() {
      const now = new Date();
      const formatted = now.toLocaleString(); // e.g. "5/5/2025, 10:23:45 AM"
      $('#dateTime').text(formatted);
    }



function result(){
//	console.log("result");
//	console.log(resultJson);
	timerMasterJson.alam=$("#counter").text();
//	console.log(timerMasterJson);
	seconds = 0;
	  updateCounter();
	$("#simDemo,#procedure,#counter,#tagDetails").prop("hidden",true);
	$("#report").prop("hidden",false);
//	$("#Header").html("<center><span >Inquiry, Quotation, Comparative statement, Purchase orders</span></center>");
$("#Header").prop("hidden", true);
	
	var enqAdd =resultJson.flg+resultJson.flg3+resultJson.flg2+resultJson.flg4+resultJson.flg5;
//	console.log(enqAdd);
		var enquiey1=parseFloat(enqAdd);
	var quatAdd = resultJson.Qflg1+resultJson.Qpflg1+
	resultJson.Qsvflg1+ resultJson.Qsflg1+resultJson.Qfflg1;
//	console.log(quatAdd);
	
	
	var quat1=parseFloat(quatAdd);
	var piping=parseFloat((5/enqAdd)*100);
	var instr=parseFloat((15/quatAdd)*100);
	var comp = 100;
	var purchase = 100;
	var total = 0;
	
	if (selectedVendor == 1) {
		quotationForm = finalData.Qutationform1;
			total	 =	finalData.vendor1total;
			total = Math.round(total);
	} else if (selectedVendor == 2) {
		quotationForm = finalData.Qutationform2;
		total = finalData.vendor2total;
		total = Math.round(total);
	} else if (selectedVendor == 3) {
		quotationForm = finalData.Qutationform3;
		total = finalData.vendor3total;
		total = Math.round(total);
	}
	
	htm=''
	+'<div class="container-fluid">'
	  +`<div class="row" id="divMis" style="background-color: #2e3539; padding: 10px; display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
    <span style="color: white;font-weight: bold;">Enter Name.:</span>
    <input type="text" id="nameInput" style="color: #000; padding: 5px; max-width: 200px;">
<label id="dateTime" style="color:#fff;"></label>

  </div>
</div>`
	+'<div class="container-fluid">'
//	 +' <div class="row titlePart" id="" ><center><span >Inquiry, Quotation, Comparative statement, Purchase orders</span></center></div>' 
	+' <!-- Title -->'

	+'  <h3 class="text-center heading">Inquiry, Quotation, Comparative statement, Purchase orders</h3>'
	
	+`<div>
	  <label style="background:#000; color:#fff;">Total Value of the Purchase Order: ${total}  </label><br>
	   
	   </div>
	   
	<div>
	  <label style="background:#000; color:#fff;">Expected Delivery Date: ${quotationForm.deliveryDate}</label><br>
 
	</div>`

	+' <!-- Competency Table -->'
	+' <div class="box">'
	+' <div class="row">'
	+'  <div class="col-sm-6">'
	+' <table class="table table-bordered status-table">'
	+'    <thead>'
	+'     <tr>'
	+'        <th>Competency </th>'
	+'        <th>Status</th>'
	+'        <th>Time</th>'
	+'      </tr>'
	+'    </thead>'
	+'   <tbody>'
	+'      <tr>'
	+'       <td><b>Inquiry</b></td>'
	+'        <td id="piping">'
	
	+'		</td>'
	+'        <td id="pipingTimer">'
	
	+'       </td>'
	+'     </tr>'
	+'      <tr>'
	+'        <td> <b>Quotation</b></td>'
	+'        <td id="instr">'

	+'		</td>'
    +'        <td id="quatTimer">'
	
	+'       </td>'
	+'      </tr>'

	+'       <tr>'
	+'        <td><b>Comparision</b></td>'
	+'        <td id="comp">'
	
    +'		</td>'
  +'        <td id="compareTimer">'
	
	+'       </td>'
   +'     </tr>'
   
   +'       <tr>'
   +'        <td><b>Purchase</b></td>'
   +'        <td id="purch">'

     +'		</td>'
   +'        <td id="purchaseTimer">'

   +'       </td>'
    +'     </tr>'
          
    +'    </tbody>'
    +'  </table>'
    +' </div>'
    +' <div class="col-sm-6" id="graphDiv">'
	 
    +' </div>'
    +'</div>'
    +'</div>'
    +'   <div class="col-md-4" >'
    +'   </div>'
    +'   <!-- First Row -->'
    +'  <div class="row">'
    +'   <div class="col-md-4" >'
    +'     <div class="box">'
    +'      <h5 class="section-title sectionStyle" >Inquiry</h5>'
    +'       <div class="table-container">'
    +'        <table style="border-style: solid;">'
    +'           <tr class="trStyle">'
    +'            <th>Expected</th>'
    +'             <th>Actual</th>'
    +'          </tr>'
    +'           <tr>'
    +'           <td><b> <center><strong class="correct">5</strong> </center></b></td>'
	+'           <td><b> <center><strong class="wrong">'+enqAdd+'</strong> </center></b></td>'
	  +'         </table>'
    +'      </div>'
    +'    </div>'
    +'   </div>'
    +'  <div class="col-md-4" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Quotation</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">15</b></td>'
	    +'                       <td><b class="wrong">'+quatAdd+'</b></td>'
	  	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	    +'  <div class="col-md-4" >'
    +'    <div class="box">'
    +'     <h5 class="section-title sectionStyle" >Comparision and Purchase order</h5>'
    +'     <div class="table-container">'
	+'       <table style="border-style: solid;">'
	+'          <tr class="trStyle">'
	+'            <th>Expected</th>'
	+'            <th>Actual</th>'
	+'          </tr>'
	+'          <tr>'
	 +'						  <td><b class="correct">2</b></td>'
	    +'                       <td><b class="wrong">2</b></td>'
	  	+'          </tr>'
	+'        </table>'
	+'      </div>'
	+'     </div>'
	+'   </div>'
	
//	+' <!-- First Row -->'
//	+'<!-- <div class="row">'
//	+'  <div class="col-md-3">'
//	+'  </div>'
//	+' <div class="col-md-6">'
//	+'   <div class="box">'
//	+'     <h5 class="section-title sectionStyle" >Comparision and Purchase order</h5>'
//	+'     <div class="table-container">'
//	+'       <table style="border-style: solid;">'
//	+'         <tr class="trStyle">'
//	+'           <th>Expected</th>'
//	+'           <th>Actual</th>'
//	+'         </tr>'
//	+'         <tr>'
//	 +'						  <td><b class="correct">2</b></td>'
// +'                       <td><b class="wrong">2</b></td>'
// +'         </tr>'
//	+'       </table>'
//	+'     </div>'
//	+'   </div>'
//	+' </div>'
//	+'  <div class="col-md-3">'
//	+'  </div>'
//	+' </div> -->'

	+'<!-- Graphs Section -->'
	+'<div class="row">'
    +'</div>'
    +'<!-- Pie Chart Section -->'
    +'<div class="row">'
      
    +'</div>'

//    +'<!-- Animation Section -->'
//    +'<div class="row">'
//    +' <div class="col-md-12">'
//    +'   <div class="box">'
//    +'     <h5 class="section-title sectionStyle" >Simulation</h5>'
//    +'     <div class="animation-container">'
//           
//    +'           <div class="col-md-4">'
//    +'				<div class="box">'
//    +'				  <h5 class="section-title sectionStyle">Start</h5>'
//    +'				  <div class="table-container">'
//    +'					<table style="border-style: solid;" >'
//    +'					  <tr class="trStyle">'
//    +'						<th>Expected</th>'
//    +'						<th>Actual</th>'
//    +'					  </tr>'
//    +'					  <tr>'
//    +'						  <td><b class="correct">3</b></td>'
//    +'                       <td><b class="wrong">'+resultJson.animationStart+'</b></td>'
//    +'					  </tr>'
//    +'					</table>'
//    +'				  </div>'
//    +'				</div>'
//    +'			  </div>'
//    +'         <div class="col-md-4">'
//    +'		<div class="box">'
//    +'		  <h5 class="section-title sectionStyle">View Datasheet</h5>'
//    +'		  <div class="table-container">'
//    +'			<table style="border-style: solid;">'
//    +'			  <tr class="trStyle">'
//    +'				<th>Expected</th>'
//    +'			<th>Actual</th>'
//    +'			  </tr>'
//    +'			  <tr>'
//    +'				  <td><b class="correct">3</b></td>'
//    +'                <td><b class="wrong">'+resultJson.datasheet+'</b></td>'
//    +'			  </tr>'
//    +'			</table>'
//    +'		  </div>'
//    +'		</div>'
//    +' </div>'
//    +'       <div class="col-md-4">'
//    +'		<div class="box">'
//    +'		  <h5 class="section-title sectionStyle">Trends</h5>'
//    +'		  <div class="table-container">'
//    +'			<table style="border-style: solid;">'
//    +'			  <tr class="trStyle">'
//    +'				<th>Expected</th>'
//    +'				<th>Actual</th>'
//    +'			  </tr>'
//    +'			  <tr>'
//    +'				  <td><b class="correct">3</b></td>'
//    +'            <td><b class="wrong">'+resultJson.trends+'</b></td>'
//    +'			  </tr>'
//    +'			</table>'
//    +'		  </div>'
//    +'		</div>'
//    +' </div>'
//          
//    +'     </div>'
//    +'   </div>'
//    +' </div>'
//    +'</div>'
//    +'</div>'
    $("#mainDiv").html(htm);
	

	
//	var startPer=parseFloat((resultJson.animationStart/3)*100);
//	var datasheetPer=parseFloat((resultJson.datasheet/3)*100);
//	var trendsPer=parseFloat((resultJson.trends/3)*100);
//	
//	
//	console.log(" piping "+piping);
//	console.log(" instr "+instr);
//	console.log(" squ "+squ);
//	console.log(" simuAdd "+simuAdd);
	
//	console.log(" startPer "+startPer);
//	console.log(" datasheetPer "+datasheetPer);
//	console.log(" trendsPer "+trendsPer);
//	console.log(" simulation1 "+simulation1);
	if(piping>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
	 $("#piping").html(str);
		 var str1=''
	+'	     	<div class="alert alert-success attainedText">'
	+'    	   <center><strong> '+timerMasterJson.enquiey+'</strong> </center>'
	+'     		 </div>'
	 $("#pipingTimer").html(str1); 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#piping").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.enquiey+'</strong> </center>'
				+'     		 </div>'
							     $("#pipingTimer").html(str1); 
		 
								
		}
	if(instr>=60){
		 var str=''
	 +'	     	<div class="alert alert-success attainedText">'
	+'    			 <center><strong> Attained</strong> </center>'
	+'     		 </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-success attainedText">'
				+'    	   <center><strong> '+timerMasterJson.quat+'</strong> </center>'
				+'     		 </div>'
							     $("#quatTimer").html(str1); 
		 	 
		     
	}
	else
		{
		 var str=''
			 +' <div class="alert alert-danger attainedText">'
		    +'  <center><strong>Not Attained</strong> </center>'
		     +'  </div>'
		     $("#instr").html(str);
		 var str1=''
				+'	     	<div class="alert alert-danger attainedText">'
				+'    	   <center><strong> '+timerMasterJson.quat+'</strong> </center>'
				+'     		 </div>'
							     $("#quatTimer").html(str1); 
		}
		
		if(comp>=60){
				 var str=''
			 +'	     	<div class="alert alert-success attainedText">'
			+'    			 <center><strong> Attained</strong> </center>'
			+'     		 </div>'
				     $("#comp").html(str);
				 var str1=''
						+'	     	<div class="alert alert-success attainedText">'
						+'    	   <center><strong> '+timerMasterJson.compare+'</strong> </center>'
						+'     		 </div>'
									     $("#compareTimer").html(str1); 
				 	 
				     
			}
			else
				{
				 var str=''
					 +' <div class="alert alert-danger attainedText">'
				    +'  <center><strong>Not Attained</strong> </center>'
				     +'  </div>'
				     $("#comp").html(str);
				 var str1=''
						+'	     	<div class="alert alert-danger attainedText">'
						+'    	   <center><strong> '+timerMasterJson.compare+'</strong> </center>'
						+'     		 </div>'
									     $("#compareTimer").html(str1); 
				}
				
				if(purchase>=60){
								 var str=''
							 +'	     	<div class="alert alert-success attainedText">'
							+'    			 <center><strong> Attained</strong> </center>'
							+'     		 </div>'
								     $("#purch").html(str);
								 var str1=''
										+'	     	<div class="alert alert-success attainedText">'
										+'    	   <center><strong> '+timerMasterJson.alam+'</strong> </center>'
										+'     		 </div>'
													     $("#purchaseTimer").html(str1); 
								 	 
								     
							}
							else
								{
								 var str=''
									 +' <div class="alert alert-danger attainedText">'
								    +'  <center><strong>Not Attained</strong> </center>'
								     +'  </div>'
								     $("#purch").html(str);
								 var str1=''
										+'	     	<div class="alert alert-danger attainedText">'
										+'    	   <center><strong> '+timerMasterJson.alam+'</strong> </center>'
										+'     		 </div>'
													     $("#purchaseTimer").html(str1); 
								}
	
//	if(startPer>=100 && datasheetPer>=100 && trendsPer>=100){
//		 var str=''
//	 +'	     	<div class="alert alert-success attainedText">'
//	+'    			 <center><strong> Attained</strong> </center>'
//	+'     		 </div>'
//		     $("#simulation").html(str);
//	var str1=''
//	+'	     	<div class="alert alert-success attainedText">'
//	+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
//	+'     		 </div>'
//	 $("#simulationTimer").html(str1); 
//	}
//	else
//		{
//		 var str=''
//			 +' <div class="alert alert-danger attainedText">'
//		    +'  <center><strong>Not Attained</strong> </center>'
//		     +'  </div>'
//		     $("#simulation").html(str);
//		 var str1=''
//				+'	     	<div class="alert alert-danger attainedText">'
//				+'    	   <center><strong> '+timerMasterJson.mimic+'</strong> </center>'
//				+'     		 </div>'
//							     $("#simulationTimer").html(str1); 
//		}
	Highcharts.chart('graphDiv', {
		credits: { enabled: false},
	    chart: {
	        plotBackgroundColor: null,
	        plotBorderWidth: null,
	        plotShadow: false,
	        type: 'pie',
	        backgroundColor: '#f0f0f0'
	    },
		exporting: { enabled: false },
		credits: { enabled: false},
	    title: {
	        text: ' ',
	        align: 'left'
	    },
	    tooltip: {
	    	 enabled: false,
        style: {
            fontFamily: 'Arial, sans-serif', // Set tooltip font family
            fontSize: '12px',                    // Set tooltip font size
            color: '#000',                    // Set tooltip text color
            fontWeight: 'bold',                  // Optional: bold text
            backgroundColor: '#000'           // Optional: tooltip background color
        },
        formatter: function () {
            return `<b>${this.point.name}</b>: ${this.y}%`;
        }
    },
	    accessibility: {
	        point: {
	            valueSuffix: '%'
	        }
	    },
	    plotOptions: {
	        pie: {
	            dataLabels: {
	                enabled: true,
	                style: {
	                    color: '#000',
//	                font-family: 'Arial, sans-serif',
	                fontSize: '14px',
	                /* font-weight: bold; */
	                fill: '#000',
	                },
	                formatter: function () {
	                    return `<span>${this.point.name}: ${this.percentage.toFixed(2)}%</span>`;
	                }
	            }
	        }
	    },

	    series: [{
	        name: '',
	        data: [
	            { name: 'Enquiry', y: piping },
	            { name: 'Quotation', y: instr },
	            
	            { name: 'Comparision', y: comp },
				{ name: 'Purchase', y: purchase }
	          
	        ]
	    }]
	});
	
	updateDateTime();
	
$("#report").click(function() {
		tmp = $("#nameInput").val();
		if(tmp != ""){
			
			  // Restore value from localStorage when page loads
			  const savedName = localStorage.getItem("username");
			  if (savedName) {
			    $('#nameInput').val(savedName);
			  }
 
			  // Save input on change
			  $('#nameInput').on('input', function() {
			    localStorage.setItem("username", $(this).val());
			  });
			
 
			console.log("click triggred");
 
			const button = document.getElementById("report");
			button.hidden = true;
 
			html2canvas(document.querySelector("#mainDiv"), {
				useCORS: true,
				allowTaint: false,
				backgroundColor: null
			}).then(canvas => {
				let link = document.createElement('a');
				link.download = 'report.png';
				link.href = canvas.toDataURL("image/png");
				link.click();
				$("#divMis").prop("hidden",true);
//				$("#btnNext").prop("hidden", false);
			}).catch(err => {
				console.error("Screenshot failed:", err);
			}).finally(() => {
				button.hidden = true;
			});
			
			}else{
				alert("Enter Name");
			}
	});
}
