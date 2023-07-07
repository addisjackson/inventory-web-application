var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		} else {
            updateRecord(formData);
		}
        resetForm();    
}



//Retrieve the data
function readFormData() {

  var formData = {};
    formData["date"] = document.getElementById("date").value;
    formData["flavor"] = document.getElementById("flavor").value;
    formData["productPrice"] = document.getElementById("productPrice").value;
    formData["quantityPurchased"] = document.getElementById("quantityPurchased").value;
    formData["quantityRemaining"] = document.getElementById("quantityRemaining").value;
    formData["order"] = document.getElementById("order").checked.value="yes";
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.date;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.flavor;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.productPrice;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.quantityPurchased;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.quantityRemaining;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.order;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("date").value = selectedRow.cells[0].innerHTML;
    document.getElementById("flavor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("productPrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quantityPurchased").value = selectedRow.cells[3].innerHTML;
    document.getElementById("quantityRemaining").value = selectedRow.cells[4].innerHTML;
    document.getElementById("order").value = selectedRow.cells[5].innerHTML;


}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.date;
    selectedRow.cells[1].innerHTML = formData.flavor;
    selectedRow.cells[2].innerHTML = formData.productPrice;
    selectedRow.cells[3].innerHTML = formData.quantityPurchased;
    selectedRow.cells[4].innerHTML = formData.quantityRemaining;
    selectedRow.cells[5].innerHTML = formData.order;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("date").value = '';
    document.getElementById("flavor").value = '';
    document.getElementById("productPrice").value = '';
    document.getElementById("quantityPurchased").value = '';
    document.getElementById("quantityRemaining").value = '';
    document.getElementById("order").value = '';
    selectedRow = null;
}
