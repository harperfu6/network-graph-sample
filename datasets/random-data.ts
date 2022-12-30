export const genRandomTree = (N:number=300, reverse:boolean=false) => {
	return {
		nodes: [...Array(N).keys()].map(i => ({ id: i })),
		links: [...Array(N).keys()].filter(id => id).map(id => ({
			[reverse ? 'target' : 'source' ]: id,
			[reverse ? 'source' : 'target' ]: Math.round(Math.random() * (id-1))
		}))
	}
}

export const genRandomTreeWithCoordinates = (N:number=10, reverse:boolean=false) => {
	return {
		nodes: [...Array(N).keys()].map(i => ({
			id: i,
			x: Math.round(Math.random() * (i-1)),
			y: Math.round(Math.random() * (i-1)),
			z: Math.round(Math.random() * (i-1))
		})),
		links: [...Array(N).keys()].filter(id => id).map(id => ({
			[reverse ? 'target' : 'source' ]: id,
			[reverse ? 'source' : 'target' ]: Math.round(Math.random() * (id-1))
		}))
	}
}

export const genSqure = (reverse:boolean=false) => {
	return {
		nodes: [
			{id: 0, x: 0, y: 0, z: 0},
			{id: 1, x: 1, y: 0, z: 0},
			{id: 2, x: 1, y: 1, z: 0},
			{id: 3, x: 0, y: 1, z: 0},
		],
		links: [
			{'source': 0, 'target': 1},
			{'source': 1, 'target': 2},
			{'source': 2, 'target': 3},
			{'source': 3, 'target': 0},
		]
	}
}
