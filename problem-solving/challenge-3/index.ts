class item
{
    x: number;
    y: number;
    dis: number;
    constructor(x : number, y : number, dis : number)
    {
        this.x = x;
        this.y = y;
        this.dis = dis;
    }
};
 

function checkIn(i : number, j : number, row : number, col : number)
{
    return (i >= 0 && i < row && j >= 0 && j < col);
}

export const findLessCostPath = (board: number[][]): number => {
  if (board == null || board.length == 0) {
    return 0;
  }
	let row = board.length;
    let col = board[0].length;
    let tBoard = Array.from(Array(row), ()=>Array(col).fill(0));
 
 		let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1]; 
    let list = [];
    
    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++)
            tBoard[i][j] = 1000000000;
 
    list.push(new item(0, 0, 0));
 
    tBoard[0][0] = board[0][0];
 
    while (list.length!=0)
    {
        let k = list[0];
        list.shift();
 
        for (let i = 0; i < 4; i++)
        {
            let x: number = k.x + dx[i];
            let y: number = k.y + dy[i];
 
            if (!checkIn(x, y, row, col))
                continue;
 
            if (tBoard[x][y] > tBoard[k.x][k.y] + board[x][y])
            {
                tBoard[x][y] = tBoard[k.x][k.y] + board[x][y];
                list.push(new item(x, y, tBoard[x][y]));
            }
        }
        list.sort((a,b)=>{
        if (a.dis == b.dis)
        {
            if (a.x != b.x)
                return (a.x - b.x);
        		else
            	return (a.y - b.y);
    		}
    		return (a.dis - b.dis);
        });
    }

    return (tBoard[row - 1][col - 1] - board[row-1][col-1]);
};
