import { Chess, Square } from 'chess.js';
import clsx from 'clsx';
import { FC, SyntheticEvent, useCallback, useEffect, useRef, useState } from 'react';
import { JsxElement } from 'typescript';
import { useChessGameContext } from '../../../contexts/ChessGameContext';
import { MOVE_STATE } from '../../../types/Chess.type';
import { ChessPieceOverlay } from './ChessPieceOverlay';
import { MoveFromOverlay } from './MoveFromOverlay';
import { MoveToOverlay } from './MoveToOverlay';
import { ValidMoveOverlay } from './ValidMoveOverlay';

export const SquaresOverlay: FC = () => {
  const { currChessBoard, startMove, endMove, resetMove } =
    useChessGameContext();

  const [BoardGrid, setBoardGrid] = useState<JSX.Element[]>([]);

  const handleBoardSquareClick = (square: Square) => {
    const { moveState, moveFrom, moveTo, validMoves, fen } = currChessBoard;
    // console.log(moveState, moveFrom, moveTo, validMoves, fen);

    if (moveState === MOVE_STATE.IDLE) {
      // If the square is occupied by a piece => start a move
      if (currChessBoard.chessGame.get(square)) {
        resetMove();
        startMove(square);
      }
    } else if (moveState === MOVE_STATE.MOVING) {
      if (validMoves === null) {
        resetMove();
      } else if (moveFrom === square) {
        // User clicked on the same square they started the move from => cancel the move
        resetMove();
      } else {
        // The user clicked on a valid square => end the move
        if (validMoves.some((move) => move === square)) {
          endMove(square);
        } else if (currChessBoard.chessGame.get(square)) {
          // If the user clicked on another piece => restart move with that square
          resetMove();
          startMove(square);
        }
      }
    } else if (moveState === MOVE_STATE.MOVED) {
      if (moveTo === square) {
        resetMove();
      }

      // If the square is occupied by a piece, start a move
      if (currChessBoard.chessGame.get(square)) {
        resetMove();
        startMove(square);
      }
    }
    console.log('-----');
  };

  useEffect(() => {
    const newBoardGrid = [];
    for (let i = 0; i < 8; i++) {
      const subElements = [];
      for (let j = 0; j < 8; j++) {
        const square = `${'abcdefgh'.charAt(i)}${8 - j}` as Square;
        const ChessPiece = <ChessPieceOverlay x={i} y={j} square={square} />;
        const ValidMove = <ValidMoveOverlay x={i} y={j} square={square} />;

        if (ChessPiece || ValidMove || currChessBoard.moveTo === square) {
          subElements.push(
            <div id={square} key={square} onClick={() => handleBoardSquareClick(square)}>
              {currChessBoard.moveState !== MOVE_STATE.MOVING &&
                currChessBoard.moveTo === square && (
                  <MoveToOverlay x={i} y={j} square={square} />
                )}
              {currChessBoard.moveFrom === square && (
                <MoveFromOverlay x={i} y={j} square={square} />
              )}
              {ChessPiece}
              {ValidMove}
            </div>
          );
        }
      }
      newBoardGrid.push(<span key={i}>{subElements}</span>);
    }
    setBoardGrid(newBoardGrid);
  }, [currChessBoard]);

  return <>
    {BoardGrid}
  </>;
};
