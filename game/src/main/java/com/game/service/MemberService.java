package com.game.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.game.domain.MemberDTO;

public interface MemberService {

	public boolean insertMember(MemberDTO member);

	public boolean loginMember(MemberDTO member);

	public boolean idfindMember(MemberDTO member);

	public MemberDTO selectMember(MemberDTO params);

	public String idfind(MemberDTO member);

	public int passfindMember(MemberDTO member);

	public int newpassMember(MemberDTO member);

	public int memberIdcheck(String memId);

	public int memberNickcheck(String memNick);

	public int memberHpcheck(String memHp);

	public int memberEmailcheck(String memEmail);

	public MimeMessage createMessage(String to) throws MessagingException;

	public void sendSimpleMessage(String to) throws Exception;

}
