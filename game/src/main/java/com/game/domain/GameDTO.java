package com.game.domain;

import lombok.Data;

/**
 * 회원가입 테이블의 컬럼을 가져오기 위한 DTO 클래스 명명법: 1. DTO클래스로 만들려는 DB에서의 테이블의 이름의 앞 자리를 가져온다
 * 2. 이름의 앞자리 첫글자를 대문자로 한뒤, DTO를 붙힌다 ex: member_table의 이름을 가진 DB테이블의 DTO 클래스를 만듬
 * -> MemberDTO
 */

@Data
public class GameDTO {

	/**
	 * 1. mem_hp컬럼의 데이터타입을 NUMBER() 설정했을시, 0101234578으로 입력시 101234578으로 보여지는 문제 발생.
	 * varchar2()로 수정 2. Member_table에서 ID를 PK값으로 사용하기로 결정됨으로써 시퀀스 삭제함.
	 */

	private String gameName, gameRule, gameExplan, gameMaker, gameCreateDate, gameModifier, gameUpdateDate;

}
