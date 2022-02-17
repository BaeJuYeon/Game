package com.game.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.domain.BoardDTO;
import com.game.mapper.BoardMapper;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardMapper boardMapper;

	@Override
	public boolean registerBoard(BoardDTO params) {
		int queryResult = 0;

		if (params.getBoardNum() == null) {
			queryResult = boardMapper.insertBoard(params);
		} else {
			queryResult = boardMapper.updateBoard(params);
		}

		return (queryResult == 1) ? true : false;
	}

	@Override
	public BoardDTO getBoardDetail(BoardDTO params) {
		return boardMapper.selectBoardDetail(params);
	}

	@Override
	public boolean deleteBoard(BoardDTO params) {
		int queryResult = 0;

		BoardDTO board = boardMapper.selectBoardDetail(params);
		board.setBoardUpdateId("admin");

		if (board != null && "N".equals(board.getBoardDelete())) {
			queryResult = boardMapper.deleteBoard(board);
		}

		return (queryResult == 1) ? true : false;
	}

	@Override
	public List<BoardDTO> getBoardList(BoardDTO params) {
		List<BoardDTO> boardList = Collections.emptyList();

		int boardTotalCount = boardMapper.selectBoardTotalCount(params);

//		PaginationInfo paginationInfo = new PaginationInfo(params);
//		paginationInfo.setTotalRecordCount(boardTotalCount);
//
//		params.setPaginationInfo(paginationInfo);

		if (boardTotalCount > 0) {
			boardList = boardMapper.selectBoardList(params);
		}

		return boardList;
	}

	@Override
	public List<BoardDTO> searchBoard(BoardDTO params) {
		return boardMapper.searchBoard(params);
	};

	@Override
	public int plusBoardHit(BoardDTO params) {
		return boardMapper.plusBoardHit(params);
	};

}
