function convertToAdjList(adjMatrix) {
    let adjList = [];

    for(i = 0; i < adjMatrix.length; i++){
        let connections = [];
        // console.log(adjMatrix.length, n);
        for(j = 0; j < adjMatrix.length; j++){
            if (adjMatrix[i][j] == 1){
                connections.push(j);
            }
        }
        adjList.push(connections);
    }

    // console.log(adjMatrix, adjList);
    // convertToAdjMatrix(adjList);
    return adjList;
}

function convertToAdjMatrix(adjList) {
    let adjMatrix2 = [];

    for(i = 0; i < adjList.length; i++){ 
        let connectionsList = Array(adjList.length).fill(0);
        for(j = 0; j < adjList[i].length; j++ ){
            connectionsList[adjList[i][j]] = 1;
        }
        adjMatrix2.push(connectionsList);
    }

    // console.log(adjMatrix2);
    return adjMatrix2;
}