package com.game.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.game.domain.MemberDTO;

@Mapper
public interface MemberMapper {

	public int insertMember(MemberDTO params);

	public MemberDTO selectMember(MemberDTO params);

	public String selectMemberId(MemberDTO params);

	public int selectMemberPass(MemberDTO params);

	public int updateMemberPass(MemberDTO params);

	public int selectMemberNumber(MemberDTO params);

	public int updateMemberBlock(MemberDTO params);

	public int memberIdcheck(String memId);

	public int memberNickcheck(String memNick);

	public int memberHpcheck(String memHp);

	public int memberEmailcheck(String memEmail);

}
