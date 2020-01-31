function exportToExcel(tableId){
	let tableData = document.getElementById(tableId).outerHTML;
    tableData = tableData.replace(/<img[^>]*>/gi,""); //enable thsi if u dont want images in your table
	tableData = tableData.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tableData = tableData.replace(/<input[^>]*>|<\/input>/gi, ""); //remove input params

	tableData = tableData

	//click a hidden link to which will prompt for download.
	let a = document.createElement('a')
	let dataType = 'data:application/vnd.ms-excel';
	a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(tableData)}`
	a.download = 'Seznam knih' + '.xls'
	a.click()
}