function quateplc(){
	$("#Header").html("<center><span>Enquiry</span></center>");
		htm = `
	 <table id="dynamicTable">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>PLC Required</th>
                <th>Quantity</th>
                <th>Configuration</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
             <td>
                    <select class="instrument-name">
                        <option value=""> ----- Select PLC ----- </option>
                       <option value="1">Rockwell</option>
                        <option value="2">Siemens</option>
                        <option value="3">Delta</option>
                        <option value="4"> Schindler</option>
                      
                
                    </select>
                </td>
               
                <td><input type="number" class="quantity" placeholder="Enter qty"></td>
                
               	<td>
               	 <select class="confi-name">
               	 <option value=""> ----- Select Configuration ----- </option>
                 <option value="1">CPU</option>
                 <option value="2">I/O Modules</option>
                 <option value="3">Communication Modules</option>
                 <option value="4">Memory Module</option>
                 <option value="5">Power Supply</option>
                 </select>
              	</td>
              	
                <td><input type="text" class="unit-cost" ></td>
                <td><input type="text" class="total-final-cost" ></td>
                
                <td><button class=" btn remove-btn" data-toggle="modal" data-target="#preReq">Remove</button></td>
            </tr>
        </tbody>
    </table>
    <div class="btn-container">
     <button class="btn add-btn" data-toggle="modal" data-target="#preReq">Add Row</button>
     <button  type="submit"class="btn check-btn" data-toggle="modal" data-target="#preReq" >Submit</button>
    </div>`

    
     htm +=  `	<!-- 			    The Modal  ProStr -->
  <div class="modal fade " id="preReq">
	    <div class="modal-dialog modal-md" >
		      <div class="modal-content">
		       
	        <div class="modal-header">
	          <h4 class="modal-title"><center>Message Box</center></h4>
	          <button type="button" class="close" data-dismiss="modal">&times;</button>
	        </div>
<!-- 		        Modal body -->
		        <div class="modal-body" id="modalMessage" style="color:red">

		        </div>
<!-- 			        Modal footer -->
		        <div class="modal-footer">
	             <button type="button" class="btn btn-danger" data-dismiss="modal" >Ok</button>
		        </div>
		      </div>
		    </div>
		  </div>
		  <!-- 			  End Modal ProStr -->`
    
    $("#tableDivId").html(htm);
    
          // Modal box logic
    var modal = $('#preReq');
    var span = $('.close');
     
       function showModal(message) {
        $('#modalMessage').html(message);
        modal.css('display', 'block');
    }

    span.click(function () {
        modal.css('display', 'none');
    });

    $(window).click(function (event) {
        if (event.target === modal[0]) {
            modal.css('display', 'none');
        }
    });
   $(document).ready(function() {  
	   
	    function updateRowNumbers() {
                $("#dynamicTable tbody tr").each(function(index) {
                    $(this).find("td:first").text(index + 1);
                });
            }

            $(".add-btn").click(function() {
              
                    let isValid = true;
					
                $(".instrument-name, .quantity,.confi-name,.unit-cost").each(function() {
                    let value = $(this).val().trim();
                    
                    if ($(this).hasClass(".unit-cost") && (value === "" || parseFloat(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else if ($(this).hasClass("quantity") && (value === "" || parseInt(value) <= 0)) {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });

                if (!isValid) {
                    
                    showModal(`<strong style="color:#153f68;font-size: large;">Please enter quantity and specification before adding a new row.</strong>`);
                    return;
                }else{
					  let newRow = $("#dynamicTable tbody tr:first").clone();
                     newRow.find("input").val("");
                     newRow.find("select").val("");
                     newRow.appendTo("#dynamicTable tbody");
                     updateRowNumbers();
                     showModal(`<strong style="color:#153f68;font-size: large;"> Adding a new row.</strong>`);
					
				}
				
				
		
            });

            $(document).on("click", ".remove-btn", function() {
				
				
                if ($("#dynamicTable tbody tr").length > 1) {
                    $(this).closest("tr").remove();
                    updateRowNumbers();
                     showModal(`<strong style="color:#153f68;font-size: large;">Selected one row is removed</strong>`);
                } else {
                  
                     showModal(`<strong style="color:#153f68;font-size: large;">At least one row is required</strong>`);
                }
            });
            
//            $(".check-btn").hide(); 
            
            	$(document).on("input", ".unit-cost", function() {
				let row = $(this).closest("tr");
                let basePrice = parseFloat(row.find(".unit-cost").val()) || 0;
                let qty = parseInt(row.find(".quantity").val()) || 1;
                let totalCost = basePrice*qty;
				 row.find(".total-final-cost").val(totalCost.toFixed(2));
				 
		    });

            let flg2 = 0;
             $(".check-btn").click(function() {
				 const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
   			 const rows = table.getElementsByTagName('tr');
   			 const data = []; 
				  let isValid = true;
                $("  .quantity,.instrument-name,.unit-cost,.total-final-cost").each(function() {
                    if ($(this).val().trim() === "") {
                        $(this).addClass("error");
                        isValid = false;
                    } else {
                        $(this).removeClass("error");
                    }
                });
                if (!isValid) {
					showModal(`<strong style="color:#153f68;font-size: large;">Please fill in all required fields</strong>`);
                    
                } else {
                    
                    showModal(`<strong style="color:#153f68;font-size: large;">All values are entered correctly</strong>`);
                    
                     $("#tableDivId").html('');
//                		enquiryform();
						 software();
                }
                
          for (let i = 0; i < rows.length; i++) {
    		  const row = rows[i];

      
      const instrumentSelect = row.querySelector('.instrument-name');
      const instrumentValue = instrumentSelect.value;
      const instrumentName = instrumentSelect.options[instrumentSelect.selectedIndex].text;
      
      const confSelect = row.querySelector('.confi-name');
      const confValue = confSelect.value;
      const confiName = confSelect.options[confSelect.selectedIndex].text;
      
      const quantity = row.querySelector('.quantity').value;
      const cost = row.querySelector('.unit-cost').value;
     const totalcost =  row.querySelector('.total-final-cost').value;
      

      // Validate non-empty fields
      if (instrumentValue && quantity && cost && totalcost) {
        data.push({
          srNo: i + 1,
           instrumentId: instrumentValue,
          instrumentName: instrumentName,
          confiName: confiName,
          quantity: quantity,
          cost: cost,
          totalcost : totalcost
        });
      }
    }    
    
    finalData.QutationPlc = data;
	console.log(finalData);
    console.log("Collected Data as JSON:", JSON.stringify(data, null, 2));
    alert("Data collected successfully!\nCheck console for JSON output."); 
				 

   
				 
			}); 


});
}