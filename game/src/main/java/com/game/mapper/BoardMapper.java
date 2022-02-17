package com.game.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.game.domain.BoardDTO;

@Mapper
public interface BoardMapper {

	public int insertBoard(BoardDTO params);

	public BoardDTO selectBoardDetail(BoardDTO params);

	public List<BoardDTO> selectBoardList(BoardDTO params);

	public int updateBoard(BoardDTO params);

	public int deleteBoard(BoardDTO params);

	public int selectBoardTotalCount(BoardDTO params);

	public List<BoardDTO> searchBoard(BoardDTO params);

	public int plusBoardHit(BoardDTO parmas);
}
