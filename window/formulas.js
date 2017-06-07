

// ОБЩАЯ ДЛИНА РАМЫ ГЛУХАРЯ
function ramaLength (height, width) {
	const totalLength = ((parseInt(width) + parseInt(height)) * 2) / 1000
	return totalLength
}

// ПЛОЩАДЬ СТЕКЛОПАКЕТА
function packetArea (height, width, rama) {
	const packetHeight = parseInt(height) - parseInt(rama) * 2
	const packetWidth = parseInt(width) - parseInt(rama) * 2
	const packetArea = (packetWidth * packetHeight) / 1000000
	return packetArea
}

// СТОИМОСТЬ ОКНА
function productCost (ramaLength, packetArea, ramaCost, packetCost) {
	const costRama = parseInt(ramaLength) * parseInt(ramaCost)
	const costPacket = parseInt(packetArea) * parseInt(packetCost)
	const totalCost = costRama + costPacket
	return totalCost
}

// СТОИМОСТЬ МОНТАЖНЫХ РАБОТ
function workCost (totalSum, percent) {
	const costWork = (totalSum * percent) / 100
	return costWork
}

// ОБЩАЯ СТОИМОСТЬ ЗАКАЗА
function commonCost (costProduct, costWork) {
	const costCommon = costProduct + costWork
	return costCommon
}