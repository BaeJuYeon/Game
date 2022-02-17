package com.game.service;

import java.io.UnsupportedEncodingException;
import java.util.Random;

import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.codec.DecodingException;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.game.domain.MemberDTO;
import com.game.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberMapper memberMapper;

	@Autowired
	JavaMailSender emailSender;

	@Override
	public boolean insertMember(MemberDTO member) {
		int queryResult = 0;

		queryResult = memberMapper.insertMember(member);
		return true;
	}

	@Override
	public MemberDTO selectMember(MemberDTO params) {
		return memberMapper.selectMember(params);
	}

	@Override
	public boolean loginMember(MemberDTO member) {
		MemberDTO result = memberMapper.selectMember(member);

		return (result == null) ? false : true;
	}

	@Override
	public boolean idfindMember(MemberDTO member) {
		String result = memberMapper.selectMemberId(member);

		return (result == null) ? false : true;
	}

	@Override
	public String idfind(MemberDTO member) {
		String result = memberMapper.selectMemberId(member);

		return result;
	}

	@Override
	public int passfindMember(MemberDTO member) {
		int result = memberMapper.selectMemberPass(member);

		return result;
	}

	@Override
	public int newpassMember(MemberDTO member) {
		int result = memberMapper.updateMemberPass(member);
		return result;
	}

	@Override
	public int memberIdcheck(String memId) {
		return memberMapper.memberIdcheck(memId);
	}

	@Override
	public int memberNickcheck(String memNick) {
		return memberMapper.memberNickcheck(memNick);
	}

	@Override
	public int memberHpcheck(String memHp) {
		return memberMapper.memberHpcheck(memHp);
	}

	@Override
	public int memberEmailcheck(String memEmail) {
		return memberMapper.memberEmailcheck(memEmail);
	}

	public static final String ePw = createKey();

	@Override
	public MimeMessage createMessage(String to) throws MessagingException {
		System.out.println("보내는 대상 : " + to);
		System.out.println("인증 번호 : " + ePw);
		MimeMessage message = emailSender.createMimeMessage();

		try {
			message.addRecipients(RecipientType.TO, to);// 보내는 대상(받는 사람)
			message.setSubject("미니게임월드 인증번호가 도착했습니다.");// 제목

			String msgg = "";
			msgg += "<div style='margin:100px;'>";
			msgg += "<h1> 안녕하세요 미니게임월드입니다!!! </h1>";
			msgg += "<br>";
			msgg += "<p>아래 코드를 회원가입 창으로 돌아가 입력해주세요.<p>";
			msgg += "<br>";
			msgg += "<p>감사합니다!<p>";
			msgg += "<br>";
			msgg += "<div align='center' style='border:1px solid black; font-family:verdana';>";
			msgg += "<h3 style='color:blue;'>회원가입 코드입니다.</h3>";
			msgg += "<div style='font-size:130%'>";
			msgg += "CODE : <strong>";
			msgg += ePw + "</strong><div><br/> ";
			msgg += "</div>";
			message.setText(msgg, "utf-8", "html"); // 내용
			message.setFrom(new InternetAddress("wasbe2014@gamil.com", "미니게임월드"));// 보내는 사람

		} catch (DecodingException | MessagingException | UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return message;
	}

//	인증코드 만들기
	public static String createKey() {
		StringBuffer key = new StringBuffer();
		Random rnd = new Random();

		for (int i = 0; i < 8; i++) { // 인증코드 8자리
			int index = rnd.nextInt(3); // 0~2 까지 랜덤

			switch (index) {
			case 0:
				key.append((char) ((rnd.nextInt(26)) + 97));
				// a~z (ex. 1+97=98 => (char)98 = 'b')
				break;
			case 1:
				key.append((char) ((rnd.nextInt(26)) + 65));
				// A~Z
				break;
			case 2:
				key.append((rnd.nextInt(10)));
				// 0~9
				break;
			}
		}

		return key.toString();
	}

	@Override
	public void sendSimpleMessage(String to) throws Exception {
		// TODO Auto-generated method stub
		MimeMessage message = createMessage(to);
		try {// 예외처리
			emailSender.send(message);
		} catch (MailException es) {
			es.printStackTrace();
			throw new IllegalArgumentException();
		}

	}

}