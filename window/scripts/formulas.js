

// ОБЩАЯ ДЛИНА РАМЫ
function profileLength (height, width) {
	const totalLength = ((parseInt(width) + parseInt(height)) * 2) / 1000
	return totalLength
}

// ОБЩАЯ ДЛИНА СТВОРКИ
function stvorkaLength (height, width, rama) {
	const h = height - rama * 2
	const w = width - rama * 2
	const l = (w + h) * 2
	return l
}

// ПЛОЩАДЬ СТЕКЛОПАКЕТА
function packetArea (height, width, profile) {
	const packetHeight = parseInt(height) - parseInt(profile) * 2
	const packetWidth = parseInt(width) - parseInt(profile) * 2
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