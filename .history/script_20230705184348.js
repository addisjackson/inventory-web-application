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
    cell1.innerHTML = data.date;
    cell1 =newRow.insertCell(3);
    cell1.innerHTML = data.date;
    cell1 =newRow.insertCell(4);
    cell1.innerHTML = data.date;
    cell1 =newRow.insertCell(5);
    cell1.innerHTML = data.date;
    cell1 =newRow.insertCell();
    cell1.innerHTML = data.date;
    cell1 =newRow.insertCell(0);
    cell1.innerHTML = data.date;
}