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
    formData["quant"] = document.getElementById('date').value;
    formData["date"] = document.getElementById('date').value;
    formData["date"] = document.getElementById('date').value;
}