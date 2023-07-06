const selectedRow = null;

function onFormSubmit(e) {
    const formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//Get data from form

function readFormData() {
    const formData = {};
    formData["date"] = document.getElementById('date').value;
    formData["flavor"] = document.getElementById('flavor').value;
    formData["purchasePrice"] = document.getElementById('purchasePrice').value;
    formData["quantityPurchase"] = document.getElementById('quantityPurchased').value;
    formData["quantityRemaining"] = document.getElementById('quantityRemaining').value;
    formData["order"] = document.getElementById('order').checked.value="yes";
    return formData;
}

//add data to table

function insertNewRecord(data) {
    const table = document.getElementById("storelist").getElementsByTagName("tbody").[0];
    const newRow = table.insertRow(table.length);
    cell1 =newRow.insertCell(0);
        cell1.innerHTML = data.date;
    cell2 =newRow.insertCell(1);
        cell2.innerHTML = data.flavor;
    cell3 =newRow.insertCell(2);
        cell3.innerHTML = data.purchasePrice;
    cell4 =newRow.insertCell(3);
        cell4.innerHTML = data.quantityPurchased;
    cell5 =newRow.insertCell(4);
        cell5.innerHTML = data.quantityRemaining;
    cell6 =newRow.insertCell(5);
        cell6.innerHTML = data.order;
    cell7 =newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//editing data in table

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("date").value = selectedRow.cells[0].innerHTML;
    document.getElementById("flavor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("purchasePrice").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quantityPurchased").value = selectedRow.cells[3].innerHTML;
    document.getElementById("quantityRemaining").value = selectedRow.cells[4].innerHTML;
    document.getElementById("order").value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData)