export const separadorDeIds = "!!"

export function sleep(duration) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, duration * 1000)
	})
}

export function createQuizzDeckBodyBuilder(mazosSinFiltrar) {
	let mazosFiltrados = {}
	for (let i = 0; i < mazosSinFiltrar.length; i++) {
		let actualData = mazosSinFiltrar[i].split(separadorDeIds)

		if (actualData.length === 1) {
			mazosFiltrados[actualData[0]] = true
		}
		else {
			mazosFiltrados[actualData[0]] = mazosFiltrados[actualData[0]] || []
			mazosFiltrados[actualData[0]].push(actualData[1])
		}
	}
	return mazosFiltrados
}
