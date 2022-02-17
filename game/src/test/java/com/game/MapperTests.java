package com.game;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.CollectionUtils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.game.domain.BoardDTO;
import com.game.domain.MemberDTO;
import com.game.mapper.BoardMapper;
import com.game.mapper.MemberMapper;

@SpringBootTest
class MapperTests {

	@Autowired
	private MemberMapper memberMapper;

	@Autowired
	private BoardMapper boardMapper;

	@Test
	public void testOfTest() {
		MemberDTO params = new MemberDTO();

	}

	@Test
	public void testOfInsert() {

		MemberDTO params = new MemberDTO();
		params.setMemId("khb06121");
		params.setMemPass("12345");
		params.setMemNick("테스트1");
		params.setMemName("김한별1");
		params.setMemGender("여");
		params.setMemTel("lg");
		params.setMemHp("011");
		params.setMemEmail("test@test.com");
		params.setMemBlock("N");
		params.setMemDate("2022-01-01");

		int a = memberMapper.insertMember(params);
		System.out.println(a);
		// 정상작동. 콘솔창에 1 출력

	}

	@Test
	public void testSelectMember() {

		MemberDTO params = new MemberDTO();
		params.setMemId("khb06121");
		params.setMemPass("12345");

		System.out.println("테스트인풋 데이터 : " + params);
		MemberDTO result = memberMapper.selectMember(params);

		try {
			String boardJson = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(result);

			System.out.println("=========================");
			System.out.println(boardJson);
			System.out.println("=========================");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testOfInsertBoard() {

		BoardDTO params = new BoardDTO();
		params.setBoardType(1);
		params.setBoardTitle("12345");
		params.setBoardContent("테스트1");
		params.setMemId("admin");
		params.setBoardHit(1);

		int a = boardMapper.insertBoard(params);
		System.out.println(a);
		// 정상작동. 콘솔창에 1 출력

	}

	@Test
	public void testSelectBoardList() {

		BoardDTO params = new BoardDTO();
		params.setBoardType(1);

		int boardTotalCount = boardMapper.selectBoardTotalCount(params);
		if (boardTotalCount > 0) {
			List<BoardDTO> boardList = boardMapper.selectBoardList(params);
			if (CollectionUtils.isEmpty(boardList) == false) {
				for (BoardDTO board : boardList) {
					System.out.println("=========================");
					System.out.println(board.getBoardTitle());
					System.out.println(board.getMemNick());
					System.out.println(board.getBoardDate());
					System.out.println(board.getBoardHit());
					System.out.println("=========================");
				}
			}
		}
	}

	@Test
	public void testSelectBoardDetail() {

		BoardDTO params = new BoardDTO();
		params.setBoardType(1);
		params.setBoardNum("3");

		System.out.println("테스트인풋 데이터 : " + params);
		BoardDTO result = boardMapper.selectBoardDetail(params);

		try {
			String boardJson = new ObjectMapper().registerModule(new JavaTimeModule()).writeValueAsString(result);

			System.out.println("=========================");
			System.out.println(boardJson);
			System.out.println("=========================");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testUpdateBoard() {

		BoardDTO params = new BoardDTO();
		params.setBoardTitle("수정제목2");
		params.setBoardContent("수정내용2");
		params.setMemId("admin");
		params.setBoardNum("B_12");
		params.setBoardUpdateId("admin");

		System.out.println("테스트인풋 데이터 : " + params);
		int result = boardMapper.updateBoard(params);

		try {

			System.out.println("=========================");
			System.out.println(result);
			System.out.println("=========================");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testDeleteBoard() {

		BoardDTO params = new BoardDTO();
		params.setMemId("admin");
		params.setBoardNum("2");

		System.out.println("테스트인풋 데이터 : " + params);
		int result = boardMapper.deleteBoard(params);

		try {

			System.out.println("=========================");
			System.out.println(result);
			System.out.println("=========================");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void testSearchBoard() {

		BoardDTO params = new BoardDTO();
		params.setBoardSearch("4");

		params.setBoardType(1);

		List<BoardDTO> searchBoard = boardMapper.searchBoard(params);
		if (CollectionUtils.isEmpty(searchBoard) == false) {
			for (BoardDTO board : searchBoard) {
				System.out.println("=========================");
				System.out.println(board.getBoardType());
				System.out.println(board.getBoardTitle());
				System.out.println(board.getMemNick());
				System.out.println(board.getBoardHit());
				System.out.println("=========================");
			}
		}
	}

	@Test
	public void TestofplusBoardHit() {
		BoardDTO params = new BoardDTO();
		params.setBoardNum("B_12");

		System.out.println("테스트인풋 데이터 : " + params);
		int result = boardMapper.plusBoardHit(params);
		System.out.println("테스트인풋 result : " + result);

	};

}